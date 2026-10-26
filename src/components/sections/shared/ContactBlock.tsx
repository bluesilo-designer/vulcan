import { Link } from 'react-router-dom';
import { RELEASE } from '../../../content/home';
import { mediaUrl } from '../../../lib/media';
import { pad2 } from '../../../lib/html';
import { Topo } from '../../ui/Topo';

/* Contact block. Shared by the home page and the Contact page. */
export function ContactBlock() {
  return (
    <section className="v6close">
      <div className="v6close__topo" aria-hidden="true"><Topo /></div>
      <div className="shell">
        <div className="v6close__grid rv">
          <div><span className="label">Contact</span>
            <h2>Start a conversation with Blue Silo.</h2>
            <p className="lead">Whether you are planning a new defence programme, evaluating a system, or looking for an integration partner, our team can help you understand the right approach.</p></div>
          <div className="v6close__tag"><span>Mission-critical systems.</span><span>Built for the long term.</span></div>
        </div>
        <div className="v6rel rv">
          {(RELEASE as string[][]).map((r, i) => (
            <Link to="/contact" key={r[0]}><span className="v6rel__img"><img src={mediaUrl(r[2] + '.jpg')} alt="" loading="lazy" decoding="async" /></span>
              <span className="v6rel__body"><span className="v6rel__n">{pad2(i)}</span>
                <h3>{r[0]}</h3><p>{r[1]}</p>
                <span className="v6rel__cta">{r[3] || 'Request'} <i className="ph ph-arrow-right" aria-hidden="true"></i></span></span></Link>
          ))}
        </div>
        <div className="v6close__foot rv"><Link className="btn btn--p" to="/contact">Discuss your requirements <i className="ph ph-arrow-right" aria-hidden="true"></i></Link>
          <span>For defence organisations, prime contractors, system integrators and technology partners.</span></div>
      </div>
    </section>
  );
}
