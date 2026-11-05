import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../../ui/Icon';
import { CTA_TRAINING_IMAGE, mediaUrl } from '../../../lib/media';
import '../../../styles/trms-story-v4.css';

type FlowKind = 'booking' | 'management' | 'results';
const FLOW_TEXT = {
  booking: [
    { label: 'Simple request', note: 'Choose the training activity and time.' },
    { label: 'Complex detail', note: 'Add participants, lanes and equipment.' },
  ],
  management: [
    { label: 'Booking received', note: 'A single reference anchors the session.' },
    { label: 'Resources aligned', note: 'Availability and assignments stay visible.' },
    { label: 'Ready to run', note: 'Changes and attendance follow the same booking.' },
  ],
  results: [
    { label: 'Session captured', note: 'Results stay tied to the training activity.' },
    { label: 'Review outcomes', note: 'Instructors can review performance and history.' },
    { label: 'Compare progress', note: 'A leaderboard can surface relative performance.' },
  ],
} as const;

function SvgNode({ x, y, w, label, sub, active = false }: { x: number; y: number; w: number; label: string; sub?: string; active?: boolean }) {
  return <g className={'tr5-node' + (active ? ' is-active' : '')}>
    <rect x={x} y={y} width={w} height="76" rx="2" />
    <text className="tr5-node__label" x={x + 17} y={y + 33}>{label}</text>
    {sub && <text className="tr5-node__sub" x={x + 17} y={y + 55}>{sub}</text>}
  </g>;
}

function FlowGraphic({ kind, phase }: { kind: FlowKind; phase: number }) {
  const key = kind + '-' + phase;
  if (kind === 'booking') return <svg className="tr5-vector" viewBox="0 0 640 290" role="img" aria-label={phase === 0 ? 'Simple booking request becomes a confirmed booking' : 'Detailed booking connects participants, lanes and equipment before confirmation'}>
    <path className="tr5-gridline" d="M0 66H640M0 146H640M0 226H640M80 0V290M240 0V290M400 0V290M560 0V290" />
    <text className="tr5-vector__kicker" x="25" y="30">BOOKING FLOW / {phase === 0 ? 'SIMPLE' : 'DETAILED'}</text>
    <path key={key} className="tr5-flow-path" d={phase === 0 ? 'M174 160H290M420 160H500' : 'M174 160H235V98H289M235 160V218H289M425 98H470V160H500M425 218H470V160'} />
    <SvgNode x={25} y={122} w={149} label="Request" sub="Activity + time" active />
    {phase === 0 ? <SvgNode x={290} y={122} w={130} label="Availability" sub="Check capacity" active /> : <>
      <SvgNode x={289} y={60} w={136} label="Participants" sub="Nominal roll" active />
      <SvgNode x={289} y={180} w={136} label="Resources" sub="Lanes + equipment" active />
    </>}
    <SvgNode x={500} y={122} w={116} label="Booking" sub="One reference" active />
    <circle className="tr5-flow-pulse" cx="500" cy="160" r="4" />
    <text className="tr5-vector__foot" x="25" y="272">REQUEST</text><text className="tr5-vector__foot" x="615" y="272" textAnchor="end">CONFIRMED</text>
  </svg>;
  if (kind === 'management') return <svg className="tr5-vector" viewBox="0 0 640 290" role="img" aria-label="A booking links resource assignments, attendance and session status">
    <path className="tr5-gridline" d="M0 66H640M0 146H640M0 226H640M80 0V290M240 0V290M400 0V290M560 0V290" />
    <text className="tr5-vector__kicker" x="25" y="30">BOOKING MANAGEMENT / CONNECTED STATUS</text>
    <path key={key} className="tr5-flow-path" d="M236 159H285M425 159H474M355 121V78M355 197V236" />
    <SvgNode x={25} y={121} w={211} label="Booking reference" sub="Session context" active />
    <SvgNode x={285} y={121} w={140} label="Assignments" sub="People + lanes" active={phase >= 1} />
    <SvgNode x={474} y={121} w={141} label="Session status" sub="Ready / active" active={phase >= 2} />
    <g className={'tr5-mini' + (phase >= 1 ? ' is-active' : '')}><rect x="299" y="44" width="112" height="34" /><text x="312" y="66">AVAILABLE</text></g>
    <g className={'tr5-mini' + (phase >= 2 ? ' is-active' : '')}><rect x="299" y="236" width="112" height="34" /><text x="312" y="258">CHECKED IN</text></g>
    <text className="tr5-vector__foot" x="25" y="272">ONE BOOKING</text><text className="tr5-vector__foot" x="615" y="272" textAnchor="end">LIVE CONTEXT</text>
  </svg>;
  return <svg className="tr5-vector" viewBox="0 0 640 290" role="img" aria-label="Session results are attached to trainee records and can feed an illustrative leaderboard">
    <path className="tr5-gridline" d="M0 66H640M0 146H640M0 226H640M80 0V290M240 0V290M400 0V290M560 0V290" />
    <text className="tr5-vector__kicker" x="25" y="30">TRAINING RESULT / REVIEW</text>
    <path key={key} className="tr5-flow-path" d="M183 157H243M403 157H465" />
    <SvgNode x={25} y={119} w={158} label="Session" sub="Activity recorded" active />
    <SvgNode x={243} y={119} w={160} label="Results" sub="Trainee history" active={phase >= 1} />
    <g className={'tr5-rank' + (phase >= 2 ? ' is-active' : '')}>
      <rect x="465" y="70" width="150" height="174" rx="2" />
      <text x="482" y="98">LEADERBOARD</text>
      <path d="M483 130h37m-37 36h37m-37 36h37" />
      <rect x="530" y="120" width="58" height="11" /><rect x="530" y="156" width="74" height="11" /><rect x="530" y="192" width="43" height="11" />
    </g>
    <text className="tr5-vector__foot" x="25" y="272">RECORD</text><text className="tr5-vector__foot" x="615" y="272" textAnchor="end">COMPARE</text>
  </svg>;
}

function Feature({ id, number, label, title, body, kind, points, reverse = false }: { id?: string; number: string; label: string; title: string; body: string; kind: FlowKind; points: string[]; reverse?: boolean }) {
  const [phase, setPhase] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const stages = FLOW_TEXT[kind];
  useEffect(() => {
    const mq = matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    if (mq.matches) setPlaying(false);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: .25 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!visible || !playing || reduced) return;
    const timer = window.setTimeout(() => setPhase((current) => (current + 1) % stages.length), 4300);
    return () => clearTimeout(timer);
  }, [phase, visible, playing, reduced, stages.length]);
  const current = stages[phase];
  return <section id={id} className={'tr5-feature' + (reverse ? ' tr5-feature--reverse' : '')} ref={ref}>
    <div className="shell tr5-feature__grid">
      <div className="tr5-feature__copy"><span className="label">{number} / {label}</span><h2>{title}</h2><p>{body}</p><ul>{points.map((point) => <li key={point}><Icon name="ph-check" />{point}</li>)}</ul></div>
      <div className="tr5-feature__demo">
        <div className="tr5-feature__demohead"><span><i />PROCESS ILLUSTRATION</span><span className="tr5-feature__swipe" aria-hidden="true">SWIPE DIAGRAM →</span>{!reduced && <button type="button" onClick={() => setPlaying((value) => !value)} aria-label={playing ? 'Pause animation' : 'Play animation'}><Icon name={playing ? 'ph-pause' : 'ph-play'} />{playing ? 'Pause' : 'Play'}</button>}</div>
        <div className="tr5-feature__canvas"><FlowGraphic kind={kind} phase={phase} /></div>
        <div className="tr5-feature__stage"><div><span>0{phase + 1} / 0{stages.length}</span><strong>{current.label}</strong><small>{current.note}</small></div><div className="tr5-feature__dots" aria-label="Select diagram stage">{stages.map((stage, index) => <button type="button" key={stage.label} className={index === phase ? 'is-active' : ''} aria-label={stage.label} aria-pressed={index === phase} onClick={() => { setPhase(index); setPlaying(false); }} />)}</div></div>
        <div className="tr5-feature__caveat">Illustrative process · Final interface depends on deployment</div>
      </div>
    </div>
  </section>;
}

export function TrmsStoryV4() {
  return <>
    <section className="tr5-hero"><img src={mediaUrl('trms-v3-western/hero-facility.jpg')} alt="" /><div className="tr5-hero__shade" /><div className="shell tr5-hero__inner"><span className="label">VULCAN / TRAINING RESOURCE MANAGEMENT SYSTEM</span><h1>Make every training day count.</h1><p>Plan bookings, coordinate resources and carry results through to closeout in one connected training record.</p><div className="tr5-hero__actions"><a href="#tr5-booking" className="btn btn--p">See how it works <Icon name="ph-arrow-down" /></a><Link to="/contact" className="btn btn--g">Request a demonstration</Link></div></div></section>
    <section className="tr5-problem"><div className="shell tr5-problem__grid"><div><span className="label">The problem</span><h2>A training day has too many handoffs.</h2></div><div><p>A booking starts with a plan. Then people, lanes, equipment and results move through different teams. When these records drift apart, operators spend the day reconciling information instead of managing training.</p><div className="tr5-problem__signals"><span>Re-entered details</span><span>Resource conflicts</span><span>Results without context</span></div></div></div></section>
    <section className="tr5-about"><div className="shell tr5-about__grid"><div className="tr5-about__mark"><span>TRMS</span><small>PLAN → COORDINATE → REVIEW</small></div><div><span className="label">About TRMS</span><h2>One record follows the session.</h2><p>VULCAN is Blue Silo's Training Resource Management System for military training environments. It connects booking administration, participant records and resource coordination with the activity and outcomes of a training session.</p><p className="tr5-about__aside">The diagrams below explain the process. A live demonstration shows how the deployed software is configured for a specific site.</p></div></div></section>
    <Feature id="tr5-booking" number="01" label="Booking flow" title="Start simple. Add detail when the mission needs it." body="A basic request can begin with an activity and time. More demanding sessions can add participants, lane assignments and equipment before the booking is confirmed." kind="booking" points={['One booking reference', 'Availability before allocation', 'Detail grows with the session']} />
    <Feature number="02" label="Booking management" title="Keep the plan and the day aligned." body="Operators can work from the booking context as assignments, attendance and session status change. The goal is a clear view of what is planned and what is ready." kind="management" points={['Booking and resource context together', 'Assignments remain visible', 'Changes follow the session']} reverse />
    <Feature number="03" label="Results & leaderboard" title="See the result in context." body="Training outcomes remain connected to the activity and trainee record. Where a programme uses ranking, a leaderboard can make relative performance easy to review." kind="results" points={['Results linked to the session', 'Individual history for review', 'Ranking where configured']} />
    <section className="tr5-solve"><div className="shell"><span className="label">What this solves</span><h2>Less chasing. More control of the training day.</h2><div className="tr5-solve__grid"><article><Icon name="ph-calendar-check" /><h3>Know what is booked</h3><p>Start with a clear session plan and available resources.</p></article><article><Icon name="ph-arrows-clockwise" /><h3>Keep changes connected</h3><p>Carry updates, attendance and assignments with the booking.</p></article><article><Icon name="ph-chart-line-up" /><h3>Review what happened</h3><p>Trace results back to the activity, people and resources behind them.</p></article></div></div></section>
    <section className="tr5-cta"><img src={mediaUrl(CTA_TRAINING_IMAGE)} alt="" loading="lazy" /><div className="tr5-cta__shade" /><div className="shell"><span className="label">See the working product</span><h2>Walk through a training day in TRMS.</h2><p>We will show the software with a scenario relevant to your site and explain what can be configured for your programme.</p><Link className="btn btn--p" to="/contact">Book a demonstration <Icon name="ph-arrow-up-right" /></Link></div></section>
  </>;
}
