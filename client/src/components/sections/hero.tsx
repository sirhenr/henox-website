import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, FileText, Globe2, ShieldCheck, Workflow } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { siteConfig, whatsappLink } from "@/config/site";

export function Hero() {
  return (
    <section className="hero-gradient min-h-[720px] flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='72' height='72' viewBox='0 0 72 72'%3E%3Ccircle cx='36' cy='36' r='1.5' fill='white'/%3E%3Ccircle cx='18' cy='18' r='1' fill='white' opacity='0.5'/%3E%3Ccircle cx='54' cy='54' r='1' fill='white' opacity='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: "72px 72px",
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center py-16 lg:py-24">
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 border border-white/20">
              <Globe2 size={16} />
              Digital transformation across {siteConfig.company.region}
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.05]">
              Turn Records Into <span className="text-accent">Business Intelligence.</span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl leading-relaxed font-light">
              Henox helps organizations move from paper-heavy processes to secure, searchable and efficient digital workflows.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 shadow-xl px-7">
                <Link href="/contact">
                  Request a Consultation <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg px-7">
                <a href={whatsappLink("Hello Henox, I would like to discuss a digitization project.")} target="_blank" rel="noopener noreferrer">
                  <SiWhatsapp className="mr-2" size={18} />
                  Talk to an Expert
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 justify-center lg:justify-start text-sm text-blue-100">
              <span className="inline-flex items-center gap-2"><CheckCircle size={16} /> Secure handling</span>
              <span className="inline-flex items-center gap-2"><CheckCircle size={16} /> Quality-controlled capture</span>
              <span className="inline-flex items-center gap-2"><CheckCircle size={16} /> Scalable delivery</span>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-7 shadow-2xl">
              <div className="flex items-center gap-4 mb-7">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center">
                  <FileText className="text-primary" size={28} />
                </div>
                <div>
                  <p className="text-white font-semibold text-lg">From paper to digital</p>
                  <p className="text-blue-200 text-sm">A controlled transformation process</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  ["01", "Assess", "Understand volumes, records and business requirements."],
                  ["02", "Digitize", "Capture, index and quality-check your records."],
                  ["03", "Manage", "Connect records to structured digital workflows."],
                  ["04", "Improve", "Measure retrieval, compliance and operational gains."],
                ].map(([number, title, description]) => (
                  <div key={number} className="flex gap-4 items-start bg-white/10 rounded-2xl p-4 border border-white/10">
                    <span className="text-accent font-bold text-sm mt-1">{number}</span>
                    <div>
                      <p className="text-white font-semibold">{title}</p>
                      <p className="text-blue-200 text-sm leading-relaxed">{description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="bg-white/10 rounded-xl p-4 text-white"><ShieldCheck className="mb-2" size={20} /><span className="text-sm">Security-minded</span></div>
                <div className="bg-white/10 rounded-xl p-4 text-white"><Workflow className="mb-2" size={20} /><span className="text-sm">Workflow-ready</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
