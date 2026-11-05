import { Link } from 'react-router-dom';
import { CTA_TRAINING_IMAGE, mediaUrl } from '../../lib/media';

/* v2: the one closing CTA used on every page, after the Company page's
   "Where we are" band: full-bleed photograph, headline, two actions. */
/* slim: one row, text left and one action right (slider home, 28 Oct 2026) */
type ImageCredit = { author: string; source: string; license: string; licenseUrl: string };
export function CtaBand({ title, label, line, img = CTA_TRAINING_IMAGE, slim, className, imageCredit, primaryLabel = 'Discuss your requirements', secondaryLabel = 'Request a demonstration' }: { title: string; label?: string; line?: string; img?: string; slim?: boolean; className?: string; imageCredit?: ImageCredit; primaryLabel?: string; secondaryLabel?: string }) {
  if (slim) return (
    <section className="cta-slim">
      <div className="cta-slim__bed"><img src={mediaUrl(img)} alt="" loading="lazy" decoding="async" /></div>
      <div className="shell cta-slim__in">
        <div><h2>{title}</h2>{line && <p>{line}</p>}</div>
        <Link className="btn btn--p" to="/contact">Contact us <i className="ph ph-arrow-right" aria-hidden="true"></i></Link>
      </div>
    </section>
  );
  return (
    <section className={['pv-flow pv-flow--cta', className].filter(Boolean).join(' ')}>
      <div className="pv-flow__bed pv-par"><img src={mediaUrl(img)} alt="" loading="lazy" decoding="async" /></div><div className="pv-flow__veil"></div>
      <div className="shell pv-flow__in">{label && <span className="label">{label}</span>}
        <h2>{title}</h2>
        {line && <p className="pv-flow__line">{line}</p>}
        <div className="pv-flow__cta"><Link className="btn btn--p" to="/contact">{primaryLabel} <i className="ph ph-arrow-right" aria-hidden="true"></i></Link>
          <Link className="btn btn--g" to="/contact">{secondaryLabel}</Link></div>
      </div>
      {imageCredit && <small className="company-v3-where__credit">Photo: <a href={imageCredit.source} target="_blank" rel="noopener noreferrer">{imageCredit.author}</a> · <a href={imageCredit.licenseUrl} target="_blank" rel="noopener noreferrer">{imageCredit.license}</a> · cropped</small>}
    </section>
  );
}
