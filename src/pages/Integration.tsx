import { Link } from 'react-router-dom';
import { Band } from '../components/ui/Band';
import { Table } from '../components/ui/Table';
import { Media } from '../components/ui/Media';
import { Closer } from '../components/ui/Closer';
import { PartnersSection } from '../components/sections/shared/PartnersSection';
import { INTERFACE_CATEGORIES } from '../content/integration';

const PROVE: [string, string][] = [
  ['Simulators and stubs', 'Every counterpart has a stub before it has a partner engineer.'],
  ['Staged integration', 'Interfaces are integrated in dependency order, not all at once in the final month.'],
  ['Change control', 'An interface change is a versioned document, not an email.'],
  ['Frozen regression', 'Once an interface passes, it is regressed against on every build.'],
];

export function Integration() {
  return (
    <>
      <div className="shell page-head rv"><span className="label">Integration</span>
        <h1>Interfaces are the product, not the work left at the end</h1>
        <p className="lead">We arrive with an interface register and a simulator, not with a request for a meeting.</p>
        <div className="btns" style={{ marginTop: 'var(--s6)' }}><Link className="btn btn--p" to="/contact">Request the ICD pack</Link></div></div>

      <Band label="What we interface with" title="Built to connect to what is already on site"
        intro="Blue Silo can integrate the entire training and range environment, from live targets and virtual training to infrastructure, operations, security and training management.">
        <div className="ifc rv">
          {(INTERFACE_CATEGORIES as string[][]).map((c) => (
            <div className="ifc__c" key={c[1]}><i className={'ph ' + c[0]} aria-hidden="true"></i><h3>{c[1]}</h3><p>{c[2]}</p></div>
          ))}
        </div>
      </Band>

      <Band deep title="One row per interface, with an owner"
        intro="Not one row per module, and not one arrow on an architecture diagram. An interface that nobody owns is an interface that arrives late.">
        <Table head={['Field', 'What it records']} caption="Register structure shown. Contents are supplied on request, under the terms that apply." rows={[
          ['Initiator', 'Which side opens the exchange, and therefore which side fails first'],
          ['Direction', 'One way or bidirectional, stated per payload rather than per system'],
          ['Mode', 'Request and response, publish and subscribe, store and forward, or file exchange'],
          ['Trigger', 'Scheduled, event driven, or continuous, and what happens when it is missed'],
          ['Payload', 'What is carried, at the level of meaning rather than field names'],
          ['Owner', 'The named person on each side who signs the change']]} />
      </Band>

      <Band>
        <div className="split"><div className="rv"><h2>We already work across vendors, inside our own scope</h2>
          <p style={{ marginTop: 'var(--s5)' }}>Several systems in this chain are supplied by others. Targetry, effects, visualisation and public address are driven by our range control system but delivered by someone else. That boundary is specified, tested and version controlled exactly the way an interface to your systems would be.</p>
          <p style={{ marginTop: 'var(--s4)' }}><strong>So the cross vendor discipline we are describing is not a promise about how we would behave. It is how we are already built.</strong></p></div>
          <div className="rv" data-d="1"><Media m={{ id: 'integration-bench', kind: 'Image', ratio: 'r-43', label: 'Integration test bench',
            brief: 'Lab bench with rack mounted equipment, patch cables and two monitors showing abstracted interface traffic. No people, no readable text. 4:3.' }} /></div></div>
      </Band>

      <Band deep title="Three dependencies we refuse to treat as optional" intro="All three are routinely left off integration matrices. All three are load bearing.">
        <div className="brk rv"><div className="brk__n">01</div><h3>Identity and directory</h3>
          <p>Single sign on and role based access for every subsystem, against the programme directory. One user database per subsystem is one offboarding failure per subsystem waiting to happen.</p></div>
        <div className="brk rv" data-d="1"><div className="brk__n">02</div><h3>Time synchronisation</h3>
          <p>Video, detections, tracking and health data cannot be correlated without it, and an after action review that cannot be correlated is not defensible in an investigation.</p></div>
        <div className="brk rv" data-d="2"><div className="brk__n">03</div><h3>Audit and log forwarding</h3>
          <p>Audit trails for weapon and ammunition handling belong in the programme log platform, not only in our own database where we control them.</p></div>
      </Band>

      <Band title="How we prove it before site">
        <div className="g g4 rv">{PROVE.map((c) => <div className="tile" key={c[0]}><h4>{c[0]}</h4><p>{c[1]}</p></div>)}</div>
      </Band>
      <PartnersSection />
      <Closer label="Request the ICD pack" line="Send us the architecture you need us to fit into, and we will come back with the interface register rather than with questions." />
    </>
  );
}
