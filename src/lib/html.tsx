/* A few content strings carry inline emphasis (<strong>, <em>). They are
   our own content, never user input, so rendering them is safe. */
export function Html({ as: Tag = 'span', html, className }: { as?: keyof JSX.IntrinsicElements; html: string; className?: string }) {
  const T = Tag as any;
  return <T className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}
export const pad2 = (i: number) => String(i + 1).padStart(2, '0');
