import { useState } from 'react';
import { TRUST } from '../../../content/home';
import { mediaUrl } from '../../../lib/media';
import { useV, useVersion } from '../../../lib/version';

type Logo = { n: string; f: string; m?: string };

/* v3: optical sizing (client feedback 4 Nov 2026: some logos looked too big).
   Each file's rendered height is set so the visible mark covers about the
   same area, measured from its trimmed bounding box and ink density, so wide
   wordmarks (NCS, ST Engineering) shrink and airy marks (DSTA) grow. Keyed by
   file; heights in px include each file's own whitespace. */
const OPTICAL: Record<string, number> = {
  'mindef-t.png': 35, 'dsta.svg': 43, 'certis.svg': 28, 'sj.svg': 30, 'sj-m.svg': 54, 'ncs.png': 21, 'ste.svg': 24,
};

export function Trust() {
  const [mode, setMode] = useState<'mono' | 'colour'>('mono');
  const v2 = useV(2); /* v2: logos only, no treatment toggle */
  const v3 = useVersion().v === 3;
  const sz = (f: string) => (v3 && OPTICAL[f] ? { height: OPTICAL[f], maxHeight: 'none', maxWidth: 'none' } : undefined);
  return (
    <section className="v6trust"><div className="shell">
      <div className="v6trust__t"><span className="label">{TRUST.title}</span><p>{TRUST.line}</p></div>
      <div className="v6trust__logos">
        <div className="v6logos" id="v6logos" data-mode={mode}>
          {(TRUST.logos as Logo[]).map((l) => (
            <figure className="v6logo" role="img" aria-label={l.n} title={l.n} key={l.n}>
              <img className="v6logo__m" style={sz(l.m || l.f)} src={mediaUrl('logos/' + (l.m || l.f))} alt="" loading="lazy" decoding="async" />
              <img className="v6logo__c" style={sz(l.f)} src={mediaUrl('logos/' + l.f)} alt="" loading="lazy" decoding="async" />
            </figure>
          ))}
        </div>
        {!v2 && <div className="v6lt" role="group" aria-label="Logo treatment">
          <button type="button" data-mode="mono" aria-pressed={mode === 'mono'} onClick={() => setMode('mono')}>Mono</button>
          <button type="button" data-mode="colour" aria-pressed={mode === 'colour'} onClick={() => setMode('colour')}>Colour</button>
        </div>}
      </div>
    </div></section>
  );
}
