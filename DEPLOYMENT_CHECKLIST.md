# Deployment Checklist

Use this checklist to ensure a smooth deployment to production.

## ✅ Pre-Deployment

- [x] Code pushed to GitHub: https://github.com/findalignment/Know-Your-Baseline
- [x] Build verified locally (no errors)
- [x] All pages created and tested
- [x] Documentation complete
- [ ] Google Analytics property created
- [ ] Microsoft Clarity project created
- [ ] Environment variables ready

## 🚀 Deployment Steps

### 1. Set Up Analytics (5 minutes)

**Google Analytics 4:**
1. Go to [analytics.google.com](https://analytics.google.com)
2. Create new property: "Know Your Baseline"
3. Copy Measurement ID (format: G-XXXXXXXXXX)
4. Save for environment variables

**Microsoft Clarity:**
1. Go to [clarity.microsoft.com](https://clarity.microsoft.com)
2. Create new project: "Know Your Baseline"
3. Copy Project ID
4. Save for environment variables

### 2. Deploy to Vercel (5 minutes)

- [ ] Sign in to Vercel with GitHub
- [ ] Import repository: findalignment/Know-Your-Baseline
- [ ] Verify build settings (auto-detected)
- [ ] Add environment variables:
  - `NEXT_PUBLIC_GA_MEASUREMENT_ID`
  - `NEXT_PUBLIC_CLARITY_PROJECT_ID`
- [ ] Click "Deploy"
- [ ] Wait for build completion
- [ ] Visit deployment URL to verify

### 3. Configure Custom Domain (10-15 minutes)

- [ ] In Vercel: Settings → Domains
- [ ] Add domain: knowyourbaseline.com
- [ ] Add domain: www.knowyourbaseline.com
- [ ] Note DNS records provided by Vercel
- [ ] Update DNS at domain registrar:
  - A record: `@` → Vercel IP
  - CNAME: `www` → `cname.vercel-dns.com`
- [ ] Wait for DNS propagation (5-30 minutes)
- [ ] Verify SSL certificate is active

## 🧪 Post-Deployment Testing

### Test All Pages

Visit each page and verify it loads correctly:

- [ ] https://knowyourbaseline.com
- [ ] https://knowyourbaseline.com/which-test
- [ ] https://knowyourbaseline.com/vo2-max
- [ ] https://knowyourbaseline.com/resting-metabolic-rate
- [ ] https://knowyourbaseline.com/pricing
- [ ] https://knowyourbaseline.com/faq
- [ ] https://knowyourbaseline.com/about
- [ ] https://knowyourbaseline.com/thank-you

### Test Functionality

- [ ] Header navigation works on all pages
- [ ] Mobile menu opens and works
- [ ] Footer links work
- [ ] All "Book on FitEvals" CTAs work
- [ ] CTAs open in new tab
- [ ] CTAs include UTM parameters
- [ ] Test on mobile device
- [ ] Test on tablet
- [ ] Test on desktop

### Verify UTM Tracking

Click any CTA and verify URL includes:
```
?utm_source=knowyourbaseline
&utm_medium=referral
&utm_campaign=baseline_router
&utm_content=[page-specific]
```

- [ ] Home page CTA
- [ ] Which Test CTA
- [ ] VO2 Max CTA
- [ ] RMR CTA
- [ ] Pricing CTA
- [ ] FAQ CTA
- [ ] About CTA

### Test Analytics

- [ ] Open Google Analytics Real-Time view
- [ ] Visit site
- [ ] Verify pageview tracked
- [ ] Click a CTA
- [ ] Verify outbound click tracked (if configured)
- [ ] Open Microsoft Clarity dashboard
- [ ] Verify recordings are appearing

### SEO Verification

- [ ] View page source, check meta tags present
- [ ] Test with [Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Test with [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [ ] Test with [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [ ] Check mobile-friendliness: [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [ ] Run [PageSpeed Insights](https://pagespeed.web.dev/)

## 📈 Post-Launch Setup

### Search Console (15 minutes)

- [ ] Add site to [Google Search Console](https://search.google.com/search-console)
- [ ] Verify domain ownership
- [ ] Submit sitemap: https://knowyourbaseline.com/sitemap.xml
- [ ] Check for crawl errors
- [ ] Set preferred domain (www vs non-www)

### Monitoring Setup

- [ ] Set up Vercel Analytics (if using Vercel)
- [ ] Configure uptime monitoring (e.g., UptimeRobot)
- [ ] Set up error tracking (optional: Sentry)

### Marketing Setup

- [ ] Share site with FitEvals team
- [ ] Create social media assets
- [ ] Plan initial traffic campaigns
- [ ] Set up email signatures with link
- [ ] Create QR codes for physical materials (optional)

## 📊 Week 1 Monitoring

Check these daily for the first week:

- [ ] Day 1: Verify all analytics working
- [ ] Day 2: Check for any console errors
- [ ] Day 3: Review user behavior in Clarity
- [ ] Day 4: Check CTA click-through rates
- [ ] Day 5: Review bounce rates per page
- [ ] Day 6: Identify most popular pages
- [ ] Day 7: Weekly summary and optimization plan

### Key Metrics to Track

**Traffic:**
- Unique visitors
- Page views
- Traffic sources
- Device breakdown (mobile vs desktop)

**Engagement:**
- Pages per session
- Average session duration
- Bounce rate
- Most visited pages

**Conversion:**
- CTA clicks
- Click-through rate (target: 15-25%)
- Visitors → FitEvals bookings
- Which test is more popular (VO2 vs RMR)

## 🐛 Troubleshooting

### If build fails:
1. Check Vercel build logs
2. Verify all dependencies in package.json
3. Test build locally: `npm run build`
4. Check environment variables are set

### If analytics not working:
1. Verify environment variables are set correctly
2. Check browser console for errors
3. Disable ad blockers and test
4. Verify GA Measurement ID format (G-XXXXXXXXXX)

### If CTAs not working:
1. Check browser console for errors
2. Verify FitEvals URLs in `lib/links.ts`
3. Test in incognito mode
4. Check if pop-up blockers are interfering

### If domain not working:
1. Wait 30+ minutes for DNS propagation
2. Verify DNS records are correct
3. Check domain registrar settings
4. Use [DNS Checker](https://dnschecker.org/) to verify propagation

## ✅ Deployment Complete

Once all items are checked:

- [ ] Site is live and accessible
- [ ] All pages load correctly
- [ ] Analytics tracking
- [ ] Custom domain working
- [ ] SSL certificate active
- [ ] All CTAs working
- [ ] Mobile responsive
- [ ] Search Console configured
- [ ] Week 1 monitoring plan in place

**Deployment Date:** _________________

**Live URL:** https://knowyourbaseline.com

**Notes:**
_________________________________________________
_________________________________________________
_________________________________________________

---

**Next Review:** Schedule a review 1 week post-launch to analyze data and plan optimizations.
