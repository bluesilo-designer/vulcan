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
import { useV } from '../lib/version';

export function Home() {
  /* v2 drops Modernising, Measures and CompanyFacts, and moves the questions to /faq */
  const v2 = useV(2);
  return (
    <>
      <Hero />
      <Trust />
      {!v2 && <Modernising />}
      <Systems />
      {shown('home.whereWeOperate') && <WhereWeOperate />}
      <Chain />
      {!v2 && <Measures />}
      <IntegrationIntro />
      <Simulate />
      {/* v2: shown on Integration only, it repeated there (27 Oct 2026) */}
      {!v2 && <PartnersSection />}
      <AssureFeature />
      {!v2 && <CompanyFacts />}
      {!v2 && <Questions />}
      <ContactBlock />
    </>
  );
}
