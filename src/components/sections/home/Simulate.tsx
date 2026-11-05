import { Icon } from '../../ui/Icon';
import { slotSrc } from '../../../lib/images';
import { useReview } from '../../../lib/review';
import { useV, useV1Back } from '../../../lib/version';
import { mediaUrl } from '../../../lib/media';

export function Simulate() {
  const { state } = useReview();
  const v2 = useV(2);
  const v3 = useV1Back();
  return (
    <section className="v6say v6say--r v6say--cmd">
      <div className="v6say__bed"><img data-slot="command" className="v6say__img" src={v3 ? mediaUrl('home-v3-western/simulate-integration.jpg') : slotSrc('command', state.look)} alt="" decoding="async" loading="lazy" /></div>
      <div className="v6say__veil"></div>
      <div className="shell"><div className="v6say__in rv">
        {/* v2: assurance from the technical side (client, 5 Nov 2026). The three points are the
            Assurance page's own controls; v1 keeps "Simulate. Integrate. Deploy." */}
        {v2 ? <h2>Secure by design, from sign-in to the database.</h2> : <h2>Simulate.<br />Integrate. Deploy.</h2>}
        <p>{v2
          ? 'Each system is hardened, data is encrypted in transit and at rest, and networks are separated and monitored, so a fault stays contained.'
          : 'Blue Silo validates system interfaces, dependencies and operational behaviour before deployment, reducing integration risk and ensuring every component works together as designed.'}</p>
        <span className="v6cmd__rule" aria-hidden="true"></span>
        <ul className="v6cmd">
          {v2 ? <li><Icon name="ph-shield-chevron" /><span>System hardening</span></li> : <li><Icon name="ph-cube" /><span>Interface validation</span></li>}
          <li><Icon name={v2 ? 'ph-lock' : 'ph-graph'} /><span>{v2 ? 'Encrypted in transit and at rest' : 'System dependency mapping'}</span></li>
          <li><Icon name={v2 ? 'ph-shield-warning' : 'ph-file-text'} /><span>{v2 ? 'Separated, monitored networks' : 'Scenario testing and simulation'}</span></li>
        </ul>
      </div></div>
    </section>
  );
}
