import { Link } from 'react-router-dom';
import { useV } from '../../lib/version';
import { CtaBand } from './CtaBand';

export function Closer({ label = 'Send an enquiry', line, title }: { label?: string; line?: string; title?: string }) {
  /* v2: every closer is the shared image CTA band */
  if (useV(2)) return <CtaBand title={title || 'Talk to the people who build it'} line={line} />;
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
