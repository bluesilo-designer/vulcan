import { Icon } from '../../ui/Icon';
import { FAQ, FAQ_V2 } from '../../../content/home';
import { useV } from '../../../lib/version';
import { pad2 } from '../../../lib/html';

export function Questions() {
  const v2 = useV(2); /* v2: plainer FAQ, heading no longer repeats the page title */
  return (
    <section className="band" id="questions"><div className="shell">
      <div className="v6q__head rv"><div><span className="label">Questions</span><h2>{v2 ? 'The questions we hear most' : 'What evaluators ask first.'}</h2></div>
        <p>{v2 ? 'Short answers for defence organisations, programme teams and evaluators.' : 'For defence organisations, programme teams and evaluators.'}</p></div>
      <div className="v6q rv">{((v2 ? FAQ_V2 : FAQ) as unknown as [string, string][]).map((q, i) => (
        <details open={i === 0} key={i}><summary><span className="v6q__n">{pad2(i)}</span>
          <span className="v6q__t">{q[0]}</span><Icon name="ph-caret-down" /></summary>
          <p>{q[1]}</p></details>
      ))}</div>
    </div></section>
  );
}
