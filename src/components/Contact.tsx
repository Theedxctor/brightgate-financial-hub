import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, MessageCircle, ChevronDown, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const services = [
  { id: 'accounting', label: 'Accounting Services' },
  { id: 'bookkeeping', label: 'Bookkeeping' },
  { id: 'tax', label: 'Tax Services' },
  { id: 'consultancy', label: 'Business Consultancy' },
  { id: 'remote', label: 'Remote Assistance' },
  { id: 'software', label: 'Software Solutions' },
  { id: 'other', label: 'Other (Please specify)' }
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to submit your message.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Load EmailJS configuration from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      
      // Validate environment variables
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check your environment variables.');
      }

      // Get the selected service label
      const selectedService = services.find(s => s.id === formData.service)?.label || formData.service;

      // Log the environment variables for debugging (remove in production)
      console.log('EmailJS Config:', {
        serviceId,
        templateId,
        publicKey: publicKey ? '***' + publicKey.slice(-4) : 'Not set',
        hasTemplateId: !!templateId,
        hasServiceId: !!serviceId,
        hasPublicKey: !!publicKey
      });

      // Send email using EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          title: `New Contact Form Submission - ${selectedService}`,
          name: formData.name,
          email: formData.email,
          time: new Date().toLocaleString(),
          message: `Service: ${selectedService}\n\nMessage:\n${formData.message}`,
          reply_to: formData.email
        },
        publicKey
      );

      console.log('EmailJS Response:', response);

      // Show success message
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        service: "",
        message: ""
      });
    } catch (error) {
      console.error("Error sending email:", error);
      
      let errorMessage = "There was an error sending your message. Please try again later.";
      
      if (error instanceof Error) {
        console.error("Error details:", {
          name: error.name,
          message: error.message,
          stack: error.stack
        });
        
        if (error.message.includes("Invalid template ID")) {
          errorMessage = "Invalid email template configuration. Please contact support.";
        } else if (error.message.includes("Invalid user ID")) {
          errorMessage = "Invalid email service configuration. Please contact support.";
        } else if (error.message.includes("Network Error")) {
          errorMessage = "Network error. Please check your internet connection and try again.";
        }
      }
      
      toast({
        title: "Error sending message",
        description: errorMessage,
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const openWhatsApp = () => {
    const phoneNumber = "254740797240";
    const message = encodeURIComponent("Hello! I'm interested in your accounting services. Could you provide more information?");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-background-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to take control of your finances? Contact us today for a free consultation 
            and discover how we can help your business thrive.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Let's Start a Conversation</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Reach out to us through any of the following channels. We're here to help!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-full">
                    <Mail className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">admin@brightgate.co.ke</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-full">
                    <Phone className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-muted-foreground">+254 740 797 240</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-full">
                    <MapPin className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">Nairobi, Kenya</p>
                  </div>
                </div>
                
                {/* WhatsApp Button */}
                <div className="pt-4">
                  <Button 
                    onClick={openWhatsApp}
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Chat on WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send Us a Message</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                      Service Interested In *
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full pl-3 pr-10 py-2 text-foreground bg-background border border-input rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm appearance-none"
                        required
                      >
                        <option value="" disabled>Select a service</option>
                        {services.map((service) => (
                          <option key={service.id} value={service.id}>
                            {service.label}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-foreground">
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your accounting needs..."
                      rows={5}
                      className="w-full"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;