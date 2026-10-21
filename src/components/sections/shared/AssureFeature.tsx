import { ASSURANCE_CONTROLS } from '../../../content/assurance';
import { slotSrc } from '../../../lib/images';
import { useReview } from '../../../lib/review';
import { pad2 } from '../../../lib/html';

/* Assurance feature. Shared by the home page and the Assurance page. */
export function AssureFeature() {
  const { state } = useReview();
  return (
    <section className="v6feat v6feat--assure">
      <div className="v6feat__media" aria-hidden="true"><img data-slot="assurance" src={slotSrc('assurance', state.look)} alt="" loading="lazy" decoding="async" /></div>
      <div className="v6feat__veil" aria-hidden="true"></div>
      <div className="shell">
        <div className="v6feat__head rv"><span className="label">Assurance</span>
          <h2>Secure by design,<br />from the node to the enterprise.</h2>
          <p>We build security, reliability and compliance into every layer, from fielded systems and site infrastructure to enterprise platforms and data networks.</p></div>
        <div className="v6feat__grid v6feat__grid--3 rv">
          {(ASSURANCE_CONTROLS as string[][]).map((c, i) => (
            <div className="v6fc v6fc--box" key={c[1]}><span className="v6fc__n">{pad2(i)}</span>
              <i className={'ph ' + c[0]} aria-hidden="true"></i><h3>{c[1]}</h3><p>{c[2]}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}
