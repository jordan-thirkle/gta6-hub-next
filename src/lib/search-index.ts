import { ARTICLES, Article } from '../app/articles/data';
import { VEHICLES, Vehicle } from '../app/vehicles/data';

export interface SearchResult {
  type: 'article' | 'vehicle' | 'guide' | 'faq';
  title: string;
  description: string;
  url: string;
  matches: string[];
}

// Static index built at build time
function buildSearchIndex(): SearchResult[] {
  const results: SearchResult[] = [];

  // Index articles
  for (const a of ARTICLES) {
    results.push({
      type: 'article',
      title: a.title,
      description: a.summary,
      url: `/articles/${a.slug}`,
      matches: [a.title, a.summary, ...a.factIds],
    });
  }

  // Index vehicles
  for (const v of VEHICLES) {
    results.push({
      type: 'vehicle',
      title: v.name,
      description: v.description,
      url: `/vehicles#${v.id}`,
      matches: [v.name, v.description, v.category, v.source],
    });
  }

  // Index guides
  const GUIDES: { title: string; description: string; url: string }[] = [
    { title: 'Map Comparison: GTA 6 vs GTA 5', description: 'Side-by-side map size comparison between Vice City, Los Santos, and Liberty City.', url: '/guides/map-comparison' },
    { title: 'GTA 6 Online Guide', description: 'Everything about GTA 6 Online, cross-play, GTA+, and multiplayer features.', url: '/guides/online' },
    { title: 'Preorder Deals Guide', description: 'Best preorder deals and retailer bonuses for GTA 6.', url: '/guides/preorder-deals' },
    { title: 'GTA 6 Weapons Guide', description: 'Expected weapons arsenal based on trailers and GTA 5 precedent.', url: '/guides/weapons' },
  ];
  for (const g of GUIDES) {
    results.push({
      type: 'guide',
      title: g.title,
      description: g.description,
      url: g.url,
      matches: [g.title, g.description],
    });
  }

  return results;
}

export const SEARCH_INDEX = buildSearchIndex();

export function search(query: string): SearchResult[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  return SEARCH_INDEX
    .map(item => {
      // Score by match quality
      let score = 0;
      const allText = item.matches.concat([item.title, item.description]).map(t => t.toLowerCase());
      
      for (const text of allText) {
        if (text.includes(q)) score += text === q ? 3 : 1;
      }

      // Boost exact title matches
      if (item.title.toLowerCase() === q) score += 5;
      if (item.title.toLowerCase().includes(q)) score += 2;

      return { ...item, score };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 20)
    .map(({ score, ...item }) => item); // strip score from output
}
