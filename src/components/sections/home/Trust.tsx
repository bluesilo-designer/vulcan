import { useState } from 'react';
import { TRUST } from '../../../content/home';
import { mediaUrl } from '../../../lib/media';
import { useV } from '../../../lib/version';

type Logo = { n: string; f: string; m?: string };

export function Trust() {
  const [mode, setMode] = useState<'mono' | 'colour'>('mono');
  const v2 = useV(2); /* v2: logos only, no treatment toggle */
  return (
    <section className="v6trust"><div className="shell">
      <div className="v6trust__t"><span className="label">{TRUST.title}</span><p>{TRUST.line}</p></div>
      <div className="v6trust__logos">
        <div className="v6logos" id="v6logos" data-mode={mode}>
          {(TRUST.logos as Logo[]).map((l) => (
            <figure className="v6logo" role="img" aria-label={l.n} title={l.n} key={l.n}>
              <img className="v6logo__m" src={mediaUrl('logos/' + (l.m || l.f))} alt="" loading="lazy" decoding="async" />
              <img className="v6logo__c" src={mediaUrl('logos/' + l.f)} alt="" loading="lazy" decoding="async" />
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
