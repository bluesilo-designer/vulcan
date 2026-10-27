import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

/* Site versions. v2 is the default; v1 is the site as it was on 26 Oct
   2026 (git tag v1) and stays viewable for comparison. Open any page with
   ?v=1 or ?v=2 to switch; the choice is kept for that browser tab. */
export type SiteVersion = 1 | 2;
export const LATEST: SiteVersion = 2;
const KEY = 'bs-version';

function initial(): SiteVersion {
  const q = new URLSearchParams(location.search).get('v');
  if (q === '1' || q === '2') { try { sessionStorage.setItem(KEY, q); } catch { /* ignore */ } return Number(q) as SiteVersion; }
  try { const s = sessionStorage.getItem(KEY); if (s === '1' || s === '2') return Number(s) as SiteVersion; } catch { /* ignore */ }
  return LATEST;
}

const Ctx = createContext<{ v: SiteVersion; setV: (v: SiteVersion) => void }>({ v: LATEST, setV: () => {} });

export function VersionProvider({ children }: { children: ReactNode }) {
  const [v, setState] = useState<SiteVersion>(initial);
  useEffect(() => { document.documentElement.dataset.v = String(v); }, [v]);
  const setV = (n: SiteVersion) => { try { sessionStorage.setItem(KEY, String(n)); } catch { /* ignore */ } setState(n); };
  return <Ctx.Provider value={{ v, setV }}>{children}</Ctx.Provider>;
}
export const useVersion = () => useContext(Ctx);
/* true when the current version is at least n */
export const useV = (n: SiteVersion) => useContext(Ctx).v >= n;

/* Page layout sub-versions inside v2, for comparing designs of one page.
   Open the page with ?co=a|b|c (Company) to switch; the choice is kept
   for that browser tab. Without a choice the page shows COMPANY_DEFAULT
   (B, chosen 27 Oct 2026). '0' keeps the earlier v2 layout reachable.
   Review only: nothing links to these. */
export const COMPANY_LAYOUTS = [
  { id: '0', k: 'Earlier', d: 'Version 2 before the A/B/C rewrite' },
  { id: 'a', k: 'A', d: 'Simple statement' },
  { id: 'b', k: 'B', d: 'Proof led, sells harder (default)' },
  { id: 'c', k: 'C', d: 'Four chapters' },
] as const;
export type CompanyLayout = (typeof COMPANY_LAYOUTS)[number]['id'];
export const COMPANY_DEFAULT: CompanyLayout = 'b';
const CO_KEY = 'bs-company';
const isCo = (s: string | null): s is CompanyLayout => COMPANY_LAYOUTS.some((l) => l.id === s);

function initialCo(): CompanyLayout {
  const q = new URLSearchParams(location.search).get('co');
  if (isCo(q)) { try { sessionStorage.setItem(CO_KEY, q); } catch { /* ignore */ } return q; }
  try { const s = sessionStorage.getItem(CO_KEY); if (isCo(s)) return s; } catch { /* ignore */ }
  return COMPANY_DEFAULT;
}

const CoCtx = createContext<{ co: CompanyLayout; setCo: (c: CompanyLayout) => void }>({ co: COMPANY_DEFAULT, setCo: () => {} });

export function CompanyLayoutProvider({ children }: { children: ReactNode }) {
  const [co, setState] = useState<CompanyLayout>(initialCo);
  const setCo = (c: CompanyLayout) => { try { sessionStorage.setItem(CO_KEY, c); } catch { /* ignore */ } setState(c); };
  return <CoCtx.Provider value={{ co, setCo }}>{children}</CoCtx.Provider>;
}
export const useCompanyLayout = () => useContext(CoCtx);
