import { useState } from "react";

/* ---------------------------------------------------------------------------
   FITTED IMAGE — shows the whole photo inside a fixed frame instead of
   cropping it to fill. Images taller than `minRatio` (width / height, default
   3:4) are trimmed to that ratio so very tall portraits (e.g. 9:16) don't
   shrink to a sliver; nothing is ever cropped tighter than 3:4.
   A blurred copy of the same photo fills the leftover space in the frame.
   `zoom` scales the photo up slightly past the fitted size (edges are
   clipped by the frame) so subjects don't feel too far away.
   `background` swaps the blurred fill for a solid colour — useful when the
   photo is dark and a dark blur would swallow it.
   `fill` makes the photo cover the whole frame edge to edge (cropping as
   needed) instead of fitting inside it; `fillZoom` scales it further,
   keeping `fillPosition` as the anchor.
   Fills its nearest positioned parent (absolute inset-0).
   --------------------------------------------------------------------------- */
export default function FittedImage({
  src,
  alt,
  minRatio = 3 / 4,
  zoom = 1.45,
  background,
  fill = false,
  fillPosition = "center",
  fillZoom = 1,
  className = "",
}) {
  const [ratio, setRatio] = useState(null);
  const tooTall = ratio !== null && ratio < minRatio;

  if (fill) {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          style={{
            objectPosition: fillPosition,
            transform: fillZoom !== 1 ? `scale(${fillZoom})` : undefined,
            transformOrigin: fillPosition,
          }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} style={background ? { background } : undefined}>
      {!background && (
        <img
          src={src}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-70"
        />
      )}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ transform: `scale(${zoom})` }}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={(e) => setRatio(e.currentTarget.naturalWidth / e.currentTarget.naturalHeight)}
          style={tooTall ? { aspectRatio: minRatio } : undefined}
          className={
            tooTall
              ? "h-full max-w-full object-cover shadow-lg"
              : "w-full h-full object-contain drop-shadow-lg"
          }
        />
      </div>
    </div>
  );
}
