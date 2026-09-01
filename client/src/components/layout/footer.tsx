import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import logoImage from "@assets/hbc1logo_1764602992438.png";
import { siteConfig, whatsappLink } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const services = [
    "Document Digitization",
    "Data Capture & Indexing",
    "EDMS & Records Management",
    "Workflow Automation",
    "Records & Archive Management",
    "Secure Document Disposal",
  ];

  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-5">
            <img src={logoImage} alt={siteConfig.company.name} className="h-14 w-auto object-contain brightness-0 invert" />
            <p className="text-gray-300 leading-relaxed">{siteConfig.company.tagline} for organizations across East Africa.</p>
            <p className="text-sm text-gray-400">A practical partner for turning records, information and workflows into better business operations.</p>
          </div>

          <div><h3 className="text-lg font-semibold mb-5">Explore</h3><ul className="space-y-3">{siteConfig.nav.map((item) => <li key={item.href}><Link href={item.href} className="text-gray-300 hover:text-accent transition-colors">{item.label}</Link></li>)}</ul></div>

          <div><h3 className="text-lg font-semibold mb-5">Solutions</h3><ul className="space-y-3">{services.map((service) => <li key={service}><Link href="/services" className="text-gray-300 hover:text-accent transition-colors">{service}</Link></li>)}</ul></div>

          <div className="space-y-5">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3"><MapPin className="text-accent mt-1 flex-shrink-0" size={18} /><div><p className="text-gray-300">{siteConfig.contact.primaryOffice}</p><p className="text-sm text-gray-400">Regional project coverage</p></div></div>
              <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-3 text-gray-300 hover:text-accent"><Phone className="text-accent" size={18} />{siteConfig.contact.phoneDisplay}</a>
              <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-3 text-gray-300 hover:text-accent"><Mail className="text-accent" size={18} />{siteConfig.contact.email}</a>
            </div>
            <Button asChild className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white"><a href={whatsappLink()} target="_blank" rel="noopener noreferrer"><SiWhatsapp className="mr-2" size={16} />Chat on WhatsApp</a></Button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between gap-3 text-sm text-gray-400"><p>© {currentYear} {siteConfig.company.name}. All rights reserved.</p><p>Serving organizations across East Africa.</p></div></div>
    </footer>
  );
}
