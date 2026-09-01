export const siteConfig = {
  company: {
    name: "Henox Business Consultants Ltd",
    shortName: "Henox",
    tagline: "Digital Transformation & Document Management Solutions",
    region: "East Africa",
  },
  contact: {
    phone: "+254793382838",
    phoneDisplay: "+254 793 382 838",
    email: "info@henoxbusiness.co.ke",
    whatsapp: "https://wa.me/254793382838",
    primaryOffice: "Nairobi, Kenya",
  },
  nav: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Solutions" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  markets: [
    "Tanzania",
    "Kenya",
    "Uganda",
    "Rwanda",
    "Burundi",
    "South Sudan",
  ],
} as const;

export const whatsappLink = (message?: string) =>
  message
    ? `${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`
    : siteConfig.contact.whatsapp;
