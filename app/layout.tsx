import type { Metadata } from 'next';
import './globals.css';
import { GoogleAnalyticsScript, ClarityScript } from '@/lib/analytics';
import { siteMetadata } from '@/lib/metadata';

export const metadata: Metadata = {
  metadataBase: siteMetadata.metadataBase,
  title: 'Know Your Baseline — Plain-English fitness science',
  description:
    "Plain-English explainers on VO2 max, metabolism, body composition, training, and recovery. Edited by people who measure these things for a living.",
  openGraph: {
    title: 'Know Your Baseline',
    description:
      'Plain-English explainers on VO2 max, metabolism, body composition, training, and recovery.',
    type: 'website',
    siteName: 'Know Your Baseline',
    url: 'https://knowyourbaseline.com',
  },
  twitter: { card: 'summary_large_image' },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Know Your Baseline',
  url: 'https://knowyourbaseline.com',
  publisher: {
    '@type': 'LocalBusiness',
    name: 'FitEvals',
    url: 'https://fitevals.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Santa Cruz',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Source+Serif+4:ital,wght@0,400;0,600;1,400&family=JetBrains+Mono:wght@400;500&display=swap"
        />
        <GoogleAnalyticsScript />
        <ClarityScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
