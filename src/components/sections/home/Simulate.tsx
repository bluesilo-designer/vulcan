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
        <h2>Simulate.<br />Integrate. Deploy.</h2>
        <p>{v2
          ? 'We test every interface and dependency before anything reaches your site, so the systems work together from day one.'
          : 'Blue Silo validates system interfaces, dependencies and operational behaviour before deployment, reducing integration risk and ensuring every component works together as designed.'}</p>
        <span className="v6cmd__rule" aria-hidden="true"></span>
        <ul className="v6cmd">
          <li><Icon name="ph-cube" /><span>Interface validation</span></li>
          <li><Icon name="ph-graph" /><span>{v2 ? 'Dependency mapping' : 'System dependency mapping'}</span></li>
          <li><Icon name="ph-file-text" /><span>{v2 ? 'Scenario testing' : 'Scenario testing and simulation'}</span></li>
        </ul>
      </div></div>
    </section>
  );
}
