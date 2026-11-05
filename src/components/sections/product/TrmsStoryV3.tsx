import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../../ui/Icon';
import { Closer } from '../../ui/Closer';
import { mediaUrl } from '../../../lib/media';
import '../../../styles/trms-story-v3.css';

const CHAPTERS = [
  { title: 'Plan', verb: 'Turn a request into a training plan.', detail: 'Set the unit, date and training objective once.', icon: 'ph-note-pencil', signal: 'Booking reference' },
  { title: 'Allocate', verb: 'Match the day with available resources.', detail: 'Assign people, lanes and equipment to the plan.', icon: 'ph-squares-four', signal: 'Resource assignments' },
  { title: 'Check in', verb: 'Confirm who and what is ready.', detail: 'Record attendance and issued items against the session.', icon: 'ph-user-check', signal: 'Readiness record' },
  { title: 'Run', verb: 'Keep the session connected.', detail: 'Capture activity and changes as training progresses.', icon: 'ph-play-circle', signal: 'Session activity' },
  { title: 'Close', verb: 'Carry the result back to the plan.', detail: 'Bring outcomes and returns into the same record.', icon: 'ph-check-circle', signal: 'Results and returns' },
] as const;

function Workflow() {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [visible, setVisible] = useState(false);
  const [pageVisible, setPageVisible] = useState(() => typeof document === 'undefined' || !document.hidden);
  const [reduced, setReduced] = useState(false);
  const section = useRef<HTMLElement>(null);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    if (mq.matches) setPlaying(false);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: .18 });
    if (section.current) observer.observe(section.current);
    const onVisibility = () => setPageVisible(!document.hidden);
    document.addEventListener('visibilitychange', onVisibility);
    return () => { observer.disconnect(); document.removeEventListener('visibilitychange', onVisibility); };
  }, []);
  useEffect(() => {
    if (!playing || !visible || !pageVisible || reduced) return;
    const timer = window.setTimeout(() => setStep((current) => (current + 1) % CHAPTERS.length), 4400);
    return () => window.clearTimeout(timer);
  }, [step, playing, visible, pageVisible, reduced]);
  const chapter = CHAPTERS[step];
  return <section className="tr4-workflow" id="trms-workflow" ref={section}><div className="shell tr4-workflow__shell">
    <div className="tr4-workflow__head"><span className="label">How TRMS works</span><h2>One training day.<br />One connected record.</h2><p>From the first request to the final result, each stage carries the same context forward.</p></div>
    <div className={'tr4-workflow__frame' + (!playing || !pageVisible ? ' is-paused' : '')}>
      <div className="tr4-workflow__top"><span>TRAINING DAY / PROCESS VIEW</span>{!reduced && <button type="button" onClick={() => setPlaying((value) => !value)} aria-label={playing ? 'Pause workflow animation' : 'Play workflow animation'}><Icon name={playing ? 'ph-pause' : 'ph-play'} />{playing ? 'Pause' : 'Play'}</button>}</div>
      <div className="tr4-workflow__steps" role="tablist" aria-label="Training day stages">{CHAPTERS.map((item, index) => <button type="button" key={item.title} role="tab" aria-controls="tr4-workflow-panel" aria-selected={step === index} className={step === index ? 'is-active' : step > index ? 'is-done' : ''} onClick={() => { setStep(index); setPlaying(false); }}><span className="tr4-workflow__number">0{index + 1}</span><span className="tr4-workflow__node"><Icon name={item.icon} /></span><strong>{item.title}</strong>{step === index && playing && <i className="tr4-workflow__progress" />}</button>)}</div>
      <div className="tr4-workflow__caption" role="tabpanel" id="tr4-workflow-panel"><span>STAGE 0{step + 1} / 05</span><div key={step}><h3>{chapter.verb}</h3><p>{chapter.detail}</p></div><div className="tr4-workflow__output"><small>CONTEXT CARRIED FORWARD</small><strong>{chapter.signal}</strong></div></div>
      <div className="tr4-workflow__foot"><span><Icon name="ph-info" />Illustrative process, not the TRMS interface</span><Link to="/contact">See the software <Icon name="ph-arrow-up-right" /></Link></div>
    </div>
  </div></section>;
}

const COVERAGE = [
  ['ph-calendar-check', 'Plan the day', 'Bookings, availability and training resources stay in one place.'],
  ['ph-user-check', 'Know what is ready', 'Attendance and issued equipment are tied to the session.'],
  ['ph-activity', 'Run with context', 'The team sees the session and the changes that matter.'],
  ['ph-file-text', 'Close with a record', 'Returns and results remain connected to the training day.'],
] as const;

export function TrmsStoryV3() {
  return <>
    <section className="tr4-hero"><img src={mediaUrl('trms-v3-western/hero-facility.jpg')} alt="" decoding="async" /><div className="tr4-hero__shade" /><div className="shell tr4-hero__content"><span className="label">TRMS / Training Resource Management System</span><h1>One record for the whole training day.</h1><p>Plan sessions, assign resources, check people in and follow results through to closeout.</p><div className="tr4-hero__actions"><a className="btn btn--p" href="#trms-workflow">Explore the workflow <Icon name="ph-arrow-down" /></a><Link className="btn btn--g" to="/contact">Book a demo</Link></div></div><div className="tr4-hero__index">01 — 05 <span>FROM REQUEST TO RESULT</span></div></section>
    <Workflow />
    <section className="tr4-coverage band band--deep"><div className="shell"><div className="tr4-coverage__head"><span className="label">What TRMS connects</span><h2>One day. Every part connected.</h2></div><ol>{COVERAGE.map(([icon, title, body], index) => <li key={title}><span>0{index + 1}</span><Icon name={icon} /><div><h3>{title}</h3><p>{body}</p></div></li>)}</ol></div></section>
    <section className="tr4-field"><img src={mediaUrl('trms-v3-western/check-in.jpg')} alt="Training personnel arriving at a range facility" loading="lazy" decoding="async" /><div className="tr4-field__shade" /><div className="shell"><span className="label">At the training centre</span><h2>Ready before the first session starts.</h2><p>Operators can see who has arrived, which resources are assigned and what still needs attention.</p></div></section>
    <section className="tr4-proof band"><div className="shell tr4-proof__layout"><div><span className="label">The outcome</span><h2>A result you can trace back to the day.</h2><p>When the session closes, its activity, returned equipment and results remain connected to the booking that started it.</p><Link to="/contact" className="tr4-proof__link">See working software <Icon name="ph-arrow-up-right" /></Link></div><figure><img src={mediaUrl('home-v3-western/featured.jpg')} alt="Trainees using simulator booths at a training range" loading="lazy" decoding="async" /></figure></div></section>
    <Closer title="See TRMS running" label="Request a demonstration" line="Walk through a real training day in the software, from booking to results." />
  </>;
}
