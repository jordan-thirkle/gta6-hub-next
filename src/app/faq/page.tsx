import type { Metadata } from 'next';
import Link from 'next/link';
import NewsletterForm from '../newsletter-form';

const faqs = [
  { q: 'When does GTA 6 release?', a: 'November 19, 2026.', source: 'Rockstar Games Newswire' },
  { q: 'What platforms at launch?', a: 'PlayStation 5 and Xbox Series X|S.', source: 'Rockstar Games Newswire' },
  { q: 'Will there be a PC version at launch?', a: 'Not announced yet.', source: 'Rockstar Games Newswire' },
  { q: 'Who are the protagonists?', a: 'Lucia and Jason, confirmed in official trailers.', source: 'Rockstar Games' },
  { q: 'Where is GTA 6 set?', a: 'A modern Vice City region and surrounding Leonida state.', source: 'Rockstar Games' },
  { q: 'How much will GTA 6 cost?', a: 'Pricing varies by edition. Standard, Deluxe, Ultimate, and Collector editions available.', source: 'Rockstar Store' },
  { q: 'Is there a GTA Online successor?', a: 'Not officially announced. Expected based on industry patterns.', source: 'Industry reporting' },
  { q: 'How big is the GTA 6 map?', a: 'Exact size unconfirmed. Appears larger than GTA 5 based on trailer analysis.', source: 'Trailer analysis' },
  { q: 'Can I play GTA 6 on PC?', a: 'PC version has not been announced.', source: 'Rockstar Games Newswire' },
  { q: 'When did preorders start?', a: 'June 25, 2026.', source: 'Rockstar Games Newswire' },
  { q: 'What editions are available?', a: 'Standard, Deluxe, Ultimate, and Collector editions.', source: 'Rockstar Games Newswire' },
  { q: 'Will there be a physical disc?', a: 'Yes, physical editions are available for preorder from select retailers.', source: 'Rockstar Newswire' },
  { q: 'Is cross-play supported?', a: 'Not confirmed. Unlikely at launch based on GTA Online cross-play history.', source: 'Industry reporting' },
  { q: 'What is the Collector\'s Edition?', a: 'Premium tier with physical items, art book, steelbook case, and digital bonuses.', source: 'Rockstar Store' },
  { q: 'Will GTA 6 have ray tracing?', a: 'Expected on PS5 and Xbox Series X, but not officially detailed.', source: 'Industry reporting' },
];

export const metadata: Metadata = {
  title: 'GTA 6 FAQ: Every Question Answered | GTA 6 Hub',
  description: 'Complete FAQ for Grand Theft Auto VI. Release date, platforms, PC version, preorders, editions, characters, and more.'
};

export default function FaqPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <div className="py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <h1 className="text-3xl md:text-4xl tracking-tight">GTA 6 FAQ</h1>
      <p className="mt-2 text-secondary">Every confirmed answer about Grand Theft Auto VI. {faqs.length} questions answered.</p>
      <div className="mt-8 space-y-3">
        {faqs.map((item, idx) => (
          <details key={idx} className="border border-border group">
            <summary className="p-4 cursor-pointer text-sm font-medium hover:bg-surface/50 transition-colors list-none flex items-center justify-between">
              <span>{item.q}</span>
              <span className="text-tertiary text-[10px] font-mono group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="px-4 pb-4">
              <p className="text-sm text-secondary">{item.a}</p>
              <p className="mt-2 text-[10px] text-tertiary font-mono">Source: {item.source}</p>
            </div>
          </details>
        ))}
      </div>
      <div className="mt-10">
        <NewsletterForm />
      </div>
    </div>
  );
}
