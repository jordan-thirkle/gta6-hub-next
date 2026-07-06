import type { Metadata, Viewport } from 'next';
import '../styles/globals.css';
import Link from 'next/link';
import NavLinks from '../components/nav-links';
import FooterNav from '../components/footer-nav';
import MobileNav from '../components/mobile-nav';

export const viewport: Viewport = {
  themeColor: '#050508',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'GTA 6 Hub | Vice City Countdown — News, Guides, Map & Leaks',
  description: 'Neon-bright countdown to GTA 6. Confirmed November 19, 2026 launch. Lucia, Jason, Vice City. PS5 and Xbox Series X|S.',
  metadataBase: new URL('https://gta6-hub-next.vercel.app'),
  openGraph: {
    title: 'GTA 6 Hub — Vice City Awaits',
    description: 'The ultimate neon-bathed countdown to GTA 6. Confirmed facts, no rumors.',
    siteName: 'GTA 6 Hub',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og-image.svg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GTA 6 Hub — Vice City Awaits',
    description: 'Countdown to GTA 6. Verified facts only. Neon nights coming.',
    images: ['/og-image.svg'],
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'GTA 6 Hub',
  },
  other: {
    'apple-mobile-web-app-capable': 'yes',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/svg+xml" href="/icons/icon-192x192.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'WebSite',
                  name: 'GTA 6 Hub',
                  url: 'https://gta6-hub-next.vercel.app',
                  description: 'Countdown to GTA 6. Verified facts only.',
                  potentialAction: {
                    '@type': 'SearchAction',
                    target: 'https://gta6-hub-next.vercel.app/search?q={search_term_string}',
                    'query-input': 'required name=search_term_string',
                  },
                },
                {
                  '@type': 'VideoGame',
                  name: 'Grand Theft Auto VI',
                  applicationCategory: 'Game',
                  description: 'Upcoming open-world action-adventure game set in Vice City.',
                  datePublished: '2026-11-19',
                  publisher: { '@type': 'Organization', name: 'Rockstar Games' },
                  gamePlatform: ['PlayStation 5', 'Xbox Series X/S'],
                  genre: ['Action Adventure', 'Open World', 'Racing', 'Shooter'],
                  sameAs: [
                    'https://www.rockstargames.com/VI',
                    'https://en.wikipedia.org/wiki/Grand_Theft_Auto_VI',
                  ],
                  offers: {
                    '@type': 'Offer',
                    price: '69.99',
                    priceCurrency: 'USD',
                    availability: 'https://schema.org/PreOrder',
                  },
                },
                {
                  '@type': 'Organization',
                  name: 'GTA 6 Hub',
                  url: 'https://gta6-hub-next.vercel.app',
                  sameAs: [
                    'https://github.com/jordan-thirkle/gta6-hub-next',
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">Skip to main content</a>

        <header role="banner" className="border-b border-border sticky top-0 bg-bg/95 backdrop-blur-sm z-50">
          <div className="max-w-page flex items-center justify-between h-14">
            <Link href="/" className="text-lg font-semibold tracking-tight hover:opacity-80 transition-opacity" aria-label="GTA 6 Hub Home">
              <span className="wordmark">GTA 6 Hub</span>
            </Link>
            <nav aria-label="Main navigation" className="flex items-center gap-6 text-sm">
              <NavLinks />
            </nav>
            <MobileNav />
          </div>
        </header>

        <main id="main-content" role="main" className="max-w-page min-h-[60vh]">
          {children}
        </main>

        <footer role="contentinfo" className="border-t border-border py-8 mt-16">
          <div className="max-w-page text-center space-y-2">
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
              <FooterNav />
            </div>
            <p className="text-xs text-tertiary">
              <span>&copy; {new Date().getFullYear()} GTA 6 Hub</span>
              <span aria-hidden="true" className="mx-2">·</span>
              <span>Not affiliated with Rockstar Games</span>
              <span aria-hidden="true" className="mx-2">·</span>
              <a href="/sitemap.xml" className="underline hover:text-accent transition-colors" aria-label="Sitemap page">Sitemap</a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
