import { useEffect, useRef, useState } from 'react';
import { HERO_CUTS, LOOKS, PRODUCT_IMAGE_SETS } from '../../content/media';
import { isReady } from '../../lib/media';
import { DEFAULTS, useReview } from '../../lib/review';
import { useVersion } from '../../lib/version';

type Look = { id: string; k: string; d: string; sw: string[] };
type Cut = { id: string; k: string; d: string };
type PSet = { id: string; k: string; d: string };

/* Review only. Switches the homepage image look, the product page image
   set and the hero film. Turned off with SITE.reviewTools before go-live. */
export function ContentControl() {
  const { state, set, reset } = useReview();
  const { v, setV } = useVersion();
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const fab = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const key = (e: KeyboardEvent) => { if (e.key === 'Escape') { setOpen(false); fab.current?.focus(); } };
    document.addEventListener('keydown', key);
    return () => document.removeEventListener('keydown', key);
  }, [open]);

  const copy = () => {
    const u = new URL(location.href);
    u.searchParams.set('look', state.look);
    u.searchParams.set('pset', state.pset);
    if (state.hero) u.searchParams.set('hero', state.hero); else u.searchParams.delete('hero');
    const t = u.toString();
    (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject())
      .then(() => { setCopied(true); setTimeout(() => setCopied(false), 1600); }, () => prompt('Link', t));
  };
  const cuts = HERO_CUTS as Cut[];
  const curHero = state.hero || DEFAULTS.hero;

  return (
    <div className="v6ctl" id="v6ctl">
      <button ref={fab} type="button" className="v6ctl__fab" aria-expanded={open} aria-controls="v6ctlBody" onClick={() => setOpen((o) => !o)}>
        <i className="ph ph-sliders" aria-hidden="true" /><span>Content</span>
      </button>
      <div className="v6ctl__body" id="v6ctlBody" hidden={!open}>
        <div className="v6ctl__h"><b>Content control</b><span>Review only</span></div>
        <fieldset>
          <legend>Site version</legend>
          <div className="v6ctl__cuts">
            {([1, 2] as const).map((n) => (
              <button key={n} type="button" className={v === n ? 'is-on' : ''} onClick={() => setV(n)}>Version {n}</button>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend>Image set</legend>
          {(LOOKS as Look[]).map((l) => (
            <label className="v6ctl__opt" key={l.id}>
              <input type="radio" name="v6look" value={l.id} checked={state.look === l.id} onChange={() => set({ look: l.id })} />
              <span className="v6ctl__sw">{l.sw.map((c) => <i key={c} style={{ background: c }} />)}</span>
              <span><b>{l.k}</b><em>{l.d}</em></span>
            </label>
          ))}
        </fieldset>
        <fieldset>
          <legend>Product page imagery</legend>
          {(PRODUCT_IMAGE_SETS as PSet[]).map((l) => (
            <label className="v6ctl__opt" key={l.id}>
              <input type="radio" name="v6pset" value={l.id} checked={state.pset === l.id} onChange={() => set({ pset: l.id })} />
              <span><b>{l.k}</b><em>{l.d}</em></span>
            </label>
          ))}
        </fieldset>
        <fieldset>
          <legend>Hero film</legend>
          <div className="v6ctl__cuts">
            {cuts.map((c) => (
              <button key={c.id} type="button" className={curHero === c.id ? 'is-on' : ''} disabled={!isReady(c.id)} title={c.d}
                onClick={() => set({ hero: c.id })}>{c.k}</button>
            ))}
          </div>
        </fieldset>
        <div className="v6ctl__foot">
          <button type="button" onClick={copy}>{copied ? 'Copied' : 'Copy link'}</button>
          <button type="button" onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
}
