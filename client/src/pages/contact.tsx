import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ContactForm } from "@/components/sections/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Globe } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+254 793 382 838",
      action: "tel:+254793382838",
      available: "Monday - Friday, 8AM - 6PM"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@henoxbusiness.co.ke",
      action: "mailto:info@henoxbusiness.co.ke",
      available: "24/7 Response within 2 hours"
    },
    {
      icon: SiWhatsapp,
      title: "WhatsApp",
      details: "+254 793 382 838",
      action: "https://wa.me/254793382838",
      available: "Instant messaging support",
      isWhatsApp: true
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Nairobi, Kenya",
      action: "#",
      available: "Nationwide service available"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Emergency calls only" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-accent text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Ready to digitize your business? Get in touch with Kenya's leading document management experts.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 fade-in-up">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Get In Touch
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Multiple Ways to Reach Us</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose your preferred method of communication. We're here to help with all your document digitization needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                const isExternal = contact.action.startsWith('http');
                const isWhatsApp = 'isWhatsApp' in contact && contact.isWhatsApp;
                
                return (
                  <Card key={contact.title} className={`service-card-hover bg-white border border-gray-100 text-center fade-in-up stagger-delay-${index + 1}`}>
                    <CardContent className="p-6">
                      <div className={`w-16 h-16 ${isWhatsApp ? 'bg-[#25D366]/10' : 'bg-primary/10'} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <IconComponent className={isWhatsApp ? 'text-[#25D366]' : 'text-primary'} size={24} />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{contact.title}</h3>
                      <p className={`${isWhatsApp ? 'text-[#25D366]' : 'text-primary'} font-medium mb-2`}>{contact.details}</p>
                      <p className="text-sm text-gray-500 mb-4">{contact.available}</p>
                      {contact.action !== "#" && (
                        <Button 
                          asChild 
                          size="sm" 
                          variant="outline" 
                          className={isWhatsApp 
                            ? "border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white" 
                            : "border-primary text-primary hover:bg-primary hover:text-white"}
                        >
                          <a 
                            href={contact.action}
                            target={isExternal ? "_blank" : undefined}
                            rel={isExternal ? "noopener noreferrer" : undefined}
                          >
                            Contact Now
                          </a>
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Office Hours */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 fade-in-up">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Clock className="text-primary mr-3" size={24} />
                    <h3 className="text-2xl font-bold text-gray-900">Office Hours</h3>
                  </div>
                  <div className="space-y-4">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-blue-200 last:border-b-0">
                        <span className="font-medium text-gray-900">{schedule.day}</span>
                        <span className="text-gray-600">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                    <p className="text-sm text-primary font-medium">
                      💡 Emergency support available 24/7 for existing clients
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-accent/5 to-primary/5 border border-primary/20 fade-in-up stagger-delay-2">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Globe className="text-primary mr-3" size={24} />
                    <h3 className="text-2xl font-bold text-gray-900">Service Coverage</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Nairobi Metro</h4>
                        <p className="text-gray-600 text-sm">Same-day on-site service available</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Major Cities</h4>
                        <p className="text-gray-600 text-sm">Mombasa, Kisumu, Nakuru, Eldoret</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Nationwide</h4>
                        <p className="text-gray-600 text-sm">Remote consultation and pickup service</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button asChild size="sm" className="bg-primary hover:bg-primary/90 w-full">
                      <a href="https://wa.me/254793382838?text=I'd like to know about service in my area" target="_blank" rel="noopener noreferrer">
                        Check Service in Your Area
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <ContactForm />

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 fade-in-up">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Common Questions
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">
                Quick answers to common questions about our services.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="service-card-hover bg-white border border-gray-100 fade-in-up">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">How quickly can you complete document scanning projects?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Most scanning projects are completed within 2-5 business days, depending on volume. We offer rush services for urgent requirements and can provide same-day scanning for smaller batches in Nairobi.
                  </p>
                </CardContent>
              </Card>

              <Card className="service-card-hover bg-white border border-gray-100 fade-in-up stagger-delay-1">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you provide on-site scanning services?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Yes, we offer on-site scanning services for large volumes or sensitive documents that cannot leave your premises. Our mobile scanning units can handle projects at your location across Kenya.
                  </p>
                </CardContent>
              </Card>

              <Card className="service-card-hover bg-white border border-gray-100 fade-in-up stagger-delay-2">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">What file formats do you provide for scanned documents?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We provide multiple formats including PDF, TIFF, JPEG, and searchable PDF with OCR. All files are organized according to your specifications and can be delivered via secure cloud storage or physical media.
                  </p>
                </CardContent>
              </Card>

              <Card className="service-card-hover bg-white border border-gray-100 fade-in-up stagger-delay-3">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">How do you ensure document security and confidentiality?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We follow strict security protocols including encrypted storage, secure transport, confidentiality agreements, and GDPR-compliant data handling. All staff undergo background checks and security training.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}