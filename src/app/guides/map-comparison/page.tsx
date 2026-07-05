import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GTA 6 Map Size Comparison | GTA 6 Hub',
  description: 'How GTA 6 Vice City map compares to GTA 5, Red Dead Redemption 2, and other open worlds. Based on trailer analysis.'
};

export default function MapComparisonPage() {
  return (
    <div className="py-12 max-w-3xl">
      <h1 className="text-3xl md:text-4xl tracking-tight">GTA 6 Map Size Comparison</h1>
      
      <div className="mt-8 space-y-6">
        <section>
          <h2 className="text-base font-medium">Trailer Observations</h2>
          <p className="mt-2 text-secondary">Based on official trailer footage, the GTA 6 map appears to cover a significant area including Vice City, surrounding beaches, swamplands, and the Leonida state region. The visible scope suggests a map larger than GTA 5's Los Santos and Blaine County.</p>
        </section>

        <section>
          <h2 className="text-base font-medium">Estimated Comparison</h2>
          <div className="mt-4 space-y-3">
            {[
              { game: 'GTA 5', size: '~75 km²', note: 'Current largest GTA map' },
              { game: 'GTA 6 (est.)', size: '~150-200 km²', note: 'Based on trailer scope' },
              { game: 'RDR 2', size: '~126 km²', note: 'Rockstar\'s largest open world' },
              { game: 'GTA: San Andreas', size: '~36 km²', note: 'PS2 era classic' },
              { game: 'GTA: Vice City', size: '~9 km²', note: 'Original 2002 map' },
            ].map(item => (
              <div key={item.game} className="flex justify-between items-center border-b border-border pb-2">
                <span className="text-sm">{item.game}</span>
                <div className="text-right">
                  <span className="text-sm font-mono">{item.size}</span>
                  <p className="text-[10px] text-tertiary">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="p-4 border border-border">
          <p className="text-xs text-tertiary font-mono">Note: Map size estimates are based on visual analysis of official trailers. Rockstar has not released official map dimensions.</p>
        </section>
      </div>
    </div>
  );
}
