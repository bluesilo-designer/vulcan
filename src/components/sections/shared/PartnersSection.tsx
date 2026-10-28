import { Link } from 'react-router-dom';
import { PARTNERS, PARTNERS_V2 } from '../../../content/integration';
import { useV } from '../../../lib/version';
import { slotSrc } from '../../../lib/images';
import { useReview } from '../../../lib/review';
import { pad2 } from '../../../lib/html';

/* Partners and integrators. Shared by the home page and Integration. */
export function PartnersSection({ cta = true }: { cta?: boolean }) {
  const { state } = useReview();
  /* v2 (28 Oct 2026): plainer copy; v1 unchanged */
  const v2 = useV(2);
  return (
    <section className="v6feat v6feat--partner" id="partners">
      <div className="v6feat__media" aria-hidden="true"><img data-slot="partners" src={slotSrc('partners', state.look)} alt="" loading="lazy" decoding="async" /></div>
      <div className="v6feat__veil" aria-hidden="true"></div>
      <div className="shell">
        <div className="v6feat__head rv"><span className="label">{v2 ? 'Partners' : 'Engagement'}</span>
          <h2>How we work with partners and integrators</h2>
          <p>{v2 ? 'We work alongside prime contractors, technology partners, system integrators and your own team. Together we agree who does what and how the systems connect, then deliver as one team.' : 'We work alongside prime contractors, technology partners, system integrators and customer teams to define responsibilities, align interfaces and deliver as one programme team.'}</p></div>
        <div className="v6feat__grid v6feat__grid--4 v6feat__grid--rail rv">
          {((v2 ? PARTNERS_V2 : PARTNERS) as string[][]).map((c, i) => (
            <div className="v6fc" key={c[1]}><span className="v6fc__n">{pad2(i)}</span>
              <i className={'ph ' + c[0]} aria-hidden="true"></i><h3>{c[1]}</h3><p>{c[2]}</p></div>
          ))}
        </div>
        {cta && <div className="v6feat__cta rv"><Link className="btn btn--g" to="/integration">See how we integrate <i className="ph ph-arrow-right" aria-hidden="true"></i></Link>
          <span className="v6feat__tag">Built for complex, multi-party defence programmes</span></div>}
      </div>
    </section>
  );
}
