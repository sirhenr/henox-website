import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Award, Shield, Globe, CheckCircle, Target } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import consultancyImg from "@assets/consultancy-meeting_1764602992438.jpg";

export default function About() {
  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "We prioritize the security and confidentiality of your documents with enterprise-grade encryption and compliance."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Our commitment to quality ensures every project meets the highest standards of digitization and organization."
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "We build lasting partnerships by understanding your unique needs and delivering tailored solutions."
    },
    {
      icon: Globe,
      title: "Innovation",
      description: "We leverage cutting-edge technology to provide modern, efficient document management solutions."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-accent text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Henox Business Consultant</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Kenya's premier document digitization specialists, transforming businesses through cutting-edge technology and expert solutions since 2024.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="fade-in-up">
                <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  Our Story
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Transforming Kenya's Document Landscape</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Founded in 2024, Henox Business Consultant Limited was born from a vision to revolutionize how Kenyan businesses manage their documents. We recognized the growing need for efficient, secure, and modern document management solutions across industries.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Based in Nairobi, we serve businesses nationwide with comprehensive digitization services, from backlog scanning to complete EDMS implementations. Our team combines technical expertise with deep understanding of local business needs.
                </p>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <a href="/contact">Partner With Us</a>
                </Button>
              </div>
              <div className="fade-in-up stagger-delay-2 space-y-6">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={consultancyImg} 
                    alt="Henox consultancy meeting" 
                    className="w-full h-64 object-cover"
                  />
                </div>
                <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 p-8">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-2 gap-6 text-center">
                      <div>
                        <div className="text-3xl font-bold text-primary mb-2">100+</div>
                        <div className="text-gray-600">Projects Completed</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-primary mb-2">50+</div>
                        <div className="text-gray-600">Happy Clients</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-primary mb-2">1M+</div>
                        <div className="text-gray-600">Documents Digitized</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-primary mb-2">99%</div>
                        <div className="text-gray-600">Client Satisfaction</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 fade-in-up">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Our Values
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What Drives Us</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our core values guide every project and client interaction, ensuring exceptional service delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={value.title} className={`service-card-hover bg-white border border-gray-100 fade-in-up stagger-delay-${index + 1}`}>
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="text-primary" size={24} />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="fade-in-up">
                <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 p-8">
                  <CardContent className="p-0">
                    <Target className="text-primary mb-4" size={48} />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      To empower Kenyan businesses with state-of-the-art document digitization and management solutions that enhance efficiency, ensure compliance, and drive growth in the digital age.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="fade-in-up stagger-delay-2">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Henox?</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-900">Local Expertise</h4>
                      <p className="text-gray-600">Deep understanding of Kenyan business environments and regulatory requirements.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-900">Cutting-Edge Technology</h4>
                      <p className="text-gray-600">Latest scanning equipment and software for superior digitization quality.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-900">Nationwide Service</h4>
                      <p className="text-gray-600">Serving clients across Kenya with flexible on-site and remote solutions.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-900">24/7 Support</h4>
                      <p className="text-gray-600">Dedicated customer support to ensure smooth operations and quick issue resolution.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Go Paperless?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join the growing number of Kenyan businesses that trust Henox for their document digitization needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                <a href="/contact">Get Free Consultation</a>
              </Button>
              <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white border-none">
                <a href="https://wa.me/254793382838" target="_blank" rel="noopener noreferrer">
                  <SiWhatsapp className="mr-2" size={18} />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}