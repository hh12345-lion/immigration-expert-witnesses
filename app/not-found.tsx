import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { CardGrid } from "@/components/ui/CardGrid";
import { photos } from "@/lib/photos";
import { witnessTypes } from "@/data/witness-types";
import { excerpt } from "@/lib/excerpt";

export default function NotFound() {
  return (
    <>
      <PageHero
        title="Page not found"
        subtitle="The page may have moved. Use the links below for witness guidance, or send us a brief directly."
        photo={photos.atlasGlobe}
      />

      <section className="border-t border-line bg-surface py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="tile-cut-sm inline-flex min-h-[50px] items-center justify-center bg-forest px-7 text-sm font-bold text-cream hover:bg-forest-deep"
            >
              Back to home
            </Link>
            <Link
              href="/contact"
              className="tile-cut-sm inline-flex min-h-[50px] items-center justify-center bg-mauve px-7 text-sm font-bold text-cream hover:bg-oxblood-deep"
            >
              Request a witness
            </Link>
          </div>
          <h2 className="font-display mt-14 text-2xl font-bold text-forest sm:text-3xl">Witness disciplines</h2>
          <div className="mt-8">
            <CardGrid
              items={witnessTypes.slice(0, 6).map((w) => ({
                title: w.title,
                description: excerpt(w.content),
                href: `/witness-types/${w.slug}`,
              }))}
            />
          </div>
        </div>
      </section>
    </>
  );
}
