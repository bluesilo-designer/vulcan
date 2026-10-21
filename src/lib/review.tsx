import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

/* Review-only state behind the Content panel: image look, product image
   set and hero cut. Saved per browser and shareable as ?look=&pset=&hero=. */
export type ReviewState = { look: string; pset: string; hero?: string };
const KEY = 'v6ctl';

function initial(): ReviewState {
  let s: Partial<ReviewState> = {};
  try { s = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch { /* private mode */ }
  const q = new URLSearchParams(location.search);
  if (q.get('look')) s.look = q.get('look')!;
  if (q.get('pset')) s.pset = q.get('pset')!;
  if (q.get('hero')) s.hero = q.get('hero')!;
  return { look: s.look || 'original', pset: s.pset || 'steel', hero: s.hero };
}

const Ctx = createContext<{ state: ReviewState; set: (p: Partial<ReviewState>) => void; reset: () => void }>(null!);

export function ReviewProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ReviewState>(initial);
  useEffect(() => { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch { /* ignore */ } }, [state]);
  return (
    <Ctx.Provider value={{ state, set: (p) => setState((s) => ({ ...s, ...p })), reset: () => setState({ look: 'original', pset: 'steel' }) }}>
      {children}
    </Ctx.Provider>
  );
}
export const useReview = () => useContext(Ctx);
