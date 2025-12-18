# Deployment Guide for Know Your Baseline

## Pre-Deployment Checklist

### 1. Code Verification
- [x] All pages built successfully
- [x] No TypeScript errors
- [x] All components rendering correctly
- [x] Analytics setup complete
- [x] SEO metadata configured
- [x] UTM tracking links verified

### 2. Environment Variables

Create these environment variables in your deployment platform:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=your-ga-measurement-id
NEXT_PUBLIC_CLARITY_PROJECT_ID=your-clarity-project-id
```

**Note:** These are optional but recommended for tracking. The site will work without them.

### 3. Test Locally

Before deploying, test the production build:

```bash
npm run build
npm start
```

Visit http://localhost:3000 and verify:
- All pages load correctly
- Navigation works
- CTAs link to FitEvals with UTM parameters
- Responsive design works on mobile

## Deployment to Vercel (Recommended)

### Step 1: Push to GitHub

```bash
cd /Users/rockhudson/knowyourbaseline
git init
git add .
git commit -m "Initial commit: Know Your Baseline marketing site"
git branch -M main
git remote add origin your-github-repo-url
git push -u origin main
```

### Step 2: Import to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure project:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`

### Step 3: Add Environment Variables

In Vercel project settings:
1. Go to Settings → Environment Variables
2. Add:
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - `NEXT_PUBLIC_CLARITY_PROJECT_ID`
3. Save changes

### Step 4: Deploy

1. Click "Deploy"
2. Wait for build to complete
3. Verify deployment at your-project.vercel.app

### Step 5: Custom Domain

1. Go to Settings → Domains
2. Add `knowyourbaseline.com`
3. Follow DNS configuration instructions
4. Add DNS records at your domain registrar:
   - **A Record**: `@` → Vercel IP
   - **CNAME**: `www` → `cname.vercel-dns.com`
5. Verify domain is active

### Step 6: SSL Certificate

Vercel automatically provisions SSL certificates. Verify:
- Visit https://knowyourbaseline.com
- Check for valid SSL certificate
- Confirm automatic HTTP → HTTPS redirect

## Post-Deployment Verification

### Test All Pages

Visit and verify each page:
- ✓ https://knowyourbaseline.com
- ✓ https://knowyourbaseline.com/which-test
- ✓ https://knowyourbaseline.com/vo2-max
- ✓ https://knowyourbaseline.com/resting-metabolic-rate
- ✓ https://knowyourbaseline.com/pricing
- ✓ https://knowyourbaseline.com/faq
- ✓ https://knowyourbaseline.com/about
- ✓ https://knowyourbaseline.com/thank-you

### Test Analytics

1. Open Google Analytics Real-Time view
2. Visit the site
3. Verify page views are tracked
4. Click a CTA button
5. Verify outbound clicks are tracked (if configured)

### Test UTM Parameters

Click any "Book on FitEvals" button and verify the URL includes:
```
?utm_source=knowyourbaseline
&utm_medium=referral
&utm_campaign=baseline_router
&utm_content=[specific_content_tag]
```

### Test SEO

Use tools to verify:
- Meta titles and descriptions
- Open Graph tags
- Twitter Card tags
- Canonical URLs
- Mobile responsiveness

**Tools:**
- [Google Search Console](https://search.google.com/search-console)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)

## Alternative Deployment Options

### Netlify

1. Connect GitHub repository
2. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
3. Add environment variables
4. Deploy

### AWS Amplify

1. Connect repository
2. Auto-detect Next.js settings
3. Add environment variables
4. Deploy

### Self-Hosted (VPS/Server)

Requirements:
- Node.js 18+
- npm or yarn

```bash
# On your server
git clone your-repo-url
cd knowyourbaseline
npm install
npm run build
npm start
```

Use PM2 or systemd to keep the app running.

## Monitoring & Maintenance

### Analytics to Track

**Google Analytics:**
- Page views per page
- CTA click rates
- Time on site
- Bounce rate
- Traffic sources

**Microsoft Clarity:**
- Heatmaps
- Session recordings
- User behavior patterns

### Performance Monitoring

Use Vercel Analytics or:
- Google PageSpeed Insights
- Lighthouse CI
- Web Vitals

### Regular Updates

- Retest every 3-6 months
- Update dependencies: `npm update`
- Review analytics and optimize conversion
- Update content based on user behavior

## Troubleshooting

### Build Fails

1. Check for TypeScript errors: `npm run build`
2. Verify all dependencies installed: `npm install`
3. Check Node.js version: `node -v` (should be 18+)

### Analytics Not Working

1. Verify environment variables are set
2. Check browser console for errors
3. Ensure GA_MEASUREMENT_ID format is correct (G-XXXXXXXXXX)

### Links Not Working

1. Verify FitEvals URLs in `lib/links.ts`
2. Test UTM parameters
3. Check target="_blank" is set for external links

## Support

For issues with:
- **Deployment**: Check Vercel/Netlify documentation
- **Next.js**: See [Next.js docs](https://nextjs.org/docs)
- **FitEvals Integration**: Contact FitEvals support

## Success Metrics

Track these KPIs post-launch:
- Traffic volume
- Pages per session
- Average time on site
- CTA click-through rate (target: 15-25%)
- Conversion rate (visitors → FitEvals bookings)

## Next Steps

After successful deployment:
1. Submit sitemap to Google Search Console
2. Set up Google Ads or social media campaigns
3. Monitor first week of analytics closely
4. Iterate on conversion optimization
5. Consider A/B testing CTAs and messaging
