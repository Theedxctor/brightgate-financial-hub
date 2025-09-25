import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { BusinessStructuredData } from '@/components/StructuredData';

const inter = Inter({ subsets: ['latin'] });

const defaultTitle = 'Brightgate Consultants | Trusted Online Accountants in Kenya';
const defaultDescription = 'Professional online accounting services in Kenya. Expert bookkeeping, tax services, business consultancy, and accounting software solutions.';

export const metadata: Metadata = {
  title: defaultTitle,
  description: defaultDescription,
  metadataBase: new URL('https://brightgate.co.ke'),
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: 'https://brightgate.co.ke',
    siteName: 'Brightgate Consultants',
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://brightgate.co.ke',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <BusinessStructuredData />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
