import { useRef, useState, type KeyboardEvent, type MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCT_DETAIL, TRMS, brandOf } from '../../../content/products';
import { Table } from '../../ui/Table';
import { Closer } from '../../ui/Closer';
import { Icon } from '../../ui/Icon';
import { pad2 } from '../../../lib/html';
import { productImg } from '../../../lib/images';
import { useReview } from '../../../lib/review';
import { productRec } from './util';
import { WorksWith } from './WorksWith';
import { TrmsMock } from './TrmsMock';
import { TrmsWhat, TrmsFeatures, TrmsScoreboard, TrmsLeaderboard, JOURNEY_V2 } from './TrmsV2';
import { useV } from '../../../lib/version';

type T3 = [string, string, string];
type Prog = { k: string; n: string; slot: string; i: string; trains: string; books: string; steps: [string, string][]; pts: string[] };
type Trms = {
  short: string; status: string; why: T3[]; progs: Prog[];
  assets: { h: string; pts: T3[] }; platform: T3[]; gloss: [string, string][];
  journey: T3[]; rules: T3[]; live: T3[];
};
const t = TRMS as unknown as Trms;

const STATE_ROWS: [string, string][] = [
  ['Weapon (Firearms) Simulator Training', 'Most complete. Booking, equipment, onboarding and the live session path are built; some end states are still being completed.'],
  ['Vehicle Simulator Training', 'Booking, cabin set-up, trainee list, booking detail and onboarding exist as a working prototype.'],
  ['Command Team Training', 'Booking, zone by zone cluster set-up, trainee list, saved bookings and onboarding start exist as a working prototype.'],
  ['Shared platform', 'The common modules used by all three (dashboard, equipment and RFID, sites, users, data, results) are reviewed against the design, with remaining differences being closed in batches.'],
];

function PImg({ slot }: { slot: string }) {
  const { state } = useReview();
  return <img data-pimg={`trms-${slot}`} src={productImg('trms', slot, state.pset)} alt="" decoding="async" />;
}

function Acc({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
  return (
    <details className="pv-acc">
      <summary><Icon name={icon} />{title}<Icon name="ph-plus" className="pv-acc__x" /></summary>
      {children}
    </details>
  );
}

/* legacy pTrmsV6 */
export function TrmsPage() {
  const id = 'trms';
  const p = productRec(id)!, b = brandOf(id)!;
  const c = (PRODUCT_DETAIL as unknown as Record<string, { std: string[][] }>)[id];
  const v2 = useV(2); /* v2: what-it-is replaces the why cards; no rules, no detail block */
  const [tab, setTab] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const onTabKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const n = t.progs.length;
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

  const toJourney = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('trms-journey')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* 1 hero */}
      <section className="pv-hero">
        <div className="pv-hero__bed pv-par"><PImg slot="hero" /></div><div className="pv-hero__veil"></div>
        <div className="shell pv-hero__in">
          <div className="v6pbrand"><span className="v6pbrand__s">{b.acr}</span><span className="pv-status"><Icon name="ph-flask" />{t.status}</span></div>
          <h1>{b.sys}</h1><p className="pv-hero__lead">{v2 ? 'A booking system for simulator training centres. It follows each booking from the first request to the last piece of equipment returned.' : t.short}</p>
          <div className="pv-cta">
            <Link className="btn btn--p" to="/contact">Request a demonstration</Link>
            <a className="btn btn--g" href="#trms-journey" data-anchor onClick={toJourney}>See how a booking flows</a>
          </div>
        </div>
        <span className="pv-cue" aria-hidden="true"><i className="ph ph-arrow-down"></i></span>
      </section>

      {/* 2 why */}
      {v2 ? <TrmsWhat /> : <section className="band band--deep"><div className="shell">
        <div className="head"><h2>Why it exists</h2><p>A training day needs a free station, the right equipment out and back, a roll of trainees who turn up, and results as they happen. TRMS follows one booking through all of it.</p></div>
        <ul className="pv-prob pv-prob--3">{t.why.map((w) => (
          <li className="pv-up" key={w[1]}><Icon name={w[0]} /><b>{w[1]}</b><span>{w[2]}</span></li>
        ))}</ul>
      </div></section>}

      {/* 3 journey */}
      <section className="band" id="trms-journey"><div className="shell">
        <div className="head"><h2>One booking, from request to returned equipment</h2><p>Each step has to finish before the next can begin, so nothing is skipped and nothing is left open.</p></div>
        <ol className={'pv-jour' + (v2 ? ' pv-jour--v2' : '')}>{(v2 ? JOURNEY_V2 : t.journey).map((s, i) => (
          <li className="pv-up" key={s[1]}><span className="pv-jour__ic"><Icon name={s[0]} /></span>
            <span className="pv-jour__n">{pad2(i)}</span><b>{s[1]}</b><p>{s[2]}</p></li>
        ))}</ol>
      </div></section>

      {/* 4 live session */}
      <section className="band band--deep"><div className="shell"><div className="pv-live">
        <div className="pv-live__txt pv-up"><h2>Run the day from one screen</h2><p>Trainees are split into details that queue per station. The administrator watches the session and steers it as it runs.</p>
          <ul className="pv-live__list">{t.live.map((x) => (
            <li key={x[1]}><Icon name={x[0]} /><span><b>{x[1]}</b>{x[2]}</span></li>
          ))}</ul>
        </div>
        <div className="pv-live__ui pv-up">{v2 ? <TrmsScoreboard /> : <TrmsMock />}</div>
      </div></div></section>

      {v2 && <TrmsLeaderboard />}

      {/* 5 rules */}
      {!v2 && <section className="band"><div className="shell">
        <div className="head"><h2>Booking rules, set by you and enforced by the system</h2><p>Each training facility decides its own rules. TRMS applies them automatically, so nobody has to remember them. For example:</p></div>
        <ul className="pv-rules">{t.rules.map((r) => (
          <li className="pv-up" key={r[1]}><Icon name={r[0]} /><b>{r[1]}</b><span>{r[2]}</span></li>
        ))}</ul>
      </div></section>}

      {/* 6 three kinds, tabbed */}
      <section className="band band--deep"><div className="shell">
        <div className="head"><h2>Three kinds of simulator training, one platform</h2><p>Each has its own booking logic. The platform underneath is shared.</p></div>
        <div className="pv-tabs" role="tablist" aria-label="Kinds of training">{t.progs.map((g, i) => (
          <button key={g.k} type="button" role="tab" id={`pvt-${i}`} aria-controls={`pvp-${i}`}
            aria-selected={tab === i} tabIndex={tab === i ? 0 : -1}
            ref={(el) => { tabRefs.current[i] = el; }}
            onClick={() => setTab(i)} onKeyDown={(e) => onTabKey(e, i)}>
            <Icon name={g.i} />{g.n}
          </button>
        ))}</div>
        {t.progs.map((g, i) => (
          <div key={g.k} className="pv-tabp" role="tabpanel" id={`pvp-${i}`} aria-labelledby={`pvt-${i}`} hidden={tab !== i}>
            <figure className="pv-tabp__img"><div className="pv-par"><PImg slot={g.slot} /></div></figure>
            <div className="pv-tabp__txt">
              <dl className="pv-dl"><div><dt>Trains</dt><dd>{g.trains}</dd></div><div><dt>Books</dt><dd>{g.books}</dd></div></dl>
              {!v2 && <ol className="pv-life" aria-label={`${g.n} lifecycle`}>{g.steps.map((s) => (
                <li key={s[1]}><Icon name={s[0]} /><span>{s[1]}</span></li>
              ))}</ol>}
              <ul className="pv-ticks">{g.pts.map((x) => <li key={x}><Icon name="ph-check" />{x}</li>)}</ul>
            </div>
          </div>
        ))}
      </div></section>

      {/* 7 equipment */}
      <section className="pv-flow">
        <div className="pv-flow__bed pv-par"><PImg slot="assets" /></div><div className="pv-flow__veil"></div>
        <div className="shell pv-flow__in"><h2>{t.assets.h}</h2>
          <ol className="pv-steps pv-steps--3">{t.assets.pts.map((f, i) => (
            <li className="pv-up" key={f[1]}><span className="pv-steps__ic"><Icon name={f[0]} /></span>
              <span className="pv-steps__n">{pad2(i)}</span><b>{f[1]}</b><p>{f[2]}</p></li>
          ))}</ol>
        </div>
      </section>

      {/* 8 platform */}
      {v2 ? <TrmsFeatures /> : <section className="band band--deep"><div className="shell">
        <div className="head"><h2>One platform behind all three</h2></div>
        <ul className="pv-plat">{t.platform.map((m) => (
          <li className="pv-up" key={m[1]}><Icon name={m[0]} /><b>{m[1]}</b><span>{m[2]}</span></li>
        ))}</ul>
      </div></section>}

      {/* 9 detail */}
      {!v2 && <section className="pv-more">
        <div className="pv-more__bed pv-par"><PImg slot="close" /></div><div className="pv-more__veil"></div>
        <div className="shell pv-more__in"><h2>The detail, when you need it</h2>
          <Acc icon="ph-flask" title="Where the product stands">
            <Table head={['Area', 'State today']} rows={STATE_ROWS} />
            <p className="pv-acc__note">A prototype used to present and refine features, not yet a released product.</p>
          </Acc>
          <Acc icon="ph-book-open" title="Glossary">
            <Table head={['Term', 'Meaning']} rows={t.gloss} />
          </Acc>
          <Acc icon="ph-seal-check" title="Standards we design to">
            <p className="pv-acc__note">Stated as alignment. Blue Silo does not claim certification against these.</p>
            <Table head={['Reference', 'What it governs here']} rows={c.std} />
          </Acc>
          <Acc icon="ph-plugs-connected" title="What it talks to">
            <p className="pv-acc__note">Planned interfaces. Bookings are published for a customer training management system to pull; no live customer connection is built yet.</p>
            <Table head={['Counterpart class', 'Direction', 'Trigger']}
              rows={p.ifc.map((r) => [r[0], <span className="arrow">{r[1]}</span>, r[2]])} />
          </Acc>
        </div>
      </section>}

      <WorksWith rel={p.rel} />
      {v2 ? <Closer title="See TRMS running" label="Request a demonstration" line="See the booking flow, the live session and the leaderboard on the working prototype." /> : <Closer label="Request a demonstration" line="See the booking flow, the live session screen and the equipment path on a working prototype." />}
    </>
  );
}
