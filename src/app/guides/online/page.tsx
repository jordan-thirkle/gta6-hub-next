import NewsletterForm from '../../newsletter-form';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GTA 6 Online Mode Guide | GTA 6 Hub',
  description: 'What we know about GTA 6 Online mode. Expected features, carry-over from GTA Online, and launch plans.'
};

export default function OnlineGuidePage() {
  return (
    <div className="py-12 max-w-3xl">
      <Link href="/guides" className="text-xs text-tertiary underline">&larr; Back to guides</Link>
      <h1 className="mt-6 text-3xl md:text-4xl tracking-tight">GTA 6 Online Mode Guide</h1>
      
      <section className="mt-8">
        <h2 className="text-lg font-medium">What We Know</h2>
        <p className="mt-2 text-secondary">GTA Online has been one of Rockstar's most successful products, generating billions in revenue. A GTA 6 Online successor is widely expected but not officially confirmed by Rockstar at this time.</p>
      </section>
      
      <section className="mt-8">
        <h2 className="text-lg font-medium">Expected Features</h2>
        <ul className="mt-2 space-y-2 text-secondary">
          <li>• Expanded map with new activities across Leonida</li>
          <li>• Character carry-over from GTA Online is unconfirmed</li>
          <li>• New heists and cooperative missions</li>
          <li>• Expanded property and business ownership</li>
          <li>• Next-generation matchmaking and server infrastructure</li>
          <li>• Cross-play between PS5 and Xbox Series X|S (unconfirmed)</li>
        </ul>
      </section>
      
      <section className="mt-8">
        <h2 className="text-lg font-medium">Launch Timeline</h2>
        <p className="mt-2 text-secondary">GTA Online historically launched a few weeks after GTA V's single-player release in 2013. A similar pattern may follow for GTA 6, with Online mode arriving shortly after the November 19, 2026 launch.</p>
      </section>
      
      <section className="mt-8 p-4 border border-border">
        <p className="text-xs text-tertiary font-mono">Note: Rockstar has not officially announced GTA 6 Online. This page is based on industry patterns and credible reporting. Information will be updated as official announcements are made.</p>
      </section>
      
      <div className="mt-10">
        <NewsletterForm />
      </div>
    </div>
  );
}
