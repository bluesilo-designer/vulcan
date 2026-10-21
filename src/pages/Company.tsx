import { Band } from '../components/ui/Band';
import { Table } from '../components/ui/Table';
import { Media } from '../components/ui/Media';
import { Closer } from '../components/ui/Closer';

const DISCIPLINES: [string, string][] = [
  ['Control systems', 'Real time equipment control, safety interlocks, and degraded mode behaviour.'],
  ['Systems integration', 'Interface design, ICD authorship, simulators, and staged integration testing.'],
  ['Computer vision', 'Detection, re-identification and association, engineered for the edge.'],
  ['Security engineering', 'Segmentation, classification handling, audit design, isolated operation.'],
];
const ACRA = <em className="dim">To confirm from the ACRA record</em>;

export function Company() {
  return (
    <>
      <div className="shell page-head rv"><span className="label">Company</span>
        <h1>Blue Silo</h1>
        <p className="lead">We build the software that runs range training complexes. That is the whole of what we do.</p></div>

      <Band>
        <div className="split"><div className="rv"><h2>What we build, and why we build only this</h2>
          <div className="prose" style={{ marginTop: 'var(--s5)' }}>
            <p>Range training complexes are run by many systems from many suppliers, and the gaps between those systems are where accountability goes. Someone signs a form. Someone remembers a number. Someone reconciles at the end of a long day. It works, until the day it is questioned.</p>
            <p>We build the subsystems that close those gaps, and we treat the interfaces between them, including the ones to systems we do not own, as the product rather than as integration work to be scheduled later.</p>
            <p><strong>We do not build anything else.</strong> A supplier serving range training and three other markets is a supplier whose attention is somewhere else when your programme needs it.</p></div></div>
          <div className="rv" data-d="1"><Media m={{ id: 'company-floor', kind: 'Image', ratio: 'r-43', label: 'Engineering floor',
            brief: 'Small engineering team workspace, two people at monitors seen from behind, screens abstracted. Warm task lighting against a dark room. 4:3.' }} /></div></div>
      </Band>

      <Band deep title="Leadership" intro="Few, and real. Every name here is verifiable, and evaluators do verify.">
        <div className="g g3 rv">
          {[1, 2, 3].map((i) => (
            <div key={i}>
              <Media m={{ id: 'portrait-' + i, kind: 'Image', ratio: 'r-11', label: 'Portrait ' + i,
                brief: 'Plain headshot, even lighting, neutral dark ground, shoulders up. The only photographs of people on this site.' }} />
              <div className="tile" style={{ marginTop: 'var(--s4)' }}><h4>Name and role</h4><p>Relevant background in defence, control systems or delivery, in three sentences.</p></div></div>
          ))}
        </div>
      </Band>

      <Band title="Disciplines, not headcount">
        <div className="g g4 rv">{DISCIPLINES.map((c) => <div className="tile" key={c[0]}><h4>{c[0]}</h4><p>{c[1]}</p></div>)}</div>
      </Band>

      <Band title="Corporate">
        <Table head={['Field', 'Detail']} rows={[
          ['Registered entity', 'Blue Silo Pte. Ltd.'], ['UEN', ACRA], ['Registered address', ACRA], ['Incorporated', ACRA]]} />
      </Band>
      <Closer />
    </>
  );
}
