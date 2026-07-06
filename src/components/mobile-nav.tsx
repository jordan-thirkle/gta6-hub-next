'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/news', label: 'News' },
  { href: '/editions', label: 'Editions' },
  { href: '/guides', label: 'Guides' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/map', label: 'Map' },
  { href: '/vehicles', label: 'Vehicles' },
  { href: '/articles', label: 'Articles' },
  { href: '/faq', label: 'FAQ' },
  { href: '/search', label: 'Search' },
  { href: '/release', label: 'Release' },
  { href: '/privacy', label: 'Privacy' },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={() => setOpen(!open)}
        className="sm:hidden flex flex-col gap-1.5 p-2"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
      >
        <span className={`block w-5 h-[1.5px] bg-current transition-all ${open ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
        <span className={`block w-5 h-[1.5px] bg-current transition-all ${open ? 'opacity-0' : ''}`} />
        <span className={`block w-5 h-[1.5px] bg-current transition-all ${open ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-40 sm:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Slide-out menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-surface border-l border-border z-50 transform transition-transform duration-200 sm:hidden ${open ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between h-14 px-4 border-b border-border">
          <span className="wordmark text-sm">GTA 6 Hub</span>
          <button onClick={() => setOpen(false)} className="text-sm p-1" aria-label="Close menu">✕</button>
        </div>
        <nav className="flex flex-col p-4 gap-2" aria-label="Mobile navigation">
          {links.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm rounded transition-colors ${isActive ? 'bg-accent/10 text-accent' : 'hover:bg-surface'}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
