import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileScan, Database, Workflow, Archive, ShieldCheck, BarChart3, ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { Link } from "wouter";

import backlogScanningImg from "@assets/Backlog Files for Scanning_1764602992437.jpg";
import ricohScannerImg from "@assets/ricoh-scanner_1764602992440.jpg";
import arrangedRegistryImg from "@assets/Arranged Registry_1764602992435.jpg";

const services = [
  {
    id: "digitization",
    title: "Document Digitization",
    description: "Convert high-volume paper archives into structured, searchable digital records with controlled quality assurance.",
    icon: FileScan,
    image: backlogScanningImg,
  },
  {
    id: "data-capture",
    title: "Data Capture & Indexing",
    description: "Extract and organize metadata so teams can find the right record quickly and consistently.",
    icon: BarChart3,
    image: arrangedRegistryImg,
  },
  {
    id: "edms",
    title: "EDMS & Records Management",
    description: "Design and implement practical electronic document and records management environments around your workflows.",
    icon: Database,
    image: ricohScannerImg,
  },
  {
    id: "workflow",
    title: "Workflow Automation",
    description: "Reduce manual handoffs by connecting documents, approvals, tasks and business processes.",
    icon: Workflow,
    image: arrangedRegistryImg,
  },
  {
    id: "records",
    title: "Records & Archive Management",
    description: "Bring structure to physical and digital records through classification, retention and retrieval practices.",
    icon: Archive,
    image: backlogScanningImg,
  },
  {
    id: "security",
    title: "Secure Document Disposal",
    description: "Controlled destruction and disposal processes for records that have reached the end of their retention lifecycle.",
    icon: ShieldCheck,
    image: arrangedRegistryImg,
  },
];

export function ServicesGrid() {
  const handleQuoteRequest = (serviceName: string) => {
    trackEvent("service_interest", "service", serviceName);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">Our Solutions</div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Technology That Improves How You Work</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Practical document and workflow solutions designed for organizations across East Africa—from backlog digitization to enterprise information management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.id} className={`group service-card-hover bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden fade-in-up stagger-delay-${Math.min(index + 1, 4)}`}>
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                      <IconComponent className="text-primary" size={22} />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm">{service.description}</p>
                    <Button asChild size="sm" className="bg-primary hover:bg-primary/90" onClick={() => handleQuoteRequest(service.title)}>
                      <Link href="/contact">
                        Discuss This Solution <ArrowRight className="ml-2" size={14} />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Have a complex records or workflow challenge?</p>
          <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            <Link href="/services">Explore All Solutions <ArrowRight className="ml-2" size={18} /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
