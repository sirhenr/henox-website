import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Send, Phone, Mail, ShieldCheck } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { trackEvent } from "@/lib/analytics";
import { siteConfig, whatsappLink } from "@/config/site";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Please provide at least 10 characters"),
});

type ContactFormData = z.infer<typeof schema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const form = useForm<ContactFormData>({ resolver: zodResolver(schema), defaultValues: { name: "", email: "", phone: "", service: "", message: "" } });

  const encode = (data: Record<string, string>) => Object.entries(data).map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join("&");

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: encode({ "form-name": "contact", name: data.name, email: data.email, phone: data.phone || "", service: data.service || "", message: data.message }) });
      trackEvent("contact_form_submit", "lead", data.service || "general");
      toast({ title: "Enquiry received", description: "Thank you. The Henox team will get back to you shortly." });
      form.reset();
    } catch {
      toast({ title: "Unable to send", description: `Please email ${siteConfig.contact.email} or contact us on WhatsApp.`, variant: "destructive" });
    } finally { setIsSubmitting(false); }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14"><div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">Start a Conversation</div><h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Tell Us What You Need to Improve</h2><p className="text-xl text-gray-600 max-w-3xl mx-auto">Share your records, workflow or digitization challenge and we will help you define the right next step.</p></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <Card className="border-gray-100 shadow-xl"><CardHeader><CardTitle className="text-2xl">Request a Consultation</CardTitle></CardHeader><CardContent><Form {...form}><form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField control={form.control} name="name" render={({ field }) => <FormItem><FormLabel>Full Name *</FormLabel><FormControl><Input placeholder="Your name" {...field} /></FormControl><FormMessage /></FormItem>} />
            <FormField control={form.control} name="email" render={({ field }) => <FormItem><FormLabel>Business Email *</FormLabel><FormControl><Input type="email" placeholder="name@company.com" {...field} /></FormControl><FormMessage /></FormItem>} />
            <FormField control={form.control} name="phone" render={({ field }) => <FormItem><FormLabel>Phone / WhatsApp</FormLabel><FormControl><Input type="tel" placeholder="Include country code" {...field} /></FormControl><FormMessage /></FormItem>} />
            <FormField control={form.control} name="service" render={({ field }) => <FormItem><FormLabel>Primary Requirement</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue placeholder="Select a solution" /></SelectTrigger></FormControl><SelectContent><SelectItem value="digitization">Document Digitization</SelectItem><SelectItem value="data-capture">Data Capture & Indexing</SelectItem><SelectItem value="edms">EDMS / Records Management</SelectItem><SelectItem value="workflow">Workflow Automation</SelectItem><SelectItem value="records">Records & Archive Management</SelectItem><SelectItem value="disposal">Secure Document Disposal</SelectItem><SelectItem value="consultation">Not Sure — I Need Advice</SelectItem></SelectContent></Select><FormMessage /></FormItem>} />
            <FormField control={form.control} name="message" render={({ field }) => <FormItem><FormLabel>Project Overview *</FormLabel><FormControl><Textarea rows={5} placeholder="Tell us about your records, volumes, locations, current process and desired outcome..." {...field} /></FormControl><FormMessage /></FormItem>} />
            <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>{isSubmitting ? "Sending..." : <><Send className="mr-2" size={18} />Send Consultation Request</>}</Button>
          </form></Form></CardContent></Card>

          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-primary to-primary/90 text-white border-0"><CardContent className="p-8"><ShieldCheck size={38} className="mb-5 text-accent" /><h3 className="text-2xl font-bold mb-3">Information handled with care.</h3><p className="text-blue-100 leading-relaxed">We understand that records can contain confidential business, financial, legal and personal information. Project discussions should begin with the right security and handling expectations.</p></CardContent></Card>
            <div className="grid sm:grid-cols-2 gap-4">
              <a href={`tel:${siteConfig.contact.phone}`} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"><Phone className="text-primary mb-4" size={24} /><h4 className="font-semibold text-gray-900">Call Us</h4><p className="text-sm text-gray-600 mt-1">{siteConfig.contact.phoneDisplay}</p></a>
              <a href={`mailto:${siteConfig.contact.email}`} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"><Mail className="text-primary mb-4" size={24} /><h4 className="font-semibold text-gray-900">Email Us</h4><p className="text-sm text-gray-600 mt-1">{siteConfig.contact.email}</p></a>
            </div>
            <Button asChild size="lg" className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white"><a href={whatsappLink("Hello Henox, I would like to discuss a business digitization project.")} target="_blank" rel="noopener noreferrer"><SiWhatsapp className="mr-2" />Start on WhatsApp</a></Button>
          </div>
        </div>
      </div>
    </section>
  );
}
