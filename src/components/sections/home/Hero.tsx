import { Link } from 'react-router-dom';
import { Media } from '../../ui/Media';
import { isReady, mediaUrl } from '../../../lib/media';
import { DEFAULTS, useReview } from '../../../lib/review';
import { useV } from '../../../lib/version';

export function Hero() {
  const { state } = useReview();
  const v2 = useV(2); /* v2 copy: the four capability areas (28 Oct 2026) */
  const id = state.hero && isReady(state.hero) ? state.hero : DEFAULTS.hero!;
  return (
    <section className="v6hero">
      <div className="v6hero__bed">
        <Media key={id} m={{ id, kind: 'Video', label: 'Control room before a serial', brief: 'Range control room, empty, screens live.' }} src={mediaUrl(id + '.mp4')} />
      </div>
      <div className="v6hero__veil"></div>
      <div className="shell">
        <span className="label v6eyebrow">Defence and security technology</span>
        <h1>{v2 ? 'Defence systems that work as one' : 'Digital systems for defence readiness'}</h1>
        <p className="lead">{v2
          ? 'We design, develop and integrate defence systems across four areas: training, system integration, monitoring and intelligence, and enterprise management.'
          : 'Blue Silo designs, develops and integrates mission-critical systems for military training, range operations, asset accountability and operational readiness.'}</p>
        <div className="v6geo"><span>Singapore</span><span>Southeast Asia</span><span>APAC</span></div>
        <div className="btns"><a className="btn btn--p" href="#systems">Explore our systems</a>
          <Link className="btn btn--g" to="/contact">Talk to us</Link></div>
      </div>
    </section>
  );
}
