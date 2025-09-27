import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, useNavigationType } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { BusinessStructuredData } from "./components/StructuredData";
import { SEO } from "./components/SEO";

// Initialize Google Analytics 4
ReactGA.initialize('G-WFBGB48LVF');

const queryClient = new QueryClient();

// Component to track page views
const PageTracker = () => {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // Send pageview with the current path
    ReactGA.send({ 
      hitType: 'pageview',
      page: location.pathname + location.search,
      title: document.title,
      location: window.location.href,
    });
  }, [location, navigationType]);

  return null;
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {/* Google Analytics Page Tracker */}
          <PageTracker />
          
          {/* Global Structured Data */}
          <BusinessStructuredData />
          
          <Routes>
            <Route path="/" element={
              <>
                <SEO 
                  title="Brightgate Consultants | Trusted Online Accountants in Kenya"
                  description="Professional online accounting services in Kenya. Expert bookkeeping, tax services, business consultancy, and accounting software solutions."
                  ogType="website"
                />
                <Index />
              </>
            } />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={
              <>
                <SEO 
                  title="Page Not Found | Brightgate Consultants"
                  description="The page you're looking for doesn't exist or has been moved."
                  ogType="website"
                />
                <NotFound />
              </>
            } />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
