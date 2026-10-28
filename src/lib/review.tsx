import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { useVersion } from './version';
import { setMediaSwap } from './media';
import { fieldSwap } from '../content/media';

/* Review-only state behind the Content panel: image look, product image
   set and hero cut. The public site always shows DEFAULTS. The panel, the
   saved choice and the ?look=&pset=&hero= overrides only exist after
   visiting /__demo, and last for that browser tab. */
export type ReviewState = { look: string; pset: string; hero?: string; photo?: string };
const KEY = 'v6ctl';
const DEMO_KEY = 'v6demo';
/* photo: 'field' is the 28 Oct photography set in v2/v3, 'prev' the earlier one */
export const DEFAULTS: ReviewState = { look: 'golden2', pset: 'steel', hero: 'hero-e', photo: 'field' };

function initialDemo(): boolean {
  try { return sessionStorage.getItem(DEMO_KEY) === '1'; } catch { return false; }
}

function initial(): ReviewState {
  let s: Partial<ReviewState> = {};
  try { s = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch { /* private mode */ }
  const q = new URLSearchParams(location.search);
  if (q.get('look')) s.look = q.get('look')!;
  if (q.get('pset')) s.pset = q.get('pset')!;
  if (q.get('hero')) s.hero = q.get('hero')!;
  if (q.get('photo')) s.photo = q.get('photo')!;
  return { look: s.look || DEFAULTS.look, pset: s.pset || DEFAULTS.pset, hero: s.hero || DEFAULTS.hero, photo: s.photo || DEFAULTS.photo };
}

type Ctxt = { state: ReviewState; demo: boolean; enableDemo: () => void; set: (p: Partial<ReviewState>) => void; reset: () => void };
const Ctx = createContext<Ctxt>(null!);

export function ReviewProvider({ children }: { children: ReactNode }) {
  const [demo, setDemo] = useState(initialDemo);
  const [chosen, setChosen] = useState<ReviewState>(initial);
  useEffect(() => { if (demo) try { localStorage.setItem(KEY, JSON.stringify(chosen)); } catch { /* ignore */ } }, [demo, chosen]);
  const state = demo ? chosen : DEFAULTS;
  /* Set before children render, so every mediaUrl call this pass agrees */
  const { v } = useVersion();
  setMediaSwap(v >= 2 && state.photo !== 'prev' ? fieldSwap : null);
  const enableDemo = () => {
    try { sessionStorage.setItem(DEMO_KEY, '1'); } catch { /* ignore */ }
    setDemo(true);
  };
  return (
    <Ctx.Provider value={{
      state, demo, enableDemo,
      set: (p) => setChosen((s) => ({ ...s, ...p })),
      reset: () => setChosen({ ...DEFAULTS }),
    }}>
      {children}
    </Ctx.Provider>
  );
}
export const useReview = () => useContext(Ctx);
