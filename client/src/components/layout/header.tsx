import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import logoImage from "@assets/hbc1logo_1764602992438.png";

export function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => location === href;

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-lg z-50 shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Enhanced Logo */}
          <Link href="/" className="flex items-center group">
            <img 
              src={logoImage} 
              alt="Henox Business Consultants" 
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? "text-primary bg-primary/10 shadow-sm"
                    : "text-gray-700 hover:text-primary hover:bg-gray-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Enhanced CTA Button */}
            <div className="ml-6 flex items-center space-x-3">
              <Button 
                asChild 
                size="sm" 
                variant="outline" 
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                <a href="tel:+254793382838">
                  <span className="hidden lg:inline">Call Now</span>
                  <span className="lg:hidden">📞</span>
                </a>
              </Button>
              
              <Button 
                asChild 
                className="bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <a
                  href="https://wa.me/254793382838"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiWhatsapp size={16} className="mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </nav>

          {/* Enhanced Mobile Menu */}
          <div className="md:hidden flex items-center space-x-2">
            <Button 
              asChild 
              size="sm" 
              variant="ghost"
              className="text-[#25D366] hover:text-[#128C7E] hover:bg-[#25D366]/10"
            >
              <a href="https://wa.me/254793382838" target="_blank" rel="noopener noreferrer">
                <SiWhatsapp size={18} />
              </a>
            </Button>
            
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="hover:bg-gray-100">
                  <Menu size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-white">
                <div className="flex flex-col space-y-2 mt-8">
                  {/* Mobile Logo */}
                  <div className="flex items-center mb-6 px-3">
                    <img 
                      src={logoImage} 
                      alt="Henox Business Consultants" 
                      className="h-10 w-auto object-contain"
                    />
                  </div>
                  
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                        isActive(item.href)
                          ? "bg-primary text-white shadow-sm"
                          : "text-gray-700 hover:bg-gray-50 hover:text-primary"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  
                  <div className="pt-6 px-3 space-y-3">
                    <Button asChild className="w-full bg-gray-100 text-gray-700 hover:bg-gray-200">
                      <a href="tel:+254793382838">
                        📞 Call +254 793 382 838
                      </a>
                    </Button>
                    
                    <Button asChild className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white">
                      <a
                        href="https://wa.me/254793382838"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <SiWhatsapp size={16} className="mr-2" />
                        Chat on WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
