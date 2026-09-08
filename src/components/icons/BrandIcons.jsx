/*
  Bajwa Industries icon set — hand-drawn glyphs for the manufacturing process,
  replacing generic multi-purpose icon-pack icons (Factory, Droplets, Scissors,
  PackageCheck, ShieldCheck, CheckCircle2, Shirt) with marks specific to the
  brand. Every icon shares one line weight and a small paired "stitch" tick in
  the bottom-right corner so the set reads as one family rather than a grab-bag.
*/

function IconBase({ children, strokeWidth = 1.75, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {children}
      <path d="M17 20.5 18.6 18.9M19.6 20.5 21.2 18.9" />
    </svg>
  );
}

/* Yarn & Knitting — spool with wound thread */
export function YarnSpoolIcon(props) {
  return (
    <IconBase {...props}>
      <ellipse cx="10" cy="5" rx="6" ry="2" />
      <ellipse cx="10" cy="17" rx="6" ry="2" />
      <path d="M4 5v12M16 5v12" />
      <path d="M5.5 7 14.5 15M5.5 15 14.5 7M5.5 11 14.5 9M5.5 9 14.5 11" />
    </IconBase>
  );
}

/* Dyeing — dye drop with a swirl of colour */
export function DyeDropIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M10 2c-3 4-5.5 7.5-5.5 10.5a5.5 5.5 0 0 0 11 0C15.5 9.5 13 6 10 2z" />
      <path d="M6.5 13.5c1-1 2-1 3 0s2 1 3 0" />
    </IconBase>
  );
}

/* Finishing — fabric run through calendering rollers */
export function FinishingIcon(props) {
  return (
    <IconBase {...props}>
      <rect x="2" y="3" width="14" height="4" rx="2" />
      <rect x="2" y="15" width="14" height="4" rx="2" />
      <path d="M1 10c3-3 6-3 8 0s5 3 7 0" />
    </IconBase>
  );
}

/* Cutting & Sewing — shears crossing a cut thread */
export function ShearsIcon(props) {
  return (
    <IconBase {...props}>
      <circle cx="6" cy="18" r="2" />
      <circle cx="14" cy="18" r="2" />
      <circle cx="10" cy="11" r="1" fill="currentColor" stroke="none" />
      <path d="M6 18 10 11 14 3" />
      <path d="M14 18 10 11 6 3" />
      <path d="M2 9h6M12 9h6" />
    </IconBase>
  );
}

/* Quality Control & Packaging — carton with an inspection check */
export function PackageCheckIcon(props) {
  return (
    <IconBase {...props}>
      <rect x="2" y="7" width="13" height="12" rx="1" />
      <path d="M2 7 8.5 3 15 7" />
      <path d="M8.5 3v4" />
      <path d="M6 13 8 15 11.5 11.5" />
    </IconBase>
  );
}

/* Certifications / QC standards — shield with an inspection check */
export function ShieldCheckIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M9 2 15 4.5V10c0 4.5-2.7 7.8-6 9.5C5.7 17.8 3 14.5 3 10V4.5z" />
      <path d="M6.5 10 8.5 12 12.5 8" />
    </IconBase>
  );
}

/* List / checklist marker — a running-stitch check in a loop */
export function StitchCheckIcon(props) {
  return (
    <IconBase {...props}>
      <circle cx="9" cy="11" r="7" />
      <path d="M5.5 11 8 13.5 13 7.5" strokeDasharray="2 2.2" />
    </IconBase>
  );
}

/* Garment output / production volume — a raglan hoodie, drawstrings and kangaroo pocket */
export function HoodieIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M5.5 4.5C6.5 2 9.5 2 10.5 4.5L12 5.5 15 8.5 12 9.5 12 18Q12 19 11 19L5 19Q4 19 4 18L4 9.5 1 8.5 4 5.5 5.5 4.5Z" />
      <path d="M7 5v2.2M9 5v2.2" />
      <circle cx="7" cy="7.6" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="9" cy="7.6" r="0.6" fill="currentColor" stroke="none" />
      <path d="M5.5 13h5v2.2a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V13Z" />
    </IconBase>
  );
}
