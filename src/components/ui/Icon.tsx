/* Phosphor icon font, loaded from the CDN in index.html. Decorative by default. */
export function Icon({ name, fill, className }: { name: string; fill?: boolean; className?: string }) {
  const n = name.startsWith('ph-') ? name : 'ph-' + name;
  return <i className={[fill ? 'ph-fill' : 'ph', n, className].filter(Boolean).join(' ')} aria-hidden="true" />;
}
