import { useRef, useState, type KeyboardEvent } from 'react';
import { Band } from '../../ui/Band';
import { CHAIN as CHAIN_V1, STEPS as STEPS_V1, CHAIN_V2, CHAIN_STAGE_LINES, CHAIN_FEATURES } from '../../../content/home';
import { useV, useVersion } from '../../../lib/version';
import { pad2 } from '../../../lib/html';
import { mediaUrl } from '../../../lib/media';
import { Medal } from './shared';
import { shown } from '../../../config/site';

export function Chain() {
  /* v2: content rewritten from the range-day flow; v1 kept as it was */
  const v2 = useV(2);
  const v3 = useVersion().v === 3;
  const CHAIN = (v2 ? CHAIN_V2 : CHAIN_V1) as typeof CHAIN_V1;
  const STEPS: string[] = v2 ? CHAIN_V2.map((c) => c.b) : (STEPS_V1 as string[]);
  const [cur, setCur] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const go = (i: number, focus: boolean) => { setCur(i); if (focus) refs.current[i]?.focus(); };
  const onKey = (e: KeyboardEvent) => {
    const L = CHAIN.length; let n: number | null = null;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') n = (cur + 1) % L;
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') n = (cur - 1 + L) % L;
    else if (e.key === 'Home') n = 0;
    else if (e.key === 'End') n = L - 1;
    if (n !== null) { e.preventDefault(); go(n, true); }
  };
  const c = CHAIN[cur], n = pad2(cur);
  const v3Images = [
    'chain-access', 'chain-register', 'chain-brief', 'system-ewms', 'system-hums',
    'system-rcs', 'system-vms', 'chain-review', 'chain-return', 'chain-sustain',
  ];
  const panelImage = v3 ? `home-v3-western/${v3Images[cur]}.jpg` : `chain-${n}.jpg`;
  const data = String(c.d || '').split(',').map((x) => x.trim()).filter(Boolean);
  return (
    <Band id="chain" bleed deep>
      <div className="shell"><div className="head rv">
        {v2 && <span className="label" style={{ display: 'block', marginBottom: 'var(--s4)' }}>The operational workflow</span>}
        <h2>{v2 ? 'From Access to Sustainment. Every Stage Connected.' : 'From the gate to the closing account, on one range day'}</h2>
        <p>{v2
          ? 'See how our integrated systems support every stage of a training operation, from personnel access and preparation to execution, performance review and equipment sustainment.'
          : 'Where the systems meet, nothing is carried by hand. Select a step to see what happens, what data crosses, and which system holds it.'}</p></div>
        {v2 && <span className="label chain__lead">The {CHAIN.length} stages</span>}</div>
      <div className="chain">
        <div className="chain__rail" id="rail" role="tablist" aria-label="The training day" onKeyDown={onKey}>
          {CHAIN.map((s, i) => (
            <button className="step" type="button" role="tab" data-i={i} key={i} aria-selected={i === cur}
              tabIndex={i === cur ? 0 : -1} aria-controls="panel" ref={(el) => { refs.current[i] = el; }}
              onClick={() => go(i, false)}>
              <span className="step__n">{pad2(i)}</span>{v2 && (s as { i?: string }).i && <i className={'ph step__i ' + (s as { i?: string }).i} aria-hidden="true"></i>}<span className="step__k">{s.k}</span>{v2 && CHAIN_STAGE_LINES[i] && <span className="step__d">{CHAIN_STAGE_LINES[i]}</span>}<span className="step__s">{s.s}</span>
            </button>
          ))}
        </div>
        <div className="panel"><div className="shell">
          <div className={'panel__in v6cp v6cp--in' + (v2 ? ' v6cp--v2' : '')} id="panel" role="tabpanel" key={cur}>
            <figure className="v6cp__img"><img src={mediaUrl(panelImage)} alt="" decoding="async" />
              <span className="v6cp__n">{n} / {c.k}</span></figure>
            <div className="v6cp__body">
              {v2 && (c as { h?: string }).h && <span className="v6cp__q"><i className={'ph ' + ((c as { i?: string }).i || '')} aria-hidden="true"></i>{(c as { h?: string }).h}</span>}
              {/* v2: every step's panel carries the one shared line (client, 5 Nov 2026); c.t stays for v1.
                  v3: each step shows its own title again, the shared line read as a repeat (11 Nov 2026) */}
              <h3>{v2 && !v3 ? 'Every step passes its data to the next. No paper in between.' : c.t}</h3>
              <p>{STEPS[cur] || c.b}</p>
              {v2 && CHAIN_FEATURES[cur] && <div className="v6cp__feat"><span className="v6cp__lbl">Supporting features</span>
                <ul>{CHAIN_FEATURES[cur].map((f) => <li key={f}>{f}</li>)}</ul></div>}
              <div className="v6cp__meta">{(!v2 || shown('homeChain.dataPassed')) && <div className="v6cp__data"><span className="v6cp__lbl">Data that moves</span>
                <span className="v6cp__chips">{data.map((d) => <i key={d}>{d}</i>)}</span></div>}
              {/* v3: "Systems on this step" hidden at the client's request (4 Nov 2026) */}
              {!v3 && String(c.s || '').trim() && <div className="v6cp__sys"><span className="v6cp__lbl">Systems on this step</span>
                <span className="v6medals">{String(c.s || '').split('·').map((r, i) => <Medal raw={r} key={i} />)}</span></div>}</div>
            </div>
          </div>
        </div></div>
      </div>
    </Band>
  );
}
