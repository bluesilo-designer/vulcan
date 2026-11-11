/* After `vite build`: give every route its own index.html with the right
   <head> (title, description, canonical, Open Graph, Twitter, robots),
   so crawlers and link previews read real meta without running JS.
   Also writes 404.html (SPA fallback for static hosts), robots.txt and,
   sitemap.xml (always; robots.txt links it only when the site is indexable). */
import { build } from 'esbuild';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const dist = path.join(root, 'dist');
const tmp = path.join(root, 'node_modules/.cache/prerender-meta.mjs');

await build({
  stdin: { contents: "export { ROUTE_META } from './src/config/routes.ts'; export { SITE } from './src/config/site.ts';", resolveDir: root, loader: 'ts' },
  bundle: true, format: 'esm', platform: 'node', outfile: tmp, logLevel: 'error',
});
const { ROUTE_META, SITE } = await import(tmp + '?t=' + Date.now());

const base = (process.env.SITE_BASE || '/').replace(/\/?$/, '/');
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');

function head(r) {
  const title = r.title === SITE.defaultTitle ? r.title : `${r.title}. ${SITE.titleSuffix}`;
  const url = SITE.url + r.path;
  const img = SITE.url + (r.image || SITE.ogImage);
  return [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(r.description)}">`,
    `<link rel="canonical" href="${esc(url)}">`,
    `<meta name="robots" content="${SITE.indexable ? 'index,follow' : 'noindex,nofollow'}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="${esc(SITE.name)}">`,
    `<meta property="og:locale" content="${SITE.locale}">`,
    `<meta property="og:title" content="${esc(title)}">`,
    `<meta property="og:description" content="${esc(r.description)}">`,
    `<meta property="og:url" content="${esc(url)}">`,
    `<meta property="og:image" content="${esc(img)}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${esc(title)}">`,
    `<meta name="twitter:description" content="${esc(r.description)}">`,
    `<meta name="twitter:image" content="${esc(img)}">`,
    `<meta property="og:image:width" content="1200">`,
    `<meta property="og:image:height" content="630">`,
    /* no slogan: the client removed the tagline from the logo (11 Nov 2026) */
    `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@type': 'Organization',
      name: SITE.legalName, alternateName: SITE.name, url: SITE.url, logo: SITE.url + '/apple-touch-icon.png',
      address: { '@type': 'PostalAddress', addressCountry: 'SG' } })}</script>`,
  ].join('\n');
}
const withHead = (r) => template.replace(/<!--seo-->[\s\S]*?<!--\/seo-->/, head(r));

for (const r of ROUTE_META) {
  const dir = path.join(dist, r.path);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), withHead(r));
}
fs.writeFileSync(path.join(dist, '404.html'), withHead({ path: '/404', title: 'Page not found', description: 'The page you asked for does not exist.' }));
fs.writeFileSync(path.join(dist, 'robots.txt'), SITE.indexable
  ? `User-agent: *\nAllow: /\nSitemap: ${SITE.url}${base}sitemap.xml\n`
  : 'User-agent: *\nDisallow: /\n');
{
  /* Always written (11 Nov 2026): the sitemap exists even while the site is noindex.
     robots.txt only points to it once the site is indexable. */
  fs.writeFileSync(path.join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    ROUTE_META.map((r) => `  <url><loc>${SITE.url}${r.path}</loc></url>`).join('\n') + '\n</urlset>\n');
}
console.log(`prerendered ${ROUTE_META.length} routes + sitemap${SITE.indexable ? '' : ' (noindex)'}`);
