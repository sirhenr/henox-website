import { Hero } from "@/components/sections/hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { Testimonials } from "@/components/sections/testimonials";
import { QuoteCalculator } from "@/components/sections/quote-calculator";
import { ContactForm } from "@/components/sections/contact-form";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ServicesGrid />
        <Testimonials />
        <QuoteCalculator />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}