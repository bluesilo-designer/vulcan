import { Link } from 'react-router-dom';
import { Band } from '../../ui/Band';
import { brandOf, roleOf } from '../../../content/products';
import { useV } from '../../../lib/version';
import { isVisible } from '../../../config/site';
import { productRec } from './util';

/* "Works with" register of related products. Renders nothing if none resolve. */
export function WorksWith({ rel }: { rel?: string[] }) {
  const v2 = useV(2); /* v2: plain role lines, same as the Products page */
  const items = (rel || []).filter(isVisible).map((r) => {
    const q = productRec(r), qb = brandOf(r);
    if (!q || !qb) return null;
    return (
      <Link key={r} to={`/products/${r}`}>
        <span className="reg__a">{qb.brand || qb.acr}</span><span className="reg__n">{qb.sys}</span>
        <span className="reg__r">{roleOf(q, v2)}</span><span className="reg__g">{qb.acr}</span>
      </Link>
    );
  }).filter(Boolean);
  if (!items.length) return null;
  return <Band tight title="Works with"><div className="reg rv">{items}</div></Band>;
}
