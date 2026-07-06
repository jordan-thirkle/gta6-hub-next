import Link from 'next/link';
import NewsletterForm from '../../newsletter-form';
import ShareButtons from '../../../components/share-buttons';
import { YoutubeEmbed, GallerySection } from '../../media';
import { GT6_FACTS } from '../../gta6-facts';
import Comments from '../../../components/comments';

export const metadata = {
  title: 'GTA 6 Protagonists: Lucia and Jason',
  description: 'Everything confirmed about Lucia and Jason, the lead protagonists of Grand Theft Auto VI.',
  other: {
    'article:published_time': '2026-07-03',
    'article:author': 'GTA 6 Hub',
  },
};

export default function ProtagonistsPage() {
  const facts = GT6_FACTS.filter(f => ['lead-protagonists', 'setting'].includes(f.id));

  return (
    <div className="py-12 max-w-3xl">
      <Link href="/articles" className="text-xs text-tertiary underline">&larr; All articles</Link>
      <h1 className="mt-6 text-3xl md:text-4xl tracking-tight">Meet the Protagonists: Lucia and Jason</h1>

      <ShareButtons
        title="GTA 6 Protagonists: Lucia and Jason"
        description="Everything confirmed about Lucia and Jason, the lead protagonists of Grand Theft Auto VI."
        className="mt-4"
      />

      <GallerySection title="Lucia — First Protagonist">
        <p className="text-sm text-secondary">Lucia was introduced in the first trailer released September 17, 2023. She is seen in multiple settings throughout both trailers — from a prison jumpsuit to high-end Vice City nightlife. Her story arc appears to center on breaking free of her past and building a new life in Vice City.</p>
      </GallerySection>

      <GallerySection title="Jason — Second Protagonist">
        <p className="text-sm text-secondary">Jason was fully revealed in the second trailer (October 2024). He appears as Lucia&apos;s partner, with the two working together across Vice City. The trailer suggests a Bonnie-and-Clyde dynamic, with the pair navigating Vice City&apos;s criminal underworld.</p>
      </GallerySection>

      <div className="mt-8">
        <YoutubeEmbed id="QdBZY2fUAvM" title="GTA 6 Trailer 1 - Lucia Reveal" />
      </div>

      <div className="mt-8 space-y-3">
        {facts.map(f => (
          <div key={f.id} className="border border-border p-4">
            <p className="text-sm">{f.claim}</p>
            <a href={f.sourceUrl} target="_blank" rel="noreferrer" className="text-[10px] text-tertiary font-mono underline mt-2 inline-block">{f.sourceName}</a>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <NewsletterForm />
      </div>
      <Comments articleSlug="protagonists-detailed" />
    </div>
  );
}
