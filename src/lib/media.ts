import { MEDIA_READY } from '../content/media';

/* Every media path goes through here so the site works under any base path. */
export const asset = (p: string) => import.meta.env.BASE_URL + p.replace(/^\//, '');
/* v2/v3 photography swap (Field set, 28 Oct 2026). ReviewProvider sets it
   during render, before any child asks for a URL; null leaves paths as
   they are, which is what v1 always gets. */
let swap: ((file: string) => string) | null = null;
export const setMediaSwap = (fn: typeof swap) => { swap = fn; };
export const mediaUrl = (file: string) => asset('media/' + (swap ? swap(file) : file));
export const isReady = (id: string) => (MEDIA_READY as string[]).includes(id);
