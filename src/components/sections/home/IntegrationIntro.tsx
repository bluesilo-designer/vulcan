import { Band } from '../../ui/Band';
import { Icon } from '../../ui/Icon';
import { INTERFACE_CATEGORIES, INTERFACE_CATEGORIES_V2 } from '../../../content/integration';
import { useV } from '../../../lib/version';

export function IntegrationIntro() {
  const v2 = useV(2);
  return (
    <Band label="Integration" title="Built to connect to what is already on site"
      intro="Integrate the entire training and range environment, from live targets and virtual training to infrastructure, operations, security and training management.">
      <div className="ifc rv">{((v2 ? INTERFACE_CATEGORIES_V2 : INTERFACE_CATEGORIES) as unknown as [string, string, string][]).map((c) => (
        <div className="ifc__c" key={c[1]}><Icon name={c[0]} /><h3>{c[1]}</h3><p>{c[2]}</p></div>
      ))}</div>
    </Band>
  );
}
