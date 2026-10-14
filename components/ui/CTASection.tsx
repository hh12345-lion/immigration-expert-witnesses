import Link from "next/link";
import { Globe, RoadPhoto } from "@/components/brand/Brand";
import { photos } from "@/lib/photos";

export function CTASection({
  title = "Ready to request a witness?",
  description = "Send a short brief and we route it confidentially to the right specialist witness. Legal Aid matters are welcome.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-forest">
      <Globe className="pointer-events-none absolute -left-24 -top-24 h-[26rem] w-[26rem] text-cream/[0.06]" />
      <div className="relative mx-auto grid min-w-0 max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:px-8">
        <div className="max-w-xl">
          <p className="eyebrow !text-[#C9B5BF]">Instruct an expert</p>
          <h2 className="font-display mt-4 text-3xl font-bold leading-tight text-cream sm:text-[2.6rem]">{title}</h2>
          <p className="mt-4 text-base leading-relaxed text-cream/75 sm:text-lg">{description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="tile-cut-sm inline-flex min-h-[50px] items-center justify-center bg-mauve px-7 text-sm font-bold text-cream transition-colors hover:bg-oxblood-deep"
            >
              Request a witness
            </Link>
            <Link
              href="/how-to-instruct"
              className="tile-cut-sm inline-flex min-h-[50px] items-center justify-center border border-cream/30 px-7 text-sm font-bold text-cream transition-colors hover:bg-cream/10"
            >
              How to instruct
            </Link>
          </div>
        </div>
        <RoadPhoto
          photo={photos.taylorHouse}
          surface="forest"
          aspect="aspect-[16/11]"
          sizes="(max-width: 1024px) 90vw, 440px"
          className="hidden w-full lg:block"
        />
      </div>
    </section>
  );
}
