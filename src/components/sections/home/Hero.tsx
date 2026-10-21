import { Link } from 'react-router-dom';
import { Media } from '../../ui/Media';
import { HERO_CUTS } from '../../../content/media';
import { isReady, mediaUrl } from '../../../lib/media';
import { useReview } from '../../../lib/review';

export function Hero() {
  const { state } = useReview();
  const id = state.hero && isReady(state.hero) ? state.hero : HERO_CUTS[0].id;
  return (
    <section className="v6hero">
      <div className="v6hero__bed">
        <Media key={id} m={{ id, kind: 'Video', label: 'Control room before a serial', brief: 'Range control room, empty, screens live.' }} src={mediaUrl(id + '.mp4')} />
      </div>
      <div className="v6hero__veil"></div>
      <div className="shell">
        <span className="label v6eyebrow">Defence and security technology</span>
        <h1>Digital systems for defence readiness</h1>
        <p className="lead">Blue Silo designs, develops and integrates mission-critical systems for military training, range operations, asset accountability and operational readiness.</p>
        <div className="v6geo"><span>Singapore</span><span>Southeast Asia</span><span>APAC</span></div>
        <div className="btns"><a className="btn btn--p" href="#systems">Explore our systems</a>
          <Link className="btn btn--g" to="/contact">Talk to us</Link></div>
      </div>
    </section>
  );
}
