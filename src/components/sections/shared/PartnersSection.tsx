import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { PARTNERS, PARTNERS_V2 } from '../../../content/integration';
import { useV } from '../../../lib/version';
import { slotSrc } from '../../../lib/images';
import { useReview } from '../../../lib/review';
import { pad2 } from '../../../lib/html';
import { mediaUrl } from '../../../lib/media';

const HOME_V3_PARTNERS = [
  ['ph-list-checks', 'Define the interfaces', 'Map what each system must exchange and name an owner for every connection.'],
  ['ph-plugs-connected', 'Fit the existing site', 'Connect new capability to the equipment, software and workflows already in use.'],
  ['ph-check-circle', 'Test the full journey', 'Check the handoffs between systems against real training and operational scenarios.'],
  ['ph-file-text', 'Hand over clearly', 'Document the connections and decisions so operators and support teams can maintain them.'],
];

/* Partners and integrators. Shared by the home page and Integration. */
export function PartnersSection({ cta = true, homeV3 = false }: { cta?: boolean; homeV3?: boolean }) {
  const { state } = useReview();
  /* v2 (28 Oct 2026): plainer copy; v1 unchanged */
  const v2 = useV(2);
  const sectionRef = useRef<HTMLElement>(null);
  const [entered, setEntered] = useState(false);
  useEffect(() => {
    if (!homeV3 || !sectionRef.current) return;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { setEntered(true); return; }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setEntered(true); observer.disconnect(); }
    }, { threshold: 0.08 });
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [homeV3]);
  return (
    <section className={'v6feat v6feat--partner' + (homeV3 ? ' v6feat--animated' : '') + (entered ? ' is-entered' : '')} id="partners" ref={sectionRef}>
      <div className="v6feat__media" aria-hidden="true"><img data-slot="partners" src={homeV3 ? mediaUrl('home-v3-western/partners-table.jpg') : slotSrc('partners', state.look)} alt="" loading="lazy" decoding="async" /></div>
      <div className="v6feat__veil" aria-hidden="true"></div>
      <div className="shell">
        <div className="v6feat__head rv"><span className="label">{homeV3 || v2 ? 'Partners' : 'Engagement'}</span>
          <h2>{homeV3 ? 'Make every system work together' : 'How we work with partners and integrators'}</h2>
          <p>{homeV3 ? 'Prime contractors, specialist suppliers and customer teams each bring part of the solution. We make the connections explicit, test the complete workflow and leave a clear path for ongoing support.' : v2 ? 'We work alongside prime contractors, technology partners, system integrators and your own team. Together we agree who does what and how the systems connect, then deliver as one team.' : 'We work alongside prime contractors, technology partners, system integrators and customer teams to define responsibilities, align interfaces and deliver as one programme team.'}</p></div>
        <div className="v6feat__grid v6feat__grid--4 v6feat__grid--rail rv">
          {((homeV3 ? HOME_V3_PARTNERS : v2 ? PARTNERS_V2 : PARTNERS) as string[][]).map((c, i) => (
            <div className="v6fc" key={c[1]}><span className="v6fc__n">{pad2(i)}</span>
              <i className={'ph ' + c[0]} aria-hidden="true"></i><h3>{c[1]}</h3><p>{c[2]}</p></div>
          ))}
        </div>
        {cta && <div className="v6feat__cta rv"><Link className="btn btn--g" to="/integration">See how we integrate <i className="ph ph-arrow-right" aria-hidden="true"></i></Link>
          <span className="v6feat__tag">{homeV3 ? 'A clear route from interface design to handover' : 'Built for complex, multi-party defence programmes'}</span></div>}
      </div>
    </section>
  );
}
