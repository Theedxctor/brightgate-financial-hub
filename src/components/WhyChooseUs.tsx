import { CheckCircle, DollarSign, Heart, Clock } from "lucide-react";

const reasons = [
  {
    icon: CheckCircle,
    title: "Qualified Professionals",
    description: "Our team consists of certified accountants and financial experts with years of experience in the Kenyan market."
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "Clear, upfront pricing with no hidden fees. We believe in honest, transparent business relationships."
  },
  {
    icon: Heart,
    title: "Client-Focused Approach",
    description: "We prioritize your success and tailor our services to meet your specific business needs and goals."
  },
  {
    icon: Clock,
    title: "Year-Round Support",
    description: "Continuous support throughout the year, not just during tax season. We're here when you need us most."
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-background-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Why Choose Brightgate Consultants?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine professional expertise with personalized service to deliver exceptional results for every client.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 shadow-card">
                <reason.icon className="h-10 w-10 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                {reason.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-success" />
              <span className="text-sm font-medium">ICPAK Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-success" />
              <span className="text-sm font-medium">KRA Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-success" />
              <span className="text-sm font-medium">100+ Happy Clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;