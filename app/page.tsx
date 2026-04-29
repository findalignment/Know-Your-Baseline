import Link from 'next/link';
import { ARTICLES, CATEGORIES } from '@/lib/articles';
import {
  ArticleCard,
  ArticleRow,
  EditorialFooter,
  Nav,
  Placeholder,
} from '@/components/editorial';

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
            <span className="kyb-section-count">{ARTICLES.length} articles</span>
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
