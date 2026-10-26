import { useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../../ui/Icon';
import { Closer } from '../../ui/Closer';
import { productImg } from '../../../lib/images';
import { useReview } from '../../../lib/review';
import { TrmsScoreboard, TrmsLeaderboard } from './TrmsV2';

/* v2 TRMS page. The spine is one booking, followed from the moment it is
   created to the result it produces, with the centre's operating layer
   last. Every screen is a lo-fi redraw of the product design: layout and
   flow follow the real screens, data is generic and illustrative. */

/* ---------- lo-fi primitives ---------- */
const NAV = ['Dashboard', 'Bookings', 'Training results', 'Resource planning', 'Availability', 'Site management', 'System hardware'];

function Win({ title, crumb, active, children }: { title: string; crumb: string; active: string; children: ReactNode }) {
  return (
    <div className="lf" role="img" aria-label={`Illustration of the ${title} screen`}>
      <aside className="lf__side"><b>TRMS</b>
        <ul>{NAV.map((n) => <li key={n} className={n === active ? 'is-on' : ''}>{n}</li>)}</ul></aside>
      <div className="lf__main">
        <div className="lf__top"><span>{crumb}</span><i className="lf__search">Search bookings, assets</i><em>Tue 10 Nov, 08:40</em></div>
        <div className="lf__body"><h4>{title}</h4>{children}</div>
      </div>
    </div>
  );
}
type PK = 'ok' | 'warn' | 'bad' | 'info' | 'mute';
const Pill = ({ k, children }: { k: PK; children: ReactNode }) => <i className={'lf-p lf-p--' + k}>{children}</i>;
function Tbl({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
  return (
    <table className="lf-t"><thead><tr>{head.map((h) => <th key={h}>{h}</th>)}</tr></thead>
      <tbody>{rows.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j}>{c}</td>)}</tr>)}</tbody></table>
  );
}
const Field = ({ l, v, w }: { l: string; v: ReactNode; w?: boolean }) => (
  <label className={'lf-f' + (w ? ' lf-f--w' : '')}><span>{l}</span><b>{v}</b></label>
);
const Chips = ({ items, on }: { items: string[]; on: string }) => (
  <span className="lf-chips">{items.map((x) => <i key={x} className={x === on ? 'is-on' : ''}>{x}</i>)}</span>
);
const NAMES = ['R. Tan', 'M. Hakim', 'J. Lim', 'A. Kumar', 'D. Ong', 'S. Wong'];

/* ---------- 1 create booking, five steps ---------- */
const STEPS = ['Booking details', 'Schedule', 'Lane configuration', 'Nominal roll', 'Review'];
function CreateScreen({ s }: { s: number }) {
  const body = [
    <div className="lf-form" key="0">
      <Field l="Training type" v={<Chips items={['Group', 'Individual']} on="Group" />} />
      <Field l="Training mode" v={<Chips items={['Collective', 'Judgemental', 'Marksmanship']} on="Collective" />} />
      <Field l="Courseware" v="Day test, component training" w />
      <Field l="Unit" v="Unit Alpha" /><Field l="Instructor" v="Capt. L. Ng" />
      <Field l="Options" v={<Chips items={['Include dry run', 'Include briefing room']} on="Include dry run" />} w />
    </div>,
    <div className="lf-split" key="1">
      <ul className="lf-list"><li className="is-on">Day test<span>Not scheduled</span></li><li>Component training A<span>Not scheduled</span></li></ul>
      <div className="lf-form">
        <Field l="Schedule type" v={<Chips items={['AM session', 'PM session', 'Full day', 'Ad hoc']} on="AM session" />} w />
        <Field l="Date" v="Thu 12 Nov" />
        <div className="lf-ok"><Icon name="ph-check-circle" />3 stations required, 3 available on this date</div>
      </div>
    </div>,
    <div className="lf-split" key="2">
      <ul className="lf-list"><li className="is-on">Day test<span>Station 01, flat screen</span></li><li>Component training A<span>Station 04, C-shaped</span></li></ul>
      <Tbl head={['Lane', 'Weapon', 'Active']} rows={[1, 2, 3, 4, 5].map((n) => [`Lane ${n}`, n === 4 ? '-' : 'Rifle', <i className={'lf-tg' + (n === 4 ? '' : ' is-on')} key="t"></i>])} />
    </div>,
    <Tbl key="3" head={['No', 'Name', 'Platoon', 'Weapon', 'Role']} rows={NAMES.slice(0, 5).map((n, i) => [i + 1, n, `Platoon ${1 + (i > 2 ? 1 : 0)}`, i === 3 ? 'LMG' : 'Rifle', i === 0 ? 'Section commander' : 'Rifleman'])} />,
    <div className="lf-split" key="4">
      <div className="lf-card"><b>Booking summary</b>
        <Field l="Training" v="Group, collective, dry run" /><Field l="Unit" v="Unit Alpha" /><Field l="Instructor" v="Capt. L. Ng" /></div>
      <div className="lf-card"><b>Courseware 1</b>
        <Field l="When" v="Thu 12 Nov, AM session" /><Field l="Where" v="Station 01, lanes 1-3, 5" />
        <div className="lf-ok"><Icon name="ph-check-circle" />Lanes assigned, roll complete</div></div>
    </div>,
  ][s];
  return (
    <Win title="Create booking" crumb="Bookings / Create" active="Bookings">
      <ol className="lf-step">{STEPS.map((x, i) => <li key={x} className={i < s ? 'is-done' : i === s ? 'is-on' : ''}><i>{i < s ? '✓' : i + 1}</i>{x}</li>)}</ol>
      {body}
    </Win>
  );
}

function Create() {
  const [s, setS] = useState(0);
  const say = [
    'Choose the unit, training mode and courseware.',
    'Pick a date and session. Availability is checked instantly, so stations are never double booked.',
    'Set up the lanes the session needs.',
    'Add trainees by import or by hand.',
    'Check the summary and confirm. The stations are reserved.',
  ];
  return (
    <section className="band" id="t2-create"><div className="shell">
      <div className="t2-h"><h2>Book a session in five simple steps</h2>
        <p>Everything the training day needs, captured once.</p></div>
      <div className="t2-stage">
        <ol className="t2-steps" role="tablist" aria-label="Create booking steps">{STEPS.map((x, i) => (
          <li key={x}><button type="button" role="tab" aria-selected={s === i} onClick={() => setS(i)}>
            <span>{i + 1}</span><b>{x}</b>{s === i && <p>{say[i]}</p>}</button></li>
        ))}</ol>
        <div className="t2-screen"><CreateScreen s={s} /></div>
      </div>
    </div></section>
  );
}

/* ---------- 2 the life of a booking ---------- */
const STATES: [string, string, string][] = [
  ['ph-calendar-check', 'Upcoming', 'Stations reserved'],
  ['ph-package', 'Assets issued', 'Equipment handed out'],
  ['ph-user-check', 'Onboarding', 'Trainees checked in'],
  ['ph-play-circle', 'Ongoing', 'Training in progress'],
  ['ph-arrow-u-down-left', 'Return assets', 'Equipment coming back'],
  ['ph-check-circle', 'Completed', 'Results saved'],
];
const BRANCH: [string, string, string][] = [
  ['ph-plus-circle', 'Top up', 'Extra equipment added mid-session'],
  ['ph-circle-half', 'Partial return', 'See exactly what is still out'],
  ['ph-warning', 'Missing', 'Flagged until it is found'],
  ['ph-clock-countdown', 'Overdue', 'Late returns highlighted'],
  ['ph-x-circle', 'Cancelled', 'Stations freed for others'],
];
function Life() {
  return (
    <section className="band band--deep"><div className="shell">
      <div className="t2-h"><h2>Always know where every booking stands</h2>
        <p>Each booking shows its status at a glance, from scheduled to completed.</p></div>
      <ol className="t2-life">{STATES.map((x) => (
        <li key={x[1]}><span className="t2-life__ic"><Icon name={x[0]} /></span><b>{x[1]}</b><p>{x[2]}</p></li>
      ))}</ol>
      <div className="t2-branch"><span className="t2-branch__k">And it flags what needs attention</span>
        <ul>{BRANCH.map((x) => <li key={x[1]}><Icon name={x[0]} /><span><b>{x[1]}</b>{x[2]}</span></li>)}</ul></div>
    </div></section>
  );
}

/* ---------- 3 the training day ---------- */
function OnboardScreen() {
  return (
    <Win title="Confirm attendance" crumb="Bookings / Unit Alpha / Onboarding" active="Bookings">
      <div className="lf-bar"><Chips items={['All 6', 'Present 5', 'Absent 1']} on="All 6" /><span className="lf-btn"><Icon name="ph-scan" />Scan ID</span><span className="lf-btn">Import list</span></div>
      <Tbl head={['No', 'Name', 'Weapon', 'Role', 'Attendance']} rows={NAMES.map((n, i) => [i + 1, n, i === 3 ? 'LMG' : 'Rifle', i === 0 ? 'Section commander' : 'Rifleman', i === 4 ? <Pill k="bad">Absent</Pill> : <Pill k="ok">Present</Pill>])} />
    </Win>
  );
}
function Day() {
  const [t, setT] = useState(0);
  const tabs = ['Check in', 'Run the session'];
  return (
    <section className="band"><div className="shell">
      <div className="t2-h"><h2>Training day, without the paperwork</h2>
        <p>Check trainees in with a scan, run the session from one screen and see results as they come in.</p></div>
      <div className="t2-tabs" role="tablist">{tabs.map((x, i) => (
        <button key={x} type="button" role="tab" aria-selected={t === i} onClick={() => setT(i)}>{x}</button>))}</div>
      <div className="t2-day">
        <div className="t2-day__s">{t === 0 ? <OnboardScreen /> : <TrmsScoreboard />}</div>
        <ul className="t2-day__pts">{(t === 0
          ? [['ph-scan', 'Fast check-in', 'Scan an ID or import a list'], ['ph-user-minus', 'Absences at a glance', 'Know who is missing before you start'], ['ph-squares-four', 'Last-minute changes', 'Adjust lanes right up to the start']]
          : [['ph-users-three', 'Smooth queues', 'See who is on and who is next'], ['ph-arrow-counter-clockwise', 'Easy reshoots', 'The first result is kept'], ['ph-chart-bar', 'Live results', 'Pass and fail counts as they happen']]
        ).map((p) => <li key={p[1]}><Icon name={p[0]} /><span><b>{p[1]}</b>{p[2]}</span></li>)}</ul>
      </div>
    </div></section>
  );
}

/* ---------- 4 after the session ---------- */
function ReturnScreen() {
  return (
    <Win title="Return assets" crumb="Bookings / Unit Alpha / Assets" active="Bookings">
      <div className="lf-kpi"><span><b>24</b>Issued</span><span className="ok"><b>21</b>Returned</span><span className="warn"><b>2</b>Pending</span><span className="bad"><b>1</b>Missing</span></div>
      <Tbl head={['Asset', 'Type', 'Tag', 'Status']} rows={[
        ['Rifle 0142', 'Weapon', 'RF-0142', <Pill k="ok" key="a">Returned</Pill>], ['Rifle 0143', 'Weapon', 'RF-0143', <Pill k="ok" key="b">Returned</Pill>],
        ['Headset 07', 'Accessory', 'AC-0007', <Pill k="warn" key="c">Pending</Pill>], ['Magazine set 3', 'Accessory', 'AC-0031', <Pill k="bad" key="d">Missing</Pill>]]} />
    </Win>
  );
}
function ResultScreen() {
  return (
    <Win title="Training result" crumb="Training results / Unit Alpha" active="Training results">
      <div className="lf-kpi"><span><b>6</b>Trainees</span><span className="info"><b>1</b>Marksman</span><span className="ok"><b>4</b>Pass</span><span className="bad"><b>1</b>Fail</span></div>
      <Tbl head={['Name', 'Station', 'Lane', 'Result']} rows={NAMES.slice(0, 5).map((n, i) => [n, 'Station 01', `Lane ${(i % 3) + 1}`,
        <span key="r"><b className="lf-mono">{[20, 15, 17, 12, 6][i]}</b>/20 {i === 0 ? <Pill k="info">Marksman</Pill> : i === 4 ? <Pill k="bad">Fail</Pill> : <Pill k="ok">Pass</Pill>}</span>])} />
    </Win>
  );
}
function After() {
  return (
    <section className="band band--deep"><div className="shell">
      <div className="t2-h"><h2>Finish with nothing left behind</h2>
        <p>Scan equipment back in and get every trainee’s result in one place.</p></div>
      <div className="t2-two"><figure><ReturnScreen /><figcaption>Know instantly what has come back.</figcaption></figure>
        <figure><ResultScreen /><figcaption>Results for every trainee, ready to share.</figcaption></figure></div>
    </div></section>
  );
}

/* ---------- 5 running the centre ---------- */
function DashScreen() {
  const rows: [string, [number, number, string, string][]][] = [
    ['Station 01', [[0, 45, 'Unit Alpha, collective', 'on']]], ['Station 02', [[10, 35, 'Marksmanship, individual', ''], [55, 40, 'Unit Bravo', '']]],
    ['Station 03', [[50, 45, 'Unit Charlie, judgemental', '']]], ['Station 04', [[0, 95, 'Full day, Unit Delta', 'full']]],
  ];
  return (
    <Win title="Dashboard" crumb="Dashboard" active="Dashboard">
      <div className="lf-kpi"><span><b>8</b>Today's bookings</span><span className="ok"><b>4</b>Done</span><span className="info"><b>2</b>Ongoing</span><span className="warn"><b>2</b>Upcoming</span></div>
      <div className="lf-gantt"><div className="lf-gantt__h"><span>08:00</span><span>10:00</span><span>12:00</span><span>14:00</span><span>16:00</span></div>
        {rows.map((r) => <div className="lf-gantt__r" key={r[0]}><b>{r[0]}</b><div>{r[1].map((x) => <i key={x[2]} className={x[3]} style={{ left: x[0] + '%', width: x[1] + '%' }}>{x[2]}</i>)}</div></div>)}
        <em className="lf-gantt__now" style={{ left: 'calc(84px + (100% - 84px) * .24)' }}></em></div>
    </Win>
  );
}
function AvailScreen() {
  return (
    <Win title="Operational availability" crumb="Operational availability" active="Availability">
      <Tbl head={['Month', 'Uptime', 'Downtime', 'Availability', 'Status']} rows={[
        ['October', '49h 12m', '1h 48m', '96.5%', <Pill k="ok" key="a">Compliant</Pill>], ['September', '50h 17m', '3h 15m', '93.9%', <Pill k="bad" key="b">Non-compliant</Pill>],
        ['August', '48h 25m', '2h 10m', '95.7%', <Pill k="ok" key="c">Compliant</Pill>], ['July', '47h 58m', '3h 31m', '93.1%', <Pill k="bad" key="d">Non-compliant</Pill>]]} />
    </Win>
  );
}
function SiteScreen() {
  return (
    <Win title="Station 01" crumb="Site management / Station 01" active="Site management">
      <div className="lf-bar"><Chips items={['Lanes', 'Blackout dates']} on="Lanes" /><span className="lf-btn">Add lane</span></div>
      <Tbl head={['Lane', 'Status', 'Upcoming blackout']} rows={[
        ['Lane 1', <Pill k="warn" key="a">Maintenance</Pill>, 'Fri 13 Nov, 08:00 to 12:00'], ['Lane 2', <Pill k="ok" key="b">Available</Pill>, '-'],
        ['Lane 3', <Pill k="mute" key="c">Unavailable</Pill>, 'Sat 14 Nov, full day'], ['Lane 4', <Pill k="ok" key="d">Available</Pill>, '-']]} />
    </Win>
  );
}
function HwScreen() {
  return (
    <Win title="System hardware" crumb="System hardware / Overview" active="System hardware">
      <div className="lf-kpi"><span><b>18</b>Total assets</span><span className="ok"><b>12</b>Available</span><span className="info"><b>5</b>Issued</span><span className="bad"><b>1</b>Missing</span></div>
      <ul className="lf-notes">
        <li className="bad"><Icon name="ph-bell-ringing" /><span><b>Asset missing</b>Magazine set 3 is overdue for return by one day</span></li>
        <li><Icon name="ph-broadcast" /><span><b>Reader notification</b>Rifle 0142 read at the armoury door, returned</span></li>
        <li><Icon name="ph-package" /><span><b>Asset issued</b>6 items issued to Unit Alpha, Station 01</span></li></ul>
    </Win>
  );
}
function Centre() {
  const [t, setT] = useState(0);
  const tabs: [string, string, () => JSX.Element][] = [
    ['Dashboard', 'See every station and session for the day.', DashScreen],
    ['Availability', 'Track availability month by month.', AvailScreen],
    ['Sites and lanes', 'Plan maintenance and block out dates.', SiteScreen],
    ['Hardware and RFID', 'Track every tagged item with RFID.', HwScreen],
  ];
  const S = tabs[t][2];
  return (
    <section className="band"><div className="shell">
      <div className="t2-h"><h2>Manage the whole centre, not just bookings</h2>
        <p>Your day, your availability, your sites and your equipment, in the same system.</p></div>
      <div className="t2-tabs" role="tablist">{tabs.map((x, i) => (
        <button key={x[0]} type="button" role="tab" aria-selected={t === i} onClick={() => setT(i)}>{x[0]}</button>))}</div>
      <p className="t2-cap">{tabs[t][1]}</p>
      <div className="t2-wide"><S /></div>
    </div></section>
  );
}

/* ---------- 6 who and what ---------- */
const ROLES: [string, string, string][] = [
  ['ph-crown-simple', 'Admin', 'Sets up sites, users and rules'], ['ph-desktop', 'Operator', 'Creates bookings and runs sessions'],
  ['ph-chalkboard-teacher', 'Instructor', 'Follows details and results'], ['ph-wrench', 'Maintainer', 'Keeps stations and lanes available'],
  ['ph-eye', 'Supervisor', 'Oversees the day across stations'], ['ph-vault', 'Armoury', 'Issues and receives equipment'],
  ['ph-magnifying-glass', 'Auditor', 'Reviews records and activity'],
];
const COVER: [string, string, string, string][] = [
  ['ph-crosshair-simple', 'Weapon simulator training', 'Most complete', 'Stations and lanes for individual and group shooting'],
  ['ph-steering-wheel', 'Vehicle simulator training', 'In build', 'Cabins with crew roles and call signs'],
  ['ph-users-four', 'Command team training', 'In build', 'Workstation clusters grouped into zones'],
];
function Who() {
  return (
    <section className="band band--deep"><div className="shell">
      <div className="t2-who">
        <div><h2>Built for everyone in the centre</h2><p className="t2-lead">Each person sees what they need, with access set by role.</p>
          <ul className="t2-roles">{ROLES.map((r) => <li key={r[1]}><Icon name={r[0]} /><span><b>{r[1]}</b>{r[2]}</span></li>)}</ul></div>
        <div><h2>Three kinds of training, one system</h2><p className="t2-lead">Book and manage all your simulators in one place.</p>
          <ul className="t2-cover">{COVER.map((c) => <li key={c[1]}><Icon name={c[0]} /><span><b>{c[1]}</b>{c[3]}</span></li>)}</ul></div>
      </div>
    </div></section>
  );
}

export function TrmsPageV2() {
  const { state } = useReview();
  const go = () => document.getElementById('t2-create')?.scrollIntoView({ behavior: 'smooth' });
  return (
    <>
      <section className="pv-hero">
        <div className="pv-hero__bed pv-par"><img src={productImg('trms', 'hero', state.pset)} alt="" decoding="async" /></div><div className="pv-hero__veil"></div>
        <div className="shell pv-hero__in">
          <div className="v6pbrand"><span className="v6pbrand__s">TRMS</span><span className="pv-status"><Icon name="ph-monitor-play" />Available for demonstration</span></div>
          <h1>Training Resource Management System</h1>
          <p className="pv-hero__lead">Book stations, issue equipment, run sessions and capture results. One system for your whole simulator training centre.</p>
          <div className="pv-cta"><Link className="btn btn--p" to="/contact">Request a demonstration</Link>
            <button type="button" className="btn btn--g" onClick={go}>See how it works</button></div>
        </div>
      </section>
      <Create />
      <Life />
      <Day />
      <TrmsLeaderboard />
      <After />
      <Centre />
      <Who />
      <Closer title="See TRMS running" label="Request a demonstration" line="We will walk you through a full training day in TRMS." />
    </>
  );
}
