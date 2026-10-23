import { Band } from '../components/ui/Band';
import { Table } from '../components/ui/Table';
import { Closer } from '../components/ui/Closer';
import { ASSURANCE_CONTROLS, ASSURANCE_IMAGES } from '../content/assurance';
import { mediaUrl } from '../lib/media';
import { pad2 } from '../lib/html';

const SAFETY: [string, string, string][] = [
  ['ph-hand-palm', 'An independent emergency stop', 'The stop path does not depend on our control software being healthy, reachable or running. It halts targetry and effects immediately.'],
  ['ph-person-simple-walk', 'Interlock on a detected hazard', 'A person detected forward of the firing line inhibits firing and pauses targetry until the area is confirmed clear.'],
  ['ph-plugs', 'Defined fail safe behaviour', 'Loss of communication, power or network each has a specified safe state, written down and tested in advance.'],
];
const BUILT: [string, string][] = [
  ['Version control and review', 'No change reaches a build without a second pair of eyes.'],
  ['Test strategy', 'Interfaces, safety behaviour and reconciliation logic are tested separately and explicitly.'],
  ['Configuration management', 'What is deployed at a site is a known, reproducible set of versions.'],
  ['Vulnerability handling', 'Dependencies are tracked, and there is a stated route for patching a fielded system.'],
];

export function Assurance() {
  const imgs = ASSURANCE_IMAGES as string[];
  return (
    <>
      <section className="pv-hero pv-hero--short">
        <div className="pv-hero__bed pv-par"><img src={mediaUrl('a/hero.jpg')} alt="" decoding="async" /></div><div className="pv-hero__veil"></div>
        <div className="shell pv-hero__in"><span className="label">Assurance</span>
          <h1>Secure by design, from the node to the enterprise</h1>
          <p className="pv-hero__lead">Security, reliability and compliance built into every layer, from fielded systems and site infrastructure to enterprise platforms and data networks.</p>
        </div></section>

      <section className="band"><div className="shell">
        <div className="head"><h2>Six controls</h2></div>
        <div className="pv-ctl">
          {(ASSURANCE_CONTROLS as string[][]).map((c, i) => (
            <article className="pv-ctl__i pv-up" key={c[1]}>
              <figure className="pv-ctl__img"><div className="pv-par"><img src={mediaUrl('a/' + imgs[i] + '.jpg')} alt="" loading="lazy" decoding="async" /></div></figure>
              <span className="pv-mod__n">{pad2(i)}</span>
              <h3><i className={'ph ' + c[0]} aria-hidden="true"></i>{c[1]}</h3><p>{c[2]}</p></article>
          ))}
        </div></div></section>

      <section className="pv-flow">
        <div className="pv-flow__bed pv-par"><img src={mediaUrl('a/estop.jpg')} alt="" decoding="async" /></div><div className="pv-flow__veil"></div>
        <div className="shell pv-flow__in"><h2>Safety posture on the range</h2>
          <ol className="pv-steps pv-steps--3">
            {SAFETY.map((f, i) => (
              <li className="pv-up" key={f[1]}><span className="pv-steps__ic"><i className={'ph ' + f[0]} aria-hidden="true"></i></span>
                <span className="pv-steps__n">{pad2(i)}</span><b>{f[1]}</b><p>{f[2]}</p></li>
            ))}
          </ol>
        </div></section>

      <Band title="Not every layer needs the same availability"
        intro="Treating a whole system as uniformly critical is how programmes end up paying for redundancy where it does not matter, and lacking it where it does.">
        <Table head={['Layer', 'Criticality', 'Degraded mode']} rows={[
          ['Execution', 'Mission and safety critical', 'Runs an authorised session from a cached session package'],
          ['Accountability', 'Mission critical', 'Records locally, reconciliation deferred but never skipped'],
          ['Observation', 'Mission critical', 'Recording continues, analytics degrade before recording does'],
          ['Administrative', 'Business critical', 'Does not block a session already under way']]} />
      </Band>
      <Band deep title="How the software is actually built">
        <div className="g g4 rv">{BUILT.map((c) => <div className="tile" key={c[0]}><h4>{c[0]}</h4><p>{c[1]}</p></div>)}</div>
      </Band>
      <Closer label="Talk to us" line="Speak with our team about security, safety and compliance for your programme." />
    </>
  );
}
