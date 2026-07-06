'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';

interface MapMarker {
  id: string;
  name: string;
  x: number;
  y: number;
  category: string;
  description: string;
  confirmed: boolean;
  relatedPage?: string;
}

const MARKERS: MapMarker[] = [
  // 🏙️ URBAN
  { id: 'vc-downtown', name: 'Vice City Downtown', x: 490, y: 260, category: 'Urban', description: 'High-rise financial district with neon-lit skyscrapers. The heart of Vice City.', confirmed: true, relatedPage: '/articles/gta-6-setting-vice-city-leonida' },
  { id: 'vc-little-haiti', name: 'Little Haiti', x: 520, y: 300, category: 'Urban', description: 'Cultural district with Caribbean influence. Confirmed by storefront signs in Trailer 1.', confirmed: true },
  { id: 'vc-vice-beach', name: 'Vice Beach', x: 440, y: 200, category: 'Urban', description: 'Beachfront neighborhood with pastel hotels and boardwalk.', confirmed: true },
  { id: 'vc-strip', name: 'Ocean Drive Strip', x: 460, y: 220, category: 'Entertainment', description: 'Neon-lit entertainment strip with clubs, bars, and luxury storefronts.', confirmed: true },
  { id: 'vc-malibu', name: 'Malibu-style Nightclub', x: 470, y: 235, category: 'Entertainment', description: 'Waterfront nightclub with pink neon sign. Trailer 2 establishing shot.', confirmed: false },
  { id: 'vc-leonida-hotel', name: 'Hotel Leonida', x: 510, y: 245, category: 'Urban', description: 'Art deco high-rise hotel along the waterfront strip.', confirmed: true },
  { id: 'vc-greens', name: 'Vice City Greens Golf Course', x: 550, y: 200, category: 'Urban', description: 'Palm-lined golf club visible in Trailer 1 aerial flyover.', confirmed: true },
  { id: 'vc-ghetto', name: 'South Vice Projects', x: 530, y: 340, category: 'Urban', description: 'Low-income housing district seen in Trailer 2 car meet scene.', confirmed: true },

  // 🏖️ BEACH
  { id: 'beach-main', name: 'Vice City Main Beach', x: 400, y: 190, category: 'Beach', description: 'Wide sandy beach with volleyball nets and lifeguard towers. Confirmed in Trailer 1.', confirmed: true },
  { id: 'beach-north', name: 'North Beach Boardwalk', x: 380, y: 150, category: 'Beach', description: 'Quieter stretch of beach with wooden boardwalk and seafood shacks.', confirmed: true },
  { id: 'beach-south', name: 'South Beach Pier', x: 420, y: 210, category: 'Beach', description: 'Fishing pier and amusement area extending into the ocean.', confirmed: true, relatedPage: '/vehicles' },
  { id: 'beach-cove', name: 'Hidden Cove Beach', x: 320, y: 120, category: 'Beach', description: 'Secluded rocky cove accessible only by boat. Trailer 2 speedboat scene.', confirmed: true },

  // 🌊 WATER
  { id: 'marina', name: 'Vice City Marina', x: 480, y: 350, category: 'Water', description: 'Luxury yacht harbor with multi-million dollar vessels.', confirmed: true, relatedPage: '/vehicles' },
  { id: 'port', name: 'Vice City Container Port', x: 560, y: 370, category: 'Industrial', description: 'Busy cargo port with shipping cranes and container stacks.', confirmed: true },
  { id: 'lighthouse-cove', name: 'Leonida Lighthouse', x: 350, y: 100, category: 'Water', description: 'Standing lighthouse on rocky peninsula. Trailer 2 establishing shot.', confirmed: true },
  { id: 'everglades', name: 'Leonida Everglades', x: 200, y: 320, category: 'Wilderness', description: 'Vast swamp with mangrove tunnels and airboat trails.', confirmed: true },
  { id: 'river', name: 'Leonida River', x: 270, y: 290, category: 'Water', description: 'Winding river cutting through the state. Airboat chase scene in Trailer 1.', confirmed: true },

  // 🛣️ ROADS / HIGHWAYS
  { id: 'hwy-1', name: 'Coastal Highway 1', x: 310, y: 240, category: 'Road', description: 'Oceanside highway connecting Vice City to Leonida countryside.', confirmed: true },
  { id: 'hwy-27', name: 'Interstate 27', x: 550, y: 160, category: 'Road', description: 'Major north-south highway through the state.', confirmed: true },
  { id: 'bridge-leonida', name: 'Leonida Bay Bridge', x: 365, y: 265, category: 'Road', description: 'Massive cable-stayed bridge connecting mainland to Vice City island.', confirmed: true },

  // ✈️ AIRPORT
  { id: 'airport', name: 'Vice City International', x: 600, y: 310, category: 'Airport', description: 'Major international airport with commercial jet traffic.', confirmed: true },
  { id: 'airport-strip', name: 'Leonida Air Force Base', x: 650, y: 250, category: 'Airport', description: 'Military airbase with fighter jet presence. Rumored for heist missions.', confirmed: false },

  // 🚔 EMERGENCY
  { id: 'pd-hq', name: 'Vice City Police HQ', x: 500, y: 270, category: 'Emergency', description: 'Police headquarters seen during Trailer 1 chase scene.', confirmed: true, relatedPage: '/vehicles' },
  { id: 'fd-station', name: 'Vice City Fire Station', x: 540, y: 230, category: 'Emergency', description: 'Fire station with apparatus bays. Trailer 1 drive-by shot.', confirmed: true },

  // 🏭 INDUSTRIAL
  { id: 'warehouse', name: 'Vice City Warehouse District', x: 570, y: 340, category: 'Industrial', description: 'Industrial warehouse zone. Possible heist location.', confirmed: true },
  { id: 'construction', name: 'Downtown Construction Site', x: 480, y: 270, category: 'Industrial', description: 'High-rise construction site. Trailer 2 worker scene.', confirmed: true },
  { id: 'scrapyard', name: 'Leonida Scrapyard', x: 250, y: 400, category: 'Industrial', description: 'Vehicle scrapyard with crushers. Trailer 2 car meet location.', confirmed: true },

  // 🌿 WILDERNESS
  { id: 'state-park', name: 'Leonida State Park', x: 160, y: 180, category: 'Wilderness', description: 'Protected woodland with hiking trails and campsites.', confirmed: true },
  { id: 'farmlands', name: 'Leonida Agricultural Zone', x: 120, y: 280, category: 'Rural', description: 'Farmland with ranches and crop fields. Trailer 1 truck scene.', confirmed: true },
  { id: 'trailer-park', name: 'Leisure Village Trailer Park', x: 200, y: 240, category: 'Rural', description: 'Mobile home community on the outskirts. Lucia\'s possible residence.', confirmed: false },
  { id: 'drag-strip', name: 'Leonida Drag Strip', x: 300, y: 380, category: 'Rural', description: 'Quarter-mile drag racing strip. Trailer 2 muscle car scene.', confirmed: true, relatedPage: '/vehicles' },
];

const CATEGORIES = ['All', 'Urban', 'Entertainment', 'Beach', 'Water', 'Road', 'Airport', 'Emergency', 'Industrial', 'Wilderness', 'Rural'];

const CATEGORY_COLORS: Record<string, string> = {
  Urban: '#ff2d95', Entertainment: '#ff2d95',
  Beach: '#00d4ff', Water: '#00d4ff',
  Road: '#9d9da3', Airport: '#b44dff',
  Emergency: '#ef476f', Industrial: '#9d9da3',
  Wilderness: '#00f5d4', Rural: '#00f5d4',
};

export default function MapClient() {
  const [selectedMarker, setSelectedMarker] = useState<MapMarker | null>(null);
  const [filterCategory, setFilterCategory] = useState('All');
  const [hoveredMarker, setHoveredMarker] = useState<string | null>(null);

  const visibleMarkers = useMemo(
    () => filterCategory === 'All' ? MARKERS : MARKERS.filter(m => m.category === filterCategory),
    [filterCategory]
  );

  return (
    <div className="mt-6 neon-border overflow-hidden rounded-xl">
      {/* Legend / Filter */}
      <div className="p-3 border-b border-neon-pink/20 flex flex-wrap gap-2 bg-bg-dark/80">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => { setFilterCategory(cat); setSelectedMarker(null); }}
            className={`text-[9px] font-mono px-2 py-1 border transition-all duration-200 rounded ${
              filterCategory === cat
                ? 'border-neon-pink bg-neon-pink/10 text-neon-pink shadow-[0_0_8px_rgba(255,45,149,0.2)]'
                : 'border-border text-text-muted hover:border-neon-pink/50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Map area */}
      <div className="relative bg-[#050508] overflow-auto" style={{ aspectRatio: '16/9', minHeight: '400px' }}>
        <svg viewBox="0 0 800 500" className="w-full h-full" style={{ minWidth: '600px' }}>
          {/* Water background with gradient */}
          <defs>
            <radialGradient id="ocean-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0d1b2a" />
              <stop offset="100%" stopColor="#050508" />
            </radialGradient>
            <filter id="neon-glow">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>
          <rect x="0" y="0" width="800" height="500" fill="url(#ocean-glow)" />

          {/* Main landmass */}
          <path d="M 80,80 Q 200,60 350,100 Q 500,60 650,120 Q 750,180 700,300 Q 720,400 600,450 Q 400,480 200,440 Q 60,400 50,280 Q 40,160 80,80 Z" fill="#0d0d1a" stroke="#ff2d95" strokeWidth="0.5" opacity="0.8" />

          {/* Vice City urban grid */}
          <rect x="420" y="220" width="140" height="100" rx="4" fill="#111128" stroke="#ff2d95" strokeWidth="0.5" opacity="0.6" />
          <line x1="460" y1="220" x2="460" y2="320" stroke="#ff2d95" strokeWidth="0.3" opacity="0.3" />
          <line x1="500" y1="220" x2="500" y2="320" stroke="#ff2d95" strokeWidth="0.3" opacity="0.3" />
          <line x1="540" y1="220" x2="540" y2="320" stroke="#ff2d95" strokeWidth="0.3" opacity="0.3" />
          <line x1="420" y1="260" x2="560" y2="260" stroke="#ff2d95" strokeWidth="0.3" opacity="0.3" />
          <line x1="420" y1="290" x2="560" y2="290" stroke="#ff2d95" strokeWidth="0.3" opacity="0.3" />

          {/* Beach zone */}
          <rect x="370" y="150" width="60" height="130" rx="2" fill="#111128" stroke="#00d4ff" strokeWidth="0.5" opacity="0.5" />

          {/* Swamplands */}
          <circle cx="200" cy="340" r="60" fill="#0d0d1a" stroke="#00f5d4" strokeWidth="0.3" opacity="0.5" />
          <circle cx="220" cy="360" r="30" fill="#0a0a15" stroke="#00f5d4" strokeWidth="0.3" opacity="0.4" />

          {/* Main highway */}
          <path d="M 320,400 Q 350,320 400,280 L 500,220" fill="none" stroke="#ff2d95" strokeWidth="1.5" opacity="0.4" />
          <path d="M 150,200 L 320,400" fill="none" stroke="#00d4ff" strokeWidth="1" opacity="0.3" />
          <path d="M 500,220 L 650,180" fill="none" stroke="#b44dff" strokeWidth="1" opacity="0.3" />

          {/* Airport */}
          <rect x="570" y="300" width="80" height="18" rx="2" fill="#0d0d1a" stroke="#b44dff" strokeWidth="0.5" transform="rotate(-8, 610, 309)" />
          <line x1="575" y1="306" x2="645" y2="300" stroke="#b44dff" strokeWidth="0.3" opacity="0.4" />

          {/* Port */}
          <rect x="520" y="350" width="50" height="15" rx="1" fill="#0d0d1a" stroke="#9d9da3" strokeWidth="0.5" />
          <rect x="530" y="340" width="6" height="10" fill="#3a3a50" />
          <rect x="545" y="340" width="6" height="10" fill="#3a3a50" />
          <rect x="560" y="340" width="6" height="10" fill="#3a3a50" />

          {/* Bridge */}
          <path d="M 340,270 L 400,250" fill="none" stroke="#ff2d95" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.5" />
          <circle cx="370" cy="260" r="2" fill="#ff2d95" opacity="0.5" />

          {/* Grid overlay */}
          <g opacity="0.08" stroke="#ff2d95" strokeWidth="0.3">
            {[0,1,2,3,4,5,6,7,8,9,10].map(i => (
              <line key={`v${i}`} x1={i*80} y1={0} x2={i*80} y2={500} />
            ))}
            {[0,1,2,3,4,5,6,7].map(i => (
              <line key={`h${i}`} x1={0} y1={i*70} x2={800} y2={i*70} />
            ))}
          </g>

          {/* Markers */}
          {visibleMarkers.map(marker => {
            const isHovered = hoveredMarker === marker.id;
            const isSelected = selectedMarker?.id === marker.id;
            const color = CATEGORY_COLORS[marker.category] || '#ff2d95';
            return (
              <g
                key={marker.id}
                transform={`translate(${marker.x}, ${marker.y})`}
                style={{ cursor: 'pointer' }}
                onMouseEnter={() => setHoveredMarker(marker.id)}
                onMouseLeave={() => setHoveredMarker(null)}
                onClick={() => setSelectedMarker(marker)}
              >
                {/* Pulse ring */}
                {isHovered && (
                  <circle r="20" fill="none" stroke={color} strokeWidth="1" opacity="0.4">
                    <animate attributeName="r" values="18;28;18" dur="1.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.4;0.1;0.4" dur="1.5s" repeatCount="indefinite" />
                  </circle>
                )}
                {/* Marker glow */}
                <circle r="10" fill={color} opacity="0.15" filter="url(#neon-glow)" />
                {/* Marker dot */}
                <circle r="5" fill={color} stroke={isSelected ? '#fff' : 'none'} strokeWidth="2" opacity={isSelected ? 1 : 0.85} />
                {!marker.confirmed && (
                  <line x1="-3" y1="-3" x2="3" y2="3" stroke={color} strokeWidth="1" opacity="0.6" />
                )}
                {/* Label */}
                {(isHovered || isSelected) && (
                  <text x="10" y="4" fontSize="9" fill={color} fontFamily="monospace" fontWeight="500">
                    {marker.name}
                  </text>
                )}
              </g>
            );
          })}

          {/* Title */}
          <text x="400" y="35" textAnchor="middle" fontSize="11" fill="#ff2d95" fontFamily="monospace" fontWeight="700" letterSpacing="3" opacity="0.6">
            LEONIDA STATE — VICE CITY REGION
          </text>
          <text x="400" y="48" textAnchor="middle" fontSize="7" fill="#555570" fontFamily="monospace">
            Stylized map based on official trailers · {MARKERS.length} points of interest
          </text>
        </svg>

        {/* Info panel */}
        {selectedMarker && (
          <div className="absolute bottom-3 left-3 right-3 bg-bg-dark/90 backdrop-blur-md neon-border rounded-lg p-4 z-10 max-w-md">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="text-sm font-display font-semibold text-neon-pink">{selectedMarker.name}</h3>
                <p className="text-xs text-text-muted mt-1 font-mono">{selectedMarker.category}</p>
                <p className="text-xs text-text-main mt-2 leading-relaxed">{selectedMarker.description}</p>
                <span className={`mt-3 inline-block text-[9px] font-mono px-2 py-0.5 border rounded ${
                  selectedMarker.confirmed
                    ? 'border-neon-cyan/30 text-neon-cyan bg-neon-cyan/5'
                    : 'border-border text-text-muted'
                }`}>
                  {selectedMarker.confirmed ? '✓ Confirmed' : '○ Speculative'}
                </span>
                {selectedMarker.relatedPage && (
                  <Link
                    href={selectedMarker.relatedPage}
                    className="mt-3 ml-2 inline-block text-[9px] font-mono text-neon-blue underline decoration-neon-blue/30 hover:decoration-neon-blue"
                  >
                    Related →
                  </Link>
                )}
              </div>
              <button onClick={() => setSelectedMarker(null)} className="text-text-muted hover:text-neon-pink transition-colors text-sm" aria-label="Close">✕</button>
            </div>
          </div>
        )}
      </div>

      <div className="p-3 border-t border-neon-pink/20 bg-bg-dark/80 text-center">
        <p className="text-[10px] text-text-muted font-mono">
          {MARKERS.length} locations · {MARKERS.filter(m => m.confirmed).length} confirmed · Click markers for details · Filter by category above
        </p>
      </div>
    </div>
  );
}
