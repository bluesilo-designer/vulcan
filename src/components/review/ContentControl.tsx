import { useEffect, useRef, useState } from 'react';
import { HERO_CUTS, LOOKS, LOOKS_SHOWN, PHOTO_SETS, PRODUCT_IMAGE_SETS } from '../../content/media';
import { isReady } from '../../lib/media';
import { DEFAULTS, useReview } from '../../lib/review';
import { VERSIONS, COMPANY_DEFAULT, COMPANY_LAYOUTS, HOME_DEFAULT, HOME_LAYOUTS, TRMS_DEFAULT, TRMS_LAYOUTS, useCompanyLayout, useHomeLayout, useTrmsLayout, useVersion } from '../../lib/version';

type Look = { id: string; k: string; d: string; sw: string[] };
type Cut = { id: string; k: string; d: string };
type PSet = { id: string; k: string; d: string };

/* Review only. Most used first: site version, image set, page layouts;
   the product page imagery and hero film sit under "More options".
   Turned off with SITE.reviewTools before go-live. */
export function ContentControl() {
  const { state, set, reset } = useReview();
  const { v, setV } = useVersion();
  const { co, setCo } = useCompanyLayout();
  const { tr, setTr } = useTrmsLayout();
  const { hm, setHm } = useHomeLayout();
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
    if (state.photo && state.photo !== DEFAULTS.photo) u.searchParams.set('photo', state.photo); else u.searchParams.delete('photo');
    if (co !== COMPANY_DEFAULT) u.searchParams.set('co', co); else u.searchParams.delete('co');
    if (hm !== HOME_DEFAULT) u.searchParams.set('hm', hm); else u.searchParams.delete('hm');
    if (tr !== TRMS_DEFAULT) u.searchParams.set('tr', tr); else u.searchParams.delete('tr');
    if (state.hero) u.searchParams.set('hero', state.hero); else u.searchParams.delete('hero');
    const t = u.toString();
    (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject())
      .then(() => { setCopied(true); setTimeout(() => setCopied(false), 1600); }, () => prompt('Link', t));
  };
  const cuts = HERO_CUTS as Cut[];
  const curHero = state.hero || DEFAULTS.hero;
  /* v2/v3: a photography set, when chosen, overrides the image set below it */
  const photoOn = v >= 2 && (state.photo || DEFAULTS.photo) !== 'prev';
  const layouts = [
    /* Home: Current or Slider; which slider is chosen in its own group below */
    { k: 'Home', items: [{ id: '0', k: 'Current', d: HOME_LAYOUTS[0].d }, { id: 's', k: 'Slider', d: 'Image slider home' }],
      cur: hm === '0' ? '0' : 's', pick: (id: string) => setHm((id === 's' && hm !== '0' ? hm : id) as typeof hm) },
    { k: 'Company', items: COMPANY_LAYOUTS, cur: co, pick: (id: string) => setCo(id as typeof co) },
    { k: 'TRMS page', items: TRMS_LAYOUTS, cur: tr, pick: (id: string) => setTr(id as typeof tr) },
  ];

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
            {VERSIONS.map((n) => (
              <button key={n} type="button" className={v === n ? 'is-on' : ''} onClick={() => setV(n)}>Version {n}</button>
            ))}
          </div>
        </fieldset>
        {v >= 2 && <fieldset>
          <legend>Slider style (home)</legend>
          {HOME_LAYOUTS.filter((l) => l.id !== '0').map((l) => (
            <label className="v6ctl__opt" key={l.id}>
              <input type="radio" name="v6slider" checked={hm === l.id} onChange={() => setHm(l.id)} />
              <span><b>{l.k}</b><em>{l.d}</em></span>
            </label>
          ))}
        </fieldset>}
        <fieldset>
          <legend>Image set</legend>
          {v >= 2 && (PHOTO_SETS as Look[]).map((l) => (
            <label className="v6ctl__opt" key={l.id}>
              <input type="radio" name="v6look" checked={photoOn && (state.photo || DEFAULTS.photo) === l.id} onChange={() => set({ photo: l.id })} />
              <span className="v6ctl__sw">{l.sw.map((c) => <i key={c} style={{ background: c }} />)}</span>
              <span><b>{l.k}</b><em>{l.d}</em></span>
            </label>
          ))}
          {v >= 2 && <span className="v6ctl__sub">Earlier sets</span>}
          {(LOOKS as Look[]).filter((l) => LOOKS_SHOWN.includes(l.id)).map((l) => (
            <label className="v6ctl__opt" key={l.id}>
              <input type="radio" name="v6look" checked={!photoOn && state.look === l.id} onChange={() => set(v >= 2 ? { look: l.id, photo: 'prev' } : { look: l.id })} />
              <span className="v6ctl__sw">{l.sw.map((c) => <i key={c} style={{ background: c }} />)}</span>
              <span><b>{l.k}</b><em>{l.d}</em></span>
            </label>
          ))}
        </fieldset>
        {v >= 2 && <fieldset>
          <legend>Page layout</legend>
          {layouts.map((g) => (
            <div className="v6ctl__row" key={g.k}><span>{g.k}</span>
              <div className="v6ctl__cuts">
                {g.items.map((l) => (
                  <button key={l.id} type="button" className={g.cur === l.id ? 'is-on' : ''} title={l.d} onClick={() => g.pick(l.id)}>{l.k}</button>
                ))}
              </div></div>
          ))}
        </fieldset>}
        <details className="v6ctl__more">
          <summary>More options</summary>
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
        </details>
        <div className="v6ctl__foot">
          <button type="button" onClick={copy}>{copied ? 'Copied' : 'Copy link'}</button>
          <button type="button" onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
}
