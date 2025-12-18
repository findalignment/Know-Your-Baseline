import { Metadata } from 'next';

const BASE_URL = 'https://knowyourbaseline.com';

export const siteMetadata = {
  siteName: 'Know Your Baseline',
  description: 'VO₂ Max + Metabolic testing that tells you exactly how to train and fuel for your body.',
  url: BASE_URL,
  metadataBase: new URL(BASE_URL),
};

export function createMetadata({
  title,
  description,
  path = '/',
  image = '/og-image.png',
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const fullTitle = `${title} | ${siteMetadata.siteName}`;
  const url = `${BASE_URL}${path}`;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteMetadata.siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  };
}

// Page-specific metadata
export const pageMetadata = {
  home: createMetadata({
    title: 'Stop Guessing. Get Your Baseline',
    description: 'VO₂ Max + Metabolic testing that tells you exactly how to train and fuel for your body. Stop guessing, start knowing.',
    path: '/',
  }),
  
  whichTest: createMetadata({
    title: 'Which Test Do I Need?',
    description: 'Find the right metabolic or fitness test for your goals. Whether you want fat loss, endurance gains, or performance optimization.',
    path: '/which-test',
  }),
  
  vo2Max: createMetadata({
    title: 'VO₂ Max Testing: What It Reveals About Your Fitness',
    description: 'Stop guessing about your training intensity. VO₂ Max testing shows exactly how hard to train for maximum endurance results.',
    path: '/vo2-max',
  }),
  
  rmr: createMetadata({
    title: 'Resting Metabolic Rate Testing: Know Your True Calorie Needs',
    description: 'Stop guessing your calorie needs. RMR testing reveals your exact metabolism so you can fuel for fat loss or performance.',
    path: '/resting-metabolic-rate',
  }),
  
  pricing: createMetadata({
    title: 'Testing Pricing: What You Get',
    description: 'Transparent pricing for VO₂ Max and metabolic testing. See what\'s included and what you\'ll walk away with.',
    path: '/pricing',
  }),
  
  faq: createMetadata({
    title: 'Frequently Asked Questions',
    description: 'Common questions about VO₂ Max testing, metabolic testing, booking, preparation, and what to expect from your results.',
    path: '/faq',
  }),
  
  about: createMetadata({
    title: 'About Know Your Baseline',
    description: 'Why we created Know Your Baseline and how it connects you with professional metabolic and fitness testing.',
    path: '/about',
  }),
  
  thankYou: createMetadata({
    title: 'Thank You',
    description: 'Thank you for choosing to get your baseline. You\'re being directed to FitEvals to complete your booking.',
    path: '/thank-you',
  }),
};

