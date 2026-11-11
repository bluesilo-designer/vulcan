import { useEffect, useRef, useState } from 'react';
import { HERO_CUTS, LOOKS, LOOKS_SHOWN, PHOTO_SETS } from '../../content/media';
import { isReady } from '../../lib/media';
import { DEFAULTS, useReview } from '../../lib/review';
import { VERSIONS, useVersion, usePartnersShown } from '../../lib/version';

type Group = 'global' | 'home';
type Look = { id: string; k: string; d: string; sw: string[] };
type Cut = { id: string; k: string; d: string };
const GROUPS: { id: Group; label: string }[] = [
  { id: 'global', label: 'Global' }, { id: 'home', label: 'Home' },
];
const initialGroup = (): Group => {
  const path = location.pathname;
  return path === '/' ? 'home' : 'global';
};

/* Review-only controls. Each tab contains settings for one affected page. */
export function ContentControl() {
  const { state, set, reset } = useReview();
  const { v, setV } = useVersion();
  const { partners, setPartners } = usePartnersShown();
  const [open, setOpen] = useState(false);
  const [group, setGroup] = useState<Group>(initialGroup);
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
    u.searchParams.delete('pset');
    if (state.photo && state.photo !== DEFAULTS.photo) u.searchParams.set('photo', state.photo); else u.searchParams.delete('photo');
    u.searchParams.delete('co');
    u.searchParams.delete('tr');
    if (state.hero) u.searchParams.set('hero', state.hero); else u.searchParams.delete('hero');
    const t = u.toString();
    (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject())
      .then(() => { setCopied(true); setTimeout(() => setCopied(false), 1600); }, () => prompt('Link', t));
  };
  const photoOn = v >= 2 && (state.photo || DEFAULTS.photo) !== 'prev';
  const curHero = state.hero || DEFAULTS.hero;
  return <div className="v6ctl" id="v6ctl">
    <button ref={fab} type="button" className="v6ctl__fab" aria-expanded={open} aria-controls="v6ctlBody" onClick={() => setOpen((o) => !o)}><i className="ph ph-sliders" aria-hidden="true" /><span>Content</span></button>
    <div className="v6ctl__body" id="v6ctlBody" hidden={!open}>
      <div className="v6ctl__h"><b>Content control</b><span>Review only</span></div>
      <div className="v6ctl__tabs" role="tablist" aria-label="Affected page">
        {GROUPS.map((item) => <button key={item.id} type="button" role="tab" aria-selected={group === item.id} aria-controls="v6ctlPanel" className={group === item.id ? 'is-on' : ''} onClick={() => setGroup(item.id)}>{item.label}</button>)}
      </div>
      <div id="v6ctlPanel" role="tabpanel" className="v6ctl__panel">
        {group === 'global' && <>
          <p className="v6ctl__hint">Settings that affect multiple pages.</p>
          <fieldset><legend>Site version</legend><div className="v6ctl__cuts">{VERSIONS.map((n) => <button key={n} type="button" className={v === n ? 'is-on' : ''} onClick={() => setV(n)}>Version {n}</button>)}</div></fieldset>
          <fieldset><legend>Site image set</legend>
            {v >= 2 && (PHOTO_SETS as Look[]).map((l) => <label className="v6ctl__opt" key={l.id}><input type="radio" name="v6look" checked={photoOn && (state.photo || DEFAULTS.photo) === l.id} onChange={() => set({ photo: l.id })} /><span className="v6ctl__sw">{l.sw.map((c) => <i key={c} style={{ background: c }} />)}</span><span><b>{l.k}</b><em>{l.d}</em></span></label>)}
            {v >= 2 && <span className="v6ctl__sub">Earlier sets</span>}
            {(LOOKS as Look[]).filter((l) => LOOKS_SHOWN.includes(l.id)).map((l) => <label className="v6ctl__opt" key={l.id}><input type="radio" name="v6look" checked={!photoOn && state.look === l.id} onChange={() => set(v >= 2 ? { look: l.id, photo: 'prev' } : { look: l.id })} /><span className="v6ctl__sw">{l.sw.map((c) => <i key={c} style={{ background: c }} />)}</span><span><b>{l.k}</b><em>{l.d}</em></span></label>)}
          </fieldset>
        </>}
        {group === 'home' && <>
          <p className="v6ctl__hint">Homepage sections and hero treatment.</p>
          {v === 3 && <fieldset><legend>Partners section</legend><div className="v6ctl__cuts"><button type="button" className={!partners ? 'is-on' : ''} onClick={() => setPartners(false)}>Hidden</button><button type="button" className={partners ? 'is-on' : ''} onClick={() => setPartners(true)}>Shown</button></div></fieldset>}
          <fieldset><legend>Hero film</legend><div className="v6ctl__cuts">{(HERO_CUTS as Cut[]).map((c) => <button key={c.id} type="button" className={curHero === c.id ? 'is-on' : ''} disabled={!isReady(c.id)} title={c.d} onClick={() => set({ hero: c.id })}>{c.k}</button>)}</div></fieldset>
        </>}
      </div>
      <div className="v6ctl__foot"><button type="button" onClick={copy}>{copied ? 'Copied' : 'Copy link'}</button><button type="button" onClick={reset}>Reset</button></div>
    </div>
  </div>;
}
