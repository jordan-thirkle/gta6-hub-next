export interface GtaFact {
  id: string;
  claim: string;
  factLevel: 'confirmed' | 'credible' | 'speculative';
  sourceName: string;
  sourceUrl: string;
}

export const GT6_FACTS: GtaFact[] = [
  {
    id: 'launch-date',
    claim: 'GTA 6 launches November 19, 2026.',
    factLevel: 'confirmed',
    sourceName: 'Rockstar Games Newswire',
    sourceUrl: 'https://www.rockstargames.com/newswire/article/ak3ak31a49a221'
  },
  {
    id: 'platforms-launch',
    claim: 'Launch platforms are PlayStation 5 and Xbox Series X|S.',
    factLevel: 'confirmed',
    sourceName: 'Rockstar Games Newswire',
    sourceUrl: 'https://www.rockstargames.com/newswire/article/ak3ak31a49a221'
  },
  {
    id: 'pc-release',
    claim: 'A PC version has not been announced.',
    factLevel: 'confirmed',
    sourceName: 'Rockstar Games Newswire + Rockstar Store',
    sourceUrl: 'https://www.rockstargames.com/newswire/article/ak3ak31a49a221'
  },
  {
    id: 'preorder-date',
    claim: 'Preorders began June 25, 2026.',
    factLevel: 'confirmed',
    sourceName: 'Rockstar Games Newswire',
    sourceUrl: 'https://www.rockstargames.com/newswire/article/5171972o3ak5oa'
  },
  {
    id: 'lead-protagonists',
    claim: 'The protagonists are Lucia and Jason.',
    factLevel: 'confirmed',
    sourceName: 'Official GTA 6 Trailer',
    sourceUrl: 'https://www.youtube.com/watch?v=QdBZY2fUAvM'
  },
  {
    id: 'setting',
    claim: 'The game is set in a modern Vice City region and the state of Leonida.',
    factLevel: 'confirmed',
    sourceName: 'Official GTA 6 Trailer',
    sourceUrl: 'https://www.youtube.com/watch?v=QdBZY2fUAvM'
  },
  {
    id: 'trailer-count',
    claim: 'Rockstar has released two official trailers for GTA 6.',
    factLevel: 'confirmed',
    sourceName: 'Rockstar Games YouTube',
    sourceUrl: 'https://www.youtube.com/@RockstarGames'
  },
  {
    id: 'first-trailer-date',
    claim: 'The first GTA 6 trailer was released September 17, 2023.',
    factLevel: 'confirmed',
    sourceName: 'Rockstar Games YouTube',
    sourceUrl: 'https://www.youtube.com/watch?v=QdBZY2fUAvM'
  },
  {
    id: 'preorder-editions',
    claim: 'Standard, Deluxe, Ultimate, and Collector editions were available for preorder.',
    factLevel: 'confirmed',
    sourceName: 'Rockstar Games Newswire',
    sourceUrl: 'https://www.rockstargames.com/newswire/article/5171972o3ak5oa'
  },
  {
    id: 'ultimate-edition',
    claim: 'Ultimate Edition includes the base game, GTA+ for 12 months, and exclusive in-game items.',
    factLevel: 'confirmed',
    sourceName: 'Rockstar Store',
    sourceUrl: 'https://store.rockstargames.com/game/buy-gta-vi'
  },
  {
    id: 'game-size',
    claim: 'Official file size and system requirements have not been released.',
    factLevel: 'confirmed',
    sourceName: 'Rockstar Games',
    sourceUrl: 'https://www.rockstargames.com/VI'
  },
  {
    id: 'online-mode',
    claim: 'GTA Online successor is expected but not officially confirmed.',
    factLevel: 'credible',
    sourceName: 'Industry reporting',
    sourceUrl: 'https://www.rockstargames.com'
  }
];
