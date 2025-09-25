import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

type SEOProps = {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
  twitterCard?: string;
  structuredData?: Record<string, any>;
};

export function SEO({
  title = 'Brightgate Consultants | Trusted Online Accountants in Kenya',
  description = 'Professional online accounting services in Kenya. Expert bookkeeping, tax services, business consultancy, and accounting software solutions.',
  canonicalUrl = 'https://brightgate.co.ke',
  ogType = 'website',
  ogImage = 'https://brightgate.co.ke/og-image.jpg',
  twitterCard = 'summary_large_image',
  structuredData,
}: SEOProps) {
  const { pathname } = useLocation();
  const fullUrl = `${canonicalUrl}${pathname}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Brightgate Consultants" />
      <meta property="og:locale" content="en_KE" />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" type="image/svg+xml" href="/icon.svg" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            ...structuredData,
          })}
        </script>
      )}
    </Helmet>
  );
}
