import { useRef, useState, type KeyboardEvent } from 'react';
import { Band } from '../../ui/Band';
import { CHAIN as CHAIN_V1, STEPS as STEPS_V1, CHAIN_V2 } from '../../../content/home';
import { useV } from '../../../lib/version';
import { pad2 } from '../../../lib/html';
import { mediaUrl } from '../../../lib/media';
import { Medal } from './shared';

export function Chain() {
  /* v2: content rewritten from the range-day flow; v1 kept as it was */
  const v2 = useV(2);
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
  const data = String(c.d || '').split(',').map((x) => x.trim()).filter(Boolean);
  return (
    <Band id="chain" bleed deep>
      <div className="shell"><div className="head rv">
        <h2>From the gate to the closing account, on one range day</h2>
        <p>Where the systems meet, nothing is carried by hand. Select a step to see what happens, what data crosses, and which system holds it.</p></div></div>
      <div className="chain">
        <div className="chain__rail" id="rail" role="tablist" aria-label="The training day" onKeyDown={onKey}>
          {CHAIN.map((s, i) => (
            <button className="step" type="button" role="tab" data-i={i} key={i} aria-selected={i === cur}
              tabIndex={i === cur ? 0 : -1} aria-controls="panel" ref={(el) => { refs.current[i] = el; }}
              onClick={() => go(i, false)}>
              <span className="step__n">{pad2(i)}</span><span className="step__k">{s.k}</span><span className="step__s">{s.s}</span>
            </button>
          ))}
        </div>
        <div className="panel"><div className="shell">
          <div className="panel__in v6cp v6cp--in" id="panel" role="tabpanel" key={cur}>
            <figure className="v6cp__img"><img src={mediaUrl(`chain-${n}.jpg`)} alt="" decoding="async" />
              <span className="v6cp__n">{n} / {c.k}</span></figure>
            <div className="v6cp__body">
              <h3>{c.t}</h3>
              <p>{STEPS[cur] || c.b}</p>
              <div className="v6cp__data"><span className="v6cp__lbl">Data that moves</span>
                <span className="v6cp__chips">{data.map((d) => <i key={d}>{d}</i>)}</span></div>
              {String(c.s || '').trim() && <div className="v6cp__sys"><span className="v6cp__lbl">Systems on this step</span>
                <span className="v6medals">{String(c.s || '').split('·').map((r, i) => <Medal raw={r} key={i} />)}</span></div>}
            </div>
          </div>
        </div></div>
      </div>
    </Band>
  );
}
