import { Navigate, useParams } from 'react-router-dom';
import { isVisible } from '../config/site';
import { PRODUCT_DETAIL, brandOf } from '../content/products';
import { CHAIN } from '../content/home';
import { Band } from '../components/ui/Band';
import { Table } from '../components/ui/Table';
import { Closer } from '../components/ui/Closer';
import { Media } from '../components/ui/Media';
import { Icon } from '../components/ui/Icon';
import { pad2 } from '../lib/html';
import { Products } from './Products';
import { TrmsPage } from '../components/sections/product/TrmsPage';
import { WorksWith } from '../components/sections/product/WorksWith';
import { DEFAULT_DEP, productRec, v6acr } from '../components/sections/product/util';

type Detail = {
  lead: string; problem: string[]; mods: { k: string; i: string; m: string[] }[];
  flow: string[][]; out: string[]; std: string[][];
};

export function Product() {
  const { id = '' } = useParams();
  if (!isVisible(id)) return <Navigate to="/products" replace />;
  if (id === 'trms') return <TrmsPage />;
  const p = productRec(id), b = brandOf(id);
  const c = (PRODUCT_DETAIL as unknown as Record<string, Detail>)[id];
  if (!p || !b || !c) return <Products />;
  const modCount = c.mods.reduce((a, m) => a + m.m.length, 0);

  return (
    <>
      <div className="shell"><div className="pmast">
        <div className="rv">
          <div className="v6pbrand">
            {b.brand && <span className="v6pbrand__b">{b.brand}</span>}
            <span className="v6pbrand__s">{b.acr}</span>
            {b.partner && <span className="v6pbrand__p">Partner product, {b.partner}</span>}
          </div>
          <h1>{b.sys}</h1><p className="lead">{c.lead}</p>
        </div>
        <dl className="pcard rv" data-d="1">
          <div className="prow"><dt>Role</dt><dd>{p.role}</dd></div>
          <div className="prow"><dt>Used by</dt><dd>{p.users.join(', ')}</dd></div>
          <div className="prow"><dt>Deployed at</dt><dd>{p.where}</dd></div>
          <div className="prow"><dt>In the chain</dt><dd><span className="mini">
            {CHAIN.map((x) => <i key={x.k} className={p.on.includes(x.k) ? 'on' : ''}>{x.k}</i>)}
          </span></dd></div>
          <div className="prow"><dt>Modules</dt><dd>{modCount} across {c.mods.length} areas</dd></div>
        </dl>
      </div></div>

      <Band deep title="What goes wrong without it" intro="The failures this system exists to prevent, written the way they happen on a range.">
        <ol className="v6pp rv">{c.problem.map((x, i) => <li key={i}><span>{pad2(i)}</span>{x}</li>)}</ol>
      </Band>

      <Band title="Modules" intro="Grouped by the moment they serve.">
        <div className="v6pm rv">{c.mods.map((m) => (
          <div className="v6pm__g" key={m.k}>
            <h3><Icon name={m.i} />{m.k}</h3>
            <ul>{m.m.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
        ))}</div>
      </Band>

      <Band deep>
        <div className="split">
          <div className="rv"><Media m={p.media} /></div>
          <div className="rv" data-d="1"><h2>How it runs</h2>
            <ol className="v6pf">{c.flow.map((f, i) => (
              <li key={i}><span>{pad2(i)}</span><div><b>{f[0]}</b><p>{f[1]}</p></div></li>
            ))}</ol>
          </div>
        </div>
      </Band>

      <Band title="What changes">
        <div className="v6po rv">{c.out.map((x) => <p key={x}>{x}</p>)}</div>
      </Band>

      <Band deep title="Standards we design to" intro="Stated as alignment. Blue Silo does not claim certification against these.">
        <Table head={['Reference', 'What it governs here']} rows={c.std} />
      </Band>

      <Band title="What it talks to" intro="Counterpart classes, not vendor product names.">
        <Table head={['Counterpart class', 'Direction', 'Trigger']}
          rows={p.ifc.map((r) => [v6acr(r[0]), <span className="arrow">{r[1]}</span>, v6acr(r[2])])} />
      </Band>

      <Band deep>
        <div className="decide rv"><span>Dependencies and assumptions</span><p>{v6acr(p.dep || DEFAULT_DEP)}</p></div>
      </Band>

      <WorksWith rel={p.rel} />
      <Closer />
    </>
  );
}
