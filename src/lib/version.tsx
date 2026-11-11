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

/* Page layout sub-versions inside v2, for comparing designs of one page.
   Open the page with ?co=a|t|b|c (Company) to switch; the choice is kept
   for that browser tab. Without a choice the page shows COMPANY_DEFAULT
   (B, chosen 27 Oct 2026). '0' keeps the earlier v2 layout reachable.
   Review only: nothing links to these. */
export const COMPANY_LAYOUTS = [
  { id: '0', k: 'Earlier', d: 'Version 2 before the A/B/C rewrite' },
  { id: 'a', k: 'A', d: 'Simple statement' },
  { id: 't', k: 'A · Text', d: 'Simple statement, text only (default)' },
  { id: 'b', k: 'B', d: 'Proof led, sells harder' },
  { id: 'c', k: 'C', d: 'Four chapters' },
] as const;
export type CompanyLayout = (typeof COMPANY_LAYOUTS)[number]['id'];
/* 5 Nov 2026: A · Text became the default (client). B is the earlier default, still reachable. */
export const COMPANY_DEFAULT: CompanyLayout = 't';
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

/* TRMS product page layout sub-versions inside v2 (?tr=a|b|c), same idea
   as the Company layouts. '0' is the v2 page as it was before (27 Oct
   2026) and stays the default until the client picks one. Review only. */
export const TRMS_LAYOUTS = [
  { id: 'g', k: 'G · Mission', d: 'Fresh story: product, problems, capabilities, integration and workflow efficiency' },
  { id: '0', k: 'Current', d: 'Version 2 page as it is' },
  { id: 'a', k: 'A', d: 'Short and simple: four benefits, one training day' },
  { id: 'b', k: 'B', d: 'Proof led: before and after, live screens, honest status' },
  { id: 'c', k: 'C', d: 'Four chapters: plan, train, close, manage' },
  { id: 'd', k: 'D', d: 'Photo story: one training day from booking to results' },
  { id: 'e', k: 'E', d: 'Product brief: outcomes, workflow and honest product status' },
  { id: 'f', k: 'F · New', d: 'Proposal-informed story with animated process diagrams' },
] as const;
export type TrmsLayout = (typeof TRMS_LAYOUTS)[number]['id'];
export const TRMS_DEFAULT: TrmsLayout = '0';
const TR_KEY = 'bs-trms';
const isTr = (s: string | null): s is TrmsLayout => TRMS_LAYOUTS.some((l) => l.id === s);

function initialTr(): TrmsLayout {
  const q = new URLSearchParams(location.search).get('tr');
  if (isTr(q)) { try { sessionStorage.setItem(TR_KEY, q); } catch { /* ignore */ } return q; }
  try { const s = sessionStorage.getItem(TR_KEY); if (isTr(s)) return s; } catch { /* ignore */ }
  return TRMS_DEFAULT;
}

const TrCtx = createContext<{ tr: TrmsLayout; setTr: (t: TrmsLayout) => void }>({ tr: TRMS_DEFAULT, setTr: () => {} });

export function TrmsLayoutProvider({ children }: { children: ReactNode }) {
  const [tr, setState] = useState<TrmsLayout>(initialTr);
  const setTr = (t: TrmsLayout) => { try { sessionStorage.setItem(TR_KEY, t); } catch { /* ignore */ } setState(t); };
  return <TrCtx.Provider value={{ tr, setTr }}>{children}</TrCtx.Provider>;
}
export const useTrmsLayout = () => useContext(TrCtx);

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
