import { Band } from '../../ui/Band';
import { Icon } from '../../ui/Icon';
import { INTERFACE_CATEGORIES, INTERFACE_CATEGORIES_V2 } from '../../../content/integration';
import { useV, useVersion } from '../../../lib/version';
import { mediaUrl } from '../../../lib/media';

export function IntegrationIntro() {
  const v2 = useV(2);
  const v3 = useVersion().v === 3;
  /* v3: the partners photograph sits behind this section (client, 4 Nov 2026),
     since the Partners section itself is hidden by default */
  const body = (
    <Band label="Integration" title={v2 ? 'Connects to what you already run' : 'Built to connect to what is already on site'}
      intro={v2
        ? 'We connect the whole training environment, from live targets and simulators to facility, operations and security systems.'
        : 'Integrate the entire training and range environment, from live targets and virtual training to infrastructure, operations, security and training management.'}>
      <div className="ifc rv">{((v2 ? INTERFACE_CATEGORIES_V2 : INTERFACE_CATEGORIES) as unknown as [string, string, string][]).map((c) => (
        <div className="ifc__c" key={c[1]}><Icon name={c[0]} /><h3>{c[1]}</h3><p>{c[2]}</p></div>
      ))}</div>
    </Band>
  );
  if (!v3) return body;
  return (
    <div className="ifc-bg">
      <div className="ifc-bg__bed" aria-hidden="true"><img src={mediaUrl('home-v3-western/partners-table.jpg')} alt="" loading="lazy" decoding="async" /></div>
      <div className="ifc-bg__veil" aria-hidden="true"></div>
      {body}
    </div>
  );
}
