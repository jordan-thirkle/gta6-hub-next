import Link from 'next/link';
import { ARTICLES } from './data';
import NewsletterForm from '../newsletter-form';
import { GallerySection } from '../media';

const standaloneArticles = [
  { slug: 'trailer-breakdown', title: 'GTA 6 Trailer Breakdown: Every Official Detail Confirmed', summary: 'Both official trailers analyzed with embedded video. Every confirmed detail from Trailer 1 and 2.' },
  { slug: 'protagonists-detailed', title: 'GTA 6 Protagonists: Lucia and Jason — Everything Confirmed', summary: 'In-depth look at Lucia and Jason, the lead protagonists of Grand Theft Auto VI.' },
];

export default function ArticlesPage() {
  return (
    <div className="py-12">
      <h1 className="text-3xl md:text-4xl tracking-tight">Articles</h1>
      <p className="mt-2 text-secondary">In-depth guides, breakdowns, and analysis for GTA 6.</p>

      <GallerySection title="Featured Media Articles">
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          {standaloneArticles.map((a) => (
            <Link key={a.slug} href={`/articles/${a.slug}`} className="group block border border-border p-6 hover:border-border-strong transition-all">
              <h2 className="text-sm font-medium">{a.title}</h2>
              <p className="mt-2 text-xs text-secondary">{a.summary}</p>
              <span className="mt-3 inline-block text-[10px] underline">Read article with video</span>
            </Link>
          ))}
        </div>
      </GallerySection>

      <GallerySection title="All Articles">
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {ARTICLES.map((article) => (
            <Link key={article.id} href={`/articles/${article.slug}`} className="group block border border-border p-4 hover:border-border-strong transition-all">
              <h2 className="text-sm font-medium">{article.title}</h2>
              <p className="mt-2 text-xs text-secondary">{article.summary}</p>
              <span className="mt-3 inline-block text-[10px] underline">Read</span>
            </Link>
          ))}
        </div>
      </GallerySection>

      <div className="mt-10">
        <NewsletterForm />
      </div>
    </div>
  );
}
