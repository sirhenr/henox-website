import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ContactForm } from "@/components/sections/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock, MapPin, Globe2, ArrowRight } from "lucide-react";
import { siteConfig, whatsappLink } from "@/config/site";
import { Link } from "wouter";
import { SiWhatsapp } from "react-icons/si";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-accent text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm mb-5 border border-white/20"><Globe2 size={16} /> {siteConfig.company.region}</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Let's Discuss Your Project</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">Tell us what you are trying to improve. We will help you scope the right information-management solution.</p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card><CardContent className="p-6"><Phone className="text-primary mb-4" size={26} /><h3 className="font-semibold text-gray-900 mb-2">Call</h3><a className="text-gray-600 hover:text-primary" href={`tel:${siteConfig.contact.phone}`}>{siteConfig.contact.phoneDisplay}</a></CardContent></Card>
            <Card><CardContent className="p-6"><Mail className="text-primary mb-4" size={26} /><h3 className="font-semibold text-gray-900 mb-2">Email</h3><a className="text-gray-600 hover:text-primary" href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a></CardContent></Card>
            <Card><CardContent className="p-6"><SiWhatsapp className="text-[#25D366] mb-4" size={26} /><h3 className="font-semibold text-gray-900 mb-2">WhatsApp</h3><a className="text-gray-600 hover:text-[#25D366]" href={whatsappLink()} target="_blank" rel="noopener noreferrer">Start a conversation</a></CardContent></Card>
          </div>
        </section>

        <ContactForm />

        <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
            <Card><CardContent className="p-8"><div className="flex items-center gap-3 mb-5"><MapPin className="text-primary" /><h2 className="text-2xl font-bold text-gray-900">Primary Office</h2></div><p className="text-gray-700">{siteConfig.contact.primaryOffice}</p><p className="text-gray-500 mt-2">Regional projects can be scoped and coordinated based on location, volume and security requirements.</p></CardContent></Card>
            <Card><CardContent className="p-8"><div className="flex items-center gap-3 mb-5"><Clock className="text-primary" /><h2 className="text-2xl font-bold text-gray-900">Business Hours</h2></div><p className="text-gray-700">Monday – Friday: 8:00 AM – 5:00 PM</p><p className="text-gray-700">Saturday: 9:00 AM – 1:00 PM</p><p className="text-gray-500 mt-2">Project consultations can be arranged around client schedules.</p></CardContent></Card>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-primary to-accent text-white text-center"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><h2 className="text-4xl font-bold mb-5">Not sure what solution you need?</h2><p className="text-xl text-blue-100 mb-8">Start with the problem. Henox can help define the technology and implementation path.</p><Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100"><Link href="/services">Explore Our Solutions <ArrowRight className="ml-2" size={18} /></Link></Button></div></section>
      </main>
      <Footer />
    </div>
  );
}
