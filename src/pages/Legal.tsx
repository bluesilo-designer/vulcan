import { Link } from 'react-router-dom';
import { LEGAL } from '../content/legal';
import '../styles/legal.css';

/* One page component for Privacy, Terms and Security (11 Nov 2026). */
export function Legal({ doc }: { doc: keyof typeof LEGAL }) {
  const d = LEGAL[doc];
  return (
    <>
      <div className="shell page-head rv"><span className="label">{d.label}</span>
        <h1>{d.title}</h1>
        <p className="lead">{d.lead}</p></div>
      <section className="band"><div className="shell lg">
        <aside className="lg__meta">
          <span>Last updated</span><b>{d.updated}</b>
          <em>Draft, pending legal review.</em>
        </aside>
        <div className="lg__body">
          {d.blocks.map(([h, ps]) => (
            <section key={h}><h2>{h}</h2>{ps.map((p) => <p key={p}>{p}</p>)}
              {doc === 'security' && h === 'How our systems are secured' && <p><Link to="/assurance">Read about Assurance</Link></p>}
              {doc === 'security' && h === 'Report a vulnerability' && <p><Link to="/contact">Go to the contact page</Link></p>}
              {doc === 'privacy' && h === 'Your choices' && <p><Link to="/contact">Contact us</Link></p>}
            </section>
          ))}
        </div>
      </div></section>
    </>
  );
}
