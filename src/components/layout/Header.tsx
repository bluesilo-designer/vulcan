import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { brandOf, productOf } from '../../content/products';
import { isVisible, shown } from '../../config/site';
import { useVersion } from '../../lib/version';

const MENU_ORDER = ['trms', 'rcs', 'ewms', 'eams', 'pwats', 'hums', 'vms', 'eva', 'as'].filter(isVisible);
/* v3 menu (client, 4 Nov 2026): Administrative System added, and the range
   system named RCS, Range Control System. */
const MENU_ORDER_V3 = ['trms', 'as', 'rcs', 'ewms', 'hums', 'vms'];
/* rcs falls back to the brand data (RMS, Range Management System), the name used on the home page (11 Nov 2026) */
const MENU_NAME_V3: Record<string, [string, string]> = { as: ['AS', 'Administrative System'] };

export function Header() {
  const v3 = useVersion().v === 3;
  const [open, setOpen] = useState(false);
  const [mob, setMob] = useState(false); /* v3: menu panel below 880px */
  const mobBtn = useRef<HTMLButtonElement>(null);
  const [stuck, setStuck] = useState(false);
  const btn = useRef<HTMLButtonElement>(null);
  const { pathname } = useLocation();

  useEffect(() => { setOpen(false); setMob(false); }, [pathname]);
  useEffect(() => {
    const s = document.createElement('div');
    s.style.cssText = 'position:absolute;top:0;height:1px;width:1px';
    document.body.prepend(s);
    const io = new IntersectionObserver((es) => setStuck(!es[0].isIntersecting), { rootMargin: '-40px 0px 0px 0px' });
    io.observe(s);
    return () => { io.disconnect(); s.remove(); };
  }, []);
  useEffect(() => {
    if (!open) return;
    const click = (e: MouseEvent) => { if (!(e.target as Element).closest('.dd,#mPanel')) setOpen(false); };
    const key = (e: KeyboardEvent) => { if (e.key === 'Escape') { setOpen(false); btn.current?.focus(); } };
    document.addEventListener('click', click);
    document.addEventListener('keydown', key);
    return () => { document.removeEventListener('click', click); document.removeEventListener('keydown', key); };
  }, [open]);

  useEffect(() => {
    if (!mob) return;
    const click = (e: MouseEvent) => { if (!(e.target as Element).closest('.nav__mbtn,#mobMenu')) setMob(false); };
    const key = (e: KeyboardEvent) => { if (e.key === 'Escape') { setMob(false); mobBtn.current?.focus(); } };
    const wide = () => { if (window.innerWidth > 880) setMob(false); };
    document.addEventListener('click', click);
    document.addEventListener('keydown', key);
    window.addEventListener('resize', wide);
    return () => { document.removeEventListener('click', click); document.removeEventListener('keydown', key); window.removeEventListener('resize', wide); };
  }, [mob]);

  /* the system entries, shared by the Systems dropdown and the v3 menu panel */
  const systems = (v3 ? MENU_ORDER_V3 : MENU_ORDER).map((id) => {
    const p = productOf(id); const b = brandOf(id);
    if (!p) return null;
    const nm = v3 ? MENU_NAME_V3[id] : undefined;
    const acr = nm ? nm[0] : b?.acr;
    const label = <><b>{b?.brand ? <>{b.brand} <em>{acr}</em></> : (acr ?? p.acr)}</b>
        <span>{nm ? nm[1] : b ? b.sys : p.name}</span></>;
    /* v3: only TRMS is live; the others show Coming soon and do not link (client, 4 Nov 2026) */
    if (v3 && id !== 'trms') return (
      <div key={id} className="menu__soon" aria-disabled="true"><b>{b?.brand ? <>{b.brand} <em>{acr}</em></> : (acr ?? p.acr)}<i className="menu__badge">Coming soon</i></b>
        <span>{nm ? nm[1] : b ? b.sys : p.name}</span></div>
    );
    return <Link key={id} to={`/products/${id}`}>{label}</Link>;
  });

  return (
    <>
      <header className={'nav' + (stuck ? ' is-stuck' : '')} id="nav">
        <div className="shell">
          {/* v3 (11 Nov 2026): the official logo lockup. v1 and v2 keep the earlier mark. */}
          {v3 ? <Link className="brand brand--logo" to="/" aria-label="Blue Silo home">
            <img src="/brand/blue-silo-lockup.svg" alt="" width="130" height="44" decoding="async" />
          </Link> : <Link className="brand" to="/" aria-label="Blue Silo home">
            <svg width="24" height="26" viewBox="0 0 26 28" aria-hidden="true">
              <path d="M4 3h9a6 6 0 0 1 0 12H8" fill="none" stroke="var(--brand)" strokeWidth="3" />
              <path d="M22 25h-9a6 6 0 0 1 0-12h5" fill="none" stroke="var(--brand)" strokeWidth="3" />
            </svg>
            <span><span className="bw">Blue Silo</span><span className="bt">Transforming Digitally</span></span>
          </Link>}
          <nav aria-label="Primary">
            <div className="dd">
              <button ref={btn} type="button" id="mBtn" aria-expanded={open} aria-controls="mPanel"
                aria-current={pathname.startsWith('/products') ? 'page' : undefined}
                onClick={(e) => { e.stopPropagation(); setOpen((o) => !o); }}>
                Systems <span className="caret" aria-hidden="true" />
              </button>
            </div>
            {(!v3 || shown('nav.integration')) && <NavLink to="/integration">Integration</NavLink>}
            <NavLink to="/assurance">Assurance</NavLink>
            <NavLink to="/company">About Us</NavLink>
          </nav>
          <Link className="cta" to="/contact">Talk to us</Link>
          {/* v3 (11 Nov 2026): below 880px the links above are hidden, so a Menu button opens them */}
          {v3 && <button ref={mobBtn} type="button" className="nav__mbtn" aria-expanded={mob} aria-controls="mobMenu"
            aria-label={mob ? 'Close menu' : 'Open menu'} onClick={(e) => { e.stopPropagation(); setOpen(false); setMob((m) => !m); }}>
            <i className={'ph ' + (mob ? 'ph-x' : 'ph-list')} aria-hidden="true" />
          </button>}
        </div>
      </header>
      <div className="menu" id="mPanel" hidden={!open}>
        <div className="shell">{systems}</div>
      </div>
      {v3 && <div className="mobmenu" id="mobMenu" hidden={!mob}>
        <div className="shell">
          <nav aria-label="Menu">
            <span className="mobmenu__h">Systems</span>
            <div className="mobmenu__sys">{systems}</div>
            <div className="mobmenu__pages">
              {shown('nav.integration') && <NavLink to="/integration">Integration</NavLink>}
              <NavLink to="/assurance">Assurance</NavLink>
              <NavLink to="/company">About Us</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>
          </nav>
        </div>
      </div>}
    </>
  );
}
