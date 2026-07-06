'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const links = [
  { href: '/news', label: 'News' },
  { href: '/guides', label: 'Guides' },
  { href: '/map', label: 'Map' },
  { href: '/vehicles', label: 'Vehicles' },
  { href: '/articles', label: 'Articles' },
  { href: '/faq', label: 'FAQ' },
  { href: '/search', label: 'Search', icon: true },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`hover:text-accent transition-colors text-sm ${isActive ? 'text-accent' : ''}`}
            aria-current={isActive ? 'page' : undefined}
          >
            {link.icon ? '🔍' : ''} {link.label}
          </Link>
        );
      })}
    </>
  );
}
