import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/* Adds .in to .rv elements as they enter the viewport. Watches #main for
   content that mounts later (tabs, lazy sections) as well. */
export function useReveal() {
  const { pathname } = useLocation();
  useEffect(() => {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    const scan = () => document.querySelectorAll('.rv:not(.in)').forEach((e) => (reduce ? e.classList.add('in') : io.observe(e)));
    scan();
    const main = document.getElementById('main');
    const mo = main ? new MutationObserver(scan) : null;
    if (main && mo) mo.observe(main, { childList: true, subtree: true });
    return () => { io.disconnect(); mo?.disconnect(); };
  }, [pathname]);
}
