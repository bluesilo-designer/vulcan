import { Link } from 'react-router-dom';
import { Band } from '../../ui/Band';
import { Icon } from '../../ui/Icon';
import { FACTS } from '../../../content/home';
import { pad2 } from '../../../lib/html';

export function CompanyFacts() {
  return (
    <Band deep>
      <div className="v6co__head rv"><span className="label">Blue Silo</span>
        <h2>A defence and security specialist, and the continuity to match.</h2>
        <p>We design, develop and integrate mission-critical systems for military training, range operations, asset accountability and operational readiness, with a long-term commitment to the environments we serve.</p></div>
      <div className="v6feat__grid v6feat__grid--3 rv">{(FACTS as unknown as [string, string, string][]).map((f, i) => (
        <div className="v6fc v6fc--box v6fc--co" key={f[1]}><span className="v6fc__top"><Icon name={f[0]} />
          <span className="v6fc__n">{pad2(i)}</span></span><h3>{f[1]}</h3><p>{f[2]}</p></div>
      ))}</div>
      <div className="v6feat__cta rv"><Link className="btn btn--g" to="/company">About Blue Silo <Icon name="ph-arrow-right" /></Link>
        <span className="v6feat__tag">A long-term partner for defence and security organisations</span></div>
    </Band>
  );
}
