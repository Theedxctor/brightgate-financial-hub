import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

type SEOProps = {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
  twitterCard?: string;
  structuredData?: Record<string, any>;
  location?: string;
  serviceType?: string;
};

// Core keywords for accounting services in Kenya
const CORE_KEYWORDS = [
  // Location-based
  'accounting services Kenya',
  'accountants in Nairobi',
  'CPA services Kenya',
  'tax consultants Nairobi',
  'bookkeeping services Kenya',
  'Nairobi accounting firm',
  'Kenya tax experts',
  'financial consultants Kenya',
  'business advisory Nairobi',
  'KRA tax filing Kenya',
  
  // Service-based
  'online accounting Kenya',
  'payroll services Nairobi',
  'VAT returns Kenya',
  'financial reporting Kenya',
  'business registration Nairobi',
  'tax planning Kenya',
  'audit services Nairobi',
  'financial management Kenya',
  'business consultancy Nairobi',
  'accounting software Kenya'
];

const defaultStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'AccountingService',
  name: 'Brightgate Consultants',
  description: 'Professional accounting and tax services in Nairobi, Kenya',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Nairobi, Thika',
    addressLocality: 'Nairobi',
    postalCode: '00100',
    addressCountry: 'KE'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '-1.2921',
    longitude: '36.8219'
  },
  telephone: '+254700000000',
  email: 'info@brightgate.co.ke',
  url: 'https://brightgate.co.ke',
  priceRange: '$$',
  openingHoursSpecification: [{
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '17:00'
  }],
  sameAs: [
    'https://www.linkedin.com/company/brightgate-consultants',
    'https://twitter.com/brightgate_ke',
    'https://www.facebook.com/brightgate.consultants'
  ]
};

export function SEO({
  title = 'Brightgate Consultants | Trusted Online Accountants in Kenya',
  description = 'Professional online accounting services in Kenya. Expert bookkeeping, tax services, business consultancy, and accounting software solutions for businesses in Nairobi and across Kenya.',
  keywords = [],
  canonicalUrl = 'https://brightgate.co.ke',
  ogType = 'website',
  ogImage = 'https://brightgate.co.ke/og-image.jpg',
  twitterCard = 'summary_large_image',
  structuredData = defaultStructuredData,
  location = 'Nairobi, Kenya',
  serviceType = 'Accounting Services'
}: SEOProps) {
  const { pathname } = useLocation();
  const fullUrl = `${canonicalUrl}${pathname}`;
  
  // Combine core keywords with any custom keywords
  const allKeywords = [...new Set([...CORE_KEYWORDS, ...keywords])].join(', ');
  
  // Enhanced description with location and services
  const enhancedDescription = description.includes('Nairobi') || description.includes('Kenya')
    ? description
    : `${description} Serving businesses in ${location} with professional ${serviceType.toLowerCase()}.`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={enhancedDescription} />
      <meta name="keywords" content={allKeywords} />
      <link rel="canonical" href={fullUrl} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      
      {/* Geographic Targeting */}
      <meta name="geo.region" content="KE-30" />
      <meta name="geo.placename" content="Nairobi" />
      <meta name="geo.position" content="-1.2921;36.8219" />
      <meta name="ICBM" content="-1.2921, 36.8219" />
      
      {/* Local Business Information */}
      <meta name="city" content="Nairobi" />
      <meta name="country" content="Kenya" />
      <meta name="region" content="Nairobi" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={enhancedDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Brightgate Consultants" />
      <meta property="og:locale" content="en_KE" />
      <meta property="og:locale:alternate" content="sw_KE" />
      <meta property="og:street-address" content="Nairobi, Thika" />
      <meta property="og:locality" content="Nairobi" />
      <meta property="og:region" content="Nairobi" />
      <meta property="og:postal-code" content="00100" />
      <meta property="og:country-name" content="Kenya" />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={enhancedDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:label1" content="Location" />
      <meta name="twitter:data1" content="Nairobi, Kenya" />
      <meta name="twitter:label2" content="Services" />
      <meta name="twitter:data2" content="Accounting, Tax, Bookkeeping" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" type="image/svg+xml" href="/icon.svg" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
