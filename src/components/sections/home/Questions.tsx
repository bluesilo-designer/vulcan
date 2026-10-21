import { Icon } from '../../ui/Icon';
import { FAQ } from '../../../content/home';
import { pad2 } from '../../../lib/html';

export function Questions() {
  return (
    <section className="band" id="questions"><div className="shell">
      <div className="v6q__head rv"><div><span className="label">Questions</span><h2>What evaluators ask first.</h2></div>
        <p>For defence organisations, programme teams and evaluators.</p></div>
      <div className="v6q rv">{(FAQ as unknown as [string, string][]).map((q, i) => (
        <details open={i === 0} key={i}><summary><span className="v6q__n">{pad2(i)}</span>
          <span className="v6q__t">{q[0]}</span><Icon name="ph-caret-down" /></summary>
          <p>{q[1]}</p></details>
      ))}</div>
    </div></section>
  );
}
