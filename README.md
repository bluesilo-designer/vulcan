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

## Before go-live

- `SITE.indexable` is `false` (noindex everywhere, robots.txt disallows all). Flip it only
  with sign-off.
- `SITE.reviewTools` shows the Content panel. Set to `false`.
- Confirm `SITE.url`, used for canonical and Open Graph URLs.
