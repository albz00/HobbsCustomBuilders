import { useCallback, useRef, useState } from 'react';

type BeforeAfterSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
  caption?: string;
};

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

/** Drag-to-reveal comparison; before = full bleed, after clipped from the left edge. */
function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeLabel = 'Before',
  afterLabel = 'After',
  caption
}: BeforeAfterSliderProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [pct, setPct] = useState(52);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = clamp(((clientX - r.left) / r.width) * 100, 4, 96);
    setPct(p);
  }, []);

  return (
    <figure className="w-full">
      <div
        ref={wrapRef}
        className="relative aspect-[16/10] w-full cursor-ew-resize touch-pan-x overflow-hidden rounded-sm border border-zinc-300 bg-zinc-900 shadow-[4px_6px_0_0_rgba(17,40,74,0.12)] select-none sm:aspect-[2/1]"
        onPointerDown={(e) => {
          dragging.current = true;
          e.currentTarget.setPointerCapture(e.pointerId);
          setFromClientX(e.clientX);
        }}
        onPointerMove={(e) => {
          if (!dragging.current) return;
          setFromClientX(e.clientX);
        }}
        onPointerUp={(e) => {
          dragging.current = false;
          try {
            e.currentTarget.releasePointerCapture(e.pointerId);
          } catch {
            /* released */
          }
        }}
        onPointerCancel={(e) => {
          dragging.current = false;
          try {
            e.currentTarget.releasePointerCapture(e.pointerId);
          } catch {
            /* ok */
          }
        }}
      >
        <img
          src={beforeSrc}
          alt=""
          className="absolute inset-0 z-0 h-full w-full object-cover"
          draggable={false}
        />
        <div
          className="absolute inset-0 z-[1] overflow-hidden"
          style={{
            clipPath: `inset(0 0 0 ${pct}%)`
          }}
          aria-hidden
        >
          <img
            src={afterSrc}
            alt=""
            className="absolute inset-0 z-0 h-full w-full object-cover"
            draggable={false}
          />
        </div>
        {/* datum line */}
        <div
          className="absolute inset-y-0 z-[2] w-0.5 bg-hobbs-gold-bright shadow-[0_0_12px_rgba(201,164,61,0.6)]"
          style={{ left: `${pct}%`, transform: 'translateX(-50%)' }}
        />
        <div
          className="absolute top-1/2 z-[3] flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-hobbs-gold-bright bg-hobbs-navy-deep text-white shadow-lg"
          style={{ left: `${pct}%` }}
        >
          <span className="text-lg font-bold leading-none" aria-hidden>
            ↔
          </span>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-[2] flex justify-between bg-gradient-to-t from-zinc-950/90 to-transparent px-4 pb-3 pt-10 text-[10px] font-bold uppercase tracking-[0.2em] text-white/90">
          <span>{beforeLabel}</span>
          <span>{afterLabel}</span>
        </div>
      </div>
      {caption && <figcaption className="mt-3 text-sm leading-relaxed text-zinc-500">{caption}</figcaption>}
    </figure>
  );
}

export default BeforeAfterSlider;
