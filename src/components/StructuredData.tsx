import { JsonLd } from 'next-seo';

export function BusinessStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'AccountingService',
    name: 'Brightgate Consultants',
    description: 'Professional online accounting services in Kenya',
    url: 'https://brightgate.co.ke',
    logo: 'https://brightgate.co.ke/icon.jpeg',
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
    sameAs: [
      'https://www.facebook.com/yourpage',
      'https://www.linkedin.com/company/yourcompany',
      'https://twitter.com/yourhandle',
    ],
  };

  return <JsonLd {...structuredData} />;
}
