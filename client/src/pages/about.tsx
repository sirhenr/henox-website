import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Award, ShieldCheck, Globe2, Target, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import consultancyImg from "@assets/consultancy-meeting_1764602992438.jpg";
import { siteConfig } from "@/config/site";

const values = [
  { icon: ShieldCheck, title: "Security & Trust", description: "We treat information as an asset that must be protected throughout its lifecycle." },
  { icon: Award, title: "Operational Excellence", description: "Controlled processes, measurable quality and disciplined project delivery." },
  { icon: Users, title: "Partnership", description: "We work alongside client teams to understand the records, risks and workflows behind the problem." },
  { icon: Globe2, title: "Regional Perspective", description: "Solutions designed for organizations operating across East African markets and environments." },
];

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-accent text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm mb-5 border border-white/20"><Globe2 size={16} /> {siteConfig.company.region}</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Technology, Records & Workflows That Move Business Forward.</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">Henox Business Consultants helps organizations transform information into a more secure, accessible and productive business resource.</p>
          </div>
        </section>
        <section className="py-20 bg-white"><div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"><div><div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">Who We Are</div><h2 className="text-4xl font-bold text-gray-900 mb-6">A practical partner for digital transformation.</h2><p className="text-lg text-gray-600 mb-6 leading-relaxed">Henox brings together document digitization, information management and workflow thinking to solve the operational problems created by paper-heavy processes.</p><p className="text-lg text-gray-600 mb-8 leading-relaxed">Our approach starts with understanding your records and business processes, then designing a controlled path from physical information to usable digital workflows.</p><Button asChild size="lg"><Link href="/contact">Talk to Henox <ArrowRight className="ml-2" size={18} /></Link></Button></div><div className="rounded-2xl overflow-hidden shadow-xl"><img src={consultancyImg} alt="Henox business consultancy session" className="w-full h-80 object-cover" /></div></div></div></section>
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30"><div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-14"><div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">Our Principles</div><h2 className="text-4xl font-bold text-gray-900 mb-4">How We Think</h2></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">{values.map(({ icon: Icon, title, description }) => <Card key={title} className="border-gray-100 bg-white"><CardContent className="p-7"><div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5"><Icon className="text-primary" size={23} /></div><h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3><p className="text-gray-600 leading-relaxed">{description}</p></CardContent></Card>)}</div></div></section>
        <section className="py-20 bg-white"><div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"><div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/15 rounded-3xl p-8 md:p-12 text-center"><Target className="text-primary mx-auto mb-5" size={46} /><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">Our Mission</h2><p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">To help organizations across East Africa manage information more intelligently—reducing the friction of paper, improving access to records and enabling better digital workflows.</p></div></div></section>
        <section className="py-20 bg-gradient-to-br from-primary to-accent text-white text-center"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><h2 className="text-4xl font-bold mb-5">Have an information-management challenge?</h2><p className="text-xl text-blue-100 mb-8">Let's understand the problem before we prescribe the technology.</p><Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100"><Link href="/contact">Start a Conversation <ArrowRight className="ml-2" size={18} /></Link></Button></div></section>
      </main><Footer />
    </div>
  );
}
