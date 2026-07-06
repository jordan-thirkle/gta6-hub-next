import Link from 'next/link';
import { ARTICLES } from '../app/articles/data';
import { HiTrendingUp, HiArrowRight } from 'react-icons/hi';

const TRENDING_SLUGS = [
  'gta-6-launch-date-november-19-2026',
  'gta-6-preorder-editions-guide',
  'gta-6-protagonists-lucia-jason',
  'gta-6-platforms-ps5-xbox-series',
  'gta-6-setting-vice-city-leonida',
  'gta-6-trailer-breakdown',
];

export default function TrendingWidget() {
  const trending = TRENDING_SLUGS
    .map(slug => ARTICLES.find(a => a.slug === slug))
    .filter(Boolean);

  return (
    <div className="neon-card rounded-xl p-5 border border-border">
      <div className="flex items-center gap-2 mb-4">
        <HiTrendingUp className="text-neon-pink" size={18} />
        <h3 className="font-display text-sm font-semibold">Trending Now</h3>
      </div>

      <div className="space-y-3">
        {trending.map((article, i) => article && (
          <Link
            key={article.slug}
            href={`/articles/${article.slug}`}
            className="group flex items-start gap-3"
          >
            <span className="shrink-0 w-5 h-5 rounded bg-neon-pink/10 text-neon-pink text-[10px] font-mono font-bold flex items-center justify-center">
              {i + 1}
            </span>
            <div className="min-w-0">
              <p className="text-xs text-text-main group-hover:text-neon-pink transition-colors line-clamp-2 leading-relaxed">
                {article.title}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <Link
        href="/articles"
        className="mt-4 inline-flex items-center gap-1 text-[11px] text-text-muted hover:text-neon-pink transition-colors font-mono"
      >
        All articles <HiArrowRight size={12} />
      </Link>
    </div>
  );
}
