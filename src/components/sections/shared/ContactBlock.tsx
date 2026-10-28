import { Link } from 'react-router-dom';
import { RELEASE } from '../../../content/home';
import { mediaUrl } from '../../../lib/media';
import { pad2 } from '../../../lib/html';
import { Topo } from '../../ui/Topo';
import { useV, useV1Back } from '../../../lib/version';
import { slotSrc } from '../../../lib/images';
import { useReview } from '../../../lib/review';
import { CtaBand } from '../../ui/CtaBand';

/* Contact block. Shared by the home page and the Contact page. */
export function ContactBlock({ header = false }: { header?: boolean }) {
  /* v2: no document cards; the aerial photograph from the old
     Modernising section sits behind the block instead */
  const v2 = useV(2);
  const back = useV1Back();
  const { state } = useReview();
  /* v2: the shared CTA band everywhere except the Contact page's own header;
     v3 keeps the v1 closing block with its document cards */
  if (v2 && !header && !back) return <CtaBand title="Talk to us about your programme" line="Whether you need one system or several working together, we will help you find the right approach." />;
  return (
    <section className={'v6close' + (v2 ? ' v6close--bed' : '')}>
      {v2 ? <div className="v6close__bed" aria-hidden="true"><img src={slotSrc('aerial', state.look)} alt="" loading="lazy" decoding="async" /></div>
        : <div className="v6close__topo" aria-hidden="true"><Topo /></div>}
      <div className="shell">
        <div className="v6close__grid rv">
          <div><span className="label">Contact</span>
            <h2>{v2 ? 'Talk to our team' : 'Start a conversation with Blue Silo.'}</h2>
            <p className="lead">{v2 ? 'Planning a new programme, evaluating a system or looking for an integration partner? Tell us what you need and the right person on our team will reply.' : 'Whether you are planning a new defence programme, evaluating a system, or looking for an integration partner, our team can help you understand the right approach.'}</p></div>
          <div className="v6close__tag">{v2 ? <><span>Designed, developed and integrated.</span><span>Built for the long term.</span></> : <><span>Mission-critical systems.</span><span>Built for the long term.</span></>}</div>
        </div>
        {(!v2 || back) && <div className="v6rel rv">
          {(RELEASE as string[][]).map((r, i) => (
            <Link to="/contact" key={r[0]}><span className="v6rel__img"><img src={mediaUrl(r[2] + '.jpg')} alt="" loading="lazy" decoding="async" /></span>
              <span className="v6rel__body"><span className="v6rel__n">{pad2(i)}</span>
                <h3>{r[0]}</h3><p>{r[1]}</p>
                <span className="v6rel__cta">{r[3] || 'Request'} <i className="ph ph-arrow-right" aria-hidden="true"></i></span></span></Link>
          ))}
        </div>}
        <div className="v6close__foot rv"><Link className="btn btn--p" to="/contact">Discuss your requirements <i className="ph ph-arrow-right" aria-hidden="true"></i></Link>
          <span>For defence organisations, prime contractors, system integrators and technology partners.</span></div>
      </div>
    </section>
  );
}
