'use client';

import { useState } from 'react';

const timeline = [
  { date: '2020-01', title: 'Development begins', desc: 'Rockstar begins full production on GTA VI, following the release of Red Dead Redemption 2.', icon: '🎬' },
  { date: '2022-02', title: 'Bloomberg report', desc: 'Jason Schreier reports GTA VI in development with a female protagonist (Lucia) set in Vice City.', icon: '📰' },
  { date: '2022-09', title: 'Massive leak', desc: '90+ videos of early development footage leaked online. Rockstar confirms the leak is real.', icon: '💻' },
  { date: '2023-09', title: 'Trailer 1 released', desc: 'Rockstar releases the first official GTA VI trailer. Confirms Vice City, Leonida, Lucia and Jason.', icon: '🎥' },
  { date: '2023-12', title: 'Trailer 2 released', desc: 'Second trailer reveals more gameplay, vehicles, setting details and 2025 release window.', icon: '🎥' },
  { date: '2024-05', title: 'Release date announced', desc: 'Rockstar announces November 19, 2026 as the official release date for GTA VI.', icon: '📅' },
  { date: '2025-06', title: 'Preorders begin', desc: 'Standard, Deluxe, Ultimate, and Collector editions go up for preorder across all platforms.', icon: '🛒' },
  { date: '2025-08', title: 'Gameplay trailer', desc: 'Extended gameplay trailer shows open-world mechanics, combat, driving, and side activities.', icon: '🎮' },
  { date: '2026-01', title: 'Online mode revealed', desc: 'Details on GTA Online 2 emerge, including persistent world, cross-play, and creator tools.', icon: '🌐' },
  { date: '2026-06', title: 'Gold master', desc: 'GTA VI goes gold. Final build sent to manufacturing. Preload begins on PSN and Xbox.', icon: '💿' },
  { date: '2026-11-19', title: 'Launch day!', desc: 'GTA VI launches worldwide on PlayStation 5 and Xbox Series X|S.', icon: '🚀' },
];

export default function TimelinePage() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="py-12 container">
      <h1 className="text-3xl md:text-4xl tracking-tight font-display text-gradient-vice animate-glow-pulse">GTA 6 Development Timeline</h1>
      <p className="mt-2 text-text-muted">Key events from the start of development to launch day.</p>

      <div className="mt-10 relative">
        {/* Vertical line */}
        <div className="absolute left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-neon-pink via-neon-purple to-neon-blue opacity-30" />

        <div className="space-y-8">
          {timeline.map((item, i) => {
            const isExpanded = expanded === item.date;
            return (
              <div key={item.date} className="relative flex gap-6">
                {/* Icon circle */}
                <div className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                  isExpanded ? 'border-neon-pink bg-neon-pink/10 shadow-[0_0_15px_rgba(255,45,149,0.3)]' : 'border-border bg-bg-dark'
                }`}>
                  <span className="text-lg">{item.icon}</span>
                </div>

                {/* Content */}
                <div
                  className={`flex-1 neon-card rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                    isExpanded ? 'border-neon-pink/50' : ''
                  }`}
                  onClick={() => setExpanded(isExpanded ? null : item.date)}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-display text-neon-pink font-semibold">{item.title}</p>
                      <p className="text-xs text-text-muted font-mono mt-0.5">
                        {new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: item.date.length > 7 ? 'numeric' : undefined })}
                      </p>
                    </div>
                    <span className={`text-text-muted transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>▼</span>
                  </div>
                  {isExpanded && (
                    <p className="mt-3 text-sm text-text-main leading-relaxed animate-in">{item.desc}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
