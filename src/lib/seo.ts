import { Metadata } from 'next';

const title = 'Brightgate Consultants | Trusted Online Accountants in Kenya';
const description = 'Professional online accounting services in Kenya. Expert bookkeeping, tax services, business consultancy, and accounting software solutions.';
const siteUrl = 'https://brightgate.co.ke';

export const defaultMetadata: Metadata = {
  title,
  description,
  metadataBase: new URL(siteUrl),
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: 'Brightgate Consultants',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Brightgate Consultants - Professional Accounting Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [`${siteUrl}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification here
    google: 'YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE',
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const generatePageMetadata = (pageTitle: string, pageDescription: string, path: string): Metadata => ({
  title: `${pageTitle} | Brightgate Consultants`,
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}${path}`,
  },
  openGraph: {
    ...defaultMetadata.openGraph,
    title: `${pageTitle} | Brightgate Consultants`,
    description: pageDescription,
    url: `${siteUrl}${path}`,
  },
  twitter: {
    ...defaultMetadata.twitter,
    title: `${pageTitle} | Brightgate Consultants`,
    description: pageDescription,
  },
});
