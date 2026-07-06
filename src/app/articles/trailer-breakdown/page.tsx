import Link from 'next/link';
import NewsletterForm from '../../newsletter-form';
import ShareButtons from '../../../components/share-buttons';
import { YoutubeEmbed, GallerySection } from '../../media';
import { GT6_FACTS } from '../../gta6-facts';
import Comments from '../../../components/comments';

export const metadata = {
  title: 'GTA 6 Trailer Breakdown: Every Detail Confirmed',
  description: 'Complete breakdown of both official GTA 6 trailers. Release dates, vehicles, characters, setting, and every confirmed detail.',
  other: {
    'article:published_time': '2026-07-03',
    'article:author': 'GTA 6 Hub',
  },
};

export default function TrailerBreakdownPage() {
  const facts = GT6_FACTS.filter(f => ['trailer-count', 'first-trailer-date', 'lead-protagonists', 'setting'].includes(f.id));

  return (
    <div className="py-12 max-w-3xl">
      <Link href="/articles" className="text-xs text-tertiary underline">&larr; All articles</Link>
      <h1 className="mt-6 text-3xl md:text-4xl tracking-tight">GTA 6 Trailer Breakdown</h1>
      <p className="mt-2 text-secondary">Every confirmed detail from both official Rockstar trailers.</p>

      <ShareButtons
        title="GTA 6 Trailer Breakdown: Every Detail Confirmed"
        description="Complete breakdown of both official GTA 6 trailers."
        className="mt-4"
      />

      <GallerySection title="Trailer 1 — September 17, 2023">
        <YoutubeEmbed id="QdBZY2fUAvM" title="Grand Theft Auto VI Trailer 1" />
        <div className="mt-4 space-y-3 text-sm text-secondary">
          <p>The first trailer, released September 17, 2023, introduced Vice City reimagined for a modern era. Set to Tom Petty&apos;s "Love Is a Long Road," it established the game&apos;s tone: neon-soaked nights, chaotic street life, and a sprawling coastal metropolis.</p>
          <ul className="space-y-1 mt-3">
            <li>• Confirmed Vice City setting with modern aesthetic</li>
            <li>• Introduced Lucia as a protagonist</li>
            <li>• Showed beachfront boardwalks, nightclubs, and swamplands</li>
            <li>• Featured police chases, boats, helicopters, and aircraft</li>
            <li>• Broke YouTube records with 93M+ views in 24 hours</li>
          </ul>
        </div>
      </GallerySection>

      <GallerySection title="Trailer 2 — October 2024">
        <YoutubeEmbed id="Chnlso8pe3s" title="Grand Theft Auto VI Trailer 2" />
        <div className="mt-4 space-y-3 text-sm text-secondary">
          <p>The second trailer expanded on the setting and confirmed Jason as the second protagonist. It showcased more of Leonida&apos;s diverse environments — from Vice City&apos;s downtown core to remote rural areas.</p>
          <ul className="space-y-1 mt-3">
            <li>• Confirmed Jason as the second lead protagonist</li>
            <li>• Showed expanded map regions including rural Leonida</li>
            <li>• Featured nightlife, cargo ports, and entertainment districts</li>
            <li>• Showcased more vehicle variety and police presence</li>
            <li>• Highlighted character interactions between Lucia and Jason</li>
          </ul>
        </div>
      </GallerySection>

      <GallerySection title="Key Facts">
        <div className="mt-4 space-y-3">
          {facts.map(f => (
            <div key={f.id} className="border border-border p-4">
              <p className="text-sm">{f.claim}</p>
              <a href={f.sourceUrl} target="_blank" rel="noreferrer" className="text-[10px] text-tertiary font-mono underline mt-2 inline-block">{f.sourceName}</a>
            </div>
          ))}
        </div>
      </GallerySection>

      <div className="mt-10">
        <h2 className="text-base font-medium">More Articles</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/articles/gta-6-launch-date-november-19-2026" className="text-xs underline">Launch Date</Link>
          <Link href="/articles/gta-6-protagonists-lucia-jason" className="text-xs underline">Protagonists</Link>
          <Link href="/articles/gta-6-setting-vice-city-leonida" className="text-xs underline">Setting</Link>
        </div>
      </div>

      <div className="mt-10">
        <NewsletterForm />
      </div>
      <Comments articleSlug="trailer-breakdown" />
    </div>
  );
}
