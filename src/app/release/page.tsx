import { GT6_FACTS } from '../gta6-facts';

export default function ReleasePage() {
  const launch = GT6_FACTS.find(f => f.id === 'launch-date');
  const platforms = GT6_FACTS.find(f => f.id === 'platforms-launch');
  const pc = GT6_FACTS.find(f => f.id === 'pc-release');

  return (
    <div className="py-12">
      <h1 className="text-3xl md:text-4xl tracking-tight">Release Tracker</h1>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="border border-border p-6">
          <h2 className="text-base font-medium">Launch Date</h2>
          {launch && <p className="mt-2 text-sm text-secondary">{launch.claim}</p>}
          <p className="mt-2 text-xs text-tertiary font-mono">{launch?.sourceName}</p>
        </div>
        <div className="border border-border p-6">
          <h2 className="text-base font-medium">Platforms</h2>
          {platforms && <p className="mt-2 text-sm text-secondary">{platforms.claim}</p>}
          <p className="mt-2 text-xs text-tertiary font-mono">{platforms?.sourceName}</p>
        </div>
        <div className="border border-border p-6">
          <h2 className="text-base font-medium">PC Version</h2>
          {pc && <p className="mt-2 text-sm text-secondary">{pc.claim}</p>}
          <p className="mt-2 text-xs text-tertiary font-mono">{pc?.sourceName}</p>
        </div>
      </div>
    </div>
  );
}
