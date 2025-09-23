import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Wanjiku",
    position: "CEO, Tech Innovations Ltd",
    content: "Brightgate Consultants transformed our financial management. Their expertise in tax planning saved us significant costs, and their remote support is exceptional.",
    rating: 5
  },
  {
    name: "James Mwangi", 
    position: "Founder, Green Valley Enterprises",
    content: "Professional, reliable, and always available when we need them. Their bookkeeping services are accurate and timely. Highly recommend their services.",
    rating: 5
  },
  {
    name: "Grace Njeri",
    position: "Director, Njeri & Associates",
    content: "The accounting software implementation was seamless. The team provided excellent training and ongoing support. Our financial processes are now more efficient than ever.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what some of our satisfied clients have to say about our services.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden group hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-card border-border/50 hover:border-primary/20"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="h-12 w-12 text-primary" />
                </div>
                
                {/* Rating Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Testimonial Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-text-subtle">
                    {testimonial.position}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Ready to join our satisfied clients?
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity shadow-card hover:shadow-lg transform hover:scale-105 duration-300"
          >
            Get Your Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;