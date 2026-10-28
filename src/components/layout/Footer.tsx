import { Link } from 'react-router-dom';
import { Topo } from '../ui/Topo';
import { Icon } from '../ui/Icon';
import { isVisible } from '../../config/site';
import { useHomeLayout, useV } from '../../lib/version';

const SYSTEMS: [string, string][] = [
  ['rcs', 'Range Management System'], ['trms', 'Training Resource Management System'],
  ['hums', 'Health & Utilisation Monitoring System'], ['ewms', 'Electronic Weapon Management System'],
  ['eams', 'Electronic Ammunition Management System'], ['pwats', 'Personnel, Weapon & Ammunition Tracking System'],
  ['as', 'Administrative & Governance System'],
];

export function Footer() {
  /* v2 (28 Oct 2026): the brand line shows the four areas Blue Silo works in, not only training and ranges */
  const v2 = useV(2);
  const { hm } = useHomeLayout();
  /* Slider home layout (28 Oct 2026): the compact footer from the client's reference.
     Applies site-wide while that layout is selected, so every page closes the same way. */
  if (v2 && hm === 's') return (
    <footer className="ft2">
      <div className="shell ft2__grid">
        <div className="ft2__brand">
          <Link className="v6foot__word" to="/" aria-label="Blue Silo home"><span>Blue</span> <b>Silo</b></Link>
          <p>Defence systems: training, integration, monitoring and enterprise management.</p>
        </div>
        <nav className="ft2__col" aria-label="Explore">
          <h4>Explore</h4>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/integration">Integration</Link>
          <Link to="/assurance">Assurance</Link>
        </nav>
        <nav className="ft2__col" aria-label="Company">
          <h4>Company</h4>
          <Link to="/company">About Blue Silo</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className="ft2__col ft2__touch">
          <h4>Get in touch</h4>
          <p>Tell us about your next programme.</p>
          <div className="ft2__row">
            <Link className="btn btn--g" to="/contact">Contact us <Icon name="ph-arrow-right" /></Link>
            <Link className="ft2__soc" to="/contact" aria-label="LinkedIn"><Icon name="linkedin-logo" fill /></Link>
          </div>
        </div>
      </div>
      <div className="shell ft2__legal">
        <span>&copy; 2026 Blue Silo Pte. Ltd. All rights reserved. Draft, content and imagery not final.</span>
        <nav aria-label="Legal">
          <Link to="/contact">Privacy</Link>
          <Link to="/contact">Terms</Link>
          <Link to="/assurance">Security</Link>
          <Link to="/products">Site map</Link>
        </nav>
      </div>
    </footer>
  );
  return (
    <footer className="v6foot">
      <div className="v6foot__topo" aria-hidden="true"><Topo /></div>
      <div className="shell v6foot__grid">
        <div className="v6foot__brand">
          <Link className="v6foot__word" to="/" aria-label="Blue Silo home"><span>Blue</span> <b>Silo</b></Link>
          <p>{v2 ? 'Blue Silo is a Singapore defence systems company. We design, develop and integrate defence systems in four areas: training systems, system integration, monitoring and intelligence, and enterprise management.' : 'Blue Silo is a Singapore-headquartered defence technology company delivering mission-critical systems for military training, range operations, and force readiness across Southeast Asia and APAC.'}</p>
          <div className="v6foot__geo"><span>Singapore</span><span>Southeast Asia</span><span>APAC</span></div>
        </div>
        <nav className="v6foot__col" aria-label="Systems">
          <h4>Systems</h4>
          {SYSTEMS.filter(([id]) => isVisible(id)).map(([id, n]) => <Link key={id} to={`/products/${id}`}>{n}</Link>)}
        </nav>
        <nav className="v6foot__col" aria-label="Explore">
          <h4>Explore</h4>
          <Link to="/products">Systems</Link>
          <Link to="/integration">Integration</Link>
          <Link to="/assurance">Assurance</Link>
          <Link to="/company">About Blue Silo</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className="v6foot__col">
          <h4>Connect</h4>
          <Link to="/contact" className="v6connect"><Icon name="linkedin-logo" fill />LinkedIn</Link>
        </div>
      </div>
      <div className="shell">
        <div className="v6foot__legal">
          <span>&copy; 2026 Blue Silo Pte. Ltd. All rights reserved. Draft, content and imagery not final.</span>
          <nav aria-label="Legal">
            <Link to="/contact">Privacy</Link>
            <Link to="/contact">Terms</Link>
            <Link to="/products">{v2 ? 'Site map' : 'Site Map'}</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
