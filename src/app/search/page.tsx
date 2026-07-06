import { search, SearchResult } from '../../lib/search-index';
import type { Metadata } from 'next';
import Link from 'next/link';
import { HiSearch, HiArrowRight } from 'react-icons/hi';

export const metadata: Metadata = {
  title: 'Search GTA 6 Hub',
  description: 'Search articles, vehicles, guides, and facts about Grand Theft Auto VI.',
  robots: { index: false, follow: true },
};

const TYPE_COLORS: Record<string, string> = {
  article: 'text-neon-pink border-neon-pink/30 bg-neon-pink/10',
  vehicle: 'text-neon-cyan border-neon-cyan/30 bg-neon-cyan/10',
  guide: 'text-neon-purple border-neon-purple/30 bg-neon-purple/10',
  faq: 'text-neon-blue border-neon-blue/30 bg-neon-blue/10',
};

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const query = searchParams?.q || '';
  const results: SearchResult[] = query ? search(query) : [];

  return (
    <main className="mx-auto max-w-page px-4 py-24 min-h-screen">
      {/* Header */}
      <header className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-pink/20 bg-neon-pink/5 text-neon-pink text-xs font-mono tracking-wider mb-4">
          <HiSearch size={14} /> SEARCH
        </div>
        <h1 className="font-display text-4xl md:text-5xl text-gradient-vice mb-3">
          Find GTA 6 Info
        </h1>
        <p className="text-text-muted max-w-md mx-auto">
          Search articles, vehicles, guides, and confirmed facts.
        </p>
      </header>

      {/* Search Form */}
      <form className="max-w-2xl mx-auto mb-12" method="GET" action="/search">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue rounded-xl blur opacity-30 group-focus-within:opacity-70 transition-opacity" />
          <div className="relative flex items-center">
            <HiSearch size={20} className="absolute left-5 text-text-muted pointer-events-none" />
            <input
              type="text"
              name="q"
              defaultValue={query}
              placeholder="Search articles, vehicles, guides..."
              autoFocus
              className="w-full pl-12 pr-6 py-4 rounded-xl bg-bg-surface border border-border text-text-main placeholder:text-text-muted/40 font-display text-lg focus:outline-none focus:border-neon-pink/50 transition-colors"
              aria-label="Search GTA 6 Hub"
            />
            <button
              type="submit"
              className="absolute right-2 px-5 py-2 rounded-lg bg-neon-pink text-white text-sm font-semibold hover:bg-neon-pink/80 transition-colors"
            >
              Search
            </button>
          </div>
        </div>
      </form>

      {/* Results */}
      {query && (
        <section className="max-w-3xl mx-auto">
          <p className="text-text-muted text-sm mb-6 font-mono">
            {results.length === 0
              ? `No results for "${query}"`
              : `${results.length} result${results.length === 1 ? '' : 's'} for "${query}"`}
          </p>

          {results.length === 0 ? (
            <div className="text-center py-20">
              <HiSearch size={48} className="mx-auto text-text-muted/20 mb-4" />
              <h2 className="font-display text-xl text-text-muted mb-2">No matches found</h2>
              <p className="text-text-muted/60 text-sm max-w-sm mx-auto">
                Try a different search term, or browse our{' '}
                <Link href="/articles" className="text-neon-pink hover:underline">articles</Link>
                ,{' '}
                <Link href="/vehicles" className="text-neon-cyan hover:underline">vehicles</Link>
                , or{' '}
                <Link href="/guides" className="text-neon-purple hover:underline">guides</Link>.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {results.map((r, i) => (
                <Link
                  key={`${r.type}-${r.url}-${i}`}
                  href={r.url}
                  className="group block neon-card rounded-xl p-5 hover:border-neon-pink/30 transition-all"
                >
                  <div className="flex items-start gap-4">
                    {/* Type badge */}
                    <span className={`shrink-0 mt-0.5 text-[10px] font-mono font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border ${TYPE_COLORS[r.type] || ''}`}>
                      {r.type}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-display text-base text-text-main group-hover:text-neon-pink transition-colors">
                        {r.title}
                      </h3>
                      <p className="text-sm text-text-muted/70 mt-1 line-clamp-2">
                        {r.description}
                      </p>
                    </div>
                    <HiArrowRight size={16} className="shrink-0 mt-1.5 text-text-muted/30 group-hover:text-neon-pink transition-colors" />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      )}

      {/* Empty state (no query) */}
      {!query && (
        <section className="max-w-xl mx-auto text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: 'Articles', href: '/articles', color: 'border-neon-pink/30 text-neon-pink' },
              { label: 'Vehicles', href: '/vehicles', color: 'border-neon-cyan/30 text-neon-cyan' },
              { label: 'Guides', href: '/guides', color: 'border-neon-purple/30 text-neon-purple' },
              { label: 'FAQ', href: '/faq', color: 'border-neon-blue/30 text-neon-blue' },
            ].map(cat => (
              <Link
                key={cat.label}
                href={cat.href}
                className={`neon-card rounded-xl p-6 text-center border ${cat.color} hover:bg-surface/50 transition-all`}
              >
                <span className="font-display text-lg">{cat.label}</span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
