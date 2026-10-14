import Link from "next/link";
import { RoadPhoto, type FramePhoto } from "@/components/brand/Brand";

/** Sticky side column for content pages: a second photograph and a route to instruction. */
export function ContentAside({ photo, hubLabel, hubHref }: { photo: FramePhoto; hubLabel: string; hubHref: string }) {
  return (
    <aside className="min-w-0 lg:sticky lg:top-28">
      <RoadPhoto photo={photo} surface="white" road={11} aspect="aspect-[4/5]" sizes="(max-width: 1024px) 90vw, 320px" className="hidden lg:block" />
      <div className="tile-cut mt-6 bg-sage p-6">
        <p className="eyebrow">Need a witness?</p>
        <p className="font-display mt-3 text-xl font-bold leading-snug text-forest">Send the questions the tribunal has to answer.</p>
        <p className="mt-3 text-sm leading-relaxed text-body">
          Tell us the case type, the country or issue, and your hearing or exchange dates. We route the brief to the
          right discipline.
        </p>
        <Link
          href="/contact"
          className="tile-cut-sm mt-5 inline-flex min-h-[46px] w-full items-center justify-center bg-forest px-5 text-sm font-bold text-cream hover:bg-forest-deep"
        >
          Request a witness
        </Link>
        <Link href={hubHref} className="mt-3 inline-flex min-h-[44px] w-full items-center justify-center text-sm font-semibold text-mauve hover:underline">
          All {hubLabel.toLowerCase()}
        </Link>
      </div>
    </aside>
  );
}
