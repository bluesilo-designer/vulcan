import { Questions } from '../components/sections/home/Questions';
import { Closer } from '../components/ui/Closer';

/* Frequently asked questions, moved off the home page in v2. */
export function Faq() {
  return (
    <>
      <div className="shell page-head rv"><span className="label">FAQ</span>
        <h1>Frequently asked questions</h1>
        <p className="lead">Answers to what defence organisations, programme teams and evaluators ask us first.</p></div>
      <Questions />
      <Closer label="Talk to us" line="Have a question that is not answered here? Our team will route it to the right specialist." />
    </>
  );
}
