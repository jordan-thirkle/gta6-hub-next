import type { Metadata } from 'next';
import Link from 'next/link';
import NewsletterForm from '../../newsletter-form';

interface Weapon {
  name: string;
  category: string;
  expected: boolean;
  note: string;
}

const weapons: Weapon[] = [
  { name: 'Pistol', category: 'Handguns', expected: true, note: 'Staple weapon, present in every GTA' },
  { name: 'Machine Pistol', category: 'Handguns', expected: true, note: 'Likely automatic sidearm' },
  { name: 'Revolver', category: 'Handguns', expected: true, note: 'Heavy pistol, high damage' },
  { name: 'Assault Rifle', category: 'Rifles', expected: true, note: 'Standard military rifle' },
  { name: 'Carbine Rifle', category: 'Rifles', expected: true, note: 'GTA 5 carry-over expected' },
  { name: 'Shotgun', category: 'Shotguns', expected: true, note: 'Pump-action standard' },
  { name: 'SMG', category: 'SMGs', expected: true, note: 'Close-range automatic' },
  { name: 'Sniper Rifle', category: 'Rifles', expected: true, note: 'Long-range engagement' },
  { name: 'Grenade', category: 'Throwables', expected: true, note: 'Explosive standard' },
  { name: 'Molotov Cocktail', category: 'Throwables', expected: true, note: 'Area denial weapon' },
  { name: 'Baseball Bat', category: 'Melee', expected: true, note: 'Classic melee weapon' },
  { name: 'Knife', category: 'Melee', expected: true, note: 'Stealth melee option' },
  { name: 'RPG', category: 'Heavy', expected: true, note: 'Anti-vehicle explosive' },
  { name: 'Minigun', category: 'Heavy', expected: false, note: 'Likely returns, not confirmed' },
  { name: 'Stun Gun', category: 'Special', expected: false, note: 'Non-lethal option from GTA V' },
  { name: 'Nightstick', category: 'Melee', expected: true, note: 'Standard police baton' },
];

export const metadata: Metadata = {
  title: 'GTA 6 Weapons List | GTA 6 Hub',
  description: 'Expected weapons in Grand Theft Auto VI. Based on trailer analysis and GTA V precedent.'
};

export default function WeaponsPage() {
  const categories = [...new Set(weapons.map(w => w.category))];
  return (
    <div className="py-12">
      <Link href="/guides" className="text-xs text-tertiary underline">&larr; Back to guides</Link>
      <h1 className="mt-6 text-3xl md:text-4xl tracking-tight">GTA 6 Weapons</h1>
      <p className="mt-2 text-secondary">Expected arsenal based on trailer glimpses and GTA V precedent. Official details pending.</p>

      {categories.map(cat => (
        <section key={cat} className="mt-8">
          <h2 className="text-base font-medium border-b border-border pb-2">{cat}</h2>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            {weapons.filter(w => w.category === cat).map(w => (
              <div key={w.name} className="border border-border p-4">
                <h3 className="text-sm">{w.name}</h3>
                <p className="text-[10px] text-tertiary mt-2">{w.note}</p>
                <span className={`mt-2 inline-block text-[9px] font-mono px-1.5 py-0.5 border ${w.expected ? 'border-accent/30 text-accent' : 'border-border-strong text-tertiary'}`}>
                  {w.expected ? 'Likely returning' : 'Unconfirmed'}
                </span>
              </div>
            ))}
          </div>
        </section>
      ))}

      <div className="mt-10 p-4 border border-border">
        <p className="text-xs text-tertiary font-mono">Note: Rockstar has not officially detailed GTA 6 weapons. This list is speculative based on GTA V and industry patterns.</p>
      </div>

      <div className="mt-10">
        <NewsletterForm />
      </div>
    </div>
  );
}
