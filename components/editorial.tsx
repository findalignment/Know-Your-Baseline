import Link from 'next/link';
import type { Article } from '@/lib/articles';
import { CATEGORIES } from '@/lib/articles';

export function Placeholder({
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

export function Nav({ activeCategory }: { activeCategory?: string }) {
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
              className={'kyb-nav-link' + (activeCategory === c ? ' is-active' : '')}
            >
              {c}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function EditorialFooter() {
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

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link className="kyb-card" href={`/article/${article.slug}`}>
      <div className="kyb-card-media">
        <Placeholder caption={`fig — ${article.category.toLowerCase()}`} ratio="4/3" />
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

export function ArticleRow({ article }: { article: Article }) {
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
        <div className="kyb-row-arrow" aria-hidden="true">
          →
        </div>
      </Link>
    </li>
  );
}

export function CtaModule() {
  return (
    <aside className="kyb-cta" aria-label="Get tested in Santa Cruz">
      <div className="kyb-cta-eyebrow">Santa Cruz, CA</div>
      <h3 className="kyb-cta-title">Know your actual numbers.</h3>
      <p className="kyb-cta-body">
        VO2 max, RMR, and DEXA — measured in one 90-minute visit. Walk out with
        a report you can actually use.
      </p>
      <a className="kyb-cta-button" href="https://fitevals.com" rel="noopener">
        Book at fitevals.com <span aria-hidden="true">→</span>
      </a>
    </aside>
  );
}

export function PercentileChart() {
  const ages = ['20s', '30s', '40s', '50s', '60s', '70s'];
  const bands = [
    { label: 'Elite (95th)', values: [60, 56, 52, 48, 44, 39], color: 'var(--accent)' },
    { label: 'Good (75th)', values: [50, 46, 42, 38, 34, 30], color: 'var(--ink-70)' },
    { label: 'Average (50th)', values: [42, 38, 35, 31, 27, 24], color: 'var(--ink-40)' },
    { label: 'Poor (25th)', values: [34, 31, 28, 25, 22, 19], color: 'var(--ink-20)' },
  ];

  const W = 640,
    H = 320,
    padL = 44,
    padR = 16,
    padT = 16,
    padB = 36;
  const xMax = ages.length - 1;
  const yMax = 65;
  const x = (i: number) => padL + (i / xMax) * (W - padL - padR);
  const y = (v: number) => padT + (1 - v / yMax) * (H - padT - padB);

  return (
    <figure className="kyb-figure">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="kyb-chart"
        role="img"
        aria-label="VO2 max percentiles by age"
      >
        {[20, 30, 40, 50, 60].map((v) => (
          <g key={v}>
            <line x1={padL} x2={W - padR} y1={y(v)} y2={y(v)} stroke="var(--rule)" strokeWidth="1" />
            <text
              x={padL - 8}
              y={y(v) + 4}
              fontSize="11"
              textAnchor="end"
              fill="var(--ink-50)"
              fontFamily="var(--font-mono)"
            >
              {v}
            </text>
          </g>
        ))}
        {ages.map((a, i) => (
          <text
            key={a}
            x={x(i)}
            y={H - 12}
            fontSize="11"
            textAnchor="middle"
            fill="var(--ink-50)"
            fontFamily="var(--font-mono)"
          >
            {a}
          </text>
        ))}
        {bands.map((b) => (
          <g key={b.label}>
            <polyline
              fill="none"
              stroke={b.color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              points={b.values.map((v, i) => `${x(i)},${y(v)}`).join(' ')}
            />
            {b.values.map((v, i) => (
              <circle
                key={i}
                cx={x(i)}
                cy={y(v)}
                r="3"
                fill="var(--paper)"
                stroke={b.color}
                strokeWidth="2"
              />
            ))}
          </g>
        ))}
      </svg>
      <figcaption className="kyb-figcaption">
        <span className="kyb-fig-legend">
          {bands.map((b) => (
            <span key={b.label} className="kyb-fig-legend-item">
              <span className="kyb-fig-swatch" style={{ background: b.color }} />
              {b.label}
            </span>
          ))}
        </span>
        <span>
          VO2 max percentiles by age, men (mL/kg/min). Source: Cooper Institute
          longitudinal data.
        </span>
      </figcaption>
    </figure>
  );
}
