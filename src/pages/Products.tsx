import { Link } from 'react-router-dom';
import { PRODUCTS } from '../content/products';
import { Band } from '../components/ui/Band';
import { Table } from '../components/ui/Table';
import { Closer } from '../components/ui/Closer';

/* legacy pProducts, with the v6 h1 override. */
export function Products() {
  return (
    <>
      <div className="shell page-head rv">
        <span className="label">Products</span>
        <h1>Seven systems, plus ACCEL</h1>
        <p className="lead">Take one, or take all of them. Every product page states what it decides, where it is deployed, and what has to exist for it to mean anything.</p>
      </div>
      <Band tight>
        <div className="reg rv">
          {PRODUCTS.map((p) => (
            <Link key={p.id} to={`/products/${p.id}`}>
              <span className="reg__a">{p.acr}</span><span className="reg__n">{p.name}</span>
              <span className="reg__r">{p.role}</span><span className="reg__g">{p.group}</span>
            </Link>
          ))}
        </div>
      </Band>
      <Band deep title="What each one actually decides"
        intro="Not a feature comparison. The question each subsystem exists to answer, and the person who has to answer it.">
        <Table head={['Subsystem', 'Primary users', 'The decision it supports']}
          rows={PRODUCTS.map((p) => [
            <>{p.acr} <em className="dim" style={{ display: 'block', marginTop: 3 }}>{p.name}</em></>,
            p.users.slice(0, 3).join(', '), p.decides])} />
      </Band>
      <Band title="Where they run"
        intro="A subsystem is not one screen in one room. Knowing where each client sits is what makes the operating concept real.">
        <Table head={['Subsystem', 'Deployed at']} rows={PRODUCTS.map((p) => [p.acr, p.where])} />
      </Band>
      <Band deep title="Acronyms that look alike"
        intro="Four systems share a naming pattern and two handle video. Confusing them in a specification is expensive later.">
        <div className="g g4 rv">
          <div className="tile"><h4>Ours</h4><p><strong>EWMS</strong> weapons as serialised assets. <strong>EAMS</strong> ammunition as a consumable.</p></div>
          <div className="tile"><h4>Counterparts</h4><p><strong>EKMS</strong> physical keys. <strong>EACS</strong> doors and zones. Neither is ours.</p></div>
          <div className="tile"><h4>Two video systems, ours</h4><p><strong>VMS</strong> video for training inside the range. <strong>EVA</strong> edge analytics outside it.</p></div>
          <div className="tile"><h4>A different system entirely</h4><p><strong>VSS</strong> facility security surveillance. Different purpose, different owner, outside this scope.</p></div>
        </div>
      </Band>
      <Closer />
    </>
  );
}
