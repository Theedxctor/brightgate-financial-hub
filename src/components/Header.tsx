import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    // Close the mobile menu first
    setIsMenuOpen(false);
    
    // Use a small timeout to ensure the menu is closed before scrolling
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        // Calculate the position to scroll to, accounting for the header height
        const headerOffset = 80; // Adjust this value based on your header height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 300); // Matches the menu close animation duration
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => scrollToSection('hero')}
              className="flex items-center space-x-2"
            >
              <img 
                src="/icon.jpeg" 
                alt="Brightgate Consultants Logo" 
                className="h-10 w-10 rounded-full object-cover"
              />
              <span className="text-xl font-bold text-primary hover:text-primary-light transition-colors hidden sm:inline">
                Brightgate Consultants
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('why-choose-us')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Why Choose Us
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden fixed inset-x-0 top-16 bg-background/95 backdrop-blur-sm shadow-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: 1, 
                height: 'auto',
                transition: { 
                  opacity: { duration: 0.2 },
                  height: { duration: 0.3, ease: "easeInOut" }
                }
              }}
              exit={{ 
                opacity: 0, 
                height: 0,
                transition: { 
                  opacity: { duration: 0.1 },
                  height: { duration: 0.25, ease: "easeInOut" }
                }
              }}
            >
              <div className="px-2 pt-2 pb-4 space-y-1 border-t border-border">
                {[
                  { id: 'about', label: 'About Us' },
                  { id: 'services', label: 'Services' },
                  { id: 'why-choose-us', label: 'Why Choose Us' },
                ].map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ 
                      x: 0, 
                      opacity: 1,
                      transition: { 
                        delay: 0.1 * (['about', 'services', 'why-choose-us'].indexOf(item.id) + 1)
                      }
                    }}
                    exit={{ 
                      x: -20, 
                      opacity: 0,
                      transition: { duration: 0.15 }
                    }}
                  >
                    <button 
                      onClick={() => scrollToSection(item.id)}
                      className="block w-full px-4 py-3 text-foreground hover:bg-accent/50 rounded-lg transition-colors text-left"
                    >
                      {item.label}
                    </button>
                  </motion.div>
                ))}
                
                <motion.div
                  className="px-2 mt-4"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ 
                    y: 0, 
                    opacity: 1,
                    transition: { delay: 0.4 }
                  }}
                  exit={{ 
                    y: 10, 
                    opacity: 0,
                    transition: { duration: 0.15 }
                  }}
                >
                  <Button 
                    onClick={() => scrollToSection('contact')}
                    className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 transition-all transform hover:scale-[1.02]"
                    size="lg"
                  >
                    Get Started
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;