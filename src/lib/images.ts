import { SLOTS } from '../content/media';
import { mediaUrl } from './media';

type Slot = { k: string; base: string };
/* Homepage photo slots: the base file, or media/look/<slot>-<look>.jpg. */
export function slotSrc(slot: string, look: string) {
  const s = (SLOTS as Record<string, Slot>)[slot];
  if (!s) return '';
  return mediaUrl(look === 'original' ? s.base : `look/${slot}-${look}.jpg`);
}
/* Product page images: media/p/<id>-<slot>-steel.jpg. Set 1 (steel) is the only
   set kept (11 Nov 2026); sets 2-4 are in git tag backup/trms-layouts-2026-11-11. */
export function productImg(id: string, slot: string) {
  return mediaUrl(`p/${id}-${slot}-steel.jpg`);
}
