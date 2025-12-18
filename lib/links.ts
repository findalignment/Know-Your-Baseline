// Centralized FitEvals booking URLs with UTM tracking

const BASE_URL = 'https://www.fitevals.com/book';
const UTM_BASE = 'utm_source=knowyourbaseline&utm_medium=referral&utm_campaign=baseline_router';

export const FITEVALS_URLS = {
  // VO2 Max booking
  BOOKING_VO2: `${BASE_URL}?${UTM_BASE}&utm_content=vo2_cta`,
  
  // Resting Metabolic Rate booking
  BOOKING_RMR: `${BASE_URL}?${UTM_BASE}&utm_content=rmr_cta`,
  
  // General booking (from homepage, header, etc)
  BOOKING_GENERAL: `${BASE_URL}?${UTM_BASE}&utm_content=general_cta`,
  
  // From which-test page
  BOOKING_WHICH_TEST: `${BASE_URL}?${UTM_BASE}&utm_content=which_test_cta`,
  
  // From pricing page
  BOOKING_PRICING: `${BASE_URL}?${UTM_BASE}&utm_content=pricing_cta`,
  
  // From FAQ page
  BOOKING_FAQ: `${BASE_URL}?${UTM_BASE}&utm_content=faq_cta`,
  
  // From about page
  BOOKING_ABOUT: `${BASE_URL}?${UTM_BASE}&utm_content=about_cta`,
} as const;

export type FitEvalsUrl = typeof FITEVALS_URLS[keyof typeof FITEVALS_URLS];

