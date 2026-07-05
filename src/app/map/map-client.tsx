'use client';
import { useState, useMemo } from 'react';

interface MapMarker {
  id: string;
  name: string;
  x: number;
  y: number;
  category: string;
  description: string;
  confirmed: boolean;
}

const MARKERS: MapMarker[] = [
  { id: 'vc-downtown', name: 'Vice City Downtown', x: 480, y: 270, category: 'Urban', description: 'High-rise district with neon-lit streets. Confirmed in Trailer 1 skyline shots.', confirmed: true },
  { id: 'vc-beach', name: 'Vice City Beach', x: 400, y: 200, category: 'Beach', description: 'Sandy beachfront with boardwalk and palm trees. Confirmed in Trailer 1.', confirmed: true },
  { id: 'vc-airport', name: 'Vice City International Airport', x: 580, y: 320, category: 'Airport', description: 'Commercial airport with airliner traffic. Confirmed in Trailer 1.', confirmed: true },
  { id: 'vc-marina', name: 'Vice City Marina', x: 440, y: 330, category: 'Water', description: 'Yacht harbor with luxury vessels. Confirmed in Trailer 1.', confirmed: true },
  { id: 'leonida-swamp', name: 'Leonida Swamplands', x: 200, y: 350, category: 'Wilderness', description: 'Expansive wetlands with airboats and wildlife. Visible in Trailer 1 flyover.', confirmed: true },
  { id: 'leonida-country', name: 'Leonida Countryside', x: 150, y: 200, category: 'Rural', description: 'Rolling hills and farmland outside the city. Trailer 1 highway scene.', confirmed: true },
  { id: 'highway', name: 'Coastal Highway', x: 310, y: 260, category: 'Road', description: 'Oceanside highway connecting Vice City to Leonida. Confirmed in Trailer 1 and 2.', confirmed: true },
  { id: 'vc-pd', name: 'Vice City Police HQ', x: 490, y: 250, category: 'Emergency', description: 'Police headquarters seen during chase scene in Trailer 1.', confirmed: true },
  { id: 'vc-port', name: 'Vice City Port', x: 530, y: 360, category: 'Industrial', description: 'Cargo shipping port with container cranes. Trailer 2 establishing shot.', confirmed: true },
  { id: 'vc-boardwalk', name: 'Ocean Drive Boardwalk', x: 420, y: 215, category: 'Entertainment', description: 'Nightlife strip with clubs and bars. Trailer 2 night scene.', confirmed: true },
  { id: 'leonida-bridge', name: 'Leonida Bay Bridge', x: 350, y: 290, category: 'Road', description: 'Long-span bridge connecting mainland to Vice City. Trailer 1 flyover.', confirmed: true },
  { id: 'malibu-club', name: 'Malibu-style Nightclub', x: 445, y: 230, category: 'Entertainment', description: 'Waterfront nightclub with neon sign. Trailer 2 establishing shot.', confirmed: false },
];

const CATEGORIES = ['All', 'Urban', 'Beach', 'Water', 'Wilderness', 'Rural', 'Road', 'Emergency', 'Industrial', 'Entertainment', 'Airport'];

const CATEGORY_COLORS: Record<string, string> = {
  Urban: '#f72585',
  Beach: '#ffd166',
  Water: '#4361ee',
  Wilderness: '#06d6a0',
  Rural: '#06d6a0',
  Road: '#9d9da3',
  Emergency: '#ef476f',
  Industrial: '#6b6b73',
  Entertainment: '#f72585',
  Airport: '#4361ee',
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
    <div className="mt-6 border border-border overflow-hidden">
      {/* Legend / Filter */}
      <div className="p-3 border-b border-border flex flex-wrap gap-2">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => { setFilterCategory(cat); setSelectedMarker(null); }}
            className={`text-[9px] font-mono px-2 py-1 border transition-colors ${
              filterCategory === cat
                ? 'border-accent text-accent'
                : 'border-border-strong text-tertiary hover:border-border-strong'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Map area */}
      <div className="relative bg-[#0a0a0b] overflow-auto" style={{ aspectRatio: '16/9', minHeight: '400px' }}>
        <svg viewBox="0 0 800 500" className="w-full h-full" style={{ minWidth: '600px' }}>
          {/* Water background */}
          <rect x="0" y="0" width="800" height="500" fill="#0d1b2a" />

          {/* Ocean gradient */}
          <defs>
            <linearGradient id="ocean" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0d1b2a" />
              <stop offset="50%" stopColor="#1b2838" />
              <stop offset="100%" stopColor="#0d1b2a" />
            </linearGradient>
          </defs>

          {/* Main landmass */}
          <path d="M 80,80 Q 200,60 350,100 Q 500,60 650,120 Q 750,180 700,300 Q 720,400 600,450 Q 400,480 200,440 Q 60,400 50,280 Q 40,160 80,80 Z" fill="#1a1a2e" stroke="#2a2a40" strokeWidth="1" />

          {/* Vice City urban grid */}
          <rect x="420" y="220" width="120" height="80" rx="4" fill="#16162a" stroke="#2a2a40" strokeWidth="1" />
          {/* Beach area */}
          <rect x="380" y="180" width="50" height="100" rx="2" fill="#1c1c30" stroke="#2a2a40" strokeWidth="1" />

          {/* Swamplands texture */}
          <circle cx="200" cy="340" r="60" fill="#151528" stroke="#2a2a40" strokeWidth="0.5" />
          <circle cx="220" cy="360" r="30" fill="#131325" stroke="#2a2a40" strokeWidth="0.5" />

          {/* Main highway */}
          <path d="M 320,400 Q 350,320 400,280 L 500,220" fill="none" stroke="#2a2a40" strokeWidth="3" />
          <path d="M 150,200 L 320,400" fill="none" stroke="#2a2a40" strokeWidth="2" />

          {/* Airport runway */}
          <rect x="550" y="300" width="80" height="20" rx="2" fill="#1c1c30" stroke="#3a3a50" strokeWidth="1" transform="rotate(-10 590 310)" />

          {/* Port area */}
          <rect x="500" y="350" width="60" height="20" rx="2" fill="#1c1c30" stroke="#3a3a50" strokeWidth="1" />

          {/* Bridge */}
          <path d="M 340,280 L 400,250" fill="none" stroke="#3a3a50" strokeWidth="2" strokeDasharray="3,2" />

          {/* Markers */}
          {visibleMarkers.map(marker => {
            const isHovered = hoveredMarker === marker.id;
            const isSelected = selectedMarker?.id === marker.id;
            const color = CATEGORY_COLORS[marker.category] || '#f72585';
            return (
              <g
                key={marker.id}
                transform={`translate(${marker.x}, ${marker.y})`}
                style={{ cursor: 'pointer' }}
                onMouseEnter={() => setHoveredMarker(marker.id)}
                onMouseLeave={() => setHoveredMarker(null)}
                onClick={() => setSelectedMarker(marker)}
              >
                {/* Pulse ring on hover */}
                {isHovered && (
                  <circle r="18" fill="none" stroke={color} strokeWidth="1" opacity="0.4">
                    <animate attributeName="r" values="18;24;18" dur="1.5s" repeatCount="indefinite" />
                  </circle>
                )}
                {/* Marker dot */}
                <circle r="6" fill={color} stroke={isSelected ? '#fff' : 'none'} strokeWidth="2" opacity={isSelected ? 1 : 0.85} />
                {!marker.confirmed && (
                  <line x1="-4" y1="-4" x2="4" y2="4" stroke={color} strokeWidth="1" opacity="0.5" />
                )}
                {/* Label */}
                {(isHovered || isSelected) && (
                  <text x="10" y="4" fontSize="9" fill="#e8e8ed" fontFamily="monospace">
                    {marker.name}
                  </text>
                )}
              </g>
            );
          })}

          {/* Map label */}
          <text x="400" y="40" textAnchor="middle" fontSize="10" fill="#6b6b73" fontFamily="monospace">
            LEONIDA STATE — VICE CITY REGION
          </text>
          <text x="400" y="54" textAnchor="middle" fontSize="7" fill="#4a4a52" fontFamily="monospace">
            Stylized representation based on official trailers
          </text>
        </svg>

        {/* Info panel */}
        {selectedMarker && (
          <div className="absolute bottom-3 left-3 right-3 bg-surface border border-border p-4 z-10 max-w-md">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="text-sm font-medium">{selectedMarker.name}</h3>
                <p className="text-xs text-tertiary mt-1 font-mono">{selectedMarker.category}</p>
                <p className="text-xs text-secondary mt-2">{selectedMarker.description}</p>
                <span className={`mt-2 inline-block text-[9px] font-mono px-1.5 py-0.5 border ${selectedMarker.confirmed ? 'border-accent/30 text-accent' : 'border-border-strong text-tertiary'}`}>
                  {selectedMarker.confirmed ? 'Confirmed' : 'Speculative'}
                </span>
              </div>
              <button
                onClick={() => setSelectedMarker(null)}
                className="text-tertiary hover:text-primary text-sm"
                aria-label="Close info panel"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>

      {selectedMarker && (
        <div className="p-3 border-t border-border text-center">
          <p className="text-[10px] text-tertiary font-mono">Click marker to see details. Use filters above to narrow.</p>
        </div>
      )}
    </div>
  );
}
