import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Professional financial consulting services" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-secondary/90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Your Trusted Online Accountants in Kenya
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto animate-slide-up">
            Accurate, reliable, and future-focused financial solutions for individuals and businesses. 
            Professional accounting services delivered with integrity and excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <Button 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('services')}
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
            >
              View Our Services
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating Animation Elements */}
      <div className="absolute top-20 right-10 w-16 h-16 bg-secondary/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 left-10 w-12 h-12 bg-primary-foreground/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
    </section>
  );
};

export default Hero;