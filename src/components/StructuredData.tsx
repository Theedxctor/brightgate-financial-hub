import { useEffect } from 'react';

type BusinessStructuredDataProps = {
  pageType?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'ServicePage';
  serviceName?: string;
  serviceDescription?: string;
};

export function BusinessStructuredData({
  pageType = 'WebPage',
  serviceName,
  serviceDescription,
}: BusinessStructuredDataProps) {
  useEffect(() => {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'AccountingService',
      name: 'Brightgate Consultants',
      description: 'Professional online accounting services in Kenya',
      url: 'https://brightgate.co.ke',
      logo: 'https://brightgate.co.ke/icon.jpeg',
      image: 'https://brightgate.co.ke/og-image.jpg',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Your Street Address',
        addressLocality: 'Nairobi',
        addressRegion: 'Nairobi',
        postalCode: '00100',
        addressCountry: 'KE',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '-1.2921',
        longitude: '36.8219',
      },
      openingHours: 'Mo,Tu,We,Th,Fr 08:00-17:00',
      priceRange: '$$',
      telephone: '+254700000000',
      email: 'info@brightgate.co.ke',
      sameAs: [
        'https://www.facebook.com/brightgateconsultants',
        'https://www.linkedin.com/company/brightgate-consultants',
        'https://twitter.com/brightgate_ke',
      ],
      areaServed: ['Kenya', 'East Africa'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Accounting Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Bookkeeping',
              description: 'Professional bookkeeping services for businesses of all sizes',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Tax Services',
              description: 'Comprehensive tax planning and filing services',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Business Consultancy',
              description: 'Strategic business advisory services',
            },
          },
        ],
      },
    };

    // Add page type specific data
    const pageData = {
      '@context': 'https://schema.org',
      '@type': pageType,
      name: serviceName || 'Brightgate Consultants',
      description: serviceDescription || 'Professional accounting services in Kenya',
      url: window.location.href,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://brightgate.co.ke',
      },
    };

    // Add script tags to document head
    const script1 = document.createElement('script');
    script1.type = 'application/ld+json';
    script1.text = JSON.stringify(structuredData);
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.type = 'application/ld+json';
    script2.text = JSON.stringify(pageData);
    document.head.appendChild(script2);

    // Cleanup function
    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, [pageType, serviceName, serviceDescription]);

  return null;
}
