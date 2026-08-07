import { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Jane Mwangi",
    role: "Managing Partner, Mwangi & Associates Law Firm",
    content: "Henox transformed our document management process completely. Their backlog scanning service helped us digitize 15 years of client files in just two weeks. Fast, professional, and incredibly reliable!",
    rating: 5,
    initials: "JM",
    bgColor: "bg-primary"
  },
  {
    id: 2,
    name: "Dr. John Kamau",
    role: "Administrator, Nairobi Medical Center",
    content: "The EDMS installation by Henox has revolutionized our patient record management. We can now access any patient file within seconds. The system is user-friendly and the team provided excellent training.",
    rating: 5,
    initials: "JK",
    bgColor: "bg-blue-600"
  },
  {
    id: 3,
    name: "Sarah Mbatha",
    role: "Operations Manager, EduTech Solutions",
    content: "Their file registry arrangement service helped us reclaim 60% of our office space. The new filing system is so organized that we can find any document in minutes instead of hours. Highly recommend Henox!",
    rating: 5,
    initials: "SM",
    bgColor: "bg-accent"
  },
  {
    id: 4,
    name: "Peter Muturi",
    role: "IT Director, FinanceCore Bank",
    content: "The secure document destruction service gave us peace of mind knowing our sensitive client data was properly disposed of. Professional, certified, and completely confidential process.",
    rating: 5,
    initials: "PM",
    bgColor: "bg-red-500"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollTestimonials = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    
    const scrollAmount = 320; // Width of one testimonial card plus gap
    
    if (direction === 'left') {
      sliderRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      setCurrentIndex(prev => Math.max(0, prev - 1));
    } else {
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setCurrentIndex(prev => Math.min(testimonials.length - 1, prev + 1));
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, i) => (
      <Star key={i} className="text-yellow-400 fill-current" size={16} />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M50 20L60 40L40 40Z' fill='%23000000'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Client Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real feedback from businesses that have transformed their operations with Henox document digitization services
          </p>
        </div>

        <div className="relative">
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.id} 
                className={`flex-shrink-0 w-80 service-card-hover bg-white/80 backdrop-blur-sm border border-white/50 shadow-xl fade-in-up stagger-delay-${index + 1}`}
                style={{ scrollSnapAlign: 'start' }}
              >
                <CardContent className="p-8 relative">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 text-6xl text-gray-200 font-serif leading-none">
                    "
                  </div>
                  
                  <div className="flex items-center mb-6">
                    <div className="flex">
                      {renderStars(testimonial.rating)}
                    </div>
                    <span className="ml-2 text-sm text-gray-500">({testimonial.rating}/5)</span>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed italic text-lg relative z-10">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center">
                    <div className={`w-14 h-14 ${testimonial.bgColor} rounded-full flex items-center justify-center mr-4 shadow-lg`}>
                      <span className="text-white font-bold text-lg">{testimonial.initials}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm font-medium">{testimonial.role}</p>
                      <div className="flex items-center mt-1">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        <span className="text-xs text-green-600 font-medium">Verified Client</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enhanced Navigation Arrows */}
          <Button
            variant="outline"
            size="sm"
            className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-xl hover:shadow-2xl transition-all border-2 border-white/50 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => scrollTestimonials('left')}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="text-gray-700" size={24} />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-xl hover:shadow-2xl transition-all border-2 border-white/50 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => scrollTestimonials('right')}
            disabled={currentIndex === testimonials.length - 1}
          >
            <ChevronRight className="text-gray-700" size={24} />
          </Button>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => {
                  setCurrentIndex(index);
                  if (sliderRef.current) {
                    sliderRef.current.scrollTo({
                      left: index * 320,
                      behavior: 'smooth'
                    });
                  }
                }}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 p-8">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Happy Clients</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Ready to transform your document management? Get started with a free consultation and see why businesses across Kenya trust Henox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <a href="/contact">Get Free Consultation</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  <a href="#quote-calculator">Calculate Your Quote</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
