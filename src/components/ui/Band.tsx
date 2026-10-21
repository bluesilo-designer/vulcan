import type { ReactNode } from 'react';

/* The section primitive every page is built from. */
export function Band({ deep, tight, bleed, id, label, title, intro, children }: {
  deep?: boolean; tight?: boolean; bleed?: boolean; id?: string;
  label?: string; title?: ReactNode; intro?: ReactNode; children?: ReactNode;
}) {
  const cls = ['band', deep && 'band--deep', tight && 'band--tight', bleed && 'band--bleed'].filter(Boolean).join(' ');
  const head = title ? (
    <div className="head rv">
      {label && <span className="label" style={{ display: 'block', marginBottom: 'var(--s4)' }}>{label}</span>}
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </div>
  ) : null;
  return (
    <section className={cls} id={id}>
      {bleed ? <>{head}{children}</> : <div className="shell">{head}{children}</div>}
    </section>
  );
}
