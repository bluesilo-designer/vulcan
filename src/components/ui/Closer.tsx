import { Link, useLocation } from 'react-router-dom';
import { useV, useVersion } from '../../lib/version';
import { CtaBand } from './CtaBand';
import { productRec } from '../sections/product/util';

const V3_CTA: Record<string, [string, string]> = {
  '/products': ['Find the right starting point.', 'Start with one system or see how several could work together for your team.'],
  '/integration': ['Make every connection count.', 'Bring your system landscape. We will map the interfaces, owners and tests needed to make it work.'],
  '/assurance': ['Build assurance in from day one.', 'See how isolated operation, controlled access and reliable handover are designed into the system.'],
  '/faq': ['Your question deserves a clear answer.', 'Tell us what you are planning. We will connect you with the right person.'],
};

export function Closer({ label = 'Send an enquiry', line, title }: { label?: string; line?: string; title?: string }) {
  /* v2: every closer is the shared image CTA band */
  const v2 = useV(2);
  const v3 = useVersion().v === 3;
  const { pathname } = useLocation();
  if (v2) {
    const product = pathname.startsWith('/products/') ? productRec(pathname.split('/')[2]) : null;
    const copy = pathname === '/products/trms'
      ? ['See a full training day in TRMS.', 'Follow booking, resources, sessions and results in a walkthrough of working software.']
      : product
        ? [`See ${product.acr} in the workflow.`, 'Tell us how your team works. We will show where this system fits and what it connects to.']
        : V3_CTA[pathname];
    return <CtaBand title={v3 && copy ? copy[0] : title || 'Talk to us'} line={v3 && copy ? copy[1] : line}
      primaryLabel={v3 && product ? 'Book a demo' : undefined}
      secondaryLabel={v3 && product ? 'Talk requirements' : undefined} />;
  }
  return (
    <section className="close">
      <div className="shell rv">
        <h2>{title || 'Talk to the people who build it'}</h2>
        <p className="lead">{line || 'Procurement, technical integration or general enquiries. Each enquiry is routed to the team best placed to respond.'}</p>
        <div className="btns"><Link className="btn btn--p" to="/contact">{label}</Link></div>
      </div>
    </section>
  );
}
