import { Link } from 'react-router-dom';
import { Topo } from '../ui/Topo';
import { Icon } from '../ui/Icon';

const SYSTEMS: [string, string][] = [
  ['rcs', 'Range Management System'], ['trms', 'Training Resource Management System'],
  ['hums', 'Health & Utilisation Monitoring System'], ['ewms', 'Electronic Weapon Management System'],
  ['eams', 'Electronic Ammunition Management System'], ['pwats', 'Personnel, Weapon & Ammunition Tracking System'],
  ['as', 'Administrative & Governance System'],
];

export function Footer() {
  return (
    <footer className="v6foot">
      <div className="v6foot__topo" aria-hidden="true"><Topo /></div>
      <div className="shell v6foot__grid">
        <div className="v6foot__brand">
          <Link className="v6foot__word" to="/" aria-label="Blue Silo home"><span>Blue</span> <b>Silo</b></Link>
          <p>Blue Silo is a Singapore-headquartered defence technology company delivering mission-critical systems for military training, range operations, and force readiness across Southeast Asia and APAC.</p>
          <div className="v6foot__geo"><span>Singapore</span><span>Southeast Asia</span><span>APAC</span></div>
        </div>
        <nav className="v6foot__col" aria-label="Systems">
          <h4>Systems</h4>
          {SYSTEMS.map(([id, n]) => <Link key={id} to={`/products/${id}`}>{n}</Link>)}
        </nav>
        <nav className="v6foot__col" aria-label="Explore">
          <h4>Explore</h4>
          <Link to="/products">Systems</Link>
          <Link to="/integration">Integration</Link>
          <Link to="/assurance">Assurance</Link>
          <Link to="/company">About Blue Silo</Link>
          <Link to="/#questions">Questions</Link>
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
            <Link to="/products">Site Map</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
