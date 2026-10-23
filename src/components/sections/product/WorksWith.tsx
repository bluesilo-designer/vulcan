import { Link } from 'react-router-dom';
import { Band } from '../../ui/Band';
import { brandOf } from '../../../content/products';
import { isVisible } from '../../../config/site';
import { productRec } from './util';

/* "Works with" register of related products. Renders nothing if none resolve. */
export function WorksWith({ rel }: { rel?: string[] }) {
  const items = (rel || []).filter(isVisible).map((r) => {
    const q = productRec(r), qb = brandOf(r);
    if (!q || !qb) return null;
    return (
      <Link key={r} to={`/products/${r}`}>
        <span className="reg__a">{qb.brand || qb.acr}</span><span className="reg__n">{qb.sys}</span>
        <span className="reg__r">{q.role}</span><span className="reg__g">{qb.acr}</span>
      </Link>
    );
  }).filter(Boolean);
  if (!items.length) return null;
  return <Band tight title="Works with"><div className="reg rv">{items}</div></Band>;
}
