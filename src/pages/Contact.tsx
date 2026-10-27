import { useState, type FormEvent } from 'react';
import { Band } from '../components/ui/Band';
import { Table } from '../components/ui/Table';
import { ContactBlock } from '../components/sections/shared/ContactBlock';

const EMPTY = { org: '', nm: '', rl: '', ty: 'Procurement', ms: '' };

export function Contact() {
  const [f, setF] = useState(EMPTY);
  const [sent, setSent] = useState(false);
  const on = (k: keyof typeof EMPTY) => (e: { target: { value: string } }) => setF({ ...f, [k]: e.target.value });
  /* Nothing is sent anywhere: the legacy form did not submit either. */
  const submit = (e: FormEvent) => { e.preventDefault(); setSent(true); };
  return (
    <>
      <ContactBlock header />
      <Band deep title="Five fields, each with a reason">
        <form className="form rv" onSubmit={submit}>
          <div className="fr"><div className="field"><label htmlFor="org">Organisation</label>
            <input id="org" name="org" type="text" placeholder="Organisation name" value={f.org} onChange={on('org')} />
            <small>Determines which terms apply to material we send back</small></div>
            <div className="field"><label htmlFor="nm">Name</label><input id="nm" name="nm" type="text" placeholder="Your name" value={f.nm} onChange={on('nm')} /></div></div>
          <div className="fr"><div className="field"><label htmlFor="rl">Role</label><input id="rl" name="rl" type="text" placeholder="Your role" value={f.rl} onChange={on('rl')} />
            <small>Determines who from our side should reply</small></div>
            <div className="field"><label htmlFor="ty">Type of enquiry</label><select id="ty" name="ty" value={f.ty} onChange={on('ty')}>
              <option>Procurement</option><option>Technical integration</option><option>General</option></select>
              <small>Routes to one of the three inboxes above</small></div></div>
          <div className="field"><label htmlFor="ms">Message</label><textarea id="ms" name="ms" placeholder="Please describe your enquiry" value={f.ms} onChange={on('ms')} /></div>
          <div className="btns"><button className="btn btn--p" type="submit">Send enquiry</button></div>
          <p className="note" role="status">{sent ? 'Thank you' : ''}</p>
          <p className="note">No third party challenge test. Some of the people we most want to hear from work on devices that block it.</p>
        </form>
      </Band>
      <Band deep tight>
        <Table head={['Direct', 'Detail']} rows={[
          ['Email', <em className="dim">Three addresses, one per route. To confirm.</em>],
          ['Registered address', <em className="dim">To confirm from the ACRA record.</em>],
          ['Response time', 'We state a window and we meet it. A stated window that is missed is worse than none.']]} />
      </Band>
    </>
  );
}
