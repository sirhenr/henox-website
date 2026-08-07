import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileScan, Database, Trash2, FolderOpen, ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

import backlogScanningImg from "@assets/Backlog Files for Scanning_1764602992437.jpg";
import ricohScannerImg from "@assets/ricoh-scanner_1764602992440.jpg";
import paperShreddingImg from "@assets/Paper shredding_1764602992440.jpg";
import arrangedRegistryImg from "@assets/Arranged Registry_1764602992435.jpg";

const services = [
  {
    id: 'scanning',
    title: 'Backlog Scanning',
    description: 'Convert years of paper records into searchable digital files using high-speed Ricoh scanners.',
    icon: FileScan,
    image: backlogScanningImg,
    color: 'text-primary',
    bgColor: 'bg-primary/10 group-hover:bg-primary',
    whatsappText: "I'm interested in Backlog Scanning"
  },
  {
    id: 'edms',
    title: 'EDMS Installation',
    description: 'Complete setup of Electronic Document Management Systems for seamless workflow automation.',
    icon: Database,
    image: ricohScannerImg,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100 group-hover:bg-blue-600',
    whatsappText: "I'm interested in EDMS Installation"
  },
  {
    id: 'destruction',
    title: 'Document Destruction',
    description: 'Secure shredding and certified disposal of sensitive records for privacy compliance.',
    icon: Trash2,
    image: paperShreddingImg,
    color: 'text-red-500',
    bgColor: 'bg-red-100 group-hover:bg-red-500',
    whatsappText: "I'm interested in Document Destruction"
  },
  {
    id: 'registry',
    title: 'File Registry Arrangement',
    description: 'Professional organization with clear indexing and optimized retrieval systems.',
    icon: FolderOpen,
    image: arrangedRegistryImg,
    color: 'text-accent',
    bgColor: 'bg-accent/10 group-hover:bg-accent',
    whatsappText: "I'm interested in File Registry Arrangement"
  }
];

export function ServicesGrid() {
  const handleQuoteRequest = (serviceId: string, serviceName: string) => {
    trackEvent('quote_request', 'service', serviceName);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            What We Offer
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Core Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive document management solutions tailored to modernize your business operations across Kenya
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.id} 
                className={`group service-card-hover bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden fade-in-up stagger-delay-${index + 1}`}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className={`absolute top-4 right-4 w-12 h-12 ${service.bgColor} rounded-full flex items-center justify-center transition-all group-hover:scale-110`}>
                      <IconComponent className={`${service.color} group-hover:text-white transition-all`} size={20} />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <Button
                        asChild
                        size="sm"
                        className={`${service.color === 'text-primary' ? 'bg-primary hover:bg-primary/90' : 
                          service.color === 'text-blue-600' ? 'bg-blue-600 hover:bg-blue-700' :
                          service.color === 'text-red-500' ? 'bg-red-500 hover:bg-red-600' :
                          'bg-accent hover:bg-accent/90'} text-white transform group-hover:scale-105 transition-all`}
                        onClick={() => handleQuoteRequest(service.id, service.title)}
                      >
                        <a
                          href={`https://wa.me/254793382838?text=${encodeURIComponent(service.whatsappText)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center"
                        >
                          Get Quote <ArrowRight className="ml-2" size={14} />
                        </a>
                      </Button>
                      
                      <div className="text-xs text-gray-500 flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2 pulse-animation"></span>
                        Available Now
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Services Teaser */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-2 border-dashed border-primary/20 p-8">
            <CardContent className="p-0">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Need Something Custom?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Every business has unique document management needs. We offer customized solutions tailored to your specific requirements.
              </p>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                <a href="/contact">
                  Discuss Custom Solutions
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
