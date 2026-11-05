import { Band } from '../components/ui/Band';
import { Table } from '../components/ui/Table';
import { Media } from '../components/ui/Media';
import { useCompanyLayout, useV } from '../lib/version';
import { CompanyA, CompanyB, CompanyC } from '../components/sections/company/CompanyLayouts';
import { CtaBand } from '../components/ui/CtaBand';
import { Closer } from '../components/ui/Closer';
import { mediaUrl } from '../lib/media';
import { shown } from '../config/site';
import { slotSrc } from '../lib/images';
import { useReview } from '../lib/review';

const DISCIPLINES: [string, string, string, string][] = [
  ['Control systems', 'Real time equipment control, safety interlocks, and degraded mode behaviour.', 'control', 'ph-sliders-horizontal'],
  ['Systems integration', 'Interface design, ICD authorship, simulators, and staged integration testing.', 'integration', 'ph-plugs-connected'],
  ['Computer vision', 'Detection, re-identification and association, engineered for the edge.', 'vision', 'ph-eye'],
  ['Security engineering', 'Segmentation, classification handling, audit design, isolated operation.', 'security', 'ph-shield-check'],
];
const ACRA = <em className="dim">To confirm from the ACRA record</em>;

const HOW: [string, string, string, string][] = [
  ['Start from how you work', 'We learn how your operation runs today, and who does what, before we propose anything.', 'control', 'ph-path'],
  ['Agree every interface first', 'Every connection to another system is agreed in writing with its owner before we build it.', 'integration', 'ph-plugs-connected'],
  ['Show working software early', 'You review running software at every stage, so issues are found early, while they are cheap to fix.', 'vision', 'ph-monitor-play'],
  ['Support after handover', 'Clear documentation and long-term support are part of the plan from day one.', 'security', 'ph-lifebuoy'],
];

export function Company() {
  /* The hero uses the range photograph that used to sit in the home page
     "Where we operate" section, so it follows the review panel's look. */
  const { state } = useReview();
  const v2 = useV(2);
  /* v2 only: review sub-versions of the whole page (?co=a|b|c) */
  const { co } = useCompanyLayout();
  if (v2 && co === 'a') return <CompanyA />;
  if (v2 && co === 'b') return <CompanyB />;
  if (v2 && co === 'c') return <CompanyC />;
  return (
    <>
      <section className="pv-hero pv-hero--short">
        <div className="pv-hero__bed pv-par"><img src={slotSrc('ops', state.look)} alt="" decoding="async" /></div><div className="pv-hero__veil"></div>
        <div className="shell pv-hero__in"><span className="label">Company</span>
          <h1>Blue Silo</h1>
          <p className="pv-hero__lead">{v2
            ? 'We design, develop and integrate defence systems. Based in Singapore, with military training as our deepest specialism.'
            : 'We build the software that runs range training complexes. That is the whole of what we do.'}</p></div>
      </section>

      <Band>
        <div className="split"><div className="rv"><h2>{v2 ? 'What we do' : 'What we build, and why we build only this'}</h2>
          <div className="prose" style={{ marginTop: 'var(--s5)' }}>
            {v2 ? <>
              <p>Blue Silo is a Singapore-based technology company specialising in military training systems, simulated firing range operations and the integration of complex defence systems.</p>
              <p>Defence facilities run on many systems from many suppliers. When those systems do not share information, records end up on paper and are checked by hand. We build software that connects them, so your teams work from one accurate picture.</p>
              <p><strong>Four areas of focus.</strong> Training systems, system integration, monitoring and intelligence, and enterprise management. Training is where we go deepest.</p>
            </> : <>
              <p>Range training complexes are run by many systems from many suppliers, and the gaps between those systems are where accountability goes. Someone signs a form. Someone remembers a number. Someone reconciles at the end of a long day. It works, until the day it is questioned.</p>
              <p>We build the subsystems that close those gaps, and we treat the interfaces between them, including the ones to systems we do not own, as the product rather than as integration work to be scheduled later.</p>
              <p><strong>Range training is our only focus.</strong> We do not divide our attention across unrelated markets, so our engineering effort stays on your programme.</p>
            </>}</div></div>
          <div className="rv" data-d="1"><figure className="pv-ctl__img co-img"><div className="pv-par"><img src={mediaUrl('c/floor.jpg')} alt="Blue Silo engineers at work" loading="lazy" decoding="async" /></div></figure></div></div>
      </Band>

{/* v2: how an engagement runs, added at the client's request (Oct 2026) */}
      {v2 && <section className="band band--deep"><div className="shell">
        <div className="head"><h2>How we work with you</h2><p>Four commitments we keep on every programme, from the first workshop to long-term support.</p></div>
        <ol className="co-how">{HOW.map((h, i) => (
          <li className="pv-up" key={h[0]}>
            <figure><img src={mediaUrl(`c/${h[2]}.jpg`)} alt="" loading="lazy" decoding="async" /></figure>
            <span className="co-how__n">{String(i + 1).padStart(2, '0')}</span>
            <h3><i className={'ph ' + h[3]} aria-hidden="true"></i>{h[0]}</h3><p>{h[1]}</p></li>))}
        </ol>
      </div></section>}

{shown('company.leadership') && (
      <Band deep title="Leadership" intro="The people accountable for delivery.">
        <div className="g g3 rv">
          {[1, 2, 3].map((i) => (
            <div key={i}>
              <Media m={{ id: 'portrait-' + i, kind: 'Image', ratio: 'r-11', label: 'Portrait ' + i,
                brief: 'Plain headshot, even lighting, neutral dark ground, shoulders up. The only photographs of people on this site.' }} />
              <div className="tile" style={{ marginTop: 'var(--s4)' }}><h4>Name and role</h4><p>Relevant background in defence, control systems or delivery, in three sentences.</p></div></div>
          ))}
        </div>
      </Band>
      )}

{shown('company.disciplines') && (
      <Band title="Disciplines, not headcount">
        <div className="pv-ctl pv-ctl--4">{DISCIPLINES.map((c) => (
          <article className="pv-ctl__i pv-up" key={c[0]}>
            <figure className="pv-ctl__img"><div className="pv-par"><img src={mediaUrl(`c/${c[2]}.jpg`)} alt="" loading="lazy" decoding="async" /></div></figure>
            <h3><i className={'ph ' + c[3]} aria-hidden="true"></i>{c[0]}</h3><p>{c[1]}</p></article>))}
        </div>
      </Band>
      )}

      {v2 ? <CtaBand label="Where we are" title="Headquartered in Singapore, delivering across Southeast Asia and APAC" img="c/where.jpg" />
      : <section className="pv-flow">
        <div className="pv-flow__bed pv-par"><img src={mediaUrl('c/region.jpg')} alt="" loading="lazy" decoding="async" /></div><div className="pv-flow__veil"></div>
        <div className="shell pv-flow__in"><span className="label">Where we are</span>
          <h2>Headquartered in Singapore, delivering across Southeast Asia and APAC</h2></div>
      </section>}

{shown('company.corporate') && (
      <Band title="Corporate">
        <div className="split"><div className="rv">
          <Table head={['Field', 'Detail']} rows={[
            ['Registered entity', 'Blue Silo Pte. Ltd.'], ['UEN', ACRA], ['Registered address', ACRA], ['Incorporated', ACRA]]} /></div>
          <div className="rv" data-d="1"><figure className="pv-ctl__img co-img"><div className="pv-par"><img src={mediaUrl('c/office.jpg')} alt="" loading="lazy" decoding="async" /></div></figure></div></div>
      </Band>
      )}
      {/* v2: the where-we-are band carries the CTA, so no closer */}
      {!v2 && <Closer />}
    </>
  );
}
