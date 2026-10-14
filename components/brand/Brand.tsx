import Image from "next/image";

export type FramePhoto = { src: string; alt: string };

/** The horizontal lockup (mark beside the lettering) for light backgrounds. */
export function Logo({ className = "h-11 w-auto", priority }: { className?: string; priority?: boolean }) {
  return (
    <Image
      src="/brand/logo.svg"
      alt="Immigration Expert Witnesses"
      width={696}
      height={112}
      priority={priority}
      unoptimized
      className={className}
    />
  );
}

/** The stacked logo as supplied for dark backgrounds. */
export function LogoLight({ className = "h-28 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/brand/logo-light.svg"
      alt="Immigration Expert Witnesses"
      width={577}
      height={385}
      unoptimized
      className={className}
    />
  );
}

/** The monogram on its own. */
export function Mark({ className = "h-10 w-auto" }: { className?: string }) {
  return <Image src="/brand/monogram.svg" alt="" aria-hidden width={505} height={638} unoptimized className={className} />;
}

/**
 * The road from the monogram: a band that sweeps in from the right edge and turns down to the bottom.
 * Drawn in the colour of the surface behind the photograph, with a thin mauve centre line.
 */
export function Road({ surface = "#F9F6F1", width = 16 }: { surface?: string; width?: number }) {
  const d = "M104 54 C 80 74, 38 72, 24 84 C 15 92, 22 99, 34 104";
  return (
    <svg aria-hidden viewBox="0 0 100 100" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 h-full w-full">
      <path d={d} fill="none" stroke={surface} strokeWidth={width} vectorEffect="non-scaling-stroke" strokeLinecap="round" />
      <path d={d} fill="none" stroke="#725865" strokeWidth={2} vectorEffect="non-scaling-stroke" strokeLinecap="round" />
    </svg>
  );
}

const SURFACES = { cream: "#F9F6F1", white: "#FFFDF9", sage: "#E9ECE4", night: "#141A16", forest: "#2C3F31" } as const;

/** A photograph in the monogram tile, crossed by the road. */
export function RoadPhoto({
  photo,
  aspect = "aspect-[4/3]",
  sizes = "(max-width: 1024px) 90vw, 560px",
  priority,
  surface = "cream",
  road = 16,
  className = "",
  position = "object-center",
}: {
  photo: FramePhoto;
  aspect?: string;
  sizes?: string;
  priority?: boolean;
  surface?: keyof typeof SURFACES;
  road?: number;
  className?: string;
  position?: string;
}) {
  return (
    <div className={`tile-cut relative overflow-hidden bg-forest ${aspect} ${className}`}>
      <Image src={photo.src} alt={photo.alt} fill priority={priority} sizes={sizes} className={`object-cover ${position}`} />
      <Road surface={SURFACES[surface]} width={road} />
    </div>
  );
}

/** Line drawing of the globe in the monogram: meridians and parallels in the current colour. */
export function Globe({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <circle cx="100" cy="100" r="96" />
      <ellipse cx="100" cy="100" rx="64" ry="96" />
      <ellipse cx="100" cy="100" rx="28" ry="96" />
      <path d="M4 100 H196" />
      <path d="M15 52 C 60 62, 140 62, 185 52" />
      <path d="M15 148 C 60 138, 140 138, 185 148" />
      <path d="M100 4 V196" />
    </svg>
  );
}
