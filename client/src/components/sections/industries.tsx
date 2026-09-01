import { Building2, GraduationCap, HeartPulse, Landmark, Scale, Truck, Factory, WalletCards } from "lucide-react";

const industries = [
  { title: "Banking & Finance", icon: WalletCards, text: "Secure records, customer files and operational documents." },
  { title: "Government", icon: Landmark, text: "Structured records, registries and high-volume archives." },
  { title: "Legal", icon: Scale, text: "Matter files, case records and controlled retrieval." },
  { title: "Healthcare", icon: HeartPulse, text: "Patient and administrative records with privacy in mind." },
  { title: "Education", icon: GraduationCap, text: "Student, examination and institutional records." },
  { title: "Logistics & Transport", icon: Truck, text: "Operational documents, manifests and supporting records." },
  { title: "Energy & Utilities", icon: Factory, text: "Technical, commercial and regulatory documentation." },
  { title: "Corporate & SMEs", icon: Building2, text: "Back-office records and workflows that scale with growth." },
];

export function Industries() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">Industries</div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Built Around Your Industry</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We adapt our digitization, records and workflow solutions to the realities of different organizations and operating environments.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map(({ title, icon: Icon, text }) => (
            <div key={title} className="rounded-2xl border border-gray-100 bg-gray-50 p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Icon className="text-primary" size={21} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
