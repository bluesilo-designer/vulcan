# Blue Silo

Corporate site for Blue Silo Pte. Ltd., defence and security technology.

React 18 + TypeScript + Vite, routed with React Router. Builds to static files.

## Run

```bash
npm install
npm run dev        # http://localhost:3100
npm run build      # typecheck, build, prerender per-route <head> into dist/
npm run preview    # serve dist/ on :3100
```

Deploy `dist/` to any static host. `dist/404.html` is the single-page fallback;
set `SITE_BASE=/sub/path/` at build time if the site is not served from the root.

## Structure

```
index.html                 HTML shell; <!--seo--> block is replaced per route at build
public/media/              images and films, served as-is
public/favicon.svg
scripts/prerender.mjs      per-route index.html with meta, 404.html, robots.txt, sitemap.xml
src/
  main.tsx  App.tsx        entry and routes
  config/site.ts           site name, URL, indexable flag, review tools flag
  config/routes.ts         title and description for every route
  content/                 all copy and data, one module per area
  components/layout/       Header, Footer, Layout, Seo
  components/ui/           Band, Table, Media, Closer, Icon, Topo
  components/sections/     home/, product/, shared/ sections
  components/review/       Content panel (review only)
  pages/                   one component per route
  lib/                     media paths, image sets, review state
  hooks/useReveal.ts       scroll reveal
  styles/                  design system CSS
```

## Deploy (Vercel)

- Framework preset: Vite. Build command `npm run build`, output directory `dist`.
- `vercel.json` adds security headers (nosniff, frame deny, referrer policy,
  permissions policy, HSTS) and long-term caching for `/assets/*`.
- Every public route is prerendered to its own `index.html` with title, description,
  canonical, Open Graph, Twitter card, robots and JSON-LD. Unknown paths get `404.html`
  (status 404), which loads the app and shows "Page not found".
- Node 18+ (the prerender script uses `import.meta.dirname`, Node 20.11+ recommended).

## Before go-live

Done:
- Review tools are off (`SITE.reviewTools = false`): no Content panel, no `/__demo`,
  `?v=` is ignored, every visitor gets the latest version.
- Privacy and Terms pages are hidden (`page.privacy`, `page.terms` in `HIDDEN_SECTIONS`).
- Only product pages listed in `LIVE_PRODUCTS` (`src/config/site.ts`) are open; the others
  show "Coming soon" and their URLs redirect to `/products`.

Still open, needs a decision:
- **Production domain.** `SITE.url` is `https://bluesilo.studio`, which currently serves a
  different site. Set it to the real domain before indexing; it drives canonical,
  sitemap and Open Graph URLs.
- **Indexing.** `SITE.indexable` is `false` (noindex everywhere, robots.txt disallows all).
  Set it to `true` once the domain is right, rebuild, and check `/robots.txt` and
  `/sitemap.xml`.
- **Contact form** does not send anything yet (it prepares a brief the visitor can copy),
  and the site shows no email address. Needs a destination address or a form service.
- **Security page** still shows "Draft, pending legal review".
