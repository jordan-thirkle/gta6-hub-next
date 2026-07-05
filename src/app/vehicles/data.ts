export interface Vehicle {
  id: string;
  name: string;
  category: 'Car' | 'Motorcycle' | 'Air' | 'Water' | 'Emergency' | 'Industrial';
  confirmed: boolean;
  source: 'Trailer' | 'Leak' | 'Official';
  description: string;
  trailerRef: string;
}

export const VEHICLES: Vehicle[] = [
  // === TRAILER 1 (September 2023) ===
  {
    id: 'sports-car-red',
    name: 'Sports Car (Red)',
    category: 'Car',
    confirmed: true,
    source: 'Trailer',
    description: 'A red two-door sports car seen speeding down a coastal highway in Vice City.',
    trailerRef: 'Trailer 1',
  },
  {
    id: 'sports-car-yellow',
    name: 'Sports Car (Yellow)',
    category: 'Car',
    confirmed: true,
    source: 'Trailer',
    description: 'A yellow sports car seen parked on a Vice City street with palm trees in the background.',
    trailerRef: 'Trailer 1',
  },
  {
    id: 'helicopter',
    name: 'Police Maverick',
    category: 'Air',
    confirmed: true,
    source: 'Trailer',
    description: 'A law enforcement helicopter seen flying over Vice City beaches.',
    trailerRef: 'Trailer 1',
  },
  {
    id: 'speedboat',
    name: 'Speedboat',
    category: 'Water',
    confirmed: true,
    source: 'Trailer',
    description: 'A fast speedboat cutting through the waves off the Vice City coastline.',
    trailerRef: 'Trailer 1',
  },
  {
    id: 'police-car',
    name: 'Police Cruiser',
    category: 'Emergency',
    confirmed: true,
    source: 'Trailer',
    description: 'A Vice City Police Department cruiser with lights flashing during a chase.',
    trailerRef: 'Trailer 1',
  },
  {
    id: 'suv-white',
    name: 'SUV (White)',
    category: 'Car',
    confirmed: true,
    source: 'Trailer',
    description: 'A white SUV seen driving along a beachfront road in Vice City.',
    trailerRef: 'Trailer 1',
  },
  {
    id: 'pickup-truck',
    name: 'Pickup Truck',
    category: 'Car',
    confirmed: true,
    source: 'Trailer',
    description: 'A rugged pickup truck spotted near a construction site in the trailer.',
    trailerRef: 'Trailer 1',
  },
  {
    id: 'motorcycle-sport',
    name: 'Sport Motorcycle',
    category: 'Motorcycle',
    confirmed: true,
    source: 'Trailer',
    description: 'A fast sport motorcycle weaving through Vice City traffic.',
    trailerRef: 'Trailer 1',
  },
  {
    id: 'motorcycle-cruiser',
    name: 'Cruiser Motorcycle',
    category: 'Motorcycle',
    confirmed: true,
    source: 'Trailer',
    description: 'A classic cruiser motorcycle seen parked alongside a Vice City boardwalk.',
    trailerRef: 'Trailer 1',
  },
  {
    id: 'yacht',
    name: 'Luxury Yacht',
    category: 'Water',
    confirmed: true,
    source: 'Trailer',
    description: 'A large luxury yacht moored near the Vice City marina.',
    trailerRef: 'Trailer 1',
  },
  {
    id: 'aircraft-airport',
    name: 'Commercial Aircraft',
    category: 'Air',
    confirmed: true,
    source: 'Trailer',
    description: 'A commercial airliner taxiing at Vice City International Airport.',
    trailerRef: 'Trailer 1',
  },
  // === TRAILER 2 ===
  {
    id: 'sports-car-blue',
    name: 'Sports Car (Blue/Teal)',
    category: 'Car',
    confirmed: true,
    source: 'Trailer',
    description: 'A blue-teal two-door sports car seen cruising along a Vice City boulevard at night.',
    trailerRef: 'Trailer 2',
  },
  {
    id: 'sedan',
    name: 'Sedan',
    category: 'Car',
    confirmed: true,
    source: 'Trailer',
    description: 'A four-door sedan spotted in traffic during a daytime Vice City street scene.',
    trailerRef: 'Trailer 2',
  },
  {
    id: 'box-truck',
    name: 'Box Truck',
    category: 'Industrial',
    confirmed: true,
    source: 'Trailer',
    description: 'A delivery box truck seen on a highway in the second trailer.',
    trailerRef: 'Trailer 2',
  },
  {
    id: 'fishing-boat',
    name: 'Fishing Boat',
    category: 'Water',
    confirmed: true,
    source: 'Trailer',
    description: 'A small fishing boat seen near the docks in the second trailer.',
    trailerRef: 'Trailer 2',
  },
  {
    id: 'patrol-boat',
    name: 'Police Patrol Boat',
    category: 'Water',
    confirmed: true,
    source: 'Trailer',
    description: 'A law enforcement patrol boat seen in the waterways of Vice City.',
    trailerRef: 'Trailer 2',
  },
  // === LEAK-BASED VEHICLES (unconfirmed) ===
  {
    id: 'lucia-sedan',
    name: 'Lucia\'s Sedan',
    category: 'Car',
    confirmed: false,
    source: 'Leak',
    description: 'A beige four-door sedan believed to be the protagonist Lucia\'s personal vehicle based on leaked development footage.',
    trailerRef: 'none',
  },
  {
    id: 'brute-boxville',
    name: 'Brute Boxville (Armored)',
    category: 'Industrial',
    confirmed: false,
    source: 'Leak',
    description: 'An armored variant of the Boxville truck spotted in early build leaks.',
    trailerRef: 'none',
  },
  {
    id: 'hijak-rustler',
    name: 'Hijak Rustler',
    category: 'Car',
    confirmed: false,
    source: 'Leak',
    description: 'An off-road buggy-type vehicle seen in leaked 2022 development footage.',
    trailerRef: 'none',
  },
];

export function getVehiclesByCategory(category: string): Vehicle[] {
  return VEHICLES.filter(v => v.category === category);
}
