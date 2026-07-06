import Link from 'next/link';
import NewsletterForm from '../newsletter-form';
import AffiliateCard from '../../components/affiliate-card';

export default function GuidesPage() {
  const sections = [
    {
      title: 'Getting Started',
      items: [
        { href: '/faq', label: 'GTA 6 FAQ', desc: 'Fast answers to the most common questions.' },
        { href: '/articles/gta-6-preorder-editions-guide', label: 'Preorder Guide', desc: 'Editions, pricing, and where to preorder.' },
        { href: '/guides/online', label: 'GTA 6 Online Guide', desc: 'Expected features, cross-play, and launch timeline.' },
      ]
    },
    {
      title: 'Platform & Performance',
      items: [
        { href: '/articles/gta-6-platforms-ps5-xbox-series', label: 'Platforms Guide', desc: 'PS5 vs Xbox Series X|S at launch.' },
        { href: '/guides/weapons', label: 'Weapons Database', desc: 'Expected arsenal based on trailers.' },
        { href: '/guides/map-comparison', label: 'Map Size Comparison', desc: 'GTA 6 map compared to previous games.' },
      ]
    },
    {
      title: 'Editions & Content',
      items: [
        { href: '/articles/gta-6-editions-standard-deluxe-ultimate-collector', label: 'Editions Comparison', desc: 'All four editions side by side.' },
        { href: '/articles/gta-6-ultimate-edition-worth-it', label: 'Ultimate Edition Value', desc: 'Is the premium tier worth it?' },
        { href: '/articles/gta-6-collectors-edition-contents', label: "Collector's Edition", desc: 'Everything included and value.' },
      ]
    },
    {
      title: 'Game Details',
      items: [
        { href: '/articles/gta-6-characters-cast', label: 'Characters & Cast', desc: 'Every confirmed character and actor.' },
        { href: '/articles/gta-6-vehicles-cars-list', label: 'Vehicles List', desc: 'Every car from the trailers.' },
        { href: '/vehicles', label: 'Vehicle Database', desc: 'Searchable database with filters.' },
      ]
    },
    {
      title: 'Preorder & Retail',
      items: [
        { href: '/articles/gta-6-preorder-retailers-deals', label: 'Retailers Compared', desc: 'Best places to preorder.' },
        { href: '/articles/gta-6-physical-digital-comparison', label: 'Physical vs Digital', desc: 'Which format should you pick?' },
        { href: '/articles/gta-6-preload-times-download', label: 'Preload Guide', desc: 'When and how to preload.' },
      ]
    },
  ];

  return (
    <div className="py-12">
      <h1 className="text-3xl md:text-4xl tracking-tight">Guides</h1>
      <p className="mt-2 text-secondary">Everything you need to know before GTA 6 launches November 19, 2026.</p>
      <div className="mt-2">
        <Link href="/articles/gta-6-countdown-2026" className="text-xs underline text-accent">Countdown to launch →</Link>
      </div>

      {sections.map((section) => (
        <section key={section.title} className="mt-10">
          <h2 className="text-base font-medium border-b border-border pb-2">{section.title}</h2>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            {section.items.map((item) => (
              <Link key={item.href} href={item.href} className="group block border border-border p-4 hover:border-border-strong transition-all">
                <h3 className="text-sm font-medium">{item.label}</h3>
                <p className="mt-1 text-xs text-secondary">{item.desc}</p>
                <span className="mt-3 inline-block text-[10px] underline">Read guide</span>
              </Link>
            ))}
          </div>
        </section>
      ))}

      <div className="mt-12 border-t border-border pt-8">
        <h2 className="text-base font-medium">All Articles</h2>
        <Link href="/articles" className="mt-2 inline-block text-xs underline">Browse all 26+ articles →</Link>
      </div>

      {/* Preorder deals affiliate section */}
      <div className="mt-8 border-t border-border pt-8">
        <h2 className="text-base font-medium mb-4">Preorder Deals</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <AffiliateCard
            title="GTA 6 Preorder — Best Retailers"
            description="Compare PlayStation Store, Xbox, Amazon, GameStop, Best Buy deals"
            price="$69.99+"
            href="/guides/preorder-deals"
            cta="Compare deals"
            badge="Partner offer"
            accent="cyan"
          />
          <AffiliateCard
            title="Ultimate Edition Guide"
            description="Is the $99.99 premium tier worth it?"
            price="$99.99"
            href="/articles/gta-6-ultimate-edition-worth-it"
            cta="Read review"
            badge="Partner offer"
            accent="purple"
          />
        </div>
      </div>

      <div className="mt-10">
        <NewsletterForm />
      </div>
    </div>
  );
}
