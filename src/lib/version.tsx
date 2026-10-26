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
