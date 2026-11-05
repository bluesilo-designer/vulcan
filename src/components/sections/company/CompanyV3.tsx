import { Link } from 'react-router-dom';
import { Icon } from '../../ui/Icon';
import { CompanyClose } from './CompanyClose';
import { mediaUrl } from '../../../lib/media';
import { companyImage } from '../../../content/company';
import '../../../styles/company-v3.css';

const capabilities = [
  { title: 'Training systems', short: 'Plan, run and review training.', icon: 'ph-crosshair', image: 'company-v3-western/training.jpg', link: '/products/trms' },
  { title: 'System integration', short: 'Make different systems work as one.', icon: 'ph-plugs-connected', image: 'company-v3-western/integration.jpg', link: '/integration' },
  { title: 'Monitoring and intelligence', short: 'Turn video and health data into action.', icon: 'ph-eye', image: 'home-v3-western/cap-monitoring.jpg', link: '/products/vms' },
  { title: 'Enterprise management', short: 'Keep resources and assets accounted for.', icon: 'ph-buildings', image: 'home-v3-western/cap-enterprise.jpg', link: '/products/ewms' },
];

const delivery = [
  { icon: 'ph-users-three', title: 'Understand the operation', text: 'We start with the people, equipment and decisions that keep a site running.' },
  { icon: 'ph-plugs-connected', title: 'Agree the interfaces', text: 'Each connection has a purpose, an owner and a test before it is built.' },
  { icon: 'ph-lifebuoy', title: 'Stay accountable', text: 'The team that delivers the system also trains users and supports it.' },
];

export function CompanyV3() {
  return <div className="co3">
    <section className="co3-hero">
      <img src={mediaUrl(companyImage('hero', true))} alt="" decoding="async" />
      <div className="co3-hero__veil" />
      <div className="shell co3-hero__body"><span className="label">About Us</span>
        <h1>Defence systems that work together.</h1>
        <p>Blue Silo designs, develops and integrates technology for military training and complex defence operations.</p>
        <div className="co3-hero__actions"><Link className="btn btn--p" to="/contact">Talk to our team <Icon name="ph-arrow-right" /></Link>
          <a className="btn btn--g" href="#co3-work">Explore our work</a></div>
      </div>
      <div className="co3-hero__foot"><div className="shell"><span>Singapore based</span><span>Built for the long term</span></div></div>
    </section>

    <section className="co3-intro band"><div className="shell co3-intro__grid">
      <div className="rv"><span className="label">Who we are</span><h2>We build the connection between the plan and the operation.</h2></div>
      <div className="co3-intro__right rv" data-d="1"><p>Our own software meets the systems a defence facility already uses. That means fewer gaps between teams, clearer records and a better view of what is ready.</p>
        <div className="co3-intro__verbs"><span><Icon name="ph-code" />Design</span><span><Icon name="ph-cube" />Develop</span><span><Icon name="ph-plugs-connected" />Integrate</span></div>
      </div>
    </div></section>

    <section className="co3-work band band--deep" id="co3-work"><div className="shell"><header className="co3-sectionhead rv"><span className="label">What we do</span>
      <h2>Integrated defence systems for every mission.</h2><p>We design and engineer purpose-built solutions, connect complex systems and enhance existing capabilities as mission requirements evolve.</p></header>
      <div className="co3-capgrid">{capabilities.map((cap, i) => <Link to={cap.link} className="co3-cap rv" data-d={String(i)} key={cap.title}>
        <img src={mediaUrl(cap.image)} alt="" loading="lazy" decoding="async" /><span className="co3-cap__veil" />
        <span className="co3-cap__body"><span className="co3-cap__icon"><Icon name={cap.icon} /></span><span className="co3-cap__copy"><strong>{cap.title}</strong><small>{cap.short}</small></span><Icon name="ph-arrow-up-right" className="co3-cap__arrow" /></span>
      </Link>)}</div>
    </div></section>

    <section className="co3-product band"><div className="shell co3-product__grid">
      <figure className="co3-product__image rv"><img src={mediaUrl(companyImage('floor', true))} alt="Personnel working at a training centre" loading="lazy" decoding="async" /></figure>
      <div className="co3-product__copy rv" data-d="1"><span className="label">Our product / TRMS</span><h2>One training day. One clear record.</h2>
        <p>Our Training Resource Management System connects the booking, people, stations, equipment and results.</p>
        <div className="co3-product__flow" aria-label="TRMS workflow"><span><Icon name="ph-calendar-check" />Plan</span><Icon name="ph-arrow-right" /><span><Icon name="ph-crosshair" />Run</span><Icon name="ph-arrow-right" /><span><Icon name="ph-clipboard-text" />Review</span></div>
        <Link className="co3-link" to="/products/trms">See TRMS <Icon name="ph-arrow-right" /></Link>
      </div>
    </div></section>

    <section className="co3-integrate"><img src={mediaUrl(companyImage('integration', true))} alt="" loading="lazy" decoding="async" /><div className="co3-integrate__veil" />
      <div className="shell co3-integrate__body rv"><span className="label">Integration</span><h2>Systems from different suppliers. One working environment.</h2>
        <p>We connect software, hardware, targetry and simulators, with each new interface agreed before it is built.</p>
        <Link className="co3-link" to="/integration">How we integrate <Icon name="ph-arrow-right" /></Link>
      </div>
    </section>

    <section className="co3-delivery band"><div className="shell"><header className="co3-sectionhead rv"><span className="label">How we work</span>
      <h2>One team, through delivery and beyond.</h2><p>Clear ownership from the first workshop to long-term support.</p></header>
      <div className="co3-delivery__grid">{delivery.map((item, i) => <article className="co3-delivery__item rv" data-d={String(i)} key={item.title}>
        <span className="co3-delivery__top"><span>0{i + 1}</span><Icon name={item.icon} /></span><h3>{item.title}</h3><p>{item.text}</p>
      </article>)}</div>
    </div></section>
    <CompanyClose v3 />
  </div>;
}
