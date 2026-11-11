import { SITE } from '../config/site';
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

/* Site versions. v3 is the default; v1 is the site as it was on 26 Oct
   2026 (git tag v1) and stays viewable for comparison. v3 (28 Oct 2026)
   is v2 plus every v1 section v2 had dropped, with lighter copy; the
   client trims it from there. Open any page with ?v=1, ?v=2 or ?v=3 to
   switch; the choice is kept for that browser tab. */
export type SiteVersion = 1 | 2 | 3;
export const VERSIONS: SiteVersion[] = [1, 2, 3];
export const LATEST: SiteVersion = 3;
/* New key makes the v3 default take effect in tabs that saved the old v2 default. */
const KEY = 'bs-version-v3';

function initial(): SiteVersion {
  /* production: no ?v= switch and no stored choice while the review tools are off */
  if (!SITE.reviewTools) return LATEST;
  const q = new URLSearchParams(location.search).get('v');
  if (q === '1' || q === '2' || q === '3') { try { sessionStorage.setItem(KEY, q); } catch { /* ignore */ } return Number(q) as SiteVersion; }
  try { const s = sessionStorage.getItem(KEY); if (s === '1' || s === '2' || s === '3') return Number(s) as SiteVersion; } catch { /* ignore */ }
  return LATEST;
}

const Ctx = createContext<{ v: SiteVersion; setV: (v: SiteVersion) => void }>({ v: LATEST, setV: () => {} });

export function VersionProvider({ children }: { children: ReactNode }) {
  const [v, setState] = useState<SiteVersion>(initial);
  useEffect(() => { document.documentElement.dataset.v = String(v); }, [v]);
  const setV = (n: SiteVersion) => {
    try { sessionStorage.setItem(KEY, String(n)); } catch { /* ignore */ }
    /* v3 rewrites text in place, so leaving it needs a fresh render */
    if (v === 3 && n !== 3) { location.reload(); return; }
    setState(n);
  };
  return <Ctx.Provider value={{ v, setV }}>{children}</Ctx.Provider>;
}
export const useVersion = () => useContext(Ctx);
/* true when the current version is at least n */
export const useV = (n: SiteVersion) => useContext(Ctx).v >= n;
/* v3 only: true where a v1 section comes back on top of v2. Use as
   `(!v2 || v1back) && <Section />` so v2 itself never changes. */
export const useV1Back = () => useContext(Ctx).v === 3;

/* v3: the home "Partners" section is hidden by default and can be shown
   again from the review panel (client, 4 Nov 2026). Kept per browser tab. */
const PT_KEY = 'bs-partners';
let partnersShown = (() => { try { return sessionStorage.getItem(PT_KEY) === '1'; } catch { return false; } })();
const ptSubs = new Set<() => void>();
export function usePartnersShown() {
  const [, force] = useState(0);
  useEffect(() => { const f = () => force((n) => n + 1); ptSubs.add(f); return () => { ptSubs.delete(f); }; }, []);
  const setShown = (on: boolean) => {
    partnersShown = on;
    try { sessionStorage.setItem(PT_KEY, on ? '1' : '0'); } catch { /* ignore */ }
    ptSubs.forEach((f) => f());
  };
  return { partners: partnersShown, setPartners: setShown };
}
