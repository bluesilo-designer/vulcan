import { useLayoutEffect } from 'react';
import { useVersion } from './version';
import { V3_COPY } from '../content/v3copy';

/* v3 only: swaps each rendered line found in V3_COPY for its v3 wording.
   Works on text nodes, so components keep their v1/v2 strings and v3 copy
   lives (and gets trimmed) in one file. Watches for content that mounts
   later: tabs, accordions, route changes. */
const MAP = new Map(Object.entries(V3_COPY).filter(([a, b]) => a !== b));
const OUT = new Set(MAP.values());

function swap(root: Node) {
  const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  for (let n = w.currentNode as Node | null; n; n = w.nextNode()) {
    if (n.nodeType !== Node.TEXT_NODE) continue;
    const raw = n.nodeValue || '', t = raw.trim();
    if (!t || OUT.has(t)) continue;
    const r = MAP.get(t);
    if (r) n.nodeValue = raw.replace(t, r);
  }
}

export function useV3Copy() {
  const { v } = useVersion();
  useLayoutEffect(() => {
    if (v !== 3) return;
    swap(document.body);
    const mo = new MutationObserver((ms) => ms.forEach((m) => {
      if (m.type === 'characterData') swap(m.target);
      m.addedNodes.forEach((a) => swap(a));
    }));
    mo.observe(document.body, { subtree: true, childList: true, characterData: true });
    return () => mo.disconnect();
  }, [v]);
}
