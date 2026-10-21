import { Icon } from '../../ui/Icon';
import { slotSrc } from '../../../lib/images';
import { useReview } from '../../../lib/review';

export function Simulate() {
  const { state } = useReview();
  return (
    <section className="v6say v6say--r v6say--cmd">
      <div className="v6say__bed"><img data-slot="command" className="v6say__img" src={slotSrc('command', state.look)} alt="" decoding="async" loading="lazy" /></div>
      <div className="v6say__veil"></div>
      <div className="shell"><div className="v6say__in rv">
        <h2>Simulate.<br />Integrate. Deploy.</h2>
        <p>Blue Silo validates system interfaces, dependencies and operational behaviour before deployment, reducing integration risk and ensuring every component works together as designed.</p>
        <span className="v6cmd__rule" aria-hidden="true"></span>
        <ul className="v6cmd">
          <li><Icon name="ph-cube" /><span>Interface validation</span></li>
          <li><Icon name="ph-graph" /><span>System dependency mapping</span></li>
          <li><Icon name="ph-file-text" /><span>Scenario testing and simulation</span></li>
        </ul>
      </div></div>
    </section>
  );
}
