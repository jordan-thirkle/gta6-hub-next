import Link from 'next/link';
import { HiChevronRight } from 'react-icons/hi';

interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      item: item.href ? `https://gta6-hub-next.vercel.app${item.href}` : undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-text-muted mb-6 font-mono">
        <Link href="/" className="hover:text-neon-pink transition-colors">Home</Link>
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-1.5">
            <HiChevronRight size={10} className="text-text-muted/30" />
            {item.href ? (
              <Link href={item.href} className="hover:text-neon-pink transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-text-muted/60">{item.label}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
