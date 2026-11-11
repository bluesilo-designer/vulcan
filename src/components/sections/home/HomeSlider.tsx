import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Trust } from './Trust';
import { CtaBand } from '../../ui/CtaBand';
import { CTA_TRAINING_IMAGE, mediaUrl } from '../../../lib/media';
import { Icon } from '../../ui/Icon';
import { VISIBLE_PRODUCTS, shown } from '../../../config/site';
import { brandOf, productOf } from '../../../content/products';
import { EXPLORER_IMAGES, WORDS } from '../../../content/home';
import { HOME_V3_IMAGES, HS_CAPS, HS_CTA, HS_FEATURE, HS_INTRO, HS_PRODUCT_LINES, HS_PROOF, HS_SLIDES, HS_WHO, HS_WHY, HS_WHY_H, homeV3Image } from '../../../content/homeSlider';
import { pad2 } from '../../../lib/html';
import { useVersion } from '../../../lib/version';

const DWELL = 7000; /* ms per slide */
const Word = (n: number) => { const w = (WORDS as string[])[n] || String(n); return w.charAt(0).toUpperCase() + w.slice(1); };

/* Hero carousel with capability tabs under it (Slider A). Auto-advances, pauses
   on hover, focus, a hidden tab, or the pause button, and never moves on its own
   under prefers-reduced-motion. Slider B to F were review options until 11 Nov
   2026, when the client fixed A; they were removed, see git history (17afb77, aff9afa). */
function Slider() {
  const v3 = useVersion().v === 3;
  /* v3 opens with "Who we are", then the four service slides */
  const SLIDES = v3 ? [HS_WHO, ...HS_SLIDES] : HS_SLIDES;
  const off = v3 ? 1 : 0;
  const slideImage = (i: number) => mediaUrl(v3 ? (i < off ? SLIDES[i].img : homeV3Image(HOME_V3_IMAGES.slides[i - off])) : HS_SLIDES[i].img);
  const n = SLIDES.length;
  const [cur, setCur] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hold, setHold] = useState(false); /* keyboard focus inside */
  const [hidden, setHidden] = useState(document.hidden);
  const remaining = useRef(DWELL);
  const started = useRef(0);
  const active = useRef(0);
  const reduce = useRef(typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const go = useCallback((i: number) => {
    const next = ((i % n) + n) % n;
    active.current = next;
    remaining.current = DWELL;
    setCur(next);
  }, [n]);
  const running = !paused && !hold && !hidden && !reduce.current;

  useEffect(() => {
    const visibility = () => setHidden(document.hidden);
    document.addEventListener('visibilitychange', visibility);
    return () => document.removeEventListener('visibilitychange', visibility);
  }, []);

  useEffect(() => {
    if (!running) return;
    started.current = performance.now();
    const t = setTimeout(() => go(cur + 1), remaining.current);
    return () => {
      clearTimeout(t);
      if (active.current === cur) remaining.current = Math.max(0, remaining.current - (performance.now() - started.current));
    };
  }, [cur, running, go]);

  const onKey = (e: KeyboardEvent) => {
    const d = e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? -1 : 0;
    if (!d) return;
    e.preventDefault(); const i = ((cur + d) % n + n) % n; go(i); tabs.current[i]?.focus();
  };
  /* one tab per slide */
  const tab = (i: number, cls: string, body: ReactNode) => (
    <button key={SLIDES[i].k} ref={(el) => { tabs.current[i] = el; }} type="button" role="tab" className={cls + (i < cur ? ' is-done' : '')}
      aria-selected={i === cur} aria-controls={`hs-slide-${i}`} aria-label={SLIDES[i].k} tabIndex={i === cur ? 0 : -1} onClick={() => go(i)}>
      {body}
      <i className="hs__prog" aria-hidden="true" style={{ animationDuration: `${DWELL}ms` }} key={i === cur ? `on-${cur}` : 'off'}></i>
    </button>
  );
  const ctl = (
    <div className="hs__ctl">
      <button type="button" className="hs__btn" aria-label="Previous slide" onClick={() => go(cur - 1)}><Icon name="ph-caret-left" /></button>
      <button type="button" className="hs__btn" aria-label={paused ? 'Play slides' : 'Pause slides'} aria-pressed={paused}
        onClick={() => setPaused((p) => !p)} hidden={reduce.current}><Icon name={paused ? 'ph-play' : 'ph-pause'} /></button>
      <button type="button" className="hs__btn" aria-label="Next slide" onClick={() => go(cur + 1)}><Icon name="ph-caret-right" /></button>
    </div>
  );
  const list = (cls: string, inner: (i: number) => ReactNode, extra = '') => (
    <div className={'hs__tabs ' + extra} role="tablist" aria-label="Choose a capability" onKeyDown={onKey}>
      {SLIDES.map((_, i) => tab(i, cls, inner(i)))}
    </div>
  );

  return (
    <section className={'hs hs--s' + (running ? ' is-running' : '')} aria-roledescription="carousel" aria-label="Blue Silo capabilities"
      onFocus={(e) => { if ((e.target as HTMLElement).matches(':focus-visible')) setHold(true); }}
      onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node)) setHold(false); }}>
      {SLIDES.map((s, i) => (
        <div className={'hs__slide' + (i === cur ? ' is-on' : '')} key={s.k} role="group" aria-roledescription="slide"
          aria-label={`${i + 1} of ${n}: ${s.k}`} aria-hidden={i !== cur} id={`hs-slide-${i}`}>
          <div className="hs__bed">{v3 && i === off ? <picture>
                    <source media="(max-width: 1100px)" srcSet={mediaUrl(homeV3Image('hero-training-natural-balanced.jpg'))} />
            <img src={slideImage(i)} alt="" decoding="async" loading="eager" />
          </picture> : <img src={slideImage(i)} alt="" decoding="async" loading="eager" />}</div>
          <div className="hs__veil"></div>
          <div className="shell hs__in">
            <span className="label hs__k"><Icon name={s.icon} />{s.k}</span>
            {/* a headline of two sentences breaks between them, never inside one */}
            {(() => { const parts = s.h.split(/(?<=\.) /); return parts.length > 1
              ? <h1 className="hs__h hs__h--m">{parts.map(p => <span key={p}>{p} </span>)}</h1>
              : <h1 className="hs__h">{s.h}</h1>; })()}
            <p className="lead hs__line">{s.line}</p>
            <div className="btns">
              <Link className="btn btn--p" to={s.cta[1]} tabIndex={i === cur ? 0 : -1}>{s.cta[0]} <Icon name="ph-arrow-right" /></Link>
              <Link className="btn btn--g" to="/contact" tabIndex={i === cur ? 0 : -1}>Talk to us</Link>
            </div>
          </div>
        </div>
      ))}

      <div className="hs__bar"><div className="shell hs__bar-in">
        {list('hs__tab', (i) => <><span className="hs__tab-n">{pad2(i)}</span><span className="hs__tab-k">{SLIDES[i].k}</span></>)}
        {ctl}
      </div></div>
    </section>
  );
}

/* v2 and v3 home. Merged from two client references (28 Oct
   2026), keeping only the ticked sections: hero, trust, featured work, CTA and
   footer from the first; capabilities and why us from the second. Products and
   proof were not ticked and are hidden through HIDDEN_SECTIONS. */
export function HomeSlider({ mergedSections }: { mergedSections?: ReactNode }) {
  const v3 = useVersion().v === 3;
  const prods = VISIBLE_PRODUCTS.map((id) => ({ id, p: productOf(id), b: brandOf(id) })).filter((x) => x.p && x.b);
  return (
    <>
      <Slider />
      <Trust />

      {v3 ? <section className="hs-capabilities-v3" id="capabilities"><div className="shell hs-capabilities-v3__layout">
        <div className="hs-capabilities-v3__intro rv">
          <span className="label">What we do</span>
          <h2>Integrated solutions for every mission.</h2>
          <p>From training and range operations to monitoring and enterprise management, our systems connect the work across a defence programme.</p>
          <Link className="hs-capabilities-v3__all" to="/products">Explore all capabilities <Icon name="ph-arrow-right" /></Link>
        </div>
        <div className="hs-capabilities-v3__grid">
          {HS_CAPS.map((c, i) => <Link className="hs-capabilities-v3__tile rv" data-d={String(i)} to={c[4]} key={c[1]}>
            <img src={mediaUrl(homeV3Image(HOME_V3_IMAGES.caps[i]))} alt="" loading="lazy" decoding="async" />
            <span className="hs-capabilities-v3__tile-copy"><Icon name={c[0]} /><strong>{c[1].slice(0, c[1].lastIndexOf(' '))}<br />{c[1].slice(c[1].lastIndexOf(' ') + 1)}</strong><Icon name="ph-arrow-up-right" className="hs-capabilities-v3__arrow" /></span>
          </Link>)}
        </div>
      </div></section> : <section className="band hs-caps"><div className="shell">
        <div className="hs-caps__head rv">
          <div><span className="label">{HS_INTRO.label}</span><h2>{HS_INTRO.h}</h2></div>
          <p>{HS_INTRO.p}</p>
        </div>
        <div className="hs-caps__grid">
          {HS_CAPS.map((c, i) => (
              <Link className="hs-cap rv" data-d={String(i)} to={c[4]} key={c[1]}>
                <figure><img src={mediaUrl(c[3])} alt="" loading="lazy" decoding="async" /></figure>
                <div className="hs-cap__b">
                  <div className="hs-cap__t"><span className="hs-ic"><Icon name={c[0]} /></span><h3>{c[1]}</h3></div>
                  <p>{c[2]}</p>
                  <span className="hs-go">Learn more <Icon name="ph-arrow-right" /></span></div>
              </Link>
          ))}
        </div>
      </div></section>}

      {mergedSections}

      {shown('homeSlider.products') && <section className="band band--deep" id="systems"><div className="shell">
        <div className="hs-head rv">
          <div><span className="label">Our products</span><h2>Proven systems, each available on its own</h2></div>
          <Link className="hs-go" to="/products">View all products <Icon name="ph-arrow-right" /></Link>
        </div>
        <div className="hs-prods">
          {prods.map(({ id, p, b }) => (
            <Link className="hs-prod rv" to={`/products/${id}`} key={id}>
              <figure><img src={mediaUrl(((EXPLORER_IMAGES as Record<string, string>)[id] || id) + '.jpg')} alt="" loading="lazy" decoding="async" /></figure>
              <div className="hs-prod__b">
                <span className="hs-prod__ic"><Icon name={p!.icon} /></span>
                <div><b className="hs-prod__brand">{b!.brand || b!.acr}</b>
                  <span className="hs-prod__sys">{b!.sys}</span>
                  <p>{HS_PRODUCT_LINES[id] || p!.role}</p>
                  {b!.partner && <span className="hs-prod__p">With {b!.partner}</span>}</div>
                <Icon name="ph-arrow-right" className="hs-prod__go" />
              </div>
            </Link>
          ))}
        </div>
      </div></section>}

      {shown('homeSlider.proof') && <section className="hs-proof"><div className="hs-proof__bed"><img src={mediaUrl('s-aerial.jpg')} alt="" loading="lazy" decoding="async" /></div>
        <div className="shell hs-proof__in">
          <div className="rv"><h2>{HS_PROOF.h}</h2><p>{HS_PROOF.p}</p></div>
          <dl className="hs-stats rv">
            <div><dt>{prods.length}</dt><dd>{Word(prods.length)} systems, each available on its own</dd></div>
            <div><dt>{HS_CAPS.length}</dt><dd>Capability areas, built to work together</dd></div>
            <div><dt>{HS_PROOF.offline[0]}</dt><dd>{HS_PROOF.offline[1]}</dd></div>
          </dl>
        </div></section>}

      {shown('homeSlider.feature') && <section className="hs-feat"><div className="hs-feat__in">
        <figure className="hs-feat__img"><img src={mediaUrl(v3 ? homeV3Image(HOME_V3_IMAGES.featured) : HS_FEATURE.img)} alt="" loading="lazy" decoding="async" /></figure>
        <div className="hs-feat__b rv">
          <span className="label">{HS_FEATURE.label}</span>
          <h2>{HS_FEATURE.h}</h2>
          <p>{HS_FEATURE.p}</p>
          <Link className="btn btn--g" to={HS_FEATURE.cta[1]}>{HS_FEATURE.cta[0]} <Icon name="ph-arrow-right" /></Link>
        </div>
      </div></section>}

      {shown('homeSlider.why') && <section className="hs-whyband"><div className="shell">
        <h2 className="hs-why__h rv">{HS_WHY_H}</h2>
        <ul className="hs-why">
          {HS_WHY.map((w, i) => (
            <li className="rv" data-d={String(i)} key={w[1]}><span className="hs-ic"><Icon name={w[0]} /></span>
              <div><h3>{w[1]}</h3><p>{w[2]}</p></div></li>
          ))}
        </ul>
      </div></section>}

      <CtaBand className="cta-home" title={HS_CTA.title} line={HS_CTA.line} img={v3 ? CTA_TRAINING_IMAGE : undefined} />
    </>
  );
}
