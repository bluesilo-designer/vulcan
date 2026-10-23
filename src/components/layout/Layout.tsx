import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { Seo } from './Seo';
import { useReveal } from '../../hooks/useReveal';
import { SITE } from '../../config/site';
import { useReview } from '../../lib/review';
import { ContentControl } from '../review/ContentControl';

export function Layout() {
  const { pathname, hash } = useLocation();
  const main = useRef<HTMLElement>(null);
  const { demo } = useReview();
  useReveal();

  /* New route: top of page (or the anchor), and the short entrance fade. */
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) { el.scrollIntoView({ block: 'start' }); return; }
    }
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    const m = main.current;
    if (m) { m.classList.remove('v6enter'); void m.offsetWidth; m.classList.add('v6enter'); }
  }, [pathname, hash]);

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Seo />
      <Header />
      <main id="main" ref={main}><Outlet /></main>
      <Footer />
      {SITE.reviewTools && demo && <ContentControl />}
    </>
  );
}
