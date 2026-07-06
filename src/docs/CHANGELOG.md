# Changelog — GTA 6 Hub

All notable changes to the GTA 6 Hub project are documented here.

## [1.1.0] — 2026-07-05

### Added
- **Social Sharing Buttons** (`src/components/share-buttons.tsx`)
  - Twitter/X, Facebook, Reddit, WhatsApp share buttons
  - Copy link to clipboard with visual confirmation
  - Native Web Share API fallback for mobile
  - Neon Vice City themed styling matching the app's design language
  - Added to: article detail pages (`[slug]/page.tsx`), vehicles page, trailer breakdown page, protagonists-detailed page

- **Affiliate Monetization Cards** (`src/components/affiliate-card.tsx`)
  - Reusable neon-styled card component with configurable accent color (pink/blue/cyan/purple)
  - "Partner offer" badge, descriptive text, price display, and CTA button
  - Uses the existing neon-card CSS classes with enhanced hover effects
  - Added to: homepage Preorder section (replacing old `AffiliateLink`), guides page, preorder-deals page
  - Added supporting CSS variants (`neon-card-blue`, `neon-card-cyan`, `neon-card-purple`) to `globals.css`

- **Newsletter Enhancements**
  - `/api/subscribe` now persists emails to `data/subscribers.json` with consent tracking
  - Added GET endpoint to list subscriber count
  - Newsletter form: privacy notice checkbox, loading spinner, success/error states with icons
  - Form validation: requires email + privacy consent before submission

- **SEO Improvements**
  - All 30+ article pages now emit `article:published_time` and `article:author` meta tags
  - Added `authors` array to OpenGraph metadata for article pages
  - Trailer breakdown and protagonists-detailed pages now include `other` metadata with article schema
  - Added 5 new articles to data file (30 total) to bring site to 45 total routes

- **Sitemap**
  - All 45 routes now included in `/sitemap.xml`:
    - 13 static pages (home, news, guides, map, vehicles, faq, release, privacy, articles, sub-guides)
    - 30 article pages from ARTICLES data
    - 2 standalone article pages (trailer-breakdown, protagonists-detailed)

### Changed
- `src/app/monetize.tsx`: Removed unused `AffiliateLink` and `AdSlot` components (replaced by `AffiliateCard`)
- Homepage preorder section: updated from basic link cards to rich affiliate cards with pricing and CTAs
- Newsletter form: complete UX overhaul with privacy consent, loading states, and visual feedback

### Files Created
- `src/components/share-buttons.tsx`
- `src/components/affiliate-card.tsx`
- `src/docs/CHANGELOG.md`
- `data/subscribers.json` (auto-created on first newsletter subscription)

### Files Modified
- `src/app/articles/[slug]/page.tsx` — Added share buttons + enhanced metadata
- `src/app/articles/trailer-breakdown/page.tsx` — Added share buttons + article schema
- `src/app/articles/protagonists-detailed/page.tsx` — Added share buttons + article schema
- `src/app/articles/data.ts` — Added 5 new article entries
- `src/app/vehicles/page.tsx` — Added share buttons
- `src/app/page.tsx` — Replaced old AffiliateLink with new AffiliateCard
- `src/app/guides/page.tsx` — Added affiliate cards
- `src/app/guides/preorder-deals/page.tsx` — Added affiliate cards
- `src/app/api/subscribe/route.ts` — File-based email persistence with consent tracking
- `src/app/newsletter-form.tsx` — Enhanced UX with privacy checkbox, loading states
- `src/styles/globals.css` — Added neon-card-{blue,cyan,purple} hover variants
