import { Link } from 'react-router-dom';

export function Closer({ label = 'Send an enquiry', line }: { label?: string; line?: string }) {
  return (
    <section className="close">
      <div className="shell rv">
        <h2>Talk to the people who build it</h2>
        <p className="lead">{line || 'Procurement, technical integration, or anything else. Three routes reach three different inboxes, so the question lands with someone who can answer it.'}</p>
        <div className="btns"><Link className="btn btn--p" to="/contact">{label}</Link></div>
      </div>
    </section>
  );
}
