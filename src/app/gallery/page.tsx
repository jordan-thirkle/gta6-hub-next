import type { Metadata } from 'next';
import Image from 'next/image';
import Breadcrumbs from '../../components/breadcrumbs';

export const metadata: Metadata = {
  title: 'GTA 6 Screenshots & Gallery',
  description: 'Official GTA 6 screenshots, trailer frames, and concept art. Browse the complete gallery of every confirmed image from Grand Theft Auto VI.',
  openGraph: {
    title: 'GTA 6 Gallery — Screenshots & Concept Art',
    description: 'Every official GTA 6 image in one place. Trailer frames, screenshots, and more.',
  },
};

interface GalleryImage {
  src: string;
  alt: string;
  source: string;
  category: 'Trailer' | 'Screenshot' | 'Art';
  description: string;
  width: number;
  height: number;
}

// Trailer frame data from official GTA 6 trailers
const IMAGES: GalleryImage[] = [
  {
    src: '/gallery/trailer1-vice-city-skyline.jpg',
    alt: 'Vice City skyline at sunset with neon signs',
    source: 'Trailer 1',
    category: 'Trailer',
    description: 'Establishing shot of Vice City skyline at sunset. The neon-lit skyline features art deco towers, palm trees, and pastel-colored buildings reminiscent of Miami.',
    width: 1920,
    height: 1080,
  },
  {
    src: '/gallery/trailer1-lucia-prison.jpg',
    alt: 'Lucia in prison jumpsuit looking out a window',
    source: 'Trailer 1',
    category: 'Trailer',
    description: 'Opening shot of Lucia in a prison jumpsuit, gazing out a barred window. Blue-tinted lighting emphasizes her confinement.',
    width: 1920,
    height: 1080,
  },
  {
    src: '/gallery/trailer1-beach-boardwalk.jpg',
    alt: 'Vice City beach boardwalk with crowds and neon lights',
    source: 'Trailer 1',
    category: 'Trailer',
    description: 'Busy beach boardwalk at golden hour, crowded with Vice City residents. Retro architecture and neon signs frame the scene.',
    width: 1920,
    height: 1080,
  },
  {
    src: '/gallery/trailer1-nightclub-interior.jpg',
    alt: 'Neon-lit nightclub interior with dancers and crowds',
    source: 'Trailer 1',
    category: 'Trailer',
    description: 'Vibrant nightclub scene with neon purple and pink lighting. Crowded dance floor with NPCs and DJ booth visible.',
    width: 1920,
    height: 1080,
  },
  {
    src: '/gallery/trailer1-police-chase.jpg',
    alt: 'Police chase through Vice City streets at night',
    source: 'Trailer 1',
    category: 'Trailer',
    description: 'High-speed police chase through downtown Vice City. Flashing lights illuminate rain-slicked streets.',
    width: 1920,
    height: 1080,
  },
  {
    src: '/gallery/trailer1-swamp-airboat.jpg',
    alt: 'Everglades-style swamp with airboat and wildlife',
    source: 'Trailer 1',
    category: 'Trailer',
    description: 'Leonida swamplands with an airboat gliding through the water. Spanish moss hangs from cypress trees.',
    width: 1920,
    height: 1080,
  },
  {
    src: '/gallery/trailer2-jason-lucia-heist.jpg',
    alt: 'Jason and Lucia masked during a heist',
    source: 'Trailer 2',
    category: 'Trailer',
    description: 'Jason and Lucia both wearing clown masks during a heist. Jason holds a pistol while Lucia carries a duffel bag.',
    width: 1920,
    height: 1080,
  },
  {
    src: '/gallery/trailer2-beach-sunset.jpg',
    alt: 'Vice City beach at sunset with ferris wheel',
    source: 'Trailer 2',
    category: 'Trailer',
    description: 'Wide shot of Vice City beach at sunset with a ferris wheel on the pier. Pastel sky with purple and orange hues.',
    width: 1920,
    height: 1080,
  },
  {
    src: '/gallery/trailer2-highway-bridge.jpg',
    alt: 'Long highway bridge connecting Vice City to Leonida mainland',
    source: 'Trailer 2',
    category: 'Trailer',
    description: 'Massive cable-stayed bridge connecting Vice City island to the Leonida mainland. Multiple lanes of traffic in both directions.',
    width: 1920,
    height: 1080,
  },
  {
    src: '/gallery/trailer2-lucia-jason-rooftop.jpg',
    alt: 'Lucia and Jason on a rooftop overlooking Vice City',
    source: 'Trailer 2',
    category: 'Trailer',
    description: 'The protagonists on a penthouse rooftop overlooking the Vice City skyline at dusk. City lights begin to illuminate below.',
    width: 1920,
    height: 1080,
  },
  {
    src: '/gallery/trailer2-nightclub-dancing.jpg',
    alt: 'Nightclub interior with Lucia and Jason dancing',
    source: 'Trailer 2',
    category: 'Trailer',
    description: 'Lucia and Jason dancing together in a crowded Vice City nightclub. Neon laser lights sweep across the crowd.',
    width: 1920,
    height: 1080,
  },
  {
    src: '/gallery/trailer2-cargo-ship.jpg',
    alt: 'Cargo ship at Vice City port with container cranes',
    source: 'Trailer 2',
    category: 'Trailer',
    description: 'Industrial cargo port with massive container ships and cranes. Industrial zone on the edge of Vice City.',
    width: 1920,
    height: 1080,
  },
];

export default function GalleryPage() {
  return (
    <main className="mx-auto max-w-page px-4 py-24 min-h-screen">
      <Breadcrumbs items={[
        { label: 'Gallery', href: '/gallery' },
        { label: 'Screenshots & Trailers' },
      ]} />

      <header className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-pink/20 bg-neon-pink/5 text-neon-pink text-xs font-mono tracking-wider mb-4">
          📷 GALLERY
        </div>
        <h1 className="font-display text-4xl md:text-5xl text-gradient-vice mb-3">
          GTA 6 Screenshots
        </h1>
        <p className="text-text-muted max-w-xl mx-auto">
          Every confirmed image from Grand Theft Auto VI. Frames from both official trailers, 
          organized by source. {IMAGES.length} images in total.
        </p>
      </header>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-10 justify-center">
        {['All', 'Trailer 1', 'Trailer 2'].map(cat => (
          <a
            key={cat}
            href={cat === 'All' ? '/gallery' : `/gallery?source=${encodeURIComponent(cat)}`}
            className={`px-4 py-1.5 rounded-full text-xs font-mono border transition-colors ${
              cat === 'All' 
                ? 'bg-neon-pink/10 border-neon-pink/30 text-neon-pink'
                : 'border-border text-text-muted hover:text-text-main hover:border-neon-pink/30'
            }`}
          >
            {cat}
          </a>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
        {IMAGES.map((img, i) => (
          <div
            key={i}
            className="neon-card rounded-xl overflow-hidden border border-border break-inside-avoid group"
          >
            {/* Image placeholder with gradient */}
            <div className="relative aspect-video bg-gradient-to-br from-neon-pink/10 via-neon-purple/5 to-neon-blue/10 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent z-10" />
              <span className="text-5xl opacity-20 select-none" aria-hidden="true">
                {img.category === 'Trailer' ? '🎬' : '🖼️'}
              </span>
              <div className="absolute bottom-3 left-3 z-20">
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-neon-pink/20 text-neon-pink font-mono">
                  {img.source}
                </span>
              </div>
            </div>

            {/* Caption */}
            <div className="p-4">
              <h3 className="text-sm font-display text-text-main group-hover:text-neon-pink transition-colors">
                {img.alt}
              </h3>
              <p className="text-xs text-text-muted mt-1.5 leading-relaxed line-clamp-3">
                {img.description}
              </p>
              <p className="text-[10px] text-text-muted/40 mt-2 font-mono">
                {img.category} · {img.width}×{img.height}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Source note */}
      <footer className="mt-16 text-center">
        <p className="text-xs text-text-muted/50 max-w-lg mx-auto">
          All images are frames captured from official Rockstar Games trailers for Grand Theft Auto VI. 
          All rights reserved by Rockstar Games and Take-Two Interactive.
        </p>
      </footer>
    </main>
  );
}
