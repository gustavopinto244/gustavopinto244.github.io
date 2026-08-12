import { useCallback, useEffect, useRef, useState } from 'react';
import { Play, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import clsx from 'clsx';
import type { ProjectMedia } from '../../types';

type MediaGalleryProps = {
  media: ProjectMedia[];
  /** Used in alt text and in the modal label. */
  label: string;
};

export function MediaGallery({ media, label }: MediaGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);

  const isOpen = openIndex !== null;

  const close = useCallback(() => {
    setOpenIndex(null);
    triggerRef.current?.focus();
  }, []);

  const step = useCallback(
    (delta: number) => {
      setOpenIndex((current) => {
        if (current === null) return current;
        return (current + delta + media.length) % media.length;
      });
    },
    [media.length]
  );

  useEffect(() => {
    if (!isOpen) return;

    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowRight' && media.length > 1) step(1);
      if (event.key === 'ArrowLeft' && media.length > 1) step(-1);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, media.length, close, step]);

  if (media.length === 0) return null;

  const cover = media[0];
  const active = openIndex === null ? null : media[openIndex];

  return (
    <>
      <div className="border-b border-border">
        <button
          ref={triggerRef}
          type="button"
          onClick={() => setOpenIndex(0)}
          aria-label={`Ampliar mídia de ${label}`}
          className="group/media relative block w-full aspect-video overflow-hidden bg-background"
        >
          {cover.type === 'video' && !cover.poster ? (
            <video
              src={cover.src}
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-cover opacity-90 transition-opacity group-hover/media:opacity-100"
            />
          ) : (
            <img
              src={cover.type === 'video' ? cover.poster : cover.src}
              alt={cover.caption ?? label}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-300 group-hover/media:scale-[1.02]"
            />
          )}

          <span className="absolute inset-0 bg-background/20 transition-colors group-hover/media:bg-background/5" />

          <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-md border border-border bg-background/85 px-2.5 py-1.5 text-[11px] text-text-muted backdrop-blur-sm transition-colors group-hover/media:border-primary/60 group-hover/media:text-primary">
            {cover.type === 'video' ? (
              <>
                <Play className="w-3.5 h-3.5" /> assistir
              </>
            ) : (
              <>
                <Maximize2 className="w-3.5 h-3.5" /> ampliar
              </>
            )}
          </span>

          {media.length > 1 && (
            <span className="absolute bottom-3 left-3 rounded-md border border-border bg-background/85 px-2 py-1 text-[11px] text-text-muted backdrop-blur-sm tabular-nums">
              1/{media.length}
            </span>
          )}
        </button>

        {media.length > 1 && (
          <div className="flex gap-2 overflow-x-auto px-4 py-3">
            {media.map((item, index) => (
              <button
                key={item.src}
                type="button"
                onClick={() => setOpenIndex(index)}
                aria-label={`Abrir mídia ${index + 1} de ${label}`}
                className="relative shrink-0 w-20 aspect-video overflow-hidden rounded-md border border-border transition-colors hover:border-primary/60"
              >
                <img
                  src={item.type === 'video' ? item.poster : item.src}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                {item.type === 'video' && (
                  <span className="absolute inset-0 flex items-center justify-center bg-background/50">
                    <Play className="w-3.5 h-3.5 text-primary" />
                  </span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {isOpen && active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Mídia - ${label}`}
          onClick={close}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-background/95 p-4 backdrop-blur-sm md:p-8"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="relative w-full max-w-5xl overflow-hidden rounded-xl border border-border bg-surface"
          >
            <div className="flex items-center gap-2 border-b border-border bg-background/60 px-4 py-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-2 truncate text-xs text-text-muted">{label}</span>
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                aria-label="Fechar"
                className="ml-auto inline-flex items-center justify-center rounded-md border border-border p-1.5 text-text-muted transition-colors hover:border-primary/60 hover:text-primary"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center justify-center bg-background">
              {active.type === 'video' ? (
                <video
                  src={active.src}
                  poster={active.poster}
                  controls
                  autoPlay
                  playsInline
                  className="max-h-[70vh] w-full"
                />
              ) : (
                <img
                  src={active.src}
                  alt={active.caption ?? label}
                  className="max-h-[70vh] w-full object-contain"
                />
              )}
            </div>

            {(active.caption || media.length > 1) && (
              <div className="flex items-center gap-4 border-t border-border px-4 py-3">
                {active.caption && (
                  <p className="text-xs text-text-muted">
                    <span className="text-accent">// </span>
                    {active.caption}
                  </p>
                )}

                {media.length > 1 && (
                  <div className="ml-auto flex shrink-0 items-center gap-2">
                    <button
                      type="button"
                      onClick={() => step(-1)}
                      aria-label="Mídia anterior"
                      className="inline-flex items-center justify-center rounded-md border border-border p-1.5 text-text-muted transition-colors hover:border-primary/60 hover:text-primary"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="text-xs text-text-muted tabular-nums">
                      {openIndex + 1}/{media.length}
                    </span>
                    <button
                      type="button"
                      onClick={() => step(1)}
                      aria-label="Próxima mídia"
                      className={clsx(
                        'inline-flex items-center justify-center rounded-md border border-border p-1.5',
                        'text-text-muted transition-colors hover:border-primary/60 hover:text-primary'
                      )}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
