import { useEffect, useRef, useState } from 'react';
import { isReady, mediaUrl } from '../../lib/media';

export type MediaSpec = { id: string; kind?: 'Image' | 'Video'; ratio?: string; label: string; brief: string };

/* A media slot. Until a file is listed in MEDIA_READY it shows its brief
   and makes no request; once listed it loads, and videos play muted. */
export function Media({ m, src, className, imgProps }: {
  m: MediaSpec; src?: string; className?: string; imgProps?: Record<string, string>;
}) {
  const isVid = (m.kind || 'Image') === 'Video';
  const ready = isReady(m.id);
  const [has, setHas] = useState(false);
  const vref = useRef<HTMLVideoElement>(null);
  const url = src || mediaUrl(m.id + (isVid ? '.mp4' : '.jpg'));
  useEffect(() => {
    const v = vref.current;
    if (!v) return;
    v.muted = true;
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) v.play().catch(() => {});
  }, [url]);
  const cls = ['media', m.ratio ?? 'r-43', ready && 'is-live', has && 'has-media', className].filter(Boolean).join(' ');
  return (
    <figure className={cls} data-media={isVid ? 'video' : 'image'} data-id={m.id}>
      {ready && (isVid
        ? <video ref={vref} className="media__asset" src={url} muted loop playsInline autoPlay preload="auto" onLoadedData={() => setHas(true)} />
        : <img className="media__asset" src={url} alt={m.label} loading="lazy" onLoad={() => setHas(true)} {...imgProps} />)}
      <span className="media__kind">{m.kind || 'Image'}</span>
      <b>{m.label}</b><span className="media__brief">{m.brief}</span>
    </figure>
  );
}
