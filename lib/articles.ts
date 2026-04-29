export type Category =
  | 'VO2 Max'
  | 'Metabolism'
  | 'Body Composition'
  | 'Training'
  | 'Recovery';

export const CATEGORIES: Category[] = [
  'VO2 Max',
  'Metabolism',
  'Body Composition',
  'Training',
  'Recovery',
];

export type Article = {
  slug: string;
  category: Category;
  title: string;
  dek: string;
  readTime: number;
  date: string;
  author: string;
  featured?: boolean;
};

export const ARTICLES: Article[] = [
  {
    slug: 'what-is-vo2-max',
    category: 'VO2 Max',
    title: 'What is VO2 max, really?',
    dek: 'The single number that predicts longevity better than almost any other metric — and what yours actually means.',
    readTime: 8,
    date: 'April 22, 2026',
    author: 'Dr. Lena Ortiz',
    featured: true,
  },
  {
    slug: 'rmr-vs-tdee',
    category: 'Metabolism',
    title: 'RMR vs TDEE: which number actually matters?',
    dek: 'Your resting metabolic rate is a measurement. Your total daily energy expenditure is an estimate. Here’s how to use both without fooling yourself.',
    readTime: 6,
    date: 'April 18, 2026',
    author: 'Marcus Chen',
  },
  {
    slug: 'how-often-retest',
    category: 'Training',
    title: 'How often should you retest?',
    dek: 'Every 12 weeks is the standard answer. The honest answer depends on what’s actually changing in your training.',
    readTime: 5,
    date: 'April 14, 2026',
    author: 'Dr. Lena Ortiz',
  },
  {
    slug: 'vo2-by-age',
    category: 'VO2 Max',
    title: 'What your VO2 number means by age',
    dek: 'A 45 in your 30s is not the same as a 45 in your 60s. A field guide to reading the chart that’s usually on the back of your report.',
    readTime: 7,
    date: 'April 10, 2026',
    author: 'Dr. Lena Ortiz',
  },
  {
    slug: 'reading-body-comp',
    category: 'Body Composition',
    title: 'Reading a body comp report without panicking',
    dek: 'DEXA gives you four numbers most people misread. A walkthrough of fat mass, lean mass, visceral adipose tissue, and bone density.',
    readTime: 9,
    date: 'April 6, 2026',
    author: 'Marcus Chen',
  },
  {
    slug: 'zone-2-myth',
    category: 'Training',
    title: 'The Zone 2 myth (and what’s actually true)',
    dek: 'Yes, it works. No, you probably aren’t doing it right. The simplest test that tells you whether you’re in zone 2 — without a lab.',
    readTime: 6,
    date: 'April 2, 2026',
    author: 'Sam Reyes',
  },
  {
    slug: 'hrv-recovery',
    category: 'Recovery',
    title: 'HRV is a trend, not a score',
    dek: 'Why a single morning HRV number tells you almost nothing — and the rolling baseline that actually predicts overreaching.',
    readTime: 7,
    date: 'March 28, 2026',
    author: 'Dr. Lena Ortiz',
  },
  {
    slug: 'fasted-cardio',
    category: 'Metabolism',
    title: 'Does fasted cardio do anything?',
    dek: 'The substrate-utilization argument is real. The fat-loss argument is mostly not. A look at what changes when you skip breakfast and ride.',
    readTime: 5,
    date: 'March 22, 2026',
    author: 'Marcus Chen',
  },
  {
    slug: 'sleep-and-vo2',
    category: 'Recovery',
    title: 'Sleep is the cheapest training adaptation',
    dek: 'The 2024 meta-analysis that pegged the cost of one bad night at roughly 4% of your VO2 max. And what to do about it.',
    readTime: 6,
    date: 'March 18, 2026',
    author: 'Sam Reyes',
  },
  {
    slug: 'lean-mass-after-40',
    category: 'Body Composition',
    title: 'Holding lean mass after 40',
    dek: 'You lose about 1% per year by default. Resistance training and adequate protein cover most of it. Here’s the floor for both.',
    readTime: 8,
    date: 'March 14, 2026',
    author: 'Dr. Lena Ortiz',
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getRelatedArticles(current: Article, limit = 3): Article[] {
  const sameCategory = ARTICLES.filter(
    (a) => a.slug !== current.slug && a.category === current.category,
  ).slice(0, 2);
  const fillers = ARTICLES.filter(
    (a) => a.slug !== current.slug && a.category !== current.category,
  ).slice(0, limit - sameCategory.length);
  return [...sameCategory, ...fillers].slice(0, limit);
}
