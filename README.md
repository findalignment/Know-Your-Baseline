# Know Your Baseline

A high-converting Next.js marketing site that educates visitors about VO₂ Max and RMR (Resting Metabolic Rate) testing, then drives them to book appointments on FitEvals.com with proper tracking.

## Overview

**Know Your Baseline** helps people stop guessing about their training and nutrition by connecting them with professional metabolic testing services. The site explains what VO₂ Max and RMR testing are, who they're for, and guides visitors to book on FitEvals.com.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript** (type safety)
- **Tailwind CSS** (styling)
- **Google Analytics 4** (tracking)
- **Microsoft Clarity** (session replay/heatmaps)

## Site Structure

- `/` - Home page with hero, test overview, and CTAs
- `/which-test` - Interactive test chooser
- `/vo2-max` - VO₂ Max testing details
- `/resting-metabolic-rate` - RMR testing details
- `/pricing` - Pricing information and test comparison
- `/faq` - Frequently asked questions
- `/about` - About the site and testing process
- `/thank-you` - Confirmation page after booking

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file for analytics (optional):

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=your-ga-id
NEXT_PUBLIC_CLARITY_PROJECT_ID=your-clarity-id
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

Build for production:

```bash
npm run build
npm start
```

## Key Features

### UTM Tracking

All FitEvals booking links include UTM parameters for tracking:
- Source: `knowyourbaseline`
- Medium: `referral`
- Campaign: `baseline_router`
- Content: Varies by page/CTA

See `lib/links.ts` for all tracking URLs.

### Analytics

- **Google Analytics 4**: Page views and outbound link tracking
- **Microsoft Clarity**: Session replay and heatmaps

Configure in `lib/analytics.ts`.

### SEO

Per-page metadata with:
- Unique title tags
- Meta descriptions
- Open Graph tags
- Twitter Card tags
- Canonical URLs

Configure in `lib/metadata.ts`.

## Project Structure

```
knowyourbaseline/
├── app/                          # Next.js app router pages
│   ├── layout.tsx               # Root layout with header/footer
│   ├── page.tsx                 # Home page
│   ├── which-test/
│   ├── vo2-max/
│   ├── resting-metabolic-rate/
│   ├── pricing/
│   ├── faq/
│   ├── about/
│   └── thank-you/
├── components/                   # Reusable components
│   ├── Header.tsx               # Sticky header with navigation
│   ├── Footer.tsx
│   ├── CTAButton.tsx            # CTA with tracking
│   ├── TrustSection.tsx
│   └── TestimonialCard.tsx
├── lib/                         # Utilities and configuration
│   ├── links.ts                 # FitEvals URLs with UTMs
│   ├── metadata.ts              # SEO metadata configs
│   └── analytics.ts             # GA/Clarity setup
└── public/                      # Static assets
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import to Vercel
3. Configure environment variables:
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - `NEXT_PUBLIC_CLARITY_PROJECT_ID`
4. Add custom domain: `knowyourbaseline.com`
5. Deploy

### Other Platforms

This is a standard Next.js app and can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Self-hosted with Node.js

## Content Strategy

All content follows these principles:
- **Benefit-focused** (not feature-focused)
- **Specific** (numbers, outcomes, examples)
- **Conversion-oriented** (action-driving language)
- **Trust-building** (credibility markers)

## Contributing

This is a private project for Know Your Baseline. For questions or updates, contact the project maintainer.

## License

All rights reserved. This project is proprietary.
