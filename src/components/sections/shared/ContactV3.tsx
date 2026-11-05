import { useState, type FormEvent } from 'react';
import { Icon } from '../../ui/Icon';
import { CONTACT_TRAINING_IMAGE, mediaUrl } from '../../../lib/media';
import '../../../styles/contact-v3.css';

const ROUTES = [
  { key: 'Product demonstration', icon: 'ph-monitor-play', line: 'See a system in a working scenario.' },
  { key: 'Your requirements', icon: 'ph-map-trifold', line: 'Share what you need and agree next steps.' },
  { key: 'System integration', icon: 'ph-plugs-connected', line: 'Map interfaces and delivery needs.' },
  { key: 'General consultation', icon: 'ph-chats-circle', line: 'Not sure yet? Talk it through with us.' },
] as const;

export function ContactV3() {
  const [route, setRoute] = useState<string>(ROUTES[0].key);
  const [organisation, setOrganisation] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [prepared, setPrepared] = useState(false);
  const [copied, setCopied] = useState(false);

  const draft = `Blue Silo enquiry\n\nTopic: ${route}\nOrganisation: ${organisation}\nName: ${name}\nWork email: ${email}\n\n${message}`;
  const prepare = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setPrepared(true); setCopied(false); };
  const copy = async () => {
    try { await navigator.clipboard.writeText(draft); setCopied(true); }
    catch { setCopied(false); }
  };
  const selectRoute = (next: string) => {
    setRoute(next); setPrepared(false); setCopied(false);
    document.getElementById('contact-enquiry')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return <>
    <section className="ct3-hero">
      <img src={mediaUrl(CONTACT_TRAINING_IMAGE)} alt="Army training facility entrance with a secure gate and covered training lanes" decoding="async" />
      <div className="ct3-hero__veil" />
      <div className="shell ct3-hero__inner">
        <span className="label">CONTACT / BLUE SILO</span>
        <h1>Talk to our team.</h1>
        <p>Tell us about your training, integration or support needs, and our team will reply to discuss your requirements.</p>
        <a className="btn btn--p" href="#contact-enquiry">Prepare an enquiry <Icon name="ph-arrow-down" /></a>
      </div>
      <div className="ct3-hero__foot shell"><span>TRAINING SYSTEMS</span><span>INTEGRATION</span><span>LONG-TERM SUPPORT</span></div>
    </section>

    <section className="ct3-approach" aria-labelledby="ct3-approach-title">
      <div className="shell">
        <div className="ct3-approach__head"><span className="label">Choose a starting point</span><h2 id="ct3-approach-title">What should we look at together?</h2><p>A focused first conversation makes it easier to show the right system, people and evidence.</p></div>
        <div className="ct3-routes">{ROUTES.map((item, index) => <button key={item.key} type="button" className="ct3-route" onClick={() => selectRoute(item.key)} aria-label={`Prepare ${item.key} enquiry`}>
          <span className="ct3-route__top"><Icon name={item.icon} /><small>0{index + 1}</small></span>
          <strong>{item.key}</strong><span>{item.line}</span><Icon name="ph-arrow-up-right" />
        </button>)}</div>
      </div>
    </section>

    <section className="ct3-enquiry" id="contact-enquiry" aria-labelledby="ct3-enquiry-title">
      <div className="shell ct3-enquiry__grid">
        <div className="ct3-enquiry__intro"><span className="label">Your brief</span><h2 id="ct3-enquiry-title">Give us the context that matters.</h2><p>A few details are enough to frame a useful product or programme discussion.</p>
          <div className="ct3-enquiry__guide"><span>01 <b>What is the training or operational need?</b></span><span>02 <b>Which site or system is involved?</b></span><span>03 <b>What decision comes next?</b></span></div>
        </div>
        <form className="ct3-form" onSubmit={prepare}>
          <div className="ct3-form__top"><span>ENQUIRY BRIEF</span></div>
          <div className="ct3-form__pair"><label>Organisation<input required value={organisation} onChange={(e) => { setOrganisation(e.target.value); setPrepared(false); }} placeholder="Your organisation" /></label><label>Name<input required value={name} onChange={(e) => { setName(e.target.value); setPrepared(false); }} placeholder="Your name" /></label></div>
          <label>Work email<input required type="email" value={email} onChange={(e) => { setEmail(e.target.value); setPrepared(false); }} placeholder="name@organisation.com" /></label>
          <label>What would you like to discuss?<select value={route} onChange={(e) => { setRoute(e.target.value); setPrepared(false); }}>{ROUTES.map((item) => <option key={item.key}>{item.key}</option>)}<option>Other enquiry</option></select></label>
          <label>Tell us a little about it<textarea required rows={5} value={message} onChange={(e) => { setMessage(e.target.value); setPrepared(false); }} placeholder="Your programme, site or system; what you need to decide next" /></label>
          <div className="ct3-form__foot"><button className="btn btn--p" type="submit">Prepare enquiry <Icon name="ph-arrow-right" /></button><small>This preview prepares a brief. It does not send a message.</small></div>
          {prepared && <div className="ct3-form__prepared" role="status"><span>Your enquiry brief is ready.</span><button type="button" onClick={copy}>{copied ? 'Copied' : 'Copy brief'} <Icon name={copied ? 'ph-check' : 'ph-copy'} /></button></div>}
        </form>
      </div>
    </section>
  </>;
}
