import { Link } from 'react-router-dom';
import { Band } from '../components/ui/Band';
import { Table } from '../components/ui/Table';
import { Media } from '../components/ui/Media';
import { Closer } from '../components/ui/Closer';
import { PartnersSection } from '../components/sections/shared/PartnersSection';
import { INTERFACE_CATEGORIES, INTERFACE_CATEGORIES_V2 } from '../content/integration';
import { useV } from '../lib/version';

/* v2 (28 Oct 2026): the same four practices in plainer words. */
const PROVE_V2: [string, string][] = [
  ['Tested against simulators first', 'Each connection is first tested against a simulated version of the other system, so work starts before the real equipment arrives.'],
  ['Connected step by step', 'Connections come online one at a time, in the order they depend on each other, not all at once at the end.'],
  ['Changes agreed in writing', 'Every change to a connection is documented, versioned and agreed by both sides.'],
  ['Re-tested on every release', 'Once a connection works, it is re-tested automatically with every new software release.'],
];
const PROVE: [string, string][] = [
  ['Simulated connections', 'Each connected system is first tested against a simulated version, so work starts before the real equipment is available.'],
  ['Step by step integration', 'Connections are brought online one at a time, in the order they depend on each other, rather than all at once at the end.'],
  ['Controlled changes', 'Every change to a connection is documented, versioned and agreed by both sides.'],
  ['Re-tested on every release', 'Once a connection works, it is automatically re-tested with every new software release.'],
];

export function Integration() {
  const v2 = useV(2);
  return (
    <>
      <div className="shell page-head rv"><span className="label">Integration</span>
        <h1>{v2 ? 'Works with the systems you already run' : 'Interfaces are the product, not the work left at the end'}</h1>
        <p className="lead">{v2 ? 'We test every connection in our own lab before it reaches your site, and agree each one in writing with the other supplier.' : 'We arrive with an interface register and a simulator, not with a request for a meeting.'}</p>
        <div className="btns" style={{ marginTop: 'var(--s6)' }}><Link className="btn btn--p" to="/contact">Talk to us</Link></div></div>

      <Band label={v2 ? 'What we connect to' : 'What we interface with'} title={v2 ? 'Built to work with what is already on site' : 'Built to connect to what is already on site'}
        intro={v2 ? 'From live targets and simulators to building systems, the operations centre, security and training records.' : 'Integrate the entire training and range environment, from live targets and virtual training to infrastructure, operations, security and training management.'}>
        <div className="ifc rv">
          {((v2 ? INTERFACE_CATEGORIES_V2 : INTERFACE_CATEGORIES) as string[][]).map((c) => (
            <div className="ifc__c" key={c[1]}><i className={'ph ' + c[0]} aria-hidden="true"></i><h3>{c[1]}</h3><p>{c[2]}</p></div>
          ))}
        </div>
      </Band>

      <Band deep title="Every connection is documented and owned"
        intro="For each system we connect to, both sides agree in writing how the connection works and who is responsible for it. This keeps integration predictable and avoids surprises late in the programme.">
        {v2 ? <Table head={['What we agree', 'Why it matters']} caption="We share the full list of connections with programme teams on request." rows={[
          ['Which side starts', 'Everyone knows which system acts first, and where to look if something stops'],
          ['What is shared', 'Both sides know exactly what is sent and received'],
          ['When it is sent', 'On a schedule, when something happens, or continuously'],
          ['Who owns it', 'A named person on each side approves any change']]} />
        : <Table head={['What we agree', 'Why it matters']} caption="The full interface register is shared with programme teams on request." rows={[
          ['Who starts the exchange', 'Makes clear which side acts first and which side to check if something stops'],
          ['What information is shared', 'Both sides know exactly what is sent and received'],
          ['How and when it is sent', 'On a schedule, when something happens, or continuously'],
          ['Who is responsible', 'A named person on each side approves any change']]} />}
      </Band>

      <Band>
        <div className="split"><div className="rv"><h2>{v2 ? 'Already working with other suppliers’ equipment' : 'We already work across vendors, inside our own scope'}</h2>
          {v2 ? <p style={{ marginTop: 'var(--s5)' }}>On most ranges, targets, effects, displays and public address come from other suppliers. Our range control software already drives them, through connections that are specified, tested and kept under version control.</p> : <>
          <p style={{ marginTop: 'var(--s5)' }}>Several systems in this chain are supplied by others. Targetry, effects, visualisation and public address are driven by our range control system but delivered by someone else. That boundary is specified, tested and version controlled exactly the way an interface to your systems would be.</p>
          <p style={{ marginTop: 'var(--s4)' }}><strong>So the cross vendor discipline we are describing is not a promise about how we would behave. It is how we are already built.</strong></p></>}</div>
          <div className="rv" data-d="1"><Media m={{ id: 'integration-bench', kind: 'Image', ratio: 'r-43', label: 'Integration test bench',
            brief: 'Lab bench with rack mounted equipment, patch cables and two monitors showing abstracted interface traffic. No people, no readable text. 4:3.' }} /></div></div>
      </Band>

      {v2 ? <Band deep title="Three things every connected range needs" intro="They are easy to overlook, and hard to add later.">
        <div className="brk rv"><div className="brk__n">01</div><h3>One sign-in for every system</h3>
          <p>Everyone signs in once against your directory, with access set by role. When someone leaves, their access ends everywhere at once.</p></div>
        <div className="brk rv" data-d="1"><div className="brk__n">02</div><h3>One clock for every system</h3>
          <p>Video, tracking, alerts and health data carry the same time, so a debrief or an investigation can line them up exactly.</p></div>
        <div className="brk rv" data-d="2"><div className="brk__n">03</div><h3>Audit records you keep</h3>
          <p>Records of weapon and ammunition handling are sent to your own logging system, not kept only in ours.</p></div>
      </Band> : <>
      <Band deep title="Three dependencies we refuse to treat as optional" intro="All three are routinely left off integration matrices. All three are load bearing.">
        <div className="brk rv"><div className="brk__n">01</div><h3>Identity and directory</h3>
          <p>Single sign on and role based access for every subsystem, against the programme directory. One user database per subsystem is one offboarding failure per subsystem waiting to happen.</p></div>
        <div className="brk rv" data-d="1"><div className="brk__n">02</div><h3>Time synchronisation</h3>
          <p>Video, detections, tracking and health data cannot be correlated without it, and an after action review that cannot be correlated is not defensible in an investigation.</p></div>
        <div className="brk rv" data-d="2"><div className="brk__n">03</div><h3>Audit and log forwarding</h3>
          <p>Audit trails for weapon and ammunition handling belong in the programme log platform, not only in our own database where we control them.</p></div>
      </Band>

      </>}

      <Band title="Tested before it reaches your site" intro="Every connection is proven in our own test environment before installation, so commissioning on site is faster and lower risk.">
        <div className="g g4 rv">{(v2 ? PROVE_V2 : PROVE).map((c) => <div className="tile" key={c[0]}><h4>{c[0]}</h4><p>{c[1]}</p></div>)}</div>
      </Band>
      <PartnersSection cta={false} />
      <Closer label="Talk to us" line="Tell us which systems you need us to connect to, and we will walk you through how the integration works." />
    </>
  );
}
