import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import logoImage from "@assets/hbc1logo_1764602992438.png";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" }
  ];

  const services = [
    { href: "#backlog-scanning", label: "Document Scanning" },
    { href: "#edms-installation", label: "EDMS Installation" },
    { href: "#document-destruction", label: "Document Destruction" },
    { href: "#file-registry", label: "File Registry" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img 
                src={logoImage} 
                alt="Henox Business Consultants" 
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 leading-relaxed">
              Kenya's premier document digitization specialists, transforming businesses through cutting-edge technology and expert solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                    aria-label={social.label}
                  >
                    <IconComponent size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <a 
                    href={service.href}
                    className="text-gray-300 hover:text-accent transition-colors"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-accent mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-gray-300">Nairobi, Kenya</p>
                  <p className="text-sm text-gray-400">Nationwide service available</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-accent flex-shrink-0" size={18} />
                <a 
                  href="tel:+254793382838"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  +254 793 382 838
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-accent flex-shrink-0" size={18} />
                <a 
                  href="mailto:info@henoxbusiness.co.ke"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  info@henoxbusiness.co.ke
                </a>
              </div>
            </div>
            
            <Button 
              asChild 
              className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white"
            >
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
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} Henox Business Consultant Limited. All rights reserved.
              </p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}