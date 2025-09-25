import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { BusinessStructuredData } from "./components/StructuredData";
import { SEO } from "./components/SEO";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
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
