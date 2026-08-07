import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Rocket, Calculator, CheckCircle, Shield, Users, Award, ArrowDown } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export function Hero() {
  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Ccircle cx='30' cy='30' r='1.5' fill='white'/%3E%3Ccircle cx='15' cy='15' r='1' fill='white' opacity='0.5'/%3E%3Ccircle cx='45' cy='45' r='1' fill='white' opacity='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Enhanced Main Heading */}
          <div className="mb-8">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 border border-white/30">
              🚀 Kenya's Premier Document Digitization Experts
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Go <span className="text-accent animate-pulse">Paperless</span> with
              <span className="block bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">Henox</span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
            Transform your business with cutting-edge document digitization, EDMS solutions, and secure file management across Kenya. 
            <span className="block mt-2 text-lg text-blue-200">Join hundreds of businesses already going paperless.</span>
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 transform hover:scale-105 transition-all shadow-xl px-8 py-3 text-lg">
              <Link href="/services">
                <Rocket className="mr-2" size={20} />
                Explore Services
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary transform hover:scale-105 transition-all px-8 py-3 text-lg backdrop-blur-sm">
              <a href="#quote-calculator">
                <Calculator className="mr-2" size={20} />
                Get Instant Quote
              </a>
            </Button>
            <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-3 shadow-lg">
              <a href="https://wa.me/254793382838" target="_blank" rel="noopener noreferrer">
                <SiWhatsapp className="mr-2" size={20} />
                WhatsApp Us
              </a>
            </Button>
          </div>

          {/* Enhanced Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <CheckCircle className="text-accent mb-2" size={24} />
              <span className="text-white font-semibold">2024 Founded</span>
              <span className="text-blue-200 text-sm">Fresh & Modern</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <Shield className="text-accent mb-2" size={24} />
              <span className="text-white font-semibold">100% Secure</span>
              <span className="text-blue-200 text-sm">GDPR Compliant</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <Users className="text-accent mb-2" size={24} />
              <span className="text-white font-semibold">Kenya-Wide</span>
              <span className="text-blue-200 text-sm">Nationwide Service</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <Award className="text-accent mb-2" size={24} />
              <span className="text-white font-semibold">Expert Team</span>
              <span className="text-blue-200 text-sm">Professional Staff</span>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="text-white/70" size={24} />
          </div>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-20 h-20 bg-gradient-to-br from-white/30 to-white/10 rounded-full backdrop-blur-sm border border-white/20"></div>
      </div>
      <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-16 h-16 bg-gradient-to-br from-accent/30 to-accent/10 rounded-full backdrop-blur-sm border border-white/20"></div>
      </div>
      <div className="absolute top-1/2 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-12 h-12 bg-gradient-to-br from-blue-400/30 to-blue-400/10 rounded-full backdrop-blur-sm border border-white/20"></div>
      </div>
    </section>
  );
}
