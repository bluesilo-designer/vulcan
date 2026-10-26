import { useEffect, useRef, useState } from 'react';
import { STORIES } from '../../../content/stories';
import { Icon } from '../../ui/Icon';
import { mediaUrl } from '../../../lib/media';
import { productImg } from '../../../lib/images';
import { useReview } from '../../../lib/review';
import { pad2 } from '../../../lib/html';

/* v2: the product story. A sticky clock on the left follows the chapter
   in view; each chapter pairs a photograph with what used to happen and
   what happens now. IntersectionObserver only, no scroll listener. */
export function StoryRail({ id }: { id: string }) {
  const s = STORIES[id];
  const { state } = useReview();
  const [cur, setCur] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) setCur(Number((e.target as HTMLElement).dataset.i)); });
    }, { rootMargin: '-45% 0px -50% 0px' });
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [id]);

  if (!s) return null;
  const src = (img: string) => img.startsWith('p:') ? productImg(id, img.slice(2), state.pset) : mediaUrl(img);
  const go = (i: number) => refs.current[i]?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'center' });

  return (
    <section className="band band--deep st"><div className="shell">
      <div className="st__head">
        <h2>{s.title}</h2>
        <p>{s.intro}</p>
        <span className="st__note"><Icon name="ph-info" />An illustrative scenario, not a record of a specific site.</span>
      </div>
      <div className="st__grid">
        <nav className="st__clock" aria-label="Story timeline">
          <ol>{s.ch.map((c, i) => (
            <li key={c.t} className={i === cur ? 'is-on' : i < cur ? 'is-past' : ''}>
              <button type="button" onClick={() => go(i)}><b>{c.t}</b><span>{c.at}</span></button>
            </li>
          ))}</ol>
        </nav>
        <div className="st__chs">{s.ch.map((c, i) => (
          <article className="st__ch" key={c.t} data-i={i} ref={(el) => { refs.current[i] = el; }}>
            <figure className="st__img"><img src={src(c.img)} alt="" loading="lazy" decoding="async" /></figure>
            <div className="st__txt">
              <span className="st__t">{pad2(i)}<i></i>{c.t}, {c.at}</span>
              <h3>{c.h}</h3>
              <p>{c.b}</p>
              <dl className="st__vs">
                <div className="st__was"><dt>Before</dt><dd>{c.was}</dd></div>
                <div className="st__now"><dt><Icon name="ph-arrow-right" />Now</dt><dd>{c.now}</dd></div>
              </dl>
            </div>
          </article>
        ))}</div>
      </div>
    </div></section>
  );
}
