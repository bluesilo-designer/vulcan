import { Link } from 'react-router-dom';
import { BRAND, brandOf, productOf, type Brand } from '../../../content/products';
import { Icon } from '../../ui/Icon';
import { isVisible } from '../../../config/site';

/* Chain data names systems by acronym; map back to product ids. */
export const BY_ACR: Record<string, string> = (() => {
  const m: Record<string, string> = {};
  Object.entries(BRAND as unknown as Record<string, Brand>).forEach(([id, b]) => { m[b.acr] = id; });
  m.RCS = 'rcs'; m.AS = 'as';
  return m;
})();

export const chipLabel = (b: Brand) => (b.brand === 'ACCEL' ? 'ACCEL' : b.acr);
export const chipTitle = (b: Brand) => (b.brand ? b.brand + ', ' : '') + b.sys;

export function Medal({ raw }: { raw: string }) {
  const a = raw.trim(), id = BY_ACR[a], p = id ? productOf(id) : undefined, b = id ? brandOf(id) : undefined;
  if (!p || !b || !isVisible(id)) return null;
  return (
    <Link className="v6medal" to={`/products/${id}`} title={chipTitle(b)}>
      <span className="v6medal__disc"><Icon name={p.icon} /></span>
      <b>{b.brand || b.acr}</b><span>{b.acr}</span>
    </Link>
  );
}
