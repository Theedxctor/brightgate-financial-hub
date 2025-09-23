import { Calculator, BookOpen, FileText, Users, Headphones, Monitor } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Calculator,
    title: "Accounting Services",
    description: "Comprehensive accounting solutions including financial statements, payroll processing, and regulatory compliance to keep your business running smoothly."
  },
  {
    icon: BookOpen,
    title: "Bookkeeping Services", 
    description: "Accurate and timely recording of financial transactions, bank reconciliations, and maintaining organized financial records for your business."
  },
  {
    icon: FileText,
    title: "Tax Services",
    description: "Expert tax preparation, planning, and compliance services to minimize your tax burden while ensuring full regulatory compliance."
  },
  {
    icon: Users,
    title: "Consultancy Services",
    description: "Strategic business advice, financial planning, and growth strategies to help you make informed decisions and achieve your business objectives."
  },
  {
    icon: Headphones,
    title: "Remote Assistance",
    description: "Flexible remote support for all your accounting needs, providing expert assistance whenever and wherever you need it."
  },
  {
    icon: Monitor,
    title: "Accounting Software Services",
    description: "Implementation, training, and support for modern accounting software solutions to streamline your financial processes."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of financial services designed to meet the diverse needs of businesses and individuals across Kenya.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/20 bg-card hover:bg-card-hover"
            >
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;