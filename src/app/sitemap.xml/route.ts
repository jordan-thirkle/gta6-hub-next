import { NextResponse } from 'next/server';
import { ARTICLES } from '../articles/data';

export const dynamic = 'force-static';

export function GET() {
  const now = '2026-07-03';
  const staticUrls = [
    { path: '/', lastmod: now, priority: '1.0' },
    { path: '/news', lastmod: now, priority: '0.8' },
    { path: '/guides', lastmod: now, priority: '0.8' },
    { path: '/guides/online', lastmod: now, priority: '0.7' },
    { path: '/guides/weapons', lastmod: now, priority: '0.7' },
    { path: '/guides/map-comparison', lastmod: now, priority: '0.7' },
    { path: '/guides/preorder-deals', lastmod: now, priority: '0.8' },
    { path: '/map', lastmod: now, priority: '0.7' },
    { path: '/vehicles', lastmod: now, priority: '0.8' },
    { path: '/faq', lastmod: now, priority: '0.8' },
    { path: '/release', lastmod: now, priority: '0.7' },
    { path: '/privacy', lastmod: now, priority: '0.3' },
    { path: '/articles', lastmod: now, priority: '0.9' },
  ];
  const articleUrls = ARTICLES.map((a) => ({
    path: `/articles/${a.slug}`,
    lastmod: now,
    priority: '0.7',
  }));
  const standaloneArticles = ['/articles/trailer-breakdown', '/articles/protagonists-detailed'];
  const standaloneUrls = standaloneArticles.map((path) => ({ path, lastmod: now, priority: '0.7' }));
  const allUrls = [...staticUrls, ...articleUrls, ...standaloneUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map((u) => `  <url><loc>https://gta6-hub-next.vercel.app${u.path}</loc><lastmod>${u.lastmod}</lastmod><priority>${u.priority}</priority></url>`).join('\n')}
</urlset>`;

  return new NextResponse(xml, { headers: { 'content-type': 'application/xml' } });
}
