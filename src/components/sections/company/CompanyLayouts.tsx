import { Link } from 'react-router-dom';
import { CompanyClose } from './CompanyClose';
import { mediaUrl } from '../../../lib/media';
import { slotSrc } from '../../../lib/images';
import { useReview } from '../../../lib/review';
import {
  CO_CAPABILITIES, CO_INTEGRATIONS, CO_INTRO, CO_LIFECYCLE, CO_LINE, CO_PIPELINE, CO_REASONS,
  CO_EXTRA_SERVICE, CO_ORIGIN, CO_ORIGIN_TEXT, CO_STORY, CO_STORY_2, CO_TRMS, companyImage,
} from '../../../content/company';
import { useVersion } from '../../../lib/version';
import { CompanyV3 } from './CompanyV3';
import { Icon } from '../../ui/Icon';
import '../../../styles/company.css';

/* Company page, v2 layout sub-versions (?co=a|b|c). Three directions on
   the same content so the client can pick one:
   A  one statement, few elements, lots of air
   B  proof first: product, integrations, delivery, sells harder
   C  four numbered chapters, read like a short company profile */

const Pad = (n: number) => String(n + 1).padStart(2, '0');

/* B: the strip under the hero shows the four areas of focus (28 Oct 2026).
   Set to false to bring back the earlier "why us" strip. */
const B_STRIP_AREAS = true;
const A_REASONS_V3 = [
  { icon: 'ph-monitor-play', title: 'Start with working software', text: 'See TRMS in a real training scenario, then configure it for your site.' },
  { icon: 'ph-plugs-connected', title: 'Connect what is already there', text: 'We define and test interfaces with the systems and suppliers your facility uses.' },
  { icon: 'ph-users-three', title: 'One accountable team', text: 'The team that learns your requirements stays involved through deployment and support.' },
  { icon: 'ph-map-pin', title: 'Close to the operation', text: 'Based in Singapore, with on-site collaboration when the programme needs it.' },
];

/* ---------- A: simple statement ---------- */
export function CompanyA() {
  const v3 = useVersion().v === 3;
  return (
    <>
      {/* v3: the campus photograph moves behind the hero, at the client's request (4 Nov 2026);
          the separate image band under the hero is hidden in v3 so the photo does not repeat */}
      <section className={'co2a-hero' + (v3 ? ' co2a-hero--bg' : '')}>
        {v3 && <><div className="co2a-hero__bed" aria-hidden="true"><img src={mediaUrl(companyImage('hero', v3))} alt="" decoding="async" /></div><div className="co2a-hero__veil" aria-hidden="true"></div></>}
        <div className="shell">
        <span className="label">Company</span>
        <h1>{CO_LINE}</h1>
        <p className="co2a-lead">{CO_INTRO}</p>
      </div></section>

      {!v3 && <figure className="co2a-img"><img src={mediaUrl(companyImage('hero', v3))} alt="Modern defence training and systems campus at dusk" decoding="async" /></figure>}

      {v3 ? <section className="band co2a-origins"><div className="shell">
        <div className="co2a-origins__panel rv">
          <span className="label">Our origins</span>
          <h2>{CO_ORIGIN.h}</h2>
          <p className="co2a-origins__lead">{CO_ORIGIN.lead}</p>
          <div className="co2a-origins__story"><p>{CO_ORIGIN.body}</p><p>{CO_ORIGIN.body2}</p></div>
          <p className="co2a-origins__pull">{CO_ORIGIN.pull}</p>
        </div>
      </div></section> : <section className="band"><div className="shell co2a-split">
        <h2 className="rv">Where our experience comes from</h2>
        <div className="rv"><p className="co2a-big">{CO_STORY_2}</p><p className="co2a-small">{CO_STORY}</p></div>
      </div></section>}

      {v3 ? <section className="band band--deep co2a-what"><div className="shell">
        <div className="co2a-what__intro rv"><span className="label">What we do</span><h2>Integrated defence systems for every mission.</h2><p>From purpose-built defence solutions and complex systems integration to enhancing existing capabilities, we design, engineer and deliver technology that connects systems, strengthens operations and evolves with mission requirements.</p></div>
        <ul className="co2a-what__areas">{CO_CAPABILITIES.map((c, i) => <li className="rv" data-d={String(i % 4)} key={c[0]}><Icon name={c[2]} /><span>0{i + 1}</span><strong>{c[0]}</strong><p>{c[3]}</p></li>)}</ul>
      </div></section> : <section className="band band--deep"><div className="shell co2a-split">
        <h2 className="rv">What we do</h2><ul className="co2a-rows">{CO_CAPABILITIES.map((c) => <li className="rv" key={c[0]}><b>{c[0]}</b><span>{c[1]}</span></li>)}</ul>
      </div></section>}

      {v3 ? <section className="band co2a-why-v3"><div className="shell">
        <header className="co2a-why-v3__head rv"><div><span className="label">Why Blue Silo</span><h2>Built to deliver. Ready to stay.</h2></div><p>Working product, clear interfaces and an accountable team from first discussion through long-term support.</p></header>
        <ol className="co2a-why-v3__grid">{A_REASONS_V3.map((item, i) => <li className="rv" data-d={String(i % 4)} key={item.title}><span className="co2a-why-v3__top"><Icon name={item.icon} /><small>{Pad(i)}</small></span><h3>{item.title}</h3><p>{item.text}</p></li>)}</ol>
      </div></section> : <section className="band"><div className="shell">
        <h2 className="co2a-h rv">Why Blue Silo</h2><ol className="co2a-why">{CO_REASONS.map((r, i) => <li className="rv" data-d={String(i % 2)} key={r[0]}><span>{Pad(i)}</span><b>{r[0]}</b><p>{r[1]}</p></li>)}</ol>
      </div></section>}

      <CompanyClose v3={v3} />
    </>
  );
}

/* ---------- A · Text: the v2 original of A, text only (added 5 Nov 2026) ----------
   v3 changed A into panels, icon grids and a photograph behind the hero. This keeps the
   clean statement-and-rows version as its own option. Same copy, no photograph, no cards. */
export function CompanyText() {
  const v3 = useVersion().v === 3;
  return (
    <>
      <section className="co2a-hero co2a-hero--bg">
        <div className="co2a-hero__bed" aria-hidden="true"><img src={mediaUrl(companyImage('hero', true))} alt="" decoding="async" /></div><div className="co2a-hero__veil" aria-hidden="true"></div>
        <div className="shell">
        <span className="label">Company</span>
        <h1>{CO_LINE}</h1>
        <p className="co2a-lead">{CO_INTRO}</p>
      </div></section>

      <section className="band"><div className="shell co2a-split">
        <div className="rv co2a-split__h"><span className="label">Who we are</span><h2>{CO_ORIGIN_TEXT.h}</h2></div>
        <div className="rv"><p className="co2a-big">{CO_ORIGIN_TEXT.big}</p>
          <p className="co2a-small">{CO_ORIGIN_TEXT.p1}</p><p className="co2a-small">{CO_ORIGIN_TEXT.p2}</p>
          <p className="co2a-big">{CO_ORIGIN_TEXT.pull}</p></div>
      </div></section>

      <section className="band band--deep"><div className="shell co2a-split">
        <div className="rv co2a-split__h"><span className="label">What we do</span><h2>Integrated defence systems for every mission.</h2>
          <p>From purpose-built defence solutions and complex systems integration to the enhancement of existing capabilities, we design, engineer and deliver technology that connects systems, strengthens operations and evolves with mission requirements.</p></div>
        <ul className="co2a-rows">{[...CO_CAPABILITIES, CO_EXTRA_SERVICE].map((c) => <li className="rv" key={c[0]}><b>{c[0]}</b><span>{c[1]}</span></li>)}</ul>
      </div></section>

      <section className="band"><div className="shell">
        <div className="rv co2a-head"><span className="label">How we work</span><h2 className="co2a-h">Why Blue Silo</h2></div>
        <ol className="co2a-why">{CO_REASONS.map((r, i) => <li className="rv" data-d={String(i % 2)} key={r[0]}><span>{Pad(i)}</span><b>{r[0]}</b><p>{r[1]}</p></li>)}</ol>
      </div></section>

      <CompanyClose v3={v3} />
    </>
  );
}

/* ---------- B: proof led ---------- */
export function CompanyB() {
  const { state } = useReview();
  const v3 = useVersion().v === 3;
  if (v3) return <CompanyV3 />;
  return (
    <>
      <section className={'pv-hero co2b-hero' + (v3 ? ' co2b-hero--v3' : '')}>
        <div className="pv-hero__bed pv-par"><img src={v3 ? mediaUrl(companyImage('hero', true)) : slotSrc('aerial', state.look)} alt="" decoding="async" /></div><div className="pv-hero__veil"></div>
        <div className="shell pv-hero__in"><span className="label">About Us</span>
          <h1>Blue Silo builds defence systems that work together</h1>
          <p className="pv-hero__lead">{CO_INTRO}</p>
          <div className="btns co2b-btns"><Link className="btn btn--p" to="/contact">Talk to us <i className="ph ph-arrow-right" aria-hidden="true"></i></Link>
            <Link className="btn btn--g" to="/products/trms">See our product</Link></div></div>
      </section>

      <section className="band co2b-about"><div className="shell co2b-about__grid rv">
        <span className="label">Who we are</span>
        <div><h2>Built in Singapore. Designed for the realities of defence operations.</h2>
          <p>Blue Silo designs, develops and integrates technology for military training and complex defence environments. We bring our own software together with the systems a facility already uses, then stay involved through deployment, training and support.</p>
          <p>Our work spans training systems, system integration, monitoring and intelligence, and enterprise management. Training is where our product development goes deepest.</p></div>
      </div></section>

      <section className="co2b-proof"><div className="shell"><ul>{B_STRIP_AREAS
        ? CO_CAPABILITIES.map((c) => (<li className="rv" key={c[0]}><b>{c[0]}</b><span>{c[3]}</span></li>))
        : CO_REASONS.map((p) => (<li className="rv" key={p[0]}><b>{p[0]}</b><span>{p[1]}</span></li>))}</ul></div></section>

      <section className="band"><div className="shell co2b-split">
        <div className="rv">
          <span className="label co2-k">Our product</span>
          <h2>One system for the whole training day</h2>
          <p className="co2b-intro">Training is where we go deepest. Our Training Resource Management System manages a session from the first booking to the last item returned. It is already built, so you start from working software, configured to how your centre runs.</p>
          <dl className="co2b-dl">{CO_TRMS.map((t) => (<div key={t[0]}><dt>{t[0]}</dt><dd>{t[1]}</dd></div>))}</dl>
          <Link className="co2-more" to="/products/trms">See how it works <i className="ph ph-arrow-right" aria-hidden="true"></i></Link>
        </div>
        <figure className="co2b-fig rv" data-d="1"><img src={mediaUrl(companyImage('floor', v3))} alt="Training range instructor planning a training day" loading="lazy" decoding="async" /></figure>
      </div></section>

      <section className="band band--deep"><div className="shell co2b-split co2b-split--rev">
        <figure className="co2b-fig rv"><img src={mediaUrl(companyImage('integration', v3))} alt="" loading="lazy" decoding="async" /></figure>
        <div className="rv" data-d="1">
          <h2>Connected to the systems you already run</h2>
          <p className="co2b-intro">No defence facility runs on one supplier's systems. Our software already works with these types of training system, and we agree every new connection in writing before we build it.</p>
          <ul className="co2b-reg">{CO_INTEGRATIONS.map((x) => (
            <li key={x[0]}><i className="ph ph-check" aria-hidden="true"></i><b>{x[0]}</b><span>{x[1]}</span></li>))}
          </ul>
          <p className="co2-note">{CO_PIPELINE}</p>
        </div>
      </div></section>

      <section className="band"><div className="shell">
        <div className="head rv"><h2>One team, from the first workshop to long-term support</h2>
          <p>You work with the same people at every stage, so nothing gets lost between suppliers.</p></div>
        <ol className="co2b-life rv">{CO_LIFECYCLE.map((s, i) => (<li key={s}><span>{Pad(i)}</span>{s}</li>))}</ol>
      </div></section>

      <CompanyClose v3={v3} />
    </>
  );
}

/* ---------- C: four chapters ---------- */
export function CompanyC() {
  const v3 = useVersion().v === 3;
  const chapters = [
    { t: 'Who we are', img: 'floor', body: <>
      <p className="co2c-big">{CO_LINE}</p><p>{CO_INTRO}</p><p>{CO_STORY}</p><p>{CO_STORY_2}</p></> },
    { t: 'What we do', img: 'control', body: <>
      <p className="co2c-big">We work across four areas. Training is where we go deepest, and our software for it is already built.</p>
      <ul className="co2c-caps">{CO_CAPABILITIES.map((c) => (
        <li key={c[0]}><i className={'ph ' + c[2]} aria-hidden="true"></i><span><b>{c[0]}</b>{c[1]}</span></li>))}</ul></> },
    { t: 'What we integrate', img: 'integration', body: <>
      <p className="co2c-big">No defence facility runs on one supplier's systems. We connect them so they work as one.</p>
      <ul className="co2c-tags">{CO_INTEGRATIONS.map((x) => <li key={x[0]}>{x[0]}</li>)}</ul>
      <p>{CO_PIPELINE}</p></> },
    { t: 'How we work', img: v3 ? 'partners' : 'hero', body: <>
      <p className="co2c-big">The team that captures your requirements also delivers the system, trains your staff and supports it afterwards.</p>
      <ol className="co2c-life">{CO_LIFECYCLE.map((s) => <li key={s}>{s}</li>)}</ol>
      <p className="co2c-after">{CO_REASONS[3][1]}</p></> },
  ];
  return (
    <>
      <section className="co2c-hero"><div className="shell co2c-hero__in">
        <div><span className="label">Company</span>
          <h1>Defence systems, from design to long-term support</h1>
          <p className="co2c-lead">Who we are, what we do, what we integrate, and how we work with you.</p>
          <ol className="co2c-toc">{chapters.map((c, i) => <li key={c.t}><a href={'#ch' + (i + 1)}><span>{Pad(i)}</span>{c.t}</a></li>)}</ol></div>
        <figure><img src={mediaUrl(companyImage('office', v3))} alt="Modern defence systems campus" decoding="async" /></figure>
      </div></section>

      {chapters.map((c, i) => (
        <section className={'band co2c-ch' + (i % 2 ? ' band--deep' : '')} id={'ch' + (i + 1)} key={c.t}><div className="shell co2c-grid">
          <header><span className="co2c-n">{Pad(i)}</span><h2>{c.t}</h2>
            <figure><img src={mediaUrl(companyImage(c.img, v3))} alt="" loading="lazy" decoding="async" /></figure></header>
          <div className="co2c-body rv">{c.body}</div>
        </div></section>
      ))}

      <CompanyClose v3={v3} />
    </>
  );
}
