import { Band } from '../components/ui/Band';
import { Table } from '../components/ui/Table';
import { Closer } from '../components/ui/Closer';
import { ASSURANCE_CONTROLS, ASSURANCE_CONTROLS_V2, ASSURANCE_IMAGES, ASSURANCE_IMAGES_V2, ASSURANCE_LAYERS_V2 } from '../content/assurance';
import { useV } from '../lib/version';
import { mediaUrl } from '../lib/media';
import { pad2 } from '../lib/html';

const SAFETY: [string, string, string][] = [
  ['ph-hand-palm', 'An independent emergency stop', 'The stop path does not depend on our control software being healthy, reachable or running. It halts targetry and effects immediately.'],
  ['ph-person-simple-walk', 'Interlock on a detected hazard', 'A person detected forward of the firing line inhibits firing and pauses targetry until the area is confirmed clear.'],
  ['ph-plugs', 'Defined fail safe behaviour', 'Loss of communication, power or network each has a specified safe state, written down and tested in advance.'],
];
/* v2: the detected-hazard row says what the system actually does. By default
   it alerts the operator; it does not stop firing on its own (27 Oct proposal). */
const SAFETY_V2: [string, string, string][] = [
  ['ph-hand-palm', 'An independent emergency stop', 'The emergency stop does not rely on our control software being healthy, reachable or even running. It halts targets and effects immediately.'],
  ['ph-person-simple-walk', 'Alert on a detected hazard', 'During live firing, a person detected in the target area triggers a critical alert with the camera view and the time, so the operator can stop the range at once.'],
  ['ph-plugs', 'A safe state for every failure', 'Loss of communication, power or network each has a defined safe state, written down and tested in advance.'],
];
const BUILT_V2: [string, string][] = [
  ['Every change reviewed', 'A second engineer reviews every change before it is built.'],
  ['Tested where it matters', 'Connections, safety behaviour and equipment counts each have their own tests.'],
  ['Known versions on every site', 'Every site runs a known set of software versions that we can rebuild exactly.'],
  ['Security fixes with a clear route', 'We track the third-party components we use, with a defined way to patch systems already on site.'],
];
const BUILT: [string, string][] = [
  ['Version control and review', 'No change reaches a build without a second pair of eyes.'],
  ['Test strategy', 'Interfaces, safety behaviour and reconciliation logic are tested separately and explicitly.'],
  ['Configuration management', 'What is deployed at a site is a known, reproducible set of versions.'],
  ['Vulnerability handling', 'Dependencies are tracked, and there is a stated route for patching a fielded system.'],
];

export function Assurance() {
  const v2 = useV(2);
  const imgs = (v2 ? ASSURANCE_IMAGES_V2 : ASSURANCE_IMAGES) as string[];
  return (
    <>
      <section className="pv-hero pv-hero--short">
        <div className="pv-hero__bed pv-par"><img src={mediaUrl('a/hero.jpg')} alt="" decoding="async" /></div><div className="pv-hero__veil"></div>
        <div className="shell pv-hero__in"><span className="label">Assurance</span>
          <h1>{v2 ? 'Secure and safe by design' : 'Secure by design, from the node to the enterprise'}</h1>
          <p className="pv-hero__lead">{v2 ? 'Security, reliability and safety are built into every layer, from the equipment on your range to the systems your whole organisation relies on.' : 'Security, reliability and compliance built into every layer, from fielded systems and site infrastructure to enterprise platforms and data networks.'}</p>
        </div></section>

      <section className="band"><div className="shell">
        <div className="head"><h2>{v2 ? 'Six security controls' : 'Six controls'}</h2></div>
        <div className="pv-ctl">
          {((v2 ? ASSURANCE_CONTROLS_V2 : ASSURANCE_CONTROLS) as string[][]).map((c, i) => (
            <article className="pv-ctl__i pv-up" key={c[1]}>
              <figure className="pv-ctl__img"><div className="pv-par"><img src={mediaUrl('a/' + imgs[i] + '.jpg')} alt="" loading="lazy" decoding="async" /></div></figure>
              <span className="pv-mod__n">{pad2(i)}</span>
              <h3><i className={'ph ' + c[0]} aria-hidden="true"></i>{c[1]}</h3><p>{c[2]}</p></article>
          ))}
        </div></div></section>

      {v2 && <section className="band band--deep"><div className="shell">
        <div className="head"><h2>How the platform protects itself</h2>
          <p>The same protections sit under every system we deliver, from sign-in to the database.</p></div>
        <ul className="as-layers">{ASSURANCE_LAYERS_V2.map((l) => (
          <li className="pv-up" key={l[1]}><i className={'ph ' + l[0]} aria-hidden="true"></i>
            <div><h3>{l[1]}</h3><p>{l[2]}</p></div></li>))}
        </ul>
      </div></section>}

      <section className="pv-flow">
        <div className="pv-flow__bed pv-par"><img src={mediaUrl('a/estop.jpg')} alt="" decoding="async" /></div><div className="pv-flow__veil"></div>
        <div className="shell pv-flow__in"><h2>{v2 ? 'Safety on the range' : 'Safety posture on the range'}</h2>
          <ol className="pv-steps pv-steps--3">
            {(v2 ? SAFETY_V2 : SAFETY).map((f, i) => (
              <li className="pv-up" key={f[1]}><span className="pv-steps__ic"><i className={'ph ' + f[0]} aria-hidden="true"></i></span>
                <span className="pv-steps__n">{pad2(i)}</span><b>{f[1]}</b><p>{f[2]}</p></li>
            ))}
          </ol>
        </div></section>

      {v2 ? <Band title="Each layer keeps working when something fails"
        intro="Not every part needs the same level of backup. We put it where training and safety depend on it.">
        <Table head={['Layer', 'Priority', 'If something fails']} rows={[
          ['Running the session', 'Safety critical', 'A session already started keeps running from data held locally'],
          ['Weapon, ammunition and tracking records', 'Mission critical', 'Keeps recording locally and catches up when the link returns'],
          ['Video and analytics', 'Mission critical', 'Recording continues. Analytics pause first if resources run short'],
          ['Administration', 'Business critical', 'Never blocks a session already under way']]} />
      </Band> : <Band title="Not every layer needs the same availability"
        intro="Treating a whole system as uniformly critical is how programmes end up paying for redundancy where it does not matter, and lacking it where it does.">
        <Table head={['Layer', 'Criticality', 'Degraded mode']} rows={[
          ['Execution', 'Mission and safety critical', 'Runs an authorised session from a cached session package'],
          ['Accountability', 'Mission critical', 'Records locally, reconciliation deferred but never skipped'],
          ['Observation', 'Mission critical', 'Recording continues, analytics degrade before recording does'],
          ['Administrative', 'Business critical', 'Does not block a session already under way']]} />
      </Band>}
      <Band deep title={v2 ? 'How we build the software' : 'How the software is actually built'}>
        <div className="g g4 rv">{(v2 ? BUILT_V2 : BUILT).map((c) => <div className="tile" key={c[0]}><h4>{c[0]}</h4><p>{c[1]}</p></div>)}</div>
      </Band>
      <Closer label="Talk to us" line="Speak with our team about security, safety and compliance for your programme." />
    </>
  );
}
