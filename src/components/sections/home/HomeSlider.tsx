import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Trust } from './Trust';
import { CtaBand } from '../../ui/CtaBand';
import { Icon } from '../../ui/Icon';
import { VISIBLE_PRODUCTS, shown } from '../../../config/site';
import { brandOf, productOf } from '../../../content/products';
import { EXPLORER_IMAGES, WORDS } from '../../../content/home';
import { HS_CAPS, HS_CTA, HS_FEATURE, HS_INTRO, HS_PRODUCT_LINES, HS_PROOF, HS_SLIDES, HS_WHY, HS_WHY_H } from '../../../content/homeSlider';
import { mediaUrl } from '../../../lib/media';
import { pad2 } from '../../../lib/html';

const DWELL = 7000; /* ms per slide */
const Word = (n: number) => { const w = (WORDS as string[])[n] || String(n); return w.charAt(0).toUpperCase() + w.slice(1); };

export type SliderVariant = 's' | 's2' | 's3' | 's4' | 's5' | 's6';

/* Hero carousel. Auto-advances, pauses on hover, focus, a hidden tab, or the
   pause button, and never moves on its own under prefers-reduced-motion.
   One state machine, four ways to show it (29 Oct 2026):
   s   tabs under the hero, naming every capability
   s2  loading bars only, no content strip
   s3  split: text and index on a solid panel, the photo beside it, so
       the photo never sits under the text
   s4  full-bleed photo in a viewfinder frame, vertical rail on the right
   s5  filmstrip: a thumbnail of every slide, bottom right
   s6  next up: a progress ring on the play button, a preview of the next slide */
function Slider({ variant }: { variant: SliderVariant }) {
  const n = HS_SLIDES.length;
  const [cur, setCur] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hold, setHold] = useState(false); /* hover or focus inside */
  const reduce = useRef(typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const go = useCallback((i: number) => setCur(((i % n) + n) % n), [n]);
  const running = !paused && !hold && !reduce.current;

  useEffect(() => {
    if (!running) return;
    const t = setTimeout(() => { if (!document.hidden) go(cur + 1); }, DWELL);
    return () => clearTimeout(t);
  }, [cur, running, go]);

  const onKey = (e: KeyboardEvent) => {
    const d = e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? -1 : 0;
    if (!d) return;
    e.preventDefault(); const i = ((cur + d) % n + n) % n; go(i); tabs.current[i]?.focus();
  };
  /* one tab per slide; the markup inside differs by variant */
  const tab = (i: number, cls: string, body: ReactNode) => (
    <button key={HS_SLIDES[i].k} ref={(el) => { tabs.current[i] = el; }} type="button" role="tab" className={cls + (i < cur ? ' is-done' : '')}
      aria-selected={i === cur} aria-controls={`hs-slide-${i}`} aria-label={HS_SLIDES[i].k} tabIndex={i === cur ? 0 : -1} onClick={() => go(i)}>
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
      {HS_SLIDES.map((_, i) => tab(i, cls, inner(i)))}
    </div>
  );
  const count = <span className="hs__count" aria-hidden="true"><b>{pad2(cur)}</b> / {pad2(n - 1)}</span>;

  return (
    <section className={'hs hs--' + variant + (running ? ' is-running' : '')} aria-roledescription="carousel" aria-label="Blue Silo capabilities"
      onMouseEnter={() => setHold(true)} onMouseLeave={() => setHold(false)}
      onFocus={() => setHold(true)} onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node)) setHold(false); }}>
      {variant === 's4' && <div className="hs__frame" aria-hidden="true"><i></i><i></i><i></i><i></i></div>}
      {HS_SLIDES.map((s, i) => (
        <div className={'hs__slide' + (i === cur ? ' is-on' : '')} key={s.k} role="group" aria-roledescription="slide"
          aria-label={`${i + 1} of ${n}: ${s.k}`} aria-hidden={i !== cur} id={`hs-slide-${i}`}>
          <div className="hs__bed"><img src={mediaUrl(s.img)} alt="" decoding="async" loading={i === cur || i === (cur + 1) % n ? 'eager' : 'lazy'} /></div>
          <div className="hs__veil"></div>
          <div className="shell hs__in">
            {variant === 's3' && <span className="hs__big" aria-hidden="true">{pad2(i)}</span>}
            <span className="label hs__k"><Icon name={s.icon} />{s.k}</span>
            <h1 className="hs__h">{s.h}</h1>
            <p className="lead hs__line">{s.line}</p>
            <div className="btns">
              <Link className="btn btn--p" to={s.cta[1]} tabIndex={i === cur ? 0 : -1}>{s.cta[0]} <Icon name="ph-arrow-right" /></Link>
              <Link className="btn btn--g" to="/contact" tabIndex={i === cur ? 0 : -1}>Talk to us</Link>
            </div>
          </div>
        </div>
      ))}

      {variant === 's' && <div className="hs__bar"><div className="shell hs__bar-in">
        {list('hs__tab', (i) => <><span className="hs__tab-n">{pad2(i)}</span><span className="hs__tab-k">{HS_SLIDES[i].k}</span></>)}
        {ctl}
      </div></div>}

      {variant === 's2' && <div className="hs__segbar"><div className="shell hs__segbar-in">
        {count}
        {list('hs__seg', () => null, 'hs__segs')}
        {ctl}
      </div></div>}

      {variant === 's3' && <div className="hs__side"><div className="hs__side-in">
        {list('hs__ix', (i) => <><span className="hs__ix-n">{pad2(i)}</span><span className="hs__ix-k">{HS_SLIDES[i].k}</span></>, 'hs__index')}
        {ctl}
      </div></div>}

      {variant === 's4' && <>
        <div className="hs__read" aria-hidden="true"><span>{pad2(cur)}</span><span>{HS_SLIDES[cur].k}</span></div>
        <div className="hs__rail">
          {list('hs__tick', (i) => <span className="hs__tick-n">{pad2(i)}</span>, 'hs__ticks')}
          {ctl}
        </div>
      </>}

      {variant === 's5' && <div className="hs__strip"><div className="shell hs__strip-in">
        {list('hs__film', (i) => <>
          <span className="hs__film-img"><img src={mediaUrl(HS_SLIDES[i].img)} alt="" decoding="async" /></span>
          <span className="hs__film-t"><span className="hs__film-n">{pad2(i)}</span><span className="hs__film-k">{HS_SLIDES[i].k}</span></span>
        </>, 'hs__films')}
        {ctl}
      </div></div>}

      {variant === 's6' && <div className="hs__next"><div className="shell hs__next-in">
        <div className="hs__ring-wrap">
          <button type="button" className="hs__ring" aria-label={paused ? 'Play slides' : 'Pause slides'} aria-pressed={paused}
            onClick={() => setPaused((p) => !p)} disabled={reduce.current}>
            <svg viewBox="0 0 48 48" aria-hidden="true"><circle className="hs__ring-bg" cx="24" cy="24" r="22" />
              <circle className="hs__ring-fg" cx="24" cy="24" r="22" style={{ animationDuration: `${DWELL}ms` }} key={`r-${cur}`} /></svg>
            <Icon name={paused || reduce.current ? 'ph-play' : 'ph-pause'} />
          </button>
          {count}
          <button type="button" className="hs__btn" aria-label="Previous slide" onClick={() => go(cur - 1)}><Icon name="ph-caret-left" /></button>
        </div>
        <button type="button" className="hs__peek" onClick={() => go(cur + 1)} aria-label={`Next: ${HS_SLIDES[(cur + 1) % n].k}`}>
          <span className="hs__peek-img"><img src={mediaUrl(HS_SLIDES[(cur + 1) % n].img)} alt="" decoding="async" /></span>
          <span className="hs__peek-t"><span className="hs__peek-l">Next</span><span className="hs__peek-k">{HS_SLIDES[(cur + 1) % n].k}</span></span>
          <Icon name="ph-arrow-right" />
        </button>
      </div></div>}
    </section>
  );
}

/* v2 home, slider layout (?hm=s). Merged from two client references (28 Oct
   2026), keeping only the ticked sections: hero, trust, featured work, CTA and
   footer from the first; capabilities and why us from the second. Products and
   proof were not ticked and are hidden through HIDDEN_SECTIONS. */
export function HomeSlider({ variant = 's' }: { variant?: string }) {
  const prods = VISIBLE_PRODUCTS.map((id) => ({ id, p: productOf(id), b: brandOf(id) })).filter((x) => x.p && x.b);
  return (
    <>
      <Slider variant={(['s', 's2', 's3', 's4', 's5', 's6'].includes(variant) ? variant : 's') as SliderVariant} />
      <Trust />

      <section className="band hs-caps"><div className="shell">
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
      </div></section>

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

      <section className="hs-feat"><div className="hs-feat__in">
        <figure className="hs-feat__img"><img src={mediaUrl(HS_FEATURE.img)} alt="" loading="lazy" decoding="async" /></figure>
        <div className="hs-feat__b rv">
          <span className="label">{HS_FEATURE.label}</span>
          <h2>{HS_FEATURE.h}</h2>
          <p>{HS_FEATURE.p}</p>
          <Link className="btn btn--g" to={HS_FEATURE.cta[1]}>{HS_FEATURE.cta[0]} <Icon name="ph-arrow-right" /></Link>
        </div>
      </div></section>

      <section className="hs-whyband"><div className="shell">
        <h2 className="hs-why__h rv">{HS_WHY_H}</h2>
        <ul className="hs-why">
          {HS_WHY.map((w, i) => (
            <li className="rv" data-d={String(i)} key={w[1]}><span className="hs-ic"><Icon name={w[0]} /></span>
              <div><h3>{w[1]}</h3><p>{w[2]}</p></div></li>
          ))}
        </ul>
      </div></section>

      <CtaBand title={HS_CTA.title} line={HS_CTA.line} slim />
    </>
  );
}
