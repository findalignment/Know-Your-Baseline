import Link from 'next/link';

type Article = {
  slug: string;
  category: string;
  title: string;
  dek: string;
  readTime: number;
  date: string;
  author: string;
  featured?: boolean;
};

const CATEGORIES = [
  'VO2 Max',
  'Metabolism',
  'Body Composition',
  'Training',
  'Recovery',
] as const;

const ARTICLES: Article[] = [
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

function Placeholder({
  caption,
  ratio = '16/9',
}: {
  caption: string;
  ratio?: string;
}) {
  const stripeColor = 'rgba(10,10,10,0.05)';
  const bgColor = '#EFEFE9';
  const textColor = 'rgba(10,10,10,0.45)';
  return (
    <div
      className="kyb-placeholder"
      style={{
        aspectRatio: ratio,
        background: `repeating-linear-gradient(135deg, ${bgColor} 0 14px, ${stripeColor} 14px 15px)`,
        color: textColor,
      }}
    >
      <span className="kyb-placeholder-caption">{caption}</span>
    </div>
  );
}

function Nav() {
  return (
    <header className="kyb-nav" role="banner">
      <div className="kyb-nav-inner">
        <Link href="/" className="kyb-logo" aria-label="Know Your Baseline home">
          <span className="kyb-logo-mark" aria-hidden="true" />
          <span className="kyb-logo-text">Know Your Baseline</span>
        </Link>
        <nav className="kyb-nav-links" aria-label="Categories">
          {CATEGORIES.map((c) => (
            <Link
              key={c}
              href={`/category/${encodeURIComponent(c)}`}
              className="kyb-nav-link"
            >
              {c}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <Link className="kyb-card" href={`/article/${article.slug}`}>
      <div className="kyb-card-media">
        <Placeholder
          caption={`fig — ${article.category.toLowerCase()}`}
          ratio="4/3"
        />
      </div>
      <div className="kyb-card-body">
        <div className="kyb-meta">
          <span className="kyb-cat">{article.category}</span>
          <span className="kyb-dot" aria-hidden="true">·</span>
          <span>{article.readTime} min</span>
        </div>
        <h3 className="kyb-card-title">{article.title}</h3>
        <p className="kyb-card-dek">{article.dek}</p>
      </div>
    </Link>
  );
}

function ArticleRow({ article }: { article: Article }) {
  return (
    <li className="kyb-row">
      <Link className="kyb-row-link" href={`/article/${article.slug}`}>
        <div className="kyb-row-main">
          <div className="kyb-meta">
            <span className="kyb-cat">{article.category}</span>
            <span className="kyb-dot" aria-hidden="true">·</span>
            <time>{article.date}</time>
            <span className="kyb-dot" aria-hidden="true">·</span>
            <span>{article.readTime} min</span>
          </div>
          <h3 className="kyb-row-title">{article.title}</h3>
          <p className="kyb-row-dek">{article.dek}</p>
        </div>
        <div className="kyb-row-arrow" aria-hidden="true">→</div>
      </Link>
    </li>
  );
}

function EditorialFooter() {
  return (
    <footer className="kyb-footer" role="contentinfo">
      <div className="kyb-footer-inner">
        <div className="kyb-footer-brand">
          <span className="kyb-logo-mark" aria-hidden="true" />
          <span>Know Your Baseline</span>
        </div>
        <div className="kyb-footer-cols">
          <div>
            <div className="kyb-footer-h">Categories</div>
            <ul>
              {CATEGORIES.map((c) => (
                <li key={c}>
                  <Link href={`/category/${encodeURIComponent(c)}`}>{c}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="kyb-footer-h">Get tested</div>
            <ul>
              <li>
                <a href="https://fitevals.com" rel="noopener">
                  fitevals.com
                </a>
              </li>
              <li>
                <a href="https://fitevals.com#book" rel="noopener">
                  Book an assessment
                </a>
              </li>
              <li>
                <span className="kyb-muted">Santa Cruz, California</span>
              </li>
            </ul>
          </div>
          <div>
            <div className="kyb-footer-h">About</div>
            <ul>
              <li>
                <Link href="/about">Editorial standards</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <span className="kyb-muted">© 2026 Know Your Baseline</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  const featured = ARTICLES.find((a) => a.featured) ?? ARTICLES[0];
  const rest = ARTICLES.filter((a) => a.slug !== featured.slug);
  const latest = rest.slice(0, 3);

  return (
    <div className="kyb-root">
      <Nav />

      <main className="kyb-main">
        <section className="kyb-hero" aria-label="Featured article">
          <Link className="kyb-hero-link" href={`/article/${featured.slug}`}>
            <div className="kyb-hero-media">
              <Placeholder caption="hero — VO2 mask + treadmill" ratio="16/9" />
            </div>
            <div className="kyb-hero-body">
              <div className="kyb-meta">
                <span className="kyb-cat">{featured.category}</span>
                <span className="kyb-dot" aria-hidden="true">·</span>
                <span>{featured.readTime} min read</span>
              </div>
              <h1 className="kyb-hero-title">{featured.title}</h1>
              <p className="kyb-hero-dek">{featured.dek}</p>
              <div className="kyb-byline">
                <span>{featured.author}</span>
                <span className="kyb-dot" aria-hidden="true">·</span>
                <time>{featured.date}</time>
              </div>
            </div>
          </Link>
        </section>

        <section className="kyb-section" aria-label="Latest">
          <div className="kyb-section-head">
            <h2 className="kyb-section-title">Latest</h2>
            <span className="kyb-section-count">
              {ARTICLES.length} articles
            </span>
          </div>
          <div className="kyb-grid">
            {latest.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </section>

        {CATEGORIES.map((cat) => {
          const inCat = rest.filter((a) => a.category === cat);
          if (inCat.length === 0) return null;
          return (
            <section key={cat} className="kyb-section" aria-label={cat}>
              <div className="kyb-section-head">
                <h2 className="kyb-section-title">{cat}</h2>
                <Link
                  className="kyb-section-link"
                  href={`/category/${encodeURIComponent(cat)}`}
                >
                  See all →
                </Link>
              </div>
              <ul className="kyb-list">
                {inCat.map((a) => (
                  <ArticleRow key={a.slug} article={a} />
                ))}
              </ul>
            </section>
          );
        })}
      </main>

      <EditorialFooter />
    </div>
  );
}
