import { Link } from 'react-router-dom';
import { Seo } from '../components/layout/Seo';

export function NotFound() {
  return (
    <>
      <Seo title="Page not found" description="The page you asked for does not exist." />
      <div className="shell page-head rv">
        <span className="label">404</span>
        <h1>That page does not exist</h1>
        <p className="lead">It may have moved when the site was rebuilt.</p>
        <div className="btns" style={{ marginTop: 'var(--s6)' }}><Link className="btn btn--p" to="/">Back to the home page</Link></div>
      </div>
    </>
  );
}
