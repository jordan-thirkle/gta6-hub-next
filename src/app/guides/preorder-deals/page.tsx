import type { Metadata } from 'next';
import Link from 'next/link';
import NewsletterForm from '../../newsletter-form';

const retailers = [
  { name: 'PlayStation Store', type: 'Digital', platform: 'PS5', bonus: 'Standard preorder bonuses', url: '/' },
  { name: 'Xbox Store', type: 'Digital', platform: 'Series X|S', bonus: 'Standard preorder bonuses', url: '/' },
  { name: 'Amazon', type: 'Physical & Digital', platform: 'Both', bonus: 'Release-day delivery (Prime)', url: '/' },
  { name: 'GameStop', type: 'Physical', platform: 'Both', bonus: 'Exclusive poster with preorder', url: '/' },
  { name: 'Best Buy', type: 'Physical', platform: 'Both', bonus: '$10 reward certificate', url: '/' },
  { name: 'Rockstar Store', type: 'Direct Digital', platform: 'Both', bonus: 'Exclusive in-game items', url: 'https://store.rockstargames.com/game/buy-gta-vi' },
];

export const metadata: Metadata = {
  title: 'GTA 6 Preorder Deals: Best Retailers Compared | GTA 6 Hub',
  description: 'Compare GTA 6 preorder deals across all major retailers. PlayStation Store, Xbox Store, Amazon, GameStop, Best Buy, and Rockstar Store.'
};

export default function PreorderDealsPage() {
  return (
    <div className="py-12">
      <Link href="/guides" className="text-xs text-tertiary underline">&larr; Back to guides</Link>
      <h1 className="mt-6 text-3xl md:text-4xl tracking-tight">GTA 6 Preorder Deals Compared</h1>
      <p className="mt-2 text-secondary">Best retailers, bonuses, and deals for preordering Grand Theft Auto VI. Preorders began June 25, 2026.</p>

      <div className="mt-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 font-medium">Retailer</th>
              <th className="text-left py-3 px-4 font-medium">Type</th>
              <th className="text-left py-3 px-4 font-medium">Platform</th>
              <th className="text-left py-3 px-4 font-medium">Preorder Bonus</th>
              <th className="text-left py-3 px-4 font-medium">Link</th>
            </tr>
          </thead>
          <tbody>
            {retailers.map((r) => (
              <tr key={r.name} className="border-b border-border hover:bg-surface/50 transition-colors">
                <td className="py-3 px-4">{r.name}</td>
                <td className="py-3 px-4 text-tertiary">{r.type}</td>
                <td className="py-3 px-4 text-tertiary">{r.platform}</td>
                <td className="py-3 px-4 text-tertiary">{r.bonus}</td>
                <td className="py-3 px-4">
                  <a href={r.url} target="_blank" rel="noreferrer noopener sponsored" className="text-xs underline text-accent hover:opacity-80">Check deal</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 p-4 border border-border">
        <p className="text-xs text-tertiary font-mono">Note: Links are placeholder. Update with actual retailer URLs before publishing. Prices and bonuses subject to change.</p>
      </div>

      <div className="mt-10">
        <h2 className="text-base font-medium">Preorder Guide</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {[
            { href: '/articles/gta-6-preorder-editions-guide', label: 'Editions Guide', desc: 'Compare Standard, Deluxe, Ultimate, Collector' },
            { href: '/articles/gta-6-ultimate-edition-worth-it', label: 'Ultimate Review', desc: 'Is the premium tier worth it?' },
            { href: '/articles/gta-6-physical-digital-comparison', label: 'Physical vs Digital', desc: 'Which format to pick' },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="block border border-border p-4 hover:border-border-strong transition-all">
              <h3 className="text-sm">{item.label}</h3>
              <p className="text-xs text-tertiary mt-1">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <NewsletterForm />
      </div>
    </div>
  );
}
