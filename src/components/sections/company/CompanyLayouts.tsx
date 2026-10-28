import { Link } from 'react-router-dom';
import { CtaBand } from '../../ui/CtaBand';
import { mediaUrl } from '../../../lib/media';
import { slotSrc } from '../../../lib/images';
import { useReview } from '../../../lib/review';
import {
  CO_CAPABILITIES, CO_CTA_LINE, CO_INTEGRATIONS, CO_INTRO, CO_LIFECYCLE, CO_LINE, CO_PIPELINE, CO_REASONS,
  CO_STORY, CO_STORY_2, CO_TRMS, CO_WHERE,
} from '../../../content/company';
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

/* ---------- A: simple statement ---------- */
export function CompanyA() {
  return (
    <>
      <section className="co2a-hero"><div className="shell">
        <span className="label">Company</span>
        <h1>{CO_LINE}</h1>
        <p className="co2a-lead">{CO_INTRO}</p>
      </div></section>

      <figure className="co2a-img"><img src={mediaUrl('c/hero.jpg')} alt="Blue Silo engineering office" decoding="async" /></figure>

      <section className="band"><div className="shell co2a-split">
        <h2 className="rv">Where our experience comes from</h2>
        <div className="rv">
          <p className="co2a-big">{CO_STORY_2}</p>
          <p className="co2a-small">{CO_STORY}</p>
        </div>
      </div></section>

      <section className="band band--deep"><div className="shell co2a-split">
        <h2 className="rv">What we do</h2>
        <ul className="co2a-rows">{CO_CAPABILITIES.map((c) => (
          <li className="rv" key={c[0]}><b>{c[0]}</b><span>{c[1]}</span></li>))}
        </ul>
      </div></section>

      <section className="band"><div className="shell">
        <h2 className="co2a-h rv">Why Blue Silo</h2>
        <ol className="co2a-why">{CO_REASONS.map((r, i) => (
          <li className="rv" data-d={String(i % 2)} key={r[0]}><span>{Pad(i)}</span><b>{r[0]}</b><p>{r[1]}</p></li>))}
        </ol>
      </div></section>

      <CtaBand label="Where we are" title={CO_WHERE} line={CO_CTA_LINE} img="c/where.jpg" />
    </>
  );
}

/* ---------- B: proof led ---------- */
export function CompanyB() {
  const { state } = useReview();
  return (
    <>
      <section className="pv-hero co2b-hero">
        <div className="pv-hero__bed pv-par"><img src={slotSrc('aerial', state.look)} alt="" decoding="async" /></div><div className="pv-hero__veil"></div>
        <div className="shell pv-hero__in"><span className="label">Company</span>
          <h1>Defence systems, built to work together</h1>
          <p className="pv-hero__lead">{CO_INTRO}</p>
          <div className="btns co2b-btns"><Link className="btn btn--p" to="/contact">Talk to us <i className="ph ph-arrow-right" aria-hidden="true"></i></Link>
            <Link className="btn btn--g" to="/products/trms">See our product</Link></div></div>
      </section>

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
        <figure className="co2b-fig rv" data-d="1"><img src={mediaUrl('c/floor.jpg')} alt="Blue Silo engineer at work" loading="lazy" decoding="async" /></figure>
      </div></section>

      <section className="band band--deep"><div className="shell co2b-split co2b-split--rev">
        <figure className="co2b-fig rv"><img src={mediaUrl('c/integration.jpg')} alt="" loading="lazy" decoding="async" /></figure>
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

      <CtaBand label="Where we are" title={CO_WHERE} line={CO_CTA_LINE} img="c/where.jpg" />
    </>
  );
}

/* ---------- C: four chapters ---------- */
export function CompanyC() {
  const chapters = [
    { t: 'Who we are', img: 'c/floor.jpg', body: <>
      <p className="co2c-big">{CO_LINE}</p><p>{CO_INTRO}</p><p>{CO_STORY}</p><p>{CO_STORY_2}</p></> },
    { t: 'What we do', img: 'c/control.jpg', body: <>
      <p className="co2c-big">We work across four areas. Training is where we go deepest, and our software for it is already built.</p>
      <ul className="co2c-caps">{CO_CAPABILITIES.map((c) => (
        <li key={c[0]}><i className={'ph ' + c[2]} aria-hidden="true"></i><span><b>{c[0]}</b>{c[1]}</span></li>))}</ul></> },
    { t: 'What we integrate', img: 'c/integration.jpg', body: <>
      <p className="co2c-big">No defence facility runs on one supplier's systems. We connect them so they work as one.</p>
      <ul className="co2c-tags">{CO_INTEGRATIONS.map((x) => <li key={x[0]}>{x[0]}</li>)}</ul>
      <p>{CO_PIPELINE}</p></> },
    { t: 'How we work', img: 'c/hero.jpg', body: <>
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
        <figure><img src={mediaUrl('c/office.jpg')} alt="Blue Silo office building" decoding="async" /></figure>
      </div></section>

      {chapters.map((c, i) => (
        <section className={'band co2c-ch' + (i % 2 ? ' band--deep' : '')} id={'ch' + (i + 1)} key={c.t}><div className="shell co2c-grid">
          <header><span className="co2c-n">{Pad(i)}</span><h2>{c.t}</h2>
            <figure><img src={mediaUrl(c.img)} alt="" loading="lazy" decoding="async" /></figure></header>
          <div className="co2c-body rv">{c.body}</div>
        </div></section>
      ))}

      <CtaBand label="Where we are" title={CO_WHERE} line={CO_CTA_LINE} img="c/where.jpg" />
    </>
  );
}
