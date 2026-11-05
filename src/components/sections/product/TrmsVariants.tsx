import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Closer } from '../../ui/Closer';
import { Icon } from '../../ui/Icon';
import { mediaUrl } from '../../../lib/media';
import '../../../styles/trms-variants.css';

/* Two photo-led review directions. Keep the earlier screen-led layouts available
   through ?tr=0|a|b|c while these versions are being evaluated. */
const photo = (name: string) => mediaUrl(`trms-v3-western/${name}.jpg`);

const day = [
  { n: '01', label: 'Plan', title: 'Book with the whole day in view', body: 'Choose the training, date, stations and trainee list. TRMS checks availability before the booking is confirmed.', image: mediaUrl('home-v3-western/featured-training-building.jpg'), alt: 'Modern training facility at dusk' },
  { n: '02', label: 'Prepare', title: 'Know who and what is ready', body: 'Check attendance and record issued equipment against the booking. Missing people or items stay visible to the team.', image: photo('check-in'), alt: 'Training personnel checking in for a session' },
  { n: '03', label: 'Run', title: 'Keep the session and results together', body: 'Instructors manage the session and see results as training happens, with a record to review afterward.', image: photo('simulator'), alt: 'Simulator training in progress' },
];

function Header({ eyebrow, title, lead, image, children }: { eyebrow: string; title: string; lead: string; image: string; children?: ReactNode }) {
  return <section className="trv-hero">
    <img className="trv-hero__image" src={image} alt="" decoding="async" />
    <div className="trv-hero__shade" />
    <div className="shell trv-hero__body"><span className="label">{eyebrow}</span><h1>{title}</h1><p>{lead}</p>
      <div className="trv-actions"><Link className="btn btn--p" to="/contact">Book a demonstration <Icon name="ph-arrow-right" /></Link>{children}</div>
    </div>
  </section>;
}

function Scope() {
  return <section className="trv-scope"><div className="shell trv-scope__grid">
    <div><span className="label">Product status</span><h2>See the working training flow.</h2></div>
    <div><p>Weapon simulator training is the most complete part of TRMS and is ready to demonstrate. Vehicle and command team training are in development.</p>
      <Link to="/contact">Ask what is available for your centre <Icon name="ph-arrow-right" /></Link></div>
  </div></section>;
}

export function TrmsD() {
  return <div className="trv trv--d">
    <Header eyebrow="TRMS / Training Resource Management System" title="One training day. One clear record." lead="TRMS brings bookings, trainees, stations, equipment and results into one workflow for a simulator training centre." image={photo('hero-facility')}>
      <a className="btn btn--g" href="#trv-day">Follow the training day</a>
    </Header>
    <section className="trv-intro band"><div className="shell trv-intro__grid"><span className="label">The product in a sentence</span>
      <p>Plan the session, prepare people and equipment, run training and close the record. Each step uses the same booking, so the next team can see what happened.</p></div></section>
    <section className="trv-day" id="trv-day"><div className="shell"><header className="trv-sectionhead"><span className="label">A day with TRMS</span><h2>From first booking to final result.</h2></header>
      <div className="trv-day__list">{day.map((step) => <article className="trv-day__row" key={step.n}>
        <div className="trv-day__copy"><span className="trv-num">{step.n} / {step.label}</span><h3>{step.title}</h3><p>{step.body}</p></div>
        <img src={step.image} alt={step.alt} loading="lazy" decoding="async" />
      </article>)}</div></div></section>
    <section className="trv-close band band--deep"><div className="shell trv-close__grid"><div><span className="label">Close the loop</span><h2>Finish with the equipment and evidence accounted for.</h2></div>
      <p>Returned items are checked against what was issued. Results remain linked to the session, ready for review and centre reporting.</p></div></section>
    <Scope /><Closer />
  </div>;
}

const outcomes = [
  { icon: 'ph-calendar-check', title: 'Fewer booking clashes', detail: 'Check stations and training resources when the session is planned.' },
  { icon: 'ph-identification-card', title: 'A clearer training day', detail: 'Attendance and issued equipment stay with the booking.' },
  { icon: 'ph-chart-line-up', title: 'Results you can use', detail: 'Review outcomes and centre activity without rebuilding the record by hand.' },
];

export function TrmsE() {
  return <div className="trv trv--e">
    <Header eyebrow="Blue Silo / TRMS" title="Your training centre, under control." lead="A resource management system for simulator training. Schedule stations, prepare trainees, track equipment and capture results in one place." image={mediaUrl('home-v3-western/featured-training-building.jpg')}>
      <a className="btn btn--g" href="#trv-outcomes">Explore TRMS</a>
    </Header>
    <section className="trv-outcomes band" id="trv-outcomes"><div className="shell"><div className="trv-sectionhead"><span className="label">Why it matters</span><h2>Less chasing. More time training.</h2></div>
      <div className="trv-outcomes__grid">{outcomes.map((item, i) => <article key={item.title}>
        <span className="trv-num">0{i + 1}</span><Icon name={item.icon} /><h3>{item.title}</h3><p>{item.detail}</p>
      </article>)}</div></div></section>
    <section className="trv-feature"><div className="shell trv-feature__grid"><img src={photo('check-in')} alt="Personnel preparing for simulator training" loading="lazy" decoding="async" />
      <div><span className="label">One connected booking</span><h2>Follow the work, not a stack of separate forms.</h2>
        <ol><li><b>Before training</b><span>Book the session and assign resources.</span></li><li><b>At the centre</b><span>Check people in and record equipment issued.</span></li><li><b>After training</b><span>Review results and confirm returns.</span></li></ol></div>
    </div></section>
    <section className="trv-roles band band--deep"><div className="shell trv-roles__grid"><div><span className="label">Made for the whole centre</span><h2>The right view for each job.</h2><p>Planners see bookings and availability. Instructors see the session and results. Equipment teams see what has been issued and returned.</p></div>
      <img src={photo('simulator')} alt="Simulator training session" loading="lazy" decoding="async" /></div></section>
    <Scope /><Closer />
  </div>;
}
