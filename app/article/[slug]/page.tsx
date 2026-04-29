import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ARTICLES,
  getArticle,
  getRelatedArticles,
  type Article,
} from '@/lib/articles';
import { getArticleBody } from '@/lib/article-bodies';
import {
  ArticleRow,
  CtaModule,
  EditorialFooter,
  Nav,
  PercentileChart,
  Placeholder,
} from '@/components/editorial';
import ProgressBar from '@/components/ProgressBar';

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: 'Article not found | Know Your Baseline' };
  return {
    title: `${article.title} | Know Your Baseline`,
    description: article.dek,
    openGraph: {
      title: article.title,
      description: article.dek,
      type: 'article',
      authors: [article.author],
      publishedTime: article.date,
    },
  };
}

function ArticleHead({ article }: { article: Article }) {
  return (
    <header className="kyb-article-head">
      <div className="kyb-meta">
        <Link
          className="kyb-cat"
          href={`/category/${encodeURIComponent(article.category)}`}
        >
          {article.category}
        </Link>
        <span className="kyb-dot" aria-hidden="true">·</span>
        <span>{article.readTime} min read</span>
      </div>
      <h1 className="kyb-article-title">{article.title}</h1>
      <p className="kyb-article-dek">{article.dek}</p>
      <div className="kyb-byline kyb-byline-lg">
        <span>By {article.author}</span>
        <span className="kyb-dot" aria-hidden="true">·</span>
        <time>{article.date}</time>
      </div>
    </header>
  );
}

function RelatedArticles({ current }: { current: Article }) {
  const list = getRelatedArticles(current, 3);
  if (list.length === 0) return null;
  return (
    <section className="kyb-related" aria-label="Keep reading">
      <div className="kyb-section-head">
        <h2 className="kyb-section-title">Keep reading</h2>
      </div>
      <ul className="kyb-list">
        {list.map((a) => (
          <ArticleRow key={a.slug} article={a} />
        ))}
      </ul>
    </section>
  );
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const body = getArticleBody(slug);

  return (
    <div className="kyb-root">
      <Nav activeCategory={article.category} />
      <ProgressBar />

      <main className="kyb-article-main kyb-article-w-md">
        <article className="kyb-article">
          <ArticleHead article={article} />

          <div className="kyb-article-hero">
            <Placeholder
              caption={`lead image — ${article.category.toLowerCase()}`}
              ratio="16/9"
            />
          </div>

          {body ? (
            <div className="kyb-article-body">
              {body.map((b, i) => {
                if (b.type === 'p') return <p key={i}>{b.text}</p>;
                if (b.type === 'h2') return <h2 key={i}>{b.text}</h2>;
                if (b.type === 'pullquote')
                  return (
                    <blockquote key={i} className="kyb-pullquote">
                      <p>{b.text}</p>
                    </blockquote>
                  );
                if (b.type === 'chart') return <PercentileChart key={i} />;
                return null;
              })}
            </div>
          ) : (
            <div className="kyb-article-body">
              <p className="kyb-stub-note">
                <em>Draft in progress.</em> This piece is part of the launch
                slate — the full text will publish soon.
              </p>
            </div>
          )}

          <CtaModule />
          <RelatedArticles current={article} />
        </article>
      </main>

      <EditorialFooter />
    </div>
  );
}
