import { useState } from 'react';
import { Icon } from '../../ui/Icon';

/* v2 TRMS sections. Content is written so a first-time reader can answer
   three questions: what is it, how does a booking flow, what does it do. */

const ROLES: [string, string, string][] = [
  ['ph-user-circle', 'Unit training clerk', 'Requests a booking and submits the trainee roll.'],
  ['ph-identification-badge', 'Training administrator', 'Approves bookings, runs the session and closes it.'],
  ['ph-package', 'Store and armoury', 'Issues equipment against the booking and receives it back.'],
  ['ph-chalkboard-teacher', 'Instructor', 'Follows details on the stations and sees results as they land.'],
];

const KINDS: [string, string, string][] = [
  ['ph-crosshair-simple', 'Weapon simulator training', 'Stations divided into lanes'],
  ['ph-steering-wheel', 'Vehicle simulator training', 'Cabins with crew roles'],
  ['ph-users-four', 'Command team training', 'Clusters grouped into zones'],
];

export function TrmsWhat() {
  return (
    <section className="band band--deep"><div className="shell">
      <div className="tw">
        <div className="tw__say">
          <h2>What TRMS is</h2>
          <p className="tw__big">A booking system for simulator training centres that follows each booking all the way through the training day.</p>
          <p>It decides who trains on which station and when, checks out the equipment they need, runs the session, records results, and makes sure everything comes back.</p>
          <ul className="tw__kinds">{KINDS.map((k) => (
            <li key={k[1]}><Icon name={k[0]} /><span><b>{k[1]}</b>{k[2]}</span></li>
          ))}</ul>
        </div>
        <div className="tw__who">
          <h3>Who uses it</h3>
          <ul>{ROLES.map((r) => (
            <li key={r[1]}><Icon name={r[0]} /><span><b>{r[1]}</b>{r[2]}</span></li>
          ))}</ul>
        </div>
      </div>
    </div></section>
  );
}

/* Short on purpose: one line per step, so the row reads at a glance. */
export const JOURNEY_V2: [string, string, string][] = [
  ['ph-calendar-plus', 'Book', 'Date, course, stations and trainees'],
  ['ph-calendar-check', 'Schedule', 'Stations held until the day'],
  ['ph-scan', 'Issue', 'Equipment scanned out to the booking'],
  ['ph-user-check', 'Check in', 'Attendance confirmed on the day'],
  ['ph-play-circle', 'Train', 'Details queue and run per station'],
  ['ph-chart-bar', 'Results', 'Scores recorded as each run ends'],
  ['ph-arrow-u-down-left', 'Return', 'Equipment back, booking closed'],
];

const FEATURES: [string, string, string[]][] = [
  ['ph-calendar-blank', 'Booking', ['Booking request and approval', 'Conflict check on stations, lanes and rooms', 'Booking rules set per training centre', 'Day, week and month calendar']],
  ['ph-user-list', 'Trainees', ['Nominal roll per booking, by upload or entry', 'Check-in by list or ID scan', 'Details assigned to stations and lanes']],
  ['ph-scan', 'Equipment', ['Tagged equipment issued by scan', 'Items not on the booking refused', 'Return scan, with missing items flagged']],
  ['ph-play-circle', 'Training day', ['Session clock and detail queue', 'Reshoot without losing the first result', 'Lane change when a lane goes down', 'Live results per trainee']],
  ['ph-gear-six', 'Administration', ['Sites, stations, lanes and blackout dates', 'Users, roles and permissions', 'Import and export of bookings and results', 'Activity log and hardware health']],
];

export function TrmsFeatures() {
  return (
    <section className="band"><div className="shell">
      <div className="head"><h2>Everything it covers</h2><p>The features in the current prototype, grouped by who uses them and when.</p></div>
      <div className="tf">{FEATURES.map((f) => (
        <div className="tf__g pv-up" key={f[1]}>
          <h3><Icon name={f[0]} />{f[1]}</h3>
          <ul>{f[2].map((x) => <li key={x}><Icon name="ph-check" />{x}</li>)}</ul>
        </div>
      ))}</div>
    </div></section>
  );
}

/* The scoreboard, redrawn from the prototype's own two screens: the live
   session (details per station) and Live Results (the nominal roll with a
   course result per trainee). Names and numbers are illustrative. */
const DETAILS: [string, string, number, string][] = [
  ['Station 01', 'Detail 1', 3, 'Ready'], ['Station 01', 'Detail 2', 1, 'In queue'],
  ['Station 04', 'Detail 1', 2, 'Ready'], ['Station 04', 'Detail 2', 2, 'In queue'],
];
const ROLL: [string, string, string, string, number, 'M' | 'P' | 'F'][] = [
  ['R. Tan', 'Station 01', 'Detail 1', 'Lane 1', 20, 'M'],
  ['M. Hakim', 'Station 01', 'Detail 1', 'Lane 2', 10, 'P'],
  ['J. Lim', 'Station 01', 'Detail 2', 'Lane 2', 17, 'P'],
  ['A. Kumar', 'Station 04', 'Detail 1', 'Lane 1', 11, 'P'],
  ['D. Ong', 'Station 04', 'Detail 1', 'Lane 2', 6, 'F'],
];
const RES = { M: 'Marksman', P: 'Pass', F: 'Fail' };

export function TrmsScoreboard() {
  const [tab, setTab] = useState<'session' | 'results'>('results');
  return (
    <div className="sb" role="group" aria-label="Illustration of the live session and live results screens">
      <div className="sb__top">
        <div className="sb__id"><b>Group training, day test</b><span>Collective · Day test courseware</span></div>
        <div className="sb__kpi">
          <span className="sb__k sb__k--m"><b>1</b>/8 marksman</span>
          <span className="sb__k sb__k--p"><b>3</b>/8 pass</span>
          <span className="sb__k sb__k--f"><b>1</b>/8 fail</span>
          <span className="sb__clock"><Icon name="ph-timer" />00:42:16</span>
        </div>
      </div>
      <div className="sb__tabs" role="tablist">
        <button type="button" role="tab" aria-selected={tab === 'session'} onClick={() => setTab('session')}>Details</button>
        <button type="button" role="tab" aria-selected={tab === 'results'} onClick={() => setTab('results')}>Live results</button>
        <span className="sb__ill">Illustrative data</span>
      </div>
      {tab === 'session' ? (
        <div className="sb__det">{DETAILS.map((d) => (
          <div className="sb__card" key={d[0] + d[1]}>
            <b>{d[1]}</b>
            <dl><div><dt>Station</dt><dd>{d[0]}</dd></div><div><dt>Trainees</dt><dd>{d[2]}</dd></div>
              <div><dt>Status</dt><dd><i className={'sb__pill' + (d[3] === 'Ready' ? ' is-ready' : '')}>{d[3]}</i></dd></div></dl>
          </div>
        ))}</div>
      ) : (
        <table className="sb__tbl">
          <thead><tr><th>Trainee</th><th>Station</th><th>Detail</th><th>Lane</th><th>Course result</th></tr></thead>
          <tbody>{ROLL.map((r) => (
            <tr key={r[0]}><td>{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td><td>{r[3]}</td>
              <td><b>{r[4]}</b>/20 <i className={'sb__r sb__r--' + r[5]} title={RES[r[5]]}>{RES[r[5]]}</i></td></tr>
          ))}</tbody>
        </table>
      )}
    </div>
  );
}

/* The wall leaderboard, as a wireframe replica of the prototype's TV
   screen: podium, ranked table, and the viewing unit's own standing.
   Units, names and points are placeholders. */
const PODIUM: [number, string, number][] = [[2, 'Unit B', 58], [1, 'Unit A', 60], [3, 'Unit C', 55]];
const TABLE: [number, string, number, number, number, number][] = [
  [4, 'Unit D', 3, 3, 9, 54], [5, 'Unit E', 4, 3, 9, 52], [6, 'Unit F', 4, 4, 8, 50],
  [7, 'Unit G', 5, 4, 7, 48], [8, 'Unit H', 5, 5, 6, 47], [9, 'Unit J', 5, 4, 5, 45],
];
const PILLARS: [string, string, string][] = [['ph-crosshair', 'Pillar 1', '7th'], ['ph-shield-check', 'Pillar 2', '6th'], ['ph-target', 'Pillar 3', '7th']];

export function TrmsLeaderboard() {
  return (
    <section className="band"><div className="shell">
      <div className="lb-wrap">
        <div className="lb-txt">
          <h2>A live leaderboard that keeps units motivated</h2>
          <p>Put results on a screen in the centre. Units see the podium, the full ranking and how they compare in each category.</p>
          <p className="lb-note"><i className="ph ph-info" aria-hidden="true"></i>Illustration. Units and scores are examples.</p>
        </div>
        <figure className="lb-tv" aria-label="Wireframe of the leaderboard screen">
          <div className="lb">
            <div className="lb__bar"><b>TRMS</b><span>Leaderboard</span><span>Station 01</span><span>Collective training</span><em>Level 4</em></div>
            <div className="lb__main">
              <div className="lb__left">
                <div className="lb__pod">{PODIUM.map((p) => (
                  <div className={'lb__p lb__p--' + p[0]} key={p[1]}><i>{p[0]}</i><b>{p[1]}</b><span>{p[2]} pts</span></div>
                ))}</div>
                <table className="lb__t"><thead><tr><th>Rank</th><th>Unit</th><th>P1</th><th>P2</th><th>P3</th><th>Overall</th></tr></thead>
                  <tbody>{TABLE.map((r) => (
                    <tr key={r[0]} className={r[0] === 7 ? 'is-me' : ''}>{r.map((c, i) => <td key={i}>{c}</td>)}</tr>
                  ))}</tbody></table>
              </div>
              <div className="lb__me">
                <span>Unit standing</span><b>#7</b><em>of 35 units</em><strong>Unit G, 48 pts</strong>
                <ul>{PILLARS.map((p) => <li key={p[1]}><i className={'ph ' + p[0]} aria-hidden="true"></i>{p[1]}<b>{p[2]}</b></li>)}</ul>
              </div>
            </div>
          </div>
          <div className="lb-tv__stand" aria-hidden="true"></div>
        </figure>
      </div>
    </div></section>
  );
}
