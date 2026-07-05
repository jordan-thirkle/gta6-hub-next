'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { VEHICLES, getVehiclesByCategory } from './data';

const CATEGORIES = ['All', 'Car', 'Motorcycle', 'Air', 'Water', 'Emergency', 'Industrial'] as const;

export default function VehiclesPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<(typeof CATEGORIES)[number]>('All');

  const filtered = useMemo(() => {
    const byCategory =
      activeCategory === 'All' ? VEHICLES : getVehiclesByCategory(activeCategory);
    if (!search) return byCategory;
    const q = search.toLowerCase();
    return byCategory.filter(
      (v) => v.name.toLowerCase().includes(q) || v.description.toLowerCase().includes(q),
    );
  }, [activeCategory, search]);

  const confirmedCount = VEHICLES.filter((v) => v.confirmed).length;
  const leakCount = VEHICLES.filter((v) => !v.confirmed).length;

  return (
    <div className="py-12 max-w-page">
      {/* ── Header ── */}
      <h1 className="text-3xl md:text-4xl tracking-tight">GTA 6 Vehicles</h1>
      <p className="mt-2 text-secondary">
        All vehicles confirmed in official trailers and credible leaks.{' '}
        <span className="text-[#06d6a0]">{confirmedCount} confirmed</span>
        {' / '}
        <span className="text-[#ffd166]">{leakCount} leaked/credible</span>.
      </p>

      {/* ── Search + Category Tabs ── */}
      <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <input
          type="text"
          placeholder="Search vehicles by name or description..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-border bg-transparent px-3 py-2 text-sm flex-1 max-w-xs focus:border-accent outline-none transition-colors"
        />
        <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Vehicle categories">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[10px] font-mono px-2.5 py-1 border transition-colors ${
                activeCategory === cat
                  ? 'border-accent text-accent bg-accent/10'
                  : 'border-border text-tertiary hover:border-border-strong hover:text-secondary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── Vehicle Grid ── */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((v) => (
          <Link
            key={v.id}
            href={`/vehicles/${v.id}`}
            className={`card p-4 block group ${v.confirmed ? '' : 'border-dashed'}`}
          >
            {/* Row: name + category badge */}
            <div className="flex items-start justify-between gap-2">
              <h2 className="text-sm font-medium group-hover:text-accent transition-colors">
                {v.name}
              </h2>
              <span className="shrink-0 text-[9px] font-mono px-1.5 py-0.5 border border-border-strong text-tertiary uppercase tracking-wider">
                {v.category}
              </span>
            </div>

            {/* Confirmed / Leak badge */}
            <div className="mt-2">
              {v.confirmed ? (
                <span className="inline-block text-[9px] font-mono px-1.5 py-0.5 border border-[#06d6a0]/30 text-[#06d6a0] bg-[#06d6a0]/10 uppercase tracking-wider">
                  Confirmed
                </span>
              ) : (
                <span className="inline-block text-[9px] font-mono px-1.5 py-0.5 border border-[#ffd166]/30 text-[#ffd166] bg-[#ffd166]/10 uppercase tracking-wider">
                  Leak
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-xs text-secondary mt-2 leading-relaxed line-clamp-3">
              {v.description}
            </p>

            {/* Trailer & source footer */}
            <div className="mt-3 text-[9px] font-mono text-tertiary">
              <span>{v.source}</span>
              {v.trailerRef !== 'none' && (
                <>
                  <span className="mx-1.5">·</span>
                  <span>{v.trailerRef}</span>
                </>
              )}
            </div>
          </Link>
        ))}
      </div>

      {/* ── Empty state ── */}
      {filtered.length === 0 && (
        <p className="mt-12 text-sm text-tertiary text-center">
          No vehicles match your search or filter. Try a different category or search term.
        </p>
      )}
    </div>
  );
}
