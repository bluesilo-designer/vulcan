import { PRODUCTS } from '../../../content/products';

/* legacy v6acr: the review's acronyms applied to any prose still carrying the old ones. */
export function v6acr(t: string): string {
  return t.replace(/\bRCS\b/g, 'RMS').replace(/\bAS\b/g, 'AGS');
}

/* Loose view of a product record; not every record carries rel or dep. */
export type ProductRec = {
  id: string; acr: string; name: string; role: string; group: string; users: string[];
  where: string; decides: string; on: string[]; rel?: string[]; dep?: string;
  ifc: string[][]; media: { id: string; kind?: 'Image' | 'Video'; ratio?: string; label: string; brief: string };
};
export const productRec = (id: string) =>
  (PRODUCTS as unknown as ProductRec[]).find((p) => p.id === id);

export const DEFAULT_DEP = 'Requires the personnel master record and the range calendar owner to be agreed before go-live.';
