import type { Metadata } from 'next';
import MapClient from './map-client';

export const metadata: Metadata = {
  title: 'GTA 6 Map | Vice City Interactive Map | GTA 6 Hub',
  description: 'Interactive GTA 6 map showing confirmed locations from official trailers. Vice City, Leonida beaches, swamplands, and key points of interest.'
};

export default function MapPage() {
  return (
    <div className="py-12">
      <h1 className="text-3xl md:text-4xl tracking-tight">GTA 6 Interactive Map</h1>
      <p className="mt-2 text-secondary">Known locations confirmed from official trailers. Markers are approximate.</p>
      <MapClient />
    </div>
  );
}
