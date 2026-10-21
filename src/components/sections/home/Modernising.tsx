import { Band } from '../../ui/Band';
import { Icon } from '../../ui/Icon';
import { MODERN } from '../../../content/home';
import { pad2 } from '../../../lib/html';
import { slotSrc } from '../../../lib/images';
import { useReview } from '../../../lib/review';

type Col = [string, string, [string, string][]];

export function Modernising() {
  const { state } = useReview();
  const cols = MODERN.cols as unknown as Col[];
  return (
    <section className="v6modwrap">
      <div className="v6modwrap__bed" aria-hidden="true">
        <img data-slot="aerial" src={slotSrc('aerial', state.look)} alt="" loading="lazy" decoding="async" /></div>
      <div className="v6modwrap__veil" aria-hidden="true"></div>
      <Band>
        <div className="v6mod rv">
          <div className="v6mod__h"><h2>{MODERN.title}</h2><p className="lead">{MODERN.line}</p></div>
          <div className="v6mod__flow">
            <div className="v6mod__rail" aria-hidden="true">{cols.map((_, i) => <i key={i}></i>)}</div>
            <div className="v6mod__g">{cols.map((c, i) => (
              <div className="v6mod__c" key={c[0]}>
                <span className="v6mod__top">
                  <span className="v6mod__ic"><Icon name={c[1]} /></span>
                  <span className="v6mod__n">{pad2(i)}</span>
                </span>
                <span className="v6mod__k">{c[0]}</span>
                <ul>{c[2].map((x) => <li key={x[0]}><Icon name={x[1]} />{x[0]}</li>)}</ul>
              </div>
            ))}</div>
            <div className="v6mod__join" aria-hidden="true">{cols.map((_, i) => <i key={i}></i>)}<b></b><u></u></div>
          </div>
          <p className="v6mod__close">
            <svg className="v6mod__mark" width="22" height="24" viewBox="0 0 26 28" aria-hidden="true">
              <path d="M4 3h9a6 6 0 0 1 0 12H8" fill="none" stroke="var(--brand)" strokeWidth="3" />
              <path d="M22 25h-9a6 6 0 0 1 0-12h5" fill="none" stroke="var(--brand)" strokeWidth="3" />
            </svg>
            <span>{MODERN.close}</span>
          </p>
        </div>
      </Band>
    </section>
  );
}
