import { Hero } from '../components/sections/home/Hero';
import { Trust } from '../components/sections/home/Trust';
import { Modernising } from '../components/sections/home/Modernising';
import { Systems } from '../components/sections/home/Systems';
import { WhereWeOperate } from '../components/sections/home/WhereWeOperate';
import { shown } from '../config/site';
import { Chain } from '../components/sections/home/Chain';
import { Measures } from '../components/sections/home/Measures';
import { IntegrationIntro } from '../components/sections/home/IntegrationIntro';
import { Simulate } from '../components/sections/home/Simulate';
import { CompanyFacts } from '../components/sections/home/CompanyFacts';
import { Questions } from '../components/sections/home/Questions';
import { PartnersSection } from '../components/sections/shared/PartnersSection';
import { AssureFeature } from '../components/sections/shared/AssureFeature';
import { ContactBlock } from '../components/sections/shared/ContactBlock';
import { useHomeLayout, useV, useV1Back } from '../lib/version';
import { HomeSlider } from '../components/sections/home/HomeSlider';

export function Home() {
  /* v2 drops Modernising, Measures and CompanyFacts, and moves the questions to /faq */
  const v2 = useV(2);
  const back = useV1Back(); /* v3: v2 plus the v1 sections it dropped */
  const { hm } = useHomeLayout();
  /* v2 only: the image slider home (?hm=s, s2, s3, s4), 28 and 29 Oct 2026 */
  if (v2 && hm !== '0') return <HomeSlider variant={hm} />;
  return (
    <>
      <Hero />
      <Trust />
      {(!v2 || back) && <Modernising />}
      <Systems />
      {shown('home.whereWeOperate') && <WhereWeOperate />}
      <Chain />
      {(!v2 || back) && <Measures />}
      <IntegrationIntro />
      <Simulate />
      {/* v2: shown on Integration only, it repeated there (27 Oct 2026) */}
      {(!v2 || back) && <PartnersSection />}
      <AssureFeature />
      {(!v2 || back) && <CompanyFacts />}
      {(!v2 || back) && <Questions />}
      <ContactBlock />
    </>
  );
}
