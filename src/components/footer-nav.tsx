'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/news', label: 'News' },
  { href: '/guides', label: 'Guides' },
  { href: '/map', label: 'Map' },
  { href: '/vehicles', label: 'Vehicles' },
  { href: '/articles', label: 'Articles' },
  { href: '/faq', label: 'FAQ' },
  { href: '/privacy', label: 'Privacy' },
];

export default function FooterNav() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`hover:text-accent transition-colors text-xs ${isActive ? 'text-accent' : 'text-tertiary'}`}
            aria-current={isActive ? 'page' : undefined}
            aria-label={`${link.label} page`}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
}
