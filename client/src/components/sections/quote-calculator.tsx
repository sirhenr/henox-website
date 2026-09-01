import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ClipboardCheck, ArrowRight, FileText } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { Link } from "wouter";

export function QuoteCalculator() {
  const [service, setService] = useState("");
  const [volume, setVolume] = useState("");
  const [timeline, setTimeline] = useState("");
  const [ready, setReady] = useState(false);

  const assessProject = () => {
    if (!service || !volume || !timeline) return;
    setReady(true);
    trackEvent("project_assessment_started", "lead", service);
  };

  return (
    <section id="project-assessment" className="py-20 bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">Project Assessment</div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Let's Scope Your Project</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tell us the basics. We will use the information to understand your project and prepare a tailored quotation rather than relying on generic online pricing.
          </p>
        </div>

        <Card className="shadow-2xl bg-white border border-gray-100">
          <CardContent className="p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl font-semibold text-gray-900">Project Details</CardTitle>
                </CardHeader>
                <div className="space-y-6">
                  <div>
                    <Label>Primary requirement</Label>
                    <Select value={service} onValueChange={setService}>
                      <SelectTrigger className="mt-2"><SelectValue placeholder="Select a solution" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="digitization">Document Digitization</SelectItem>
                        <SelectItem value="data-capture">Data Capture & Indexing</SelectItem>
                        <SelectItem value="edms">EDMS / Records Management</SelectItem>
                        <SelectItem value="workflow">Workflow Automation</SelectItem>
                        <SelectItem value="records">Records & Archive Management</SelectItem>
                        <SelectItem value="disposal">Secure Document Disposal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="volume">Estimated volume</Label>
                    <Input id="volume" type="number" min="1" placeholder="e.g. 100000 pages / files" className="mt-2" value={volume} onChange={(e) => setVolume(e.target.value)} />
                  </div>
                  <div>
                    <Label>Preferred timeline</Label>
                    <Select value={timeline} onValueChange={setTimeline}>
                      <SelectTrigger className="mt-2"><SelectValue placeholder="Select a timeline" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="urgent">Urgent / accelerated</SelectItem>
                        <SelectItem value="standard">Standard delivery</SelectItem>
                        <SelectItem value="flexible">Flexible / phased</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button onClick={assessProject} disabled={!service || !volume || !timeline} className="w-full mt-6" size="lg">
                  <ClipboardCheck className="mr-2" size={20} />
                  Assess My Project
                </Button>
              </div>

              <div className="bg-gray-50 rounded-2xl p-7 flex flex-col justify-center">
                {ready ? (
                  <>
                    <FileText className="text-primary mb-4" size={40} />
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Your project is ready for review.</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Scope, document condition, metadata requirements, security controls, location and delivery expectations can materially affect project cost. A Henox specialist will review the requirements with you before a quotation is issued.
                    </p>
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                      <Link href="/contact">Request Detailed Quotation <ArrowRight className="ml-2" size={18} /></Link>
                    </Button>
                  </>
                ) : (
                  <div className="text-center text-gray-500 py-10">
                    <ClipboardCheck className="mx-auto text-gray-300 mb-4" size={52} />
                    <h3 className="font-semibold text-gray-800 mb-2">Professional scoping, not guesswork.</h3>
                    <p className="text-sm leading-relaxed">Complete the three fields and we will guide you toward the right next step.</p>
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
