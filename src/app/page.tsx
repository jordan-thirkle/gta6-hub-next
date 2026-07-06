import { GT6_FACTS } from './gta6-facts';
import NewsletterForm from './newsletter-form';
import CountdownTimer from './countdown';
import LaunchWeekSchedule from './launch-week';
import AffiliateCard from '../components/affiliate-card';
import Link from 'next/link';

export default function Home() {
  const confirmed = GT6_FACTS.filter(f => f.factLevel === 'confirmed');
  return (
    <>
      {/* ═══ Hero Section — Vice City Night Skyline ═══ */}
      <section className="relative overflow-hidden text-center pt-16 pb-20 min-h-[80vh] flex flex-col justify-center">
        {/* Vice City skyline gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0015] via-[#1a0025] to-bg-dark pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/5 via-transparent to-neon-blue/5 pointer-events-none" />

        {/* Decorative neon glow orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-pink/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-neon-purple/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-neon-blue/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative mx-auto max-w-page px-4">
          {/* Neon "GTA 6 HUB" heading in Orbitron display font */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-wider text-gradient-vice animate-glow-pulse">
            GTA 6 HUB
          </h1>

          <p className="mt-4 text-lg md:text-xl text-text-muted font-light max-w-2xl mx-auto leading-relaxed">
            Countdown to Vice City. Confirmed facts only. Launching November 19, 2026.
          </p>

          {/* Glowing countdown timer with neon borders */}
          <div className="mt-10 inline-block neon-border rounded-xl p-6 md:p-8 bg-bg-dark/60 backdrop-blur-sm">
            <CountdownTimer />
          </div>

          {/* Neon pill indicators */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-text-muted">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neon-cyan/20 bg-neon-cyan/5">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse" />
              Vice City / Leonida
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neon-pink/20 bg-neon-pink/5">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-pink animate-pulse" />
              PS5 / Xbox Series X|S
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neon-blue/20 bg-neon-blue/5">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-pulse" />
              Lucia &amp; Jason
            </span>
          </div>
        </div>
      </section>

      {/* ═══ Confirmed Sources — Neon Cards ═══ */}
      <section className="py-14">
        <div className="mx-auto max-w-page px-4">
          <h2 className="font-display text-center text-lg text-neon-pink tracking-[0.15em] uppercase">
            <span className="inline-block border-b border-neon-pink/30 pb-2">Confirmed Sources</span>
          </h2>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {confirmed.map((item) => (
              <a
                key={item.id}
                href={item.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="neon-card group block rounded-lg p-5"
                aria-label={`${item.claim} — source: ${item.sourceName}`}
              >
                <p className="text-sm text-text-main leading-relaxed group-hover:text-neon-pink transition-colors">
                  {item.claim}
                </p>
                <p className="mt-3 text-[10px] text-text-muted font-mono tracking-wider uppercase">
                  {item.sourceName}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Feature Grid — Vice City Night Market ═══ */}
      <section className="py-14">
        <div className="mx-auto max-w-page px-4">
          <h2 className="font-display text-center text-lg text-neon-blue tracking-[0.15em] uppercase">
            <span className="inline-block border-b border-neon-blue/30 pb-2">Explore Vice City</span>
          </h2>
          <div className="mt-8 grid md:grid-cols-4 gap-5">
            <Link
              href="/news"
              className="neon-card group block rounded-lg p-5 text-center"
              aria-label="News — Latest updates from the streets"
            >
              <div className="text-3xl mb-3" aria-hidden="true">📰</div>
              <h3 className="text-sm font-medium text-text-main group-hover:text-neon-pink transition-colors">News</h3>
              <p className="text-[11px] text-text-muted mt-1.5 leading-relaxed">Latest updates from the streets</p>
            </Link>
            <Link
              href="/guides"
              className="neon-card group block rounded-lg p-5 text-center"
              aria-label="Guides — Strategies & walkthroughs"
            >
              <div className="text-3xl mb-3" aria-hidden="true">📖</div>
              <h3 className="text-sm font-medium text-text-main group-hover:text-neon-blue transition-colors">Guides</h3>
              <p className="text-[11px] text-text-muted mt-1.5 leading-relaxed">Strategies &amp; walkthroughs</p>
            </Link>
            <Link
              href="/articles"
              className="neon-card group block rounded-lg p-5 text-center"
              aria-label="Articles — Deep dives & analysis"
            >
              <div className="text-3xl mb-3" aria-hidden="true">📝</div>
              <h3 className="text-sm font-medium text-text-main group-hover:text-neon-purple transition-colors">Articles</h3>
              <p className="text-[11px] text-text-muted mt-1.5 leading-relaxed">Deep dives &amp; analysis</p>
            </Link>
            <Link
              href="/faq"
              className="neon-card group block rounded-lg p-5 text-center"
              aria-label="FAQ — Answers to burning questions"
            >
              <div className="text-3xl mb-3" aria-hidden="true">❓</div>
              <h3 className="text-sm font-medium text-text-main group-hover:text-neon-cyan transition-colors">FAQ</h3>
              <p className="text-[11px] text-text-muted mt-1.5 leading-relaxed">Answers to burning questions</p>
            </Link>
          </div>
          {/* Extended feature links for Map & Vehicles */}
          <div className="mt-4 grid md:grid-cols-2 gap-5">
            <Link
              href="/map"
              className="neon-card group block rounded-lg p-5 text-center"
              aria-label="Map — Interactive Vice City map"
            >
              <div className="text-3xl mb-3" aria-hidden="true">🗺️</div>
              <h3 className="text-sm font-medium text-text-main group-hover:text-neon-cyan transition-colors">Map</h3>
              <p className="text-[11px] text-text-muted mt-1.5 leading-relaxed">Interactive Vice City map</p>
            </Link>
            <Link
              href="/vehicles"
              className="neon-card group block rounded-lg p-5 text-center"
              aria-label="Vehicles — Full vehicle database"
            >
              <div className="text-3xl mb-3" aria-hidden="true">🚗</div>
              <h3 className="text-sm font-medium text-text-main group-hover:text-neon-pink transition-colors">Vehicles</h3>
              <p className="text-[11px] text-text-muted mt-1.5 leading-relaxed">Full vehicle database</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ Preorder & Partners ═══ */}
      <section className="py-14">
        <div className="mx-auto max-w-page px-4">
          <h2 className="font-display text-center text-lg text-neon-cyan tracking-[0.15em] uppercase">
            <span className="inline-block border-b border-neon-cyan/30 pb-2">Preorder &amp; Partners</span>
          </h2>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            <AffiliateCard
              title="Check current console deals"
              description="Best prices on PS5 and Xbox Series X|S bundles"
              price="$69.99+"
              href="/news"
              cta="View offers"
              badge="Partner offer"
              accent="pink"
            />
            <AffiliateCard
              title="Compare digital vs physical"
              description="Which format gives you the best value?"
              price="From $69.99"
              href="/guides"
              cta="Read guide"
              badge="Partner offer"
              accent="blue"
            />
            <AffiliateCard
              title="Edition breakdown"
              description="Standard, Deluxe, Ultimate, Collector compared"
              price="$69.99–$199.99"
              href="/articles/gta-6-preorder-editions-guide"
              cta="See editions"
              badge="Partner offer"
              accent="cyan"
            />
          </div>
          <div className="mt-8">
            <div className="border border-dashed border-border p-8 text-center text-[10px] text-tertiary font-mono">
              <span>Sponsor slot — wire TinyAdz / Carbon / custom placement</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Launch Week ═══ */}
      <section className="py-14">
        <div className="mx-auto max-w-page px-4">
          <div className="neon-border-blue rounded-lg overflow-hidden">
            <div className="bg-bg-dark/80 backdrop-blur-sm rounded-lg p-6 md:p-8">
              <LaunchWeekSchedule />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Newsletter ═══ */}
      <section className="py-14">
        <div className="mx-auto max-w-page px-4 text-center">
          <h2 className="font-display text-lg text-neon-purple tracking-[0.15em] uppercase">Launch Alerts</h2>
          <p className="mt-3 text-text-muted max-w-md mx-auto text-sm leading-relaxed">
            Get verified GTA 6 updates every week. No rumors, no spam — just the neon truth.
          </p>
          <div className="mt-6 inline-block">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  );
}
