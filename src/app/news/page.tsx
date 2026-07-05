import { GT6_FACTS } from '../gta6-facts';
import NewsletterForm from '../newsletter-form';

export default function NewsPage() {
  const items = [
    { title: 'Launch Date Updated to November 19, 2026', summary: 'Rockstar pushed the release window back.', fact: GT6_FACTS.find(f => f.id === 'launch-date') },
    { title: 'Confirmed Launch Platforms', summary: 'PlayStation 5 and Xbox Series X|S only at launch.', fact: GT6_FACTS.find(f => f.id === 'platforms-launch') },
    { title: 'Protagonists Revealed', summary: 'Lucia and Jason lead the story in a modern Leonida setting.', fact: GT6_FACTS.find(f => f.id === 'lead-protagonists') },
    { title: 'Setting: Vice City and Beyond', summary: 'Trailers show a modern Vice City region and surrounding clusters.', fact: GT6_FACTS.find(f => f.id === 'setting') },
  ];
  return (
    <div className="py-12">
      <h1 className="text-3xl md:text-4xl tracking-tight">GTA 6 News</h1>
      <p className="mt-2 text-secondary">Official drops, trailer breakdowns, and launch updates with direct sources.</p>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {items.map((item) => (
          <article key={item.title} className="border border-border p-6">
            <h2 className="text-base font-medium">{item.title}</h2>
            <p className="mt-2 text-sm text-secondary">{item.summary}</p>
            <div className="mt-3">
              <a href={item.fact?.sourceUrl || '/news'} target="_blank" rel="noreferrer" className="text-xs underline">Open source</a>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-10">
        <NewsletterForm />
      </div>
    </div>
  );
}
