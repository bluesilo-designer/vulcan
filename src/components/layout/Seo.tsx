import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE } from '../../config/site';
import { metaFor } from '../../config/routes';

/* Writes title, description, canonical, robots, Open Graph and Twitter
   tags for the current route straight into <head>, synchronously, so the
   tab title and link previews never lag behind navigation. The same
   values are baked into static HTML per route at build time. */
function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) { el = document.createElement('meta'); el.setAttribute(attr, key); document.head.appendChild(el); }
  el.content = content;
}
function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) { el = document.createElement('link'); el.rel = rel; document.head.appendChild(el); }
  el.href = href;
}

export function Seo({ title, description, image }: { title?: string; description?: string; image?: string }) {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    const m = metaFor(pathname);
    /* Unknown routes are described by the page itself (NotFound). */
    if (!m && !title) return;
    const t = title ?? m?.title;
    const full = !t || t === SITE.defaultTitle ? SITE.defaultTitle : `${t}. ${SITE.titleSuffix}`;
    const desc = description ?? m?.description ?? SITE.defaultDescription;
    const url = SITE.url + pathname;
    const img = SITE.url + (image ?? m?.image ?? SITE.ogImage);
    document.title = full;
    setMeta('name', 'description', desc);
    setMeta('name', 'robots', SITE.indexable ? 'index,follow' : 'noindex,nofollow');
    setLink('canonical', url);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', SITE.name);
    setMeta('property', 'og:locale', SITE.locale);
    setMeta('property', 'og:title', full);
    setMeta('property', 'og:description', desc);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:image', img);
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', full);
    setMeta('name', 'twitter:description', desc);
    setMeta('name', 'twitter:image', img);
  }, [pathname, title, description, image]);
  return null;
}
