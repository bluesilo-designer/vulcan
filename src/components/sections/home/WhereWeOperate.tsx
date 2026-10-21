import { Media } from '../../ui/Media';
import { Icon } from '../../ui/Icon';
import { OPS } from '../../../content/home';
import { slotSrc } from '../../../lib/images';
import { useReview } from '../../../lib/review';

export function WhereWeOperate() {
  const { state } = useReview();
  return (
    <section className="v6say">
      <div className="v6say__bed">
        <Media m={{ id: 'home-range-dawn', kind: 'Image', label: 'Indoor and outdoor ranges before first light', brief: 'Lanes receding to the target line.' }} src={slotSrc('ops', state.look)} />
      </div>
      <div className="v6say__veil"></div>
      <div className="shell"><div className="v6say__in rv">
        <span className="label">Where we operate</span>
        <h2>Built for complex defence environments</h2>
        <div className="v6ops">{(OPS as unknown as [string, string, string][]).map((o) => (
          <div className="v6op" key={o[1]}><Icon name={o[0]} /><b>{o[1]}</b><span>{o[2]}</span></div>
        ))}</div>
      </div></div>
    </section>
  );
}
