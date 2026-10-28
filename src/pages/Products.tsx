import { Link } from 'react-router-dom';
import { PRODUCTS as ALL, brandOf, whereOf, decidesOf, roleOf } from '../content/products';
import { useV, useV1Back } from '../lib/version';
import { isVisible } from '../config/site';
import { WORDS } from '../content/home';

const PRODUCTS = ALL.filter((p) => isVisible(p.id));
const OURS = PRODUCTS.filter((p) => brandOf(p.id)?.brand !== 'ACCEL').length;
const HAS_ACCEL = PRODUCTS.some((p) => brandOf(p.id)?.brand === 'ACCEL');
const Word = (n: number) => { const w = (WORDS as string[])[n] || String(n); return w.charAt(0).toUpperCase() + w.slice(1); };
import { Band } from '../components/ui/Band';
import { Table } from '../components/ui/Table';
import { Closer } from '../components/ui/Closer';

/* legacy pProducts, with the v6 h1 override. */
export function Products() {
  const v2 = useV(2);
  const back = useV1Back();
  return (
    <>
      <div className="shell page-head rv">
        <span className="label">Products</span>
        <h1>{Word(OURS)} systems{HAS_ACCEL ? ', plus ACCEL' : ''}</h1>
        <p className="lead">{v2 ? 'Use one system on its own or connect them all. Each page shows what the system does, who uses it and where it runs.' : 'Take one, or take all of them. Every product page states what it decides, where it is deployed, and what has to exist for it to mean anything.'}</p>
      </div>
      <Band tight>
        <div className="reg rv">
          {PRODUCTS.map((p) => (
            <Link key={p.id} to={`/products/${p.id}`}>
              <span className="reg__a">{p.acr}</span><span className="reg__n">{p.name}</span>
              <span className="reg__r">{roleOf(p, v2)}</span><span className="reg__g">{v2 && brandOf(p.id)?.partner ? `${brandOf(p.id)!.brand}, partner product` : p.group}</span>
            </Link>
          ))}
        </div>
      </Band>
      <Band deep title={v2 ? 'What each system does' : 'What each one actually decides'}
        intro={v2 ? 'Who uses each system, and the question it answers for them.' : 'Not a feature comparison. The question each subsystem exists to answer, and the person who has to answer it.'}>
        <Table head={v2 ? ['System', 'Used by', 'What it helps you decide'] : ['Subsystem', 'Primary users', 'The decision it supports']}
          rows={PRODUCTS.map((p) => [
            <>{p.acr} <em className="dim" style={{ display: 'block', marginTop: 3 }}>{p.name}</em></>,
            p.users.slice(0, 3).join(', '), decidesOf(p, v2)])} />
      </Band>
      <Band title={v2 ? 'Where each system is used' : 'Where they run'}
        intro={v2 ? undefined : 'A subsystem is not one screen in one room. Knowing where each client sits is what makes the operating concept real.'}>
        <Table head={v2 ? ['System', 'Used in'] : ['Subsystem', 'Deployed at']} rows={PRODUCTS.map((p) => [p.acr, whereOf(p, v2)])} />
      </Band>
      {/* v2: hidden, internal note about counterpart acronyms (27 Oct 2026) */}
      {(!v2 || back) && <Band deep title="Acronyms that look alike"
        intro="Four systems share a naming pattern and two handle video. Confusing them in a specification is expensive later.">
        <div className="g g4 rv">
          <div className="tile"><h4>Ours</h4><p><strong>EWMS</strong> weapons as serialised assets, held and issued under control.</p></div>
          <div className="tile"><h4>Counterparts</h4><p><strong>EKMS</strong> physical keys. <strong>EACS</strong> doors and zones. Neither is ours.</p></div>
          <div className="tile"><h4>Video for training</h4><p><strong>VMS</strong> recording and playback for training inside the range.</p></div>
          <div className="tile"><h4>A different system entirely</h4><p><strong>VSS</strong> facility security surveillance. Different purpose, different owner, outside this scope.</p></div>
        </div>
      </Band>}
      <Closer />
    </>
  );
}
