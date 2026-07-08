'use client';

import { useState } from 'react';

interface Quote {
  text: string;
  speaker: string;
  context: string;
  trailer: string;
}

const quotes: Quote[] = [
  { text: 'Vice City. Leonida. The next evolution of Grand Theft Auto.', speaker: 'Narrator', context: 'Trailer 1 opening', trailer: 'Trailer 1' },
  { text: 'Lucia, you know I love you. Youre the only one I can trust.', speaker: 'Jason', context: 'Phone conversation scene', trailer: 'Trailer 1' },
  { text: 'Trust? Look where trust got us.', speaker: 'Lucia', context: 'Prison visitation room', trailer: 'Trailer 1' },
  { text: 'The only way out is together.', speaker: 'Lucia', context: 'Final scene of Trailer 1', trailer: 'Trailer 1' },
  { text: 'This is Vice City, man. Anything can happen.', speaker: 'Unnamed character', context: 'Beach boardwalk scene', trailer: 'Trailer 1' },
  { text: 'You think youre special? Youre not special. Youre just like everyone else.', speaker: 'Unnamed character', context: 'Nightclub scene', trailer: 'Trailer 2' },
  { text: 'Every dollar has a story. This ones ours.', speaker: 'Lucia', context: 'Gas station getaway scene', trailer: 'Trailer 2' },
  { text: 'We need a plan. A real one.', speaker: 'Jason', context: 'Warehouse meetup', trailer: 'Trailer 2' },
  { text: 'Welcome to Vice City. Population: you.', speaker: 'Radio host', context: 'Car radio scene', trailer: 'Trailer 1' },
  { text: 'I got a bad feeling about this one.', speaker: 'Jason', context: 'Convenience store robbery', trailer: 'Trailer 2' },
  { text: 'Dont stop. Dont even slow down.', speaker: 'Lucia', context: 'Police chase scene', trailer: 'Trailer 2' },
  { text: 'The streets dont love you back. But I do.', speaker: 'Jason', context: 'Rooftop conversation', trailer: 'Trailer 2' },
  { text: 'One more score. Then were done.', speaker: 'Lucia', context: 'Boat escape scene', trailer: 'Trailer 1' },
  { text: 'You see that? Thats freedom.', speaker: 'Jason', context: 'Highway driving scene', trailer: 'Trailer 2' },
  { text: 'Vice City never sleeps. Neither do we.', speaker: 'Lucia', context: 'Night driving scene', trailer: 'Trailer 2' },
  { text: 'This city is going to eat you alive.', speaker: 'Police officer', context: 'Arrest scene', trailer: 'Trailer 1' },
  { text: 'They took everything from us. Now we take it back.', speaker: 'Lucia', context: 'Planning scene in trailer', trailer: 'Trailer 2' },
  { text: 'Welcome to the family.', speaker: 'Unnamed character', context: 'Safehouse scene', trailer: 'Trailer 2' },
];

export default function QuotesPage() {
  const [filter, setFilter] = useState<string>('All');
  const speakers = ['All', ...new Set(quotes.map(q => q.speaker))];
  const filtered = filter === 'All' ? quotes : quotes.filter(q => q.speaker === filter);

  return (
    <div className="py-12 container">
      <h1 className="text-3xl md:text-4xl tracking-tight font-display text-gradient-vice animate-glow-pulse">GTA 6 Quotes</h1>
      <p className="mt-2 text-text-muted">Memorable lines from official GTA 6 trailers.</p>

      {/* Filter */}
      <div className="mt-6 flex flex-wrap gap-2">
        {speakers.map(s => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`text-xs font-mono px-3 py-1.5 border rounded transition-all ${
              filter === s ? 'border-neon-pink bg-neon-pink/10 text-neon-pink' : 'border-border text-text-muted hover:border-neon-pink/50'
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Quote grid */}
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {filtered.map((q, i) => (
          <div key={i} className="neon-card rounded-lg p-5 group hover:border-neon-pink/40 transition-all">
            <p className="text-sm text-text-main leading-relaxed italic">&ldquo;{q.text}&rdquo;</p>
            <div className="mt-3 flex items-center gap-2 text-xs text-text-muted">
              <span className="text-neon-pink font-medium">{q.speaker}</span>
              <span>·</span>
              <span>{q.context}</span>
              <span className="ml-auto font-mono text-[10px] text-neon-cyan">{q.trailer}</span>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-xs text-text-muted">{filtered.length} quote{filtered.length !== 1 ? 's' : ''}</p>
    </div>
  );
}
