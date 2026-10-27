import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../../ui/Icon';
import { Closer } from '../../ui/Closer';
import { Table } from '../../ui/Table';
import { productImg } from '../../../lib/images';
import { useReview } from '../../../lib/review';
import { TrmsScoreboard, TrmsLeaderboard } from './TrmsV2';
import {
  COVER, ROLES, CreateScreen, DashScreen, OnboardScreen, ResultScreen, ReturnScreen,
} from './TrmsPageV2';
import '../../../styles/company.css';
import '../../../styles/trms-layouts.css';

/* TRMS product page, v2 layout sub-versions (?tr=a|b|c), written after the
   27 Oct 2026 content roast. Same product facts and the same lo-fi
   screens as the current page, three directions:
   A  short and simple: four benefits, one training day, done
   B  proof led: before and after, live screens, what exists today
   C  four chapters: plan, train, close, manage
   Status is stated honestly: weapon simulator training is the most
   complete; vehicle and command team training are in development. */

const Pad = (n: number) => String(n + 1).padStart(2, '0');

const BENEFITS: [string, string, string][] = [
  ['ph-calendar-check', 'Clashes caught as you book', 'Station availability is checked the moment you book, against the rules you set.'],
  ['ph-scan', 'Every item accounted for', 'Tagged equipment is scanned out and back in, and anything missing is flagged.'],
  ['ph-chart-bar', 'Results as they happen', 'Instructors and trainees see scores during the session.'],
  ['ph-squares-four', 'The whole centre at a glance', 'Bookings, availability and equipment on one dashboard.'],
];

/* Status as the product team states it: weapon simulator training is the
   most complete, the other two are in development. Never "available now". */
const STATUS: Record<string, string> = { 'Most complete': 'Ready to demonstrate', 'In build': 'In development' };

function Hero({ h1, lead, cta2, to }: { h1: string; lead: string; cta2: string; to: string }) {
  const { state } = useReview();
  return (
    <section className="pv-hero">
      <div className="pv-hero__bed pv-par"><img src={productImg('trms', 'hero', state.pset)} alt="" decoding="async" /></div><div className="pv-hero__veil"></div>
      <div className="shell pv-hero__in">
        <div className="v6pbrand"><span className="v6pbrand__s">TRMS</span><span className="tr-sys">Training Resource Management System</span></div>
        <h1>{h1}</h1>
        <p className="pv-hero__lead">{lead}</p>
        <div className="pv-cta"><Link className="btn btn--p" to="/contact">Request a demonstration</Link>
          <a className="btn btn--g" href={'#' + to} onClick={(e) => { e.preventDefault(); document.getElementById(to)?.scrollIntoView({ behavior: 'smooth' }); }}>{cta2}</a></div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="co2b-proof"><div className="shell"><ul>{BENEFITS.map((b) => (
      <li key={b[1]}><Icon name={b[0]} /><b>{b[1]}</b><span>{b[2]}</span></li>
    ))}</ul></div></section>
  );
}

function Cover({ deep }: { deep?: boolean }) {
  return (
    <section className={'band' + (deep ? ' band--deep' : '')}><div className="shell">
      <div className="t2-h"><h2>Three kinds of simulator training</h2>
        <p>Book and run all your simulators in one place. Here is where each one stands today.</p></div>
      <ul className="tr-cover">{COVER.map((c) => (
        <li key={c[1]}><Icon name={c[0]} /><b>{c[1]}</b><span>{c[3]}</span>
          <em className={c[2] === 'Most complete' ? 'is-now' : ''}>{STATUS[c[2]] || c[2]}</em></li>
      ))}</ul>
    </div></section>
  );
}

/* ---------- A: short and simple ---------- */
const DAY: [string, string, () => JSX.Element][] = [
  ['Book', 'Choose the group, the training and the date. TRMS shows which stations are free.', () => <CreateScreen s={1} />],
  ['Check in', 'Scan an ID or import the list. You see who is missing before you start.', OnboardScreen],
  ['Train', 'Run the session from one screen, with reshoots and live results.', TrmsScoreboard],
  ['Return', 'Scan equipment back in. Anything missing is flagged straight away.', ReturnScreen],
];

export function TrmsA() {
  const [t, setT] = useState(0);
  const S = DAY[t][2];
  return (
    <>
      <Hero h1="Run your simulator training centre from one system" to="tra-day" cta2="See a training day"
        lead="Book stations, check trainees in, run the session and get your equipment back. Every result is recorded in the same place." />
      <Benefits />
      <section className="band" id="tra-day"><div className="shell">
        <div className="t2-h"><h2>A training day in four steps</h2>
          <p>The same four steps your team runs today, each on one screen.</p></div>
        <div className="t2-tabs" role="tablist">{DAY.map((d, i) => (
          <button key={d[0]} type="button" role="tab" aria-selected={t === i} onClick={() => setT(i)}>{d[0]}</button>))}</div>
        <p className="t2-cap">{DAY[t][1]}</p>
        <div className="t2-wide"><S /></div>
      </div></section>
      <Cover deep />
      <Closer title="See TRMS running" line="We will show you a full training day in TRMS, from booking to results." />
    </>
  );
}

/* ---------- B: proof led ---------- */
const BEFORE: [string, string, string][] = [
  ['Booking stations', 'Spreadsheets and phone calls, clashes found on the day', 'Availability checked as you book'],
  ['Checking trainees in', 'A paper roll, ticked by hand', 'Scan an ID or import the list'],
  ['Running the session', 'Scores written down and typed in later', 'Live results, with reshoots handled on screen'],
  ['Returning equipment', 'Counted by hand at the end of the day', 'Scanned back in, anything missing flagged'],
  ['Reporting', 'Pulled together from several places', 'Results and availability from one system'],
];
const DEMO = [
  'Create a booking in five steps',
  'Check a group in and run a session',
  'Live results and the centre leaderboard',
  'Return equipment and close the booking',
  'The dashboard, availability and RFID tracking',
];

export function TrmsB() {
  return (
    <>
      <Hero h1="Every trainee and every item, accounted for" to="trb-before" cta2="See what changes"
        lead="TRMS replaces the paper rolls, spreadsheets and hand counts of a simulator training centre with one system your whole team works in." />
      <section className="band" id="trb-before"><div className="shell">
        <div className="t2-h"><h2>What changes on a training day</h2>
          <p>The same jobs your team does today, without the paperwork.</p></div>
        <Table head={['Task', 'Often today', 'With TRMS']} rows={BEFORE.map((r) => [<b key="k">{r[0]}</b>, <span className="dim" key="o">{r[1]}</span>, r[2]])} />
      </div></section>
      <section className="band band--deep"><div className="shell">
        <div className="t2-h"><h2>Results on screen, while the session runs</h2>
          <p>Instructors follow every station as it happens, and a wall screen shows the centre where everyone stands.</p></div>
        <div className="t2-wide"><TrmsScoreboard /></div>
      </div></section>
      <TrmsLeaderboard bare />
      <section className="band band--deep"><div className="shell co2b-split">
        <div className="rv">
          <h2>Working software, ready to show you</h2>
          <p className="co2b-intro">TRMS is built, and we can show it to you on working software. In a demonstration you will see:</p>
          <ul className="tr-demo">{DEMO.map((d) => <li key={d}><Icon name="ph-check" />{d}</li>)}</ul></div>
        <figure className="tr-fig rv" data-d="1"><DashScreen /></figure>
      </div></section>
      <Cover />
      <Closer title="See TRMS running" line="Book a demonstration and we will take you through a full training day." />
    </>
  );
}

/* ---------- C: four chapters ---------- */
export function TrmsC() {
  const { state } = useReview();
  const chapters = [
    { t: 'Plan', body: <>
      <p className="co2c-big">Book a session in five steps: group, training, date, lanes and trainees.</p>
      <p>Station availability is checked as you book, against the booking rules your centre sets.</p>
      <figure className="tr-fig"><CreateScreen s={4} /></figure></> },
    { t: 'Train', body: <>
      <p className="co2c-big">Trainees check in with a scan, and results appear as they train.</p>
      <p>See who is missing before you start, adjust lanes up to the last minute, and handle reshoots on screen.</p>
      <figure className="tr-fig"><OnboardScreen /></figure></> },
    { t: 'Close', body: <>
      <p className="co2c-big">Every item comes back, or is flagged.</p>
      <p>Equipment is scanned back in against the booking, and every trainee's result is saved in one place.</p>
      <div className="t2-two"><figure><ReturnScreen /></figure><figure><ResultScreen /></figure></div></> },
    { t: 'Manage', body: <>
      <p className="co2c-big">The day, your stations and your equipment, on one dashboard.</p>
      <p>Each person sees what they need, with access set by role.</p>
      <ul className="co2c-tags">{ROLES.map((r) => <li key={r[1]}>{r[1]}</li>)}</ul>
      <figure className="tr-fig"><DashScreen /></figure></> },
  ];
  return (
    <>
      <section className="co2c-hero"><div className="shell co2c-hero__in">
        <div><span className="label">TRMS · Training Resource Management System</span>
          <h1>One system for your simulator training centre</h1>
          <p className="co2c-lead">How TRMS takes a session from the first booking to the last item returned.</p>
          <div className="btns"><Link className="btn btn--p" to="/contact">Request a demonstration</Link></div>
          <ol className="co2c-toc">{chapters.map((c, i) => <li key={c.t}><a href={'#tr' + (i + 1)}><span>{Pad(i)}</span>{c.t}</a></li>)}</ol></div>
        <figure><img src={productImg('trms', 'hero', state.pset)} alt="" decoding="async" /></figure>
      </div></section>
      {chapters.map((c, i) => (
        <section className={'band co2c-ch' + (i % 2 ? ' band--deep' : '')} id={'tr' + (i + 1)} key={c.t}><div className="shell co2c-grid">
          <header><span className="co2c-n">{Pad(i)}</span><h2>{c.t}</h2></header>
          <div className="co2c-body rv">{c.body}</div>
        </div></section>
      ))}
      <Cover />
      <Closer title="See TRMS running" line="We will show you each chapter live, on working software." />
    </>
  );
}
