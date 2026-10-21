import { SLOTS, PRODUCT_IMAGE_ALIASES } from '../content/media';
import { mediaUrl } from './media';

type Slot = { k: string; base: string };
/* Homepage photo slots: the base file, or media/look/<slot>-<look>.jpg. */
export function slotSrc(slot: string, look: string) {
  const s = (SLOTS as Record<string, Slot>)[slot];
  if (!s) return '';
  return mediaUrl(look === 'original' ? s.base : `look/${slot}-${look}.jpg`);
}
/* Product page images: media/p/<id>-<slot>-<set>.jpg, with aliases for
   the earlier sets that were shot for a different page structure. */
export function productImg(id: string, slot: string, set: string) {
  const a = (PRODUCT_IMAGE_ALIASES as Record<string, Record<string, string>>)[set];
  return mediaUrl(`p/${id}-${(a && a[slot]) || slot}-${set}.jpg`);
}
