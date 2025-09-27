import ReactGA from 'react-ga4';

// Initialize Google Analytics 4
export const initGA = () => {
  // Replace with your Measurement ID
  ReactGA.initialize('G-WFBGB48LVF');
  
  // Optional: Send pageview with a custom path
  ReactGA.send({ 
    hitType: 'pageview',
    page: window.location.pathname + window.location.search,
  });
};

// Track page views
export const trackPageView = (path: string) => {
  ReactGA.send({ 
    hitType: 'pageview',
    page: path,
  });
};

// Track custom events
export const trackEvent = (category: string, action: string, label?: string, value?: number) => {
  ReactGA.event({
    category,
    action,
    label,
    value,
  });
};
