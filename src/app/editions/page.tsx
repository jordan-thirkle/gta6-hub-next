import type { Metadata } from 'next';
import Link from 'next/link';
import { HiCheck, HiX, HiShoppingCart, HiArrowRight } from 'react-icons/hi';

export const metadata: Metadata = {
  title: 'GTA 6 Editions Comparison',
  description: 'Compare all four GTA 6 editions side-by-side: Standard, Deluxe, Ultimate, and Collector\'s Edition. See pricing, inclusions, and find the best value for your preorder.',
  openGraph: {
    title: 'GTA 6 Editions Comparison — Which Should You Preorder?',
    description: 'Standard ($69.99) vs Deluxe ($79.99) vs Ultimate ($99.99) vs Collector\'s ($199.99). Every inclusion compared.',
  },
};

interface Edition {
  name: string;
  price: string;
  color: string;
  badge?: string;
  description: string;
  features: { name: string; included: boolean | string }[];
  pros: string[];
  bestFor: string;
  affiliateUrl: string;
}

const EDITIONS: Edition[] = [
  {
    name: 'Standard',
    price: '$69.99',
    color: 'from-neon-blue/20 to-transparent border-neon-blue/30',
    description: 'The base game, everything you need to play GTA 6 at launch.',
    features: [
      { name: 'Base Game', included: true },
      { name: 'Preorder Bonus Content', included: true },
      { name: 'GTA$100,000 Online Bonus', included: true },
      { name: 'Digital Art Book', included: false },
      { name: 'Soundtrack Access', included: false },
      { name: 'GTA+ Subscription', included: false },
      { name: 'Steelbook Case', included: false },
      { name: 'Cloth Map', included: false },
      { name: 'Collectible Prints', included: false },
    ],
    pros: ['Lowest price', 'All gameplay content included', 'Available digital & physical'],
    bestFor: 'Players who just want the game with no extras.',
    affiliateUrl: 'https://www.amazon.com/s?k=gta+6+standard+preorder',
  },
  {
    name: 'Deluxe',
    price: '$79.99',
    color: 'from-neon-purple/20 to-transparent border-neon-purple/30',
    badge: 'POPULAR',
    description: 'Base game plus digital extras for the dedicated fan.',
    features: [
      { name: 'Base Game', included: true },
      { name: 'Preorder Bonus Content', included: true },
      { name: 'GTA$100,000 Online Bonus', included: true },
      { name: 'Digital Art Book', included: true },
      { name: 'Soundtrack Access', included: true },
      { name: 'Bonus In-game Items', included: true },
      { name: 'GTA+ Subscription', included: false },
      { name: 'Steelbook Case', included: false },
      { name: 'Collectible Prints', included: false },
    ],
    pros: ['Digital art book + soundtrack', 'Bonus in-game items', 'Best value for digital buyers'],
    bestFor: 'Fans who want digital extras without the full premium price.',
    affiliateUrl: 'https://www.amazon.com/s?k=gta+6+deluxe+preorder',
  },
  {
    name: 'Ultimate',
    price: '$99.99',
    color: 'from-neon-pink/20 to-transparent border-neon-pink/30',
    badge: 'BEST VALUE',
    description: 'Everything in Deluxe plus 12 months of GTA+ — the complete package.',
    features: [
      { name: 'Base Game', included: true },
      { name: 'Preorder Bonus Content', included: true },
      { name: 'GTA$100,000 Online Bonus', included: true },
      { name: 'Digital Art Book', included: true },
      { name: 'Soundtrack Access', included: true },
      { name: 'Bonus In-game Items', included: true },
      { name: 'GTA+ Subscription (12 mo)', included: true },
      { name: 'Exclusive Vehicle Access', included: true },
      { name: 'Member-only Events', included: true },
    ],
    pros: ['12 months GTA+ ($59 value)', 'All digital bonuses', 'Best long-term value for Online players'],
    bestFor: 'Players planning to dive into GTA Online at launch.',
    affiliateUrl: 'https://www.amazon.com/s?k=gta+6+ultimate+preorder',
  },
  {
    name: "Collector's",
    price: '$199.99',
    color: 'from-neon-cyan/20 to-transparent border-neon-cyan/30',
    badge: 'LIMITED',
    description: 'Ultimate digital content plus exclusive physical collectibles. Limited production run.',
    features: [
      { name: 'Base Game', included: true },
      { name: 'Preorder Bonus Content', included: true },
      { name: 'GTA$100,000 Online Bonus', included: true },
      { name: 'Digital Art Book', included: true },
      { name: 'Soundtrack Access', included: true },
      { name: 'GTA+ Subscription (12 mo)', included: true },
      { name: 'Steelbook Case', included: true },
      { name: 'Cloth Map of Vice City', included: true },
      { name: 'Collectible Art Prints', included: '5 prints' },
      { name: 'Metal Keychain', included: true },
      { name: 'Numbered Certificate', included: true },
    ],
    pros: ['All digital content', 'Exclusive physical collectibles', 'Investment value (limited run)'],
    bestFor: 'Hardcore collectors and GTA superfans.',
    affiliateUrl: 'https://www.amazon.com/s?k=gta+6+collectors+edition',
  },
];

const FEATURE_NAMES = EDITIONS[0].features.map(f => f.name);

export default function EditionsPage() {
  return (
    <main className="mx-auto max-w-page px-4 py-24 min-h-screen">
      {/* Hero */}
      <header className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-pink/20 bg-neon-pink/5 text-neon-pink text-xs font-mono tracking-wider mb-4">
          <HiShoppingCart size={14} /> PREORDER GUIDE
        </div>
        <h1 className="font-display text-4xl md:text-5xl text-gradient-vice mb-3">
          GTA 6 Editions Comparison
        </h1>
        <p className="text-text-muted max-w-xl mx-auto">
          Four editions, one choice. Compare Standard, Deluxe, Ultimate, and Collector&apos;s Edition 
          to find the perfect preorder for your style and budget.
        </p>
      </header>

      {/* Cards */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
        {EDITIONS.map((ed) => (
          <div
            key={ed.name}
            className={`neon-card rounded-xl p-6 border bg-gradient-to-b ${ed.color} relative flex flex-col`}
          >
            {ed.badge && (
              <span className={`absolute -top-2.5 right-4 px-3 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider ${
                ed.badge === 'BEST VALUE' 
                  ? 'bg-neon-pink text-white' 
                  : ed.badge === 'LIMITED'
                  ? 'bg-neon-cyan text-black'
                  : 'bg-neon-purple text-white'
              }`}>
                {ed.badge}
              </span>
            )}

            <h2 className="font-display text-xl mb-1">{ed.name}</h2>
            <div className="text-3xl font-display font-bold mb-2">{ed.price}</div>
            <p className="text-xs text-text-muted mb-4">{ed.description}</p>

            {/* Features */}
            <ul className="space-y-2 mb-6 flex-1">
              {ed.features.map((f) => (
                <li key={f.name} className="flex items-center gap-2 text-xs">
                  {f.included === true ? (
                    <HiCheck className="text-neon-cyan shrink-0" size={14} />
                  ) : f.included === false ? (
                    <HiX className="text-text-muted/30 shrink-0" size={14} />
                  ) : (
                    <span className="text-[10px] text-neon-pink font-mono shrink-0 w-4 text-center">✓</span>
                  )}
                  <span className={f.included ? 'text-text-main' : 'text-text-muted/40'}>
                    {f.name}
                    {typeof f.included === 'string' && (
                      <span className="text-neon-pink ml-1">({f.included})</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>

            {/* Best for */}
            <p className="text-[11px] text-text-muted/60 italic mb-4">{ed.bestFor}</p>

            {/* CTA */}
            <a
              href={ed.affiliateUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-neon-pink text-white text-sm font-semibold hover:bg-neon-pink/80 transition-colors"
            >
              Preorder {ed.name} <HiArrowRight size={14} />
            </a>
          </div>
        ))}
      </section>

      {/* Comparison Table */}
      <section className="mb-20">
        <h2 className="font-display text-2xl text-center mb-8 text-gradient-vice">Full Feature Comparison</h2>
        <div className="overflow-x-auto neon-card rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="p-4 text-left font-display text-text-muted">Feature</th>
                {EDITIONS.map(ed => (
                  <th key={ed.name} className="p-4 text-center font-display min-w-[120px]">{ed.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {FEATURE_NAMES.map((featureName, i) => (
                <tr key={featureName} className={i % 2 === 1 ? 'bg-white/[0.02]' : ''}>
                  <td className="p-4 text-text-muted border-r border-border">{featureName}</td>
                  {EDITIONS.map(ed => {
                    const feat = ed.features.find(f => f.name === featureName);
                    return (
                      <td key={ed.name} className="p-4 text-center">
                        {feat?.included === true ? (
                          <HiCheck className="inline text-neon-cyan" size={16} />
                        ) : feat?.included === false ? (
                          <HiX className="inline text-text-muted/20" size={16} />
                        ) : (
                          <span className="text-neon-pink text-xs font-mono">{feat?.included}</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Value Analysis */}
      <section className="max-w-2xl mx-auto text-center">
        <div className="neon-card rounded-xl p-8 border border-border">
          <h2 className="font-display text-xl mb-4 text-gradient-vice">Which Edition Should You Buy?</h2>
          <div className="space-y-4 text-left">
            {[
              { title: 'Casual Player → Standard ($69.99)', desc: 'If you only play single-player campaigns and aren\'t interested in GTA Online extras, the Standard edition is all you need.' },
              { title: 'Digital Fan → Deluxe ($79.99)', desc: 'The $10 upgrade gets you a digital art book, soundtrack access, and bonus in-game items. Best value for digital-only buyers.' },
              { title: 'Online Player → Ultimate ($99.99)', desc: '12 months of GTA+ ($59 value) plus all Deluxe bonuses. If you plan to play GTA Online, this pays for itself.' },
              { title: 'Collector → Collector\'s ($199.99)', desc: 'Limited production run. If you want physical memorabilia and think it might appreciate in value, secure this while available.' },
            ].map((item) => (
              <div key={item.title} className="border-l-2 border-neon-pink/30 pl-4">
                <h3 className="font-display text-sm font-semibold mb-1">{item.title}</h3>
                <p className="text-xs text-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
