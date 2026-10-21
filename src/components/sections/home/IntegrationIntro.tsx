import { Band } from '../../ui/Band';
import { Icon } from '../../ui/Icon';
import { INTERFACE_CATEGORIES } from '../../../content/integration';

export function IntegrationIntro() {
  return (
    <Band label="Integration" title="Built to connect to what is already on site"
      intro="Blue Silo can integrate the entire training and range environment, from live targets and virtual training to infrastructure, operations, security and training management.">
      <div className="ifc rv">{(INTERFACE_CATEGORIES as unknown as [string, string, string][]).map((c) => (
        <div className="ifc__c" key={c[1]}><Icon name={c[0]} /><h3>{c[1]}</h3><p>{c[2]}</p></div>
      ))}</div>
    </Band>
  );
}
