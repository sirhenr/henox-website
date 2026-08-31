import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import logoImage from "@assets/hbc1logo_1764602992438.png";
import { siteConfig, whatsappLink } from "@/config/site";

export function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href: string) => location === href;

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-lg z-50 shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center group" aria-label="Henox home">
            <img
              src={logoImage}
              alt={siteConfig.company.name}
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-1" aria-label="Primary navigation">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-primary bg-primary/10"
                    : "text-gray-700 hover:text-primary hover:bg-gray-50"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <div className="ml-5 flex items-center gap-2">
              <Button asChild size="sm" variant="outline" className="border-gray-300">
                <a href={`tel:${siteConfig.contact.phone}`} aria-label={`Call ${siteConfig.contact.phoneDisplay}`}>
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us
                </a>
              </Button>
              <Button asChild size="sm" className="bg-[#25D366] hover:bg-[#128C7E] text-white">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  <SiWhatsapp className="mr-2" size={16} />
                  WhatsApp
                </a>
              </Button>
            </div>
          </nav>

          <div className="md:hidden flex items-center gap-1">
            <Button asChild size="sm" variant="ghost" className="text-[#25D366]">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
                <SiWhatsapp size={18} />
              </a>
            </Button>
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" aria-label="Open navigation menu">
                  <Menu size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-white">
                <div className="flex flex-col space-y-2 mt-8">
                  <div className="flex items-center mb-6 px-3">
                    <img src={logoImage} alt={siteConfig.company.name} className="h-10 w-auto object-contain" />
                  </div>

                  {siteConfig.nav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                        isActive(item.href)
                          ? "bg-primary text-white"
                          : "text-gray-700 hover:bg-gray-50 hover:text-primary"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}

                  <div className="pt-6 px-3 space-y-3">
                    <Button asChild variant="outline" className="w-full">
                      <a href={`tel:${siteConfig.contact.phone}`}>
                        <Phone className="mr-2 h-4 w-4" />
                        {siteConfig.contact.phoneDisplay}
                      </a>
                    </Button>
                    <Button asChild className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white">
                      <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                        <SiWhatsapp className="mr-2" size={16} />
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
