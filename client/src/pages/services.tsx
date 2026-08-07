import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScanLine, Database, Trash2, FolderOpen, CheckCircle, Clock, Shield, Users, ArrowRight } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

import backlogScanningImg from "@assets/Backlog Files for Scanning_1764602992437.jpg";
import ricohScannerImg from "@assets/ricoh-scanner_1764602992440.jpg";
import paperShreddingImg from "@assets/Paper shredding_1764602992440.jpg";
import arrangedRegistryImg from "@assets/Arranged Registry_1764602992435.jpg";

export default function Services() {
  const services = [
    {
      id: "backlog-scanning",
      title: "Backlog Document Scanning",
      description: "Transform your paper archives into searchable digital files with our high-speed scanning solutions.",
      icon: ScanLine,
      features: ["High-resolution scanning", "OCR text recognition", "Multiple format support", "Quality assurance"],
      benefits: ["Instant document retrieval", "Space optimization", "Disaster recovery", "Compliance ready"],
      image: backlogScanningImg
    },
    {
      id: "edms-installation",
      title: "EDMS Installation & Setup",
      description: "Complete Electronic Document Management System implementation tailored to your business needs.",
      icon: Database,
      features: ["Custom EDMS setup", "User training", "Data migration", "System integration"],
      benefits: ["Centralized document storage", "Workflow automation", "Access control", "Audit trails"],
      image: ricohScannerImg
    },
    {
      id: "document-destruction",
      title: "Secure Document Destruction",
      description: "GDPR-compliant document destruction services to protect your sensitive information.",
      icon: Trash2,
      features: ["Secure shredding", "Certificate of destruction", "Chain of custody", "Compliance reporting"],
      benefits: ["Data protection", "Legal compliance", "Risk mitigation", "Peace of mind"],
      image: paperShreddingImg
    },
    {
      id: "file-registry",
      title: "File Registry Arrangement",
      description: "Professional organization and cataloging of your physical and digital file systems.",
      icon: FolderOpen,
      features: ["File classification", "Digital cataloging", "Indexing system", "Retrieval optimization"],
      benefits: ["Improved efficiency", "Quick file location", "Standardized system", "Reduced errors"],
      image: arrangedRegistryImg
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Consultation",
      description: "Free assessment of your document management needs and requirements."
    },
    {
      step: 2,
      title: "Planning",
      description: "Custom solution design with detailed timeline and pricing proposal."
    },
    {
      step: 3,
      title: "Implementation",
      description: "Professional execution with regular progress updates and quality checks."
    },
    {
      step: 4,
      title: "Support",
      description: "Ongoing support and maintenance to ensure optimal system performance."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-accent text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Comprehensive document digitization and management solutions designed to transform your business operations.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card key={service.id} className={`service-card-hover bg-white border border-gray-100 overflow-hidden fade-in-up stagger-delay-${index + 1}`}>
                    <CardContent className="p-0">
                      <div className="relative">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <IconComponent className="text-primary" size={20} />
                        </div>
                      </div>
                      
                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                              <CheckCircle className="text-green-500 mr-2" size={16} />
                              Features
                            </h4>
                            <ul className="space-y-2">
                              {service.features.map((feature, idx) => (
                                <li key={idx} className="text-sm text-gray-600 flex items-center">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                              <Shield className="text-blue-500 mr-2" size={16} />
                              Benefits
                            </h4>
                            <ul className="space-y-2">
                              {service.benefits.map((benefit, idx) => (
                                <li key={idx} className="text-sm text-gray-600 flex items-center">
                                  <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button asChild className="bg-[#25D366] hover:bg-[#128C7E] flex-1">
                            <a href={`https://wa.me/254793382838?text=I'm interested in ${service.title}`} target="_blank" rel="noopener noreferrer">
                              <SiWhatsapp className="mr-2" size={14} />
                              Get Quote
                            </a>
                          </Button>
                          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                            <a href="/contact">Learn More</a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 fade-in-up">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Our Process
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Work</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our proven 4-step process ensures successful project delivery from start to finish.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <Card key={step.step} className={`service-card-hover bg-white border border-gray-100 text-center fade-in-up stagger-delay-${index + 1}`}>
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="fade-in-up">
                <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  Why Choose Henox
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Industry-Leading Document Solutions</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  With cutting-edge technology and years of expertise, we deliver document management solutions that drive real business results across Kenya.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Security & Compliance</h4>
                      <p className="text-gray-600">GDPR-compliant processes with enterprise-grade security measures.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Expert Team</h4>
                      <p className="text-gray-600">Certified professionals with extensive document management experience.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="text-primary" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Fast Delivery</h4>
                      <p className="text-gray-600">Quick turnaround times without compromising on quality.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="fade-in-up stagger-delay-2">
                <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 p-8">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Get Started?</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Transform your document management today. Contact us for a free consultation and see how we can help your business go paperless.
                    </p>
                    <div className="space-y-4">
                      <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90">
                        <a href="/contact">Get Free Consultation</a>
                      </Button>
                      <Button asChild size="lg" className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white">
                        <a href="https://wa.me/254793382838" target="_blank" rel="noopener noreferrer">
                          <SiWhatsapp className="mr-2" size={18} />
                          Chat on WhatsApp
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}