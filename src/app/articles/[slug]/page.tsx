import { ARTICLES } from '../data';
import { ARTICLE_CONTENT } from '../content';
import { REMAINING_CONTENT } from '../remaining-content';
import { GT6_FACTS } from '../../gta6-facts';

const ALL_CONTENT = { ...ARTICLE_CONTENT, ...REMAINING_CONTENT };
import NewsletterForm from '../../newsletter-form';
import ShareButtons from '../../../components/share-buttons';
import Comments from '../../../components/comments';
import TrendingWidget from '../../../components/trending-widget';
import Breadcrumbs from '../../../components/breadcrumbs';
import Link from 'next/link';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = ARTICLES.find((a) => a.slug === params.slug);
  return {
    title: article ? `${article.title} | GTA 6 Hub` : 'Article | GTA 6 Hub',
    description: article?.summary,
    openGraph: {
      title: article?.title,
      description: article?.summary,
      type: 'article',
      publishedTime: '2026-07-03',
      authors: ['GTA 6 Hub'],
    },
    other: {
      'article:published_time': '2026-07-03',
      'article:author': 'GTA 6 Hub',
    },
  };
}

export default async function ArticlePage(props: { params: { slug: string } }) {
  const article = ARTICLES.find((a) => a.slug === props.params.slug);
  if (!article) {
    return (
      <div className="py-12">
        <h1 className="text-2xl">Article not found</h1>
        <Link href="/articles" className="mt-4 block text-xs underline">Back to articles</Link>
      </div>
    );
  }

  const facts = GT6_FACTS.filter((f) => article.factIds.includes(f.id));
  const contentData = ALL_CONTENT[article.id];
  const relatedArticles = contentData?.relatedSlugs
    ? ARTICLES.filter((a) => contentData.relatedSlugs.includes(a.slug))
    : [];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.summary,
    datePublished: '2026-07-03',
    author: { '@type': 'Organization', name: 'GTA 6 Hub' },
  };

  return (
    <div className="py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumbs items={[
        { label: 'Articles', href: '/articles' },
        { label: article.title },
      ]} />
      <Link href="/articles" className="text-xs text-tertiary underline">&larr; All articles</Link>
      <h1 className="mt-6 text-3xl md:text-4xl tracking-tight">{article.title}</h1>
      <p className="mt-3 text-secondary leading-relaxed">{article.summary}</p>

      <ShareButtons title={article.title} description={article.summary} className="mt-4" />

      {/* Expanded article body */}
      {contentData?.body && (
        <div className="mt-8 space-y-4 text-sm text-secondary leading-relaxed">
          {contentData.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      )}

      {!contentData && (
        <div className="mt-8 p-4 border border-dashed border-border">
          <p className="text-xs text-tertiary font-mono">Full article content coming soon. Check back for expanded coverage.</p>
        </div>
      )}

      {/* Sources / facts */}
      {facts.length > 0 && (
        <>
          <h2 className="mt-10 text-base font-medium border-b border-border pb-2">Sources</h2>
          <div className="mt-4 space-y-3">
            {facts.map((f) => (
              <div key={f.id} className="border border-border p-4">
                <p className="text-sm">{f.claim}</p>
                <a href={f.sourceUrl} target="_blank" rel="noreferrer" className="text-[10px] text-tertiary font-mono underline">{f.sourceName}</a>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Internal linking */}
      {relatedArticles.length > 0 && (
        <>
          <h2 className="mt-10 text-base font-medium border-b border-border pb-2">Related Articles</h2>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            {relatedArticles.map((ra) => (
              <Link key={ra.id} href={`/articles/${ra.slug}`} className="block border border-border p-4 hover:border-border-strong transition-all">
                <h3 className="text-sm font-medium">{ra.title}</h3>
                <p className="text-xs text-secondary mt-1">{ra.summary}</p>
                <span className="mt-2 inline-block text-[10px] underline">Read</span>
              </Link>
            ))}
          </div>
        </>
      )}

      <div className="mt-10">
        <NewsletterForm />
      </div>
      <div className="mt-8">
        <TrendingWidget />
      </div>
      <Comments articleSlug={props.params.slug} />
    </div>
  );
}
