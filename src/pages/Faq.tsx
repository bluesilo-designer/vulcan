import { Questions } from '../components/sections/home/Questions';
import { Closer } from '../components/ui/Closer';
import { useV } from '../lib/version';

/* Frequently asked questions, moved off the home page in v2. */
export function Faq() {
  /* v2 (28 Oct 2026): plainer intro and closing line; v1 unchanged */
  const v2 = useV(2);
  return (
    <>
      <div className="shell page-head rv"><span className="label">FAQ</span>
        <h1>Frequently asked questions</h1>
        <p className="lead">{v2 ? 'Straight answers to the questions defence organisations and programme teams ask us first.' : 'Answers to what defence organisations, programme teams and evaluators ask us first.'}</p></div>
      <Questions />
      <Closer label="Talk to us" line={v2 ? 'Have a question we have not answered? Ask us, and the right specialist will reply.' : 'Have a question that is not answered here? Our team will route it to the right specialist.'} />
    </>
  );
}
