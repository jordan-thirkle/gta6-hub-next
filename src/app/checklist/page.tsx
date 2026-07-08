'use client';

import { useState } from 'react';

const checklistItems = [
  { id: 'beach-combo', name: 'Complete all Beach activities', category: 'Activities' },
  { id: 'car-collector', name: 'Collect all sports cars', category: 'Vehicles' },
  { id: 'boat-collector', name: 'Ride all boat types', category: 'Vehicles' },
  { id: 'helicopter-ride', name: 'Fly helicopter over Vice City', category: 'Activities' },
  { id: 'nightclub-visit', name: 'Visit every nightclub', category: 'Locations' },
  { id: 'beach-front', name: 'Walk full Ocean Drive boardwalk', category: 'Locations' },
  { id: 'swamp-explore', name: 'Explore Leonida Everglades', category: 'Locations' },
  { id: 'bridge-cross', name: 'Cross every bridge in Leonida', category: 'Activities' },
  { id: 'police-chase', name: 'Survive a 5-star wanted level', category: 'Challenges' },
  { id: 'drag-race', name: 'Win a drag race at Leonida Strip', category: 'Challenges' },
  { id: 'yacht-party', name: 'Attend a yacht party', category: 'Activities' },
  { id: 'mall-visit', name: 'Visit Vice City Mall', category: 'Locations' },
  { id: 'airport-tour', name: 'Explore Vice City International', category: 'Locations' },
  { id: 'hidden-pack', name: 'Find all hidden packages', category: 'Collectibles' },
  { id: 'graffiti-tags', name: 'Discover all graffiti spots', category: 'Collectibles' },
  { id: 'photo-ops', name: 'Take photos at all landmarks', category: 'Collectibles' },
  { id: 'store-robbery', name: 'Rob all convenience stores', category: 'Challenges' },
  { id: 'car-meet', name: 'Attend a car meet', category: 'Activities' },
  { id: 'strip-club', name: 'Visit the Malibu-style nightclub', category: 'Locations' },
  { id: 'stunt-jump', name: 'Complete all stunt jumps', category: 'Challenges' },
];

export default function ChecklistPage() {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setChecked(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const progress = Math.round((checked.size / checklistItems.length) * 100);
  const categories = [...new Set(checklistItems.map(i => i.category))];

  return (
    <div className="py-12 container">
      <h1 className="text-3xl md:text-4xl tracking-tight font-display text-gradient-vice animate-glow-pulse">GTA 6 Collectible Tracker</h1>
      <p className="mt-2 text-text-muted">Track your discoveries across Vice City and Leonida. Data persists in your browser.</p>

      {/* Progress bar */}
      <div className="mt-8 neon-border rounded-xl p-6 bg-bg-dark/60">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-mono text-neon-pink">{checked.size}/{checklistItems.length} found</span>
          <span className="text-sm font-mono text-neon-cyan">{progress}%</span>
        </div>
        <div className="h-3 w-full rounded-full bg-bg-dark overflow-hidden">
          <div className="h-full rounded-full transition-all duration-500 bg-gradient-to-r from-neon-pink to-neon-cyan" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* Category filters and items */}
      {categories.map(cat => (
        <div key={cat} className="mt-8">
          <h2 className="text-lg font-display text-neon-blue tracking-wide uppercase mb-4">{cat}</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {checklistItems.filter(i => i.category === cat).map(item => (
              <button
                key={item.id}
                onClick={() => toggle(item.id)}
                className={`neon-card group block rounded-lg p-4 text-left transition-all duration-200 ${
                  checked.has(item.id) ? 'border-neon-cyan/50 bg-neon-cyan/5' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`text-lg ${checked.has(item.id) ? '' : 'text-text-muted'}`}>
                    {checked.has(item.id) ? '✅' : '⬜'}
                  </span>
                  <span className={`text-sm ${checked.has(item.id) ? 'text-neon-cyan line-through opacity-60' : 'text-text-main'}`}>
                    {item.name}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      ))}

      {/* Reset */}
      {checked.size > 0 && (
        <div className="mt-8 text-center">
          <button onClick={() => setChecked(new Set())} className="border border-neon-pink/30 text-neon-pink px-4 py-2 text-sm font-mono rounded hover:bg-neon-pink/10 transition-colors">
            Reset progress
          </button>
        </div>
      )}
    </div>
  );
}
