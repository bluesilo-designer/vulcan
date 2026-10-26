import { useRef, useState, type CSSProperties, type KeyboardEvent, type MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCT_DETAIL, brandOf } from '../../../content/products';
import { EXPLORER_IMAGES } from '../../../content/home';
import { Table } from '../../ui/Table';
import { Closer } from '../../ui/Closer';
import { Icon } from '../../ui/Icon';
import { Media } from '../../ui/Media';
import { pad2 } from '../../../lib/html';
import { mediaUrl } from '../../../lib/media';
import { DEFAULT_DEP, productRec, v6acr } from './util';
import { WorksWith } from './WorksWith';

type Detail = {
  lead: string; problem: string[]; mods: { k: string; i: string; m: string[] }[];
  flow: string[][]; out: string[]; std: string[][];
};

/* First sentence only: the hero carries one idea, the rest is on the page. */
const first = (t: string) => t.split(/(?<=\.)\s/)[0];

function Acc({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
  return (
    <details className="pv-acc">
      <summary><Icon name={icon} />{title}<Icon name="ph-plus" className="pv-acc__x" /></summary>
      {children}
    </details>
  );
}

/* v2 product page for every system except TRMS, in the TRMS page's
   language: full-bleed hero, problems, modules as tabs, the run as a
   connected line, outcomes, and the reference detail folded away. */
export function ProductV2({ id }: { id: string }) {
  const p = productRec(id)!, b = brandOf(id)!;
  const c = (PRODUCT_DETAIL as unknown as Record<string, Detail>)[id];
  const [tab, setTab] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const hero = (EXPLORER_IMAGES as Record<string, string>)[id];

  const onTabKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const n = c.mods.length;
    let next: number | null = null;
    if (e.key === 'ArrowRight') next = (i + 1) % n;
    if (e.key === 'ArrowLeft') next = (i - 1 + n) % n;
    if (e.key === 'Home') next = 0;
    if (e.key === 'End') next = n - 1;
    if (next === null) return;
    e.preventDefault();
    setTab(next);
    tabRefs.current[next]?.focus();
  };
  const toRun = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('p-run')?.scrollIntoView({ behavior: 'smooth' });
  };
  const m = c.mods[tab];

  return (
    <>
      {/* 1 hero */}
      <section className="pv-hero">
        <div className="pv-hero__bed pv-par"><img src={mediaUrl(hero + '.jpg')} alt="" decoding="async" /></div><div className="pv-hero__veil"></div>
        <div className="shell pv-hero__in">
          <div className="v6pbrand">
            {b.brand && <span className="v6pbrand__b">{b.brand}</span>}
            <span className="v6pbrand__s">{b.acr}</span>
            {b.partner && <span className="v6pbrand__p">Partner product, {b.partner}</span>}
          </div>
          <h1>{b.sys}</h1><p className="pv-hero__lead">{first(c.lead)}</p>
          <div className="pv-cta">
            <Link className="btn btn--p" to="/contact">Request a demonstration</Link>
            <a className="btn btn--g" href="#p-run" onClick={toRun}>See how it runs</a>
          </div>
        </div>
      </section>

      {/* 2 facts strip */}
      <section className="p2-facts"><div className="shell">
        <dl>
          <div><dt><Icon name="ph-target" />Role</dt><dd>{p.role}</dd></div>
          <div><dt><Icon name="ph-users-three" />Used by</dt><dd>{p.users.slice(0, 4).join(', ')}</dd></div>
          <div><dt><Icon name="ph-map-pin-area" />Deployed at</dt><dd>{p.where}</dd></div>
        </dl>
      </div></section>

      {/* 3 problems */}
      <section className="band band--deep"><div className="shell">
        <div className="head"><h2>What goes wrong without it</h2></div>
        <ul className="p2-prob">{c.problem.map((x, i) => (
          <li className="pv-up" key={i}><Icon name="ph-warning-diamond" /><span>{x}</span></li>
        ))}</ul>
      </div></section>

      {/* 4 modules, tabbed */}
      <section className="band"><div className="shell">
        <div className="head"><h2>What it does, grouped by the moment it serves</h2></div>
        <div className="pv-tabs" role="tablist" aria-label={`${b.acr} capability areas`}>{c.mods.map((g, i) => (
          <button key={g.k} type="button" role="tab" id={`p2t-${i}`} aria-controls={`p2p-${i}`}
            aria-selected={tab === i} tabIndex={tab === i ? 0 : -1}
            ref={(el) => { tabRefs.current[i] = el; }}
            onClick={() => setTab(i)} onKeyDown={(e) => onTabKey(e, i)}>
            <Icon name={g.i} />{g.k}
          </button>
        ))}</div>
        <div className="p2-modp" role="tabpanel" id={`p2p-${tab}`} aria-labelledby={`p2t-${tab}`} key={tab}>
          <div className="p2-modp__k"><Icon name={m.i} /><b>{m.k}</b><span>{m.m.length} capabilities</span></div>
          <ul className="pv-ticks p2-ticks">{m.m.map((x) => <li key={x}><Icon name="ph-check" />{v6acr(x)}</li>)}</ul>
        </div>
      </div></section>

      {/* 5 how it runs */}
      <section className="band band--deep" id="p-run"><div className="shell">
        <div className="p2-run">
          <div className="p2-run__media pv-up"><Media m={p.media} /></div>
          <div>
            <div className="head"><h2>How it runs</h2></div>
            <ol className="p2-line" style={{ '--n': c.flow.length } as CSSProperties}>{c.flow.map((f, i) => (
              <li className="pv-up" key={f[0]}><span className="p2-line__n">{pad2(i)}</span>
                <div><b>{f[0]}</b><p>{v6acr(f[1])}</p></div></li>
            ))}</ol>
          </div>
        </div>
      </div></section>

      {/* 6 outcomes */}
      <section className="band"><div className="shell">
        <div className="head"><h2>What changes on the range</h2></div>
        <ul className="p2-out">{c.out.map((x, i) => (
          <li className="pv-up" key={x}><Icon name={i === 0 ? 'ph-trend-up' : 'ph-check-circle'} /><p>{v6acr(x)}</p></li>
        ))}</ul>
      </div></section>

      {/* 7 reference detail */}
      <section className="band band--deep"><div className="shell">
        <div className="head"><h2>The detail, when you need it</h2></div>
        <Acc icon="ph-seal-check" title="Standards we design to">
          <p className="pv-acc__note">Stated as alignment. Blue Silo does not claim certification against these.</p>
          <Table head={['Reference', 'What it governs here']} rows={c.std} />
        </Acc>
        <Acc icon="ph-plugs-connected" title="What it talks to">
          <p className="pv-acc__note">Counterpart classes, not vendor product names.</p>
          <Table head={['Counterpart class', 'Direction', 'Trigger']}
            rows={p.ifc.map((r) => [v6acr(r[0]), <span className="arrow">{r[1]}</span>, v6acr(r[2])])} />
        </Acc>
        <Acc icon="ph-info" title="Dependencies and assumptions">
          <p className="pv-acc__note">{v6acr(p.dep || DEFAULT_DEP)}</p>
        </Acc>
      </div></section>

      <WorksWith rel={p.rel} />
      <Closer label="Request a demonstration" line={`See ${b.brand || b.acr} running on a working range scenario.`} />
    </>
  );
}
