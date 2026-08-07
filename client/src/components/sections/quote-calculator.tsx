import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, InfoIcon } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { trackEvent } from "@/lib/analytics";

interface QuoteData {
  serviceType: string;
  volume: number;
  timeline: string;
}

interface QuoteResult {
  baseCost: number;
  volumeCost: number;
  timelineMultiplier: number;
  totalCost: number;
}

export function QuoteCalculator() {
  const [quoteData, setQuoteData] = useState<QuoteData>({
    serviceType: '',
    volume: 0,
    timeline: ''
  });
  const [quoteResult, setQuoteResult] = useState<QuoteResult | null>(null);

  const baseCosts = {
    scanning: 50000,
    edms: 150000,
    destruction: 30000,
    registry: 80000
  };

  const volumeRates = {
    scanning: 5,
    edms: 10,
    destruction: 2,
    registry: 8
  };

  const timelineMultipliers = {
    urgent: 1.5,
    normal: 1.0,
    flexible: 0.85
  };

  const calculateQuote = () => {
    if (!quoteData.serviceType || !quoteData.volume || !quoteData.timeline) {
      alert('Please fill in all fields to get a quote.');
      return;
    }

    const baseCost = baseCosts[quoteData.serviceType as keyof typeof baseCosts] || 0;
    const volumeCost = Math.ceil(quoteData.volume / 1000) * 
      (volumeRates[quoteData.serviceType as keyof typeof volumeRates] || 0) * 1000;
    const timelineMultiplier = timelineMultipliers[quoteData.timeline as keyof typeof timelineMultipliers] || 1;
    const totalCost = Math.round((baseCost + volumeCost) * timelineMultiplier);

    setQuoteResult({
      baseCost,
      volumeCost,
      timelineMultiplier,
      totalCost
    });

    trackEvent('quote_calculated', 'calculator', quoteData.serviceType, totalCost);
  };

  const getTimelineAdjustment = () => {
    if (quoteData.timeline === 'urgent') return '+50%';
    if (quoteData.timeline === 'flexible') return '-15%';
    return '0%';
  };

  return (
    <section id="quote-calculator" className="py-20 bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Ccircle cx='40' cy='40' r='20' fill='none' stroke='%23000000' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 fade-in-up">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            💰 Pricing Calculator
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get Instant Quote</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate your project cost in seconds with our intelligent pricing tool. No hidden fees, transparent pricing.
          </p>
        </div>

        <Card className="shadow-2xl bg-white/80 backdrop-blur-sm border border-white/50 service-card-hover">
          <CardContent className="p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl font-semibold text-gray-900">Project Details</CardTitle>
                </CardHeader>

                <div className="space-y-6">
                  <div>
                    <Label htmlFor="service-type" className="text-sm font-medium text-gray-700">
                      Service Type
                    </Label>
                    <Select 
                      value={quoteData.serviceType} 
                      onValueChange={(value) => setQuoteData(prev => ({ ...prev, serviceType: value }))}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="scanning">Backlog Scanning</SelectItem>
                        <SelectItem value="edms">EDMS Installation</SelectItem>
                        <SelectItem value="destruction">Document Destruction</SelectItem>
                        <SelectItem value="registry">File Registry Arrangement</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="volume" className="text-sm font-medium text-gray-700">
                      Volume (estimated pages/files)
                    </Label>
                    <Input
                      id="volume"
                      type="number"
                      placeholder="e.g., 10000"
                      className="mt-2"
                      value={quoteData.volume || ''}
                      onChange={(e) => setQuoteData(prev => ({ ...prev, volume: parseInt(e.target.value) || 0 }))}
                    />
                  </div>

                  <div>
                    <Label htmlFor="timeline" className="text-sm font-medium text-gray-700">
                      Timeline
                    </Label>
                    <Select 
                      value={quoteData.timeline} 
                      onValueChange={(value) => setQuoteData(prev => ({ ...prev, timeline: value }))}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="urgent">Urgent (1-3 days)</SelectItem>
                        <SelectItem value="normal">Normal (1-2 weeks)</SelectItem>
                        <SelectItem value="flexible">Flexible (3-4 weeks)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button onClick={calculateQuote} className="w-full mt-6">
                  <Calculator className="mr-2" size={20} />
                  Calculate Quote
                </Button>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl font-semibold text-gray-900">Estimated Cost</CardTitle>
                </CardHeader>

                {quoteResult ? (
                  <div>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Base Cost:</span>
                        <span className="font-semibold">KSh {quoteResult.baseCost.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Volume Adjustment:</span>
                        <span className="font-semibold">KSh {quoteResult.volumeCost.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Timeline Adjustment:</span>
                        <span className="font-semibold">{getTimelineAdjustment()}</span>
                      </div>
                      <hr className="border-gray-300" />
                      <div className="flex justify-between text-xl">
                        <span className="font-bold text-gray-900">Total Estimate:</span>
                        <span className="font-bold text-primary">KSh {quoteResult.totalCost.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800 flex items-start">
                        <InfoIcon className="mr-2 flex-shrink-0 mt-0.5" size={16} />
                        This is an estimated quote. Final pricing may vary based on specific requirements and complexity.
                      </p>
                    </div>

                    <Button asChild className="w-full mt-4 bg-[#25D366] hover:bg-[#128C7E]">
                      <a
                        href="https://wa.me/254793382838?text=I%20got%20a%20quote%20estimate%20and%20would%20like%20to%20discuss%20further"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <SiWhatsapp className="mr-2" size={20} />
                        Discuss on WhatsApp
                      </a>
                    </Button>
                  </div>
                ) : (
                  <div className="text-center text-gray-500 py-12">
                    <Calculator className="mx-auto text-gray-300 mb-4" size={48} />
                    <p>Fill in the details to get your estimate</p>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
