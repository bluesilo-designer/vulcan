import { CtaBand } from '../../ui/CtaBand';
import { CO_CTA_LINE, CO_WHERE, companyImage } from '../../../content/company';

export function CompanyClose({ v3 }: { v3: boolean }) {
  if (!v3) return <CtaBand label="Where we are" title={CO_WHERE} line={CO_CTA_LINE} img={companyImage('where', false)} />;

  return <CtaBand label="Next step" title="Bring us your requirements. See what works." line="Talk to the team that will design, connect and support your system." primaryLabel="Talk to us" />;
}
