import { Shield, Target, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            About Brightgate Consultants
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            At Brightgate Consultants, we are committed to providing exceptional financial services 
            that empower businesses and individuals to achieve their goals. With our expertise in 
            accounting, taxation, and business consultancy, we serve as your trusted partner in 
            navigating the complex world of finance.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide reliable, accurate, and innovative financial solutions that help our clients thrive in today's competitive business environment.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Our Vision</h3>
              <p className="text-muted-foreground">
                To be Kenya's leading online accounting consultancy, known for excellence, integrity, and transformative financial solutions.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Our Values</h3>
              <p className="text-muted-foreground">
                Integrity, excellence, client-focus, and innovation drive everything we do. We believe in building lasting relationships through trust and transparency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;