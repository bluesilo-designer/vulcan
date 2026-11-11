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
import { usePartnersShown, useV, useV1Back } from '../lib/version';
import { HomeSlider } from '../components/sections/home/HomeSlider';

export function Home() {
  /* v2 drops Modernising, Measures and CompanyFacts, and moves the questions to /faq */
  const v2 = useV(2);
  const back = useV1Back(); /* v3: slider plus selected v1 sections */
  const { partners } = usePartnersShown(); /* v3: Partners hidden unless shown from the review panel */
  /* Keep the v1/v2 home sections together. v3 adds selected sections after
     the slider hero; company proof and FAQ remain off this homepage. */
  const mergedSections = <>
    {!v2 && <Modernising />}
    <Systems />
    {shown('home.whereWeOperate') && <WhereWeOperate />}
    <Chain />
    {!v2 && <Measures />}
    <IntegrationIntro />
    <Simulate />
    {(!v2 || (back && partners)) && <PartnersSection homeV3={back} />}
    {!back && <AssureFeature />}
    {!v2 && <CompanyFacts />}
    {!v2 && <Questions />}
    {!back && <ContactBlock />}
  </>;
  /* v2 and v3: the slider home, fixed by the client on 11 Nov 2026 (the Current layout and Slider B to F were removed) */
  if (v2) return <HomeSlider mergedSections={back ? mergedSections : undefined} />;
  return (
    <>
      <Hero />
      <Trust />
      {mergedSections}
    </>
  );
}
