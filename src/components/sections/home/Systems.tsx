import { useRef, useState, type KeyboardEvent } from 'react';
import { Link } from 'react-router-dom';
import { Band } from '../../ui/Band';
import { Icon } from '../../ui/Icon';
import { EXPLORER_IMAGES, TILES } from '../../../content/home';
import { brandOf, productOf } from '../../../content/products';
import { mediaUrl } from '../../../lib/media';
import { chipLabel, chipTitle } from './shared';

type Tile = [string, string, string];
const tiles = TILES as unknown as Tile[];
const TOP: [string, string[]][] = [['Train', ['trms']], ['Operate', ['rcs']], ['Account', ['ewms', 'eams', 'pwats']]];

function Diagram() {
  const chip = (id: string) => {
    const b = brandOf(id)!;
    return <Link className="v6dg__c" to={`/products/${id}`} title={chipTitle(b)} key={id}>{chipLabel(b)}</Link>;
  };
  const node = (k: string, ids: string[], mod = '') => (
    <div className={'v6dg__n' + mod} key={k}><span className="v6dg__k">{k}</span><span className="v6dg__l">{ids.map(chip)}</span></div>
  );
  return (
    <figure className="v6dg rv" aria-label="Blue Silo systems, grouped by function">
      <figcaption className="v6dg__t">Blue Silo systems</figcaption>
      <div className="v6dg__row v6dg__row--3">{TOP.map((t) => node(t[0], t[1]))}</div>
      <div className="v6dg__bus" aria-hidden="true">
        <i className="v6f v6f--y v6f--a"></i><i className="v6f v6f--y v6f--a"></i><i className="v6f v6f--y v6f--a"></i>
        <b className="v6f v6f--x v6f--l"></b><b className="v6f v6f--x v6f--r"></b>
        <u className="v6f v6f--y v6f--b"></u><em className="v6dg__dot"></em>
      </div>
      <div className="v6dg__row">{node('Monitor', ['hums', 'vms'], ' v6dg__n--m')}</div>
      <div className="v6dg__link" aria-hidden="true"><u className="v6f v6f--y v6f--c"></u></div>
      <div className="v6dg__row">{node('Govern', ['as'], ' v6dg__n--g')}</div>
    </figure>
  );
}

function TileLink({ t }: { t: Tile }) {
  const [fn, id, d] = t, p = productOf(id), b = brandOf(id);
  if (!p || !b) return null;
  return (
    <Link className="v6tile" to={`/products/${id}`}>
      <span className="v6tile__fn">{fn}</span>
      <Icon name={p.icon} />
      {b.brand && <span className="v6tile__b">{b.brand}</span>}
      <span className="v6tile__s">{b.sys}</span>
      <p>{d}</p>
      {b.partner && <span className="v6tile__p">Partner, {b.partner}</span>}
      <span className="v6tile__go">Explore {b.acr} <Icon name="ph-arrow-right" /></span>
    </Link>
  );
}

function ExplorerPanel({ id }: { id: string }) {
  const t = tiles.find((x) => x[1] === id), p = productOf(id), b = brandOf(id);
  if (!t || !p || !b) return null;
  return (
    <>
      <figure className="v6x__img"><img src={mediaUrl((EXPLORER_IMAGES as Record<string, string>)[id] + '.jpg')} alt="" decoding="async" />
        <span className="v6x__fnb">{t[0]}</span></figure>
      <div className="v6x__body">
        <div className="v6x__head"><Icon name={p.icon} />
          <div><h3>{b.brand || b.acr}</h3><span className="v6x__sys">{b.sys}</span></div>
          {b.partner && <span className="v6x__partner">Partner, {b.partner}</span>}
        </div>
        <p className="v6x__desc">{t[2]}</p>
        <dl className="v6x__facts">
          <div><dt>Used by</dt><dd>{p.users.slice(0, 4).join(', ')}</dd></div>
          <div><dt>Deployed at</dt><dd>{p.where}</dd></div>
          <div><dt>The decision it supports</dt><dd>{p.decides.split(/(?<=\.)\s/)[0]}</dd></div>
        </dl>
        <Link className="v6x__go" to={`/products/${id}`}>Explore {b.acr} <span>{p.groups.length} capability areas</span> <Icon name="ph-arrow-right" /></Link>
      </div>
    </>
  );
}

const ORDER = ['trms', 'rcs', 'ewms', 'eams', 'pwats', 'hums', 'vms', 'as'];

function Explorer() {
  const [sel, setSel] = useState(tiles[0][1]);
  const refs = useRef<Record<string, HTMLButtonElement | null>>({});
  const panelRef = useRef<HTMLDivElement>(null);
  const select = (id: string, focus: boolean) => {
    setSel(id);
    if (focus) refs.current[id]?.focus();
    else if (window.innerWidth < 980) {
      const pnl = panelRef.current;
      if (pnl && pnl.getBoundingClientRect().top > window.innerHeight * 0.6)
        pnl.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
    }
  };
  const onKey = (e: KeyboardEvent) => {
    const i = ORDER.indexOf(sel); let n: string | null = null;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') n = ORDER[(i + 1) % ORDER.length];
    else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') n = ORDER[(i - 1 + ORDER.length) % ORDER.length];
    else if (e.key === 'Home') n = ORDER[0];
    else if (e.key === 'End') n = ORDER[ORDER.length - 1];
    if (n) { e.preventDefault(); select(n, true); }
  };
  const tab = (id: string) => {
    const b = brandOf(id)!, on = id === sel;
    return (
      <button type="button" className="v6x__it v6xd__b" role="tab" id={`v6x-t-${id}`} key={id}
        ref={(el) => { refs.current[id] = el; }}
        aria-controls="v6x-panel" aria-selected={on} tabIndex={on ? 0 : -1}
        data-id={id} title={chipTitle(b)} onClick={() => select(id, false)}>{chipLabel(b)}</button>
    );
  };
  const node = (k: string, ids: string[]) => (
    <div className="v6xd__n" key={k}><span className="v6xd__k">{k}</span><span className="v6xd__l">{ids.map(tab)}</span></div>
  );
  return (
    <div className="v6x rv">
      <nav className="v6x__tree v6x__tree--dg" aria-label="Blue Silo systems by function">
        <span className="v6x__root">Blue Silo systems</span>
        <div className="v6x__list" role="tablist" aria-orientation="vertical" onKeyDown={onKey}>
          <div className="v6xd__row v6xd__row--3">{TOP.map((t) => node(t[0], t[1]))}</div>
          <div className="v6xd__stem" aria-hidden="true"></div>
          <div className="v6xd__row">{node('Monitor', ['hums', 'vms'])}</div>
          <div className="v6xd__stem" aria-hidden="true"></div>
          <div className="v6xd__row">{node('Govern', ['as'])}</div>
        </div>
        <span className="v6x__hint">Select a system to see its detail</span>
      </nav>
      <div className="v6x__panel" id="v6x-panel" role="tabpanel" aria-live="polite" aria-labelledby={`v6x-t-${sel}`} ref={panelRef}>
        <ExplorerPanel id={sel} />
      </div>
    </div>
  );
}

export function Systems() {
  return (
    <Band id="systems" label="Systems" title="One line, five functions, each system available on its own"
      intro="Seven systems from Blue Silo, plus ACCEL from our partner SigmaWave for video and vision AI. Take one, or take the line.">
      <Diagram />
      <div className="v6tiles rv">{tiles.map((t) => <TileLink t={t} key={t[1]} />)}</div>
      <div className="v6x__intro rv"><span className="label">Alternative layout</span>
        <p>The same seven systems and ACCEL, with the hierarchy as navigation and the detail beside it.</p></div>
      <Explorer />
      <div className="btns" style={{ marginTop: 'var(--s7)' }}>
        <Link className="btn btn--g" to="/products">Compare every system</Link></div>
    </Band>
  );
}
