import { MEDIA_READY } from '../content/media';

/* Every media path goes through here so the site works under any base path. */
export const asset = (p: string) => import.meta.env.BASE_URL + p.replace(/^\//, '');
export const mediaUrl = (file: string) => asset('media/' + file);
export const isReady = (id: string) => (MEDIA_READY as string[]).includes(id);
