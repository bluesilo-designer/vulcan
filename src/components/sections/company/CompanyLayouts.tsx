import { CompanyClose } from './CompanyClose';
import { mediaUrl } from '../../../lib/media';
import { CO_CAPABILITIES, CO_EXTRA_SERVICE, CO_INTRO, CO_LINE, CO_ORIGIN_TEXT, CO_REASONS, companyImage } from '../../../content/company';
import { useVersion } from '../../../lib/version';
import '../../../styles/company.css';

/* About Us, v2 and v3. Only A · Text is kept (client, 11 Nov 2026). The other
   layouts (Earlier, A with icon grids, B proof led, C four chapters) were removed;
   they are in the git tag backup/about-layouts-2026-11-11. */

const Pad = (n: number) => String(n + 1).padStart(2, '0');

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
        <div className="rv co2a-head"><span className="label">How we work</span><h2 className="co2a-h">Why Blue Silo{v3 ? '.' : ''}</h2></div>
        <ol className="co2a-why">{CO_REASONS.map((r, i) => <li className="rv" data-d={String(i % 2)} key={r[0]}><span>{Pad(i)}</span><b>{r[0]}</b><p>{r[1]}</p></li>)}</ol>
      </div></section>

      <CompanyClose v3={v3} />
    </>
  );
}
