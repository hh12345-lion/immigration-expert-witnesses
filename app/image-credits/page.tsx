import Image from "next/image";
import { PageShell } from "@/components/layout/PageShell";
import { Road } from "@/components/brand/Brand";
import { createMetadata } from "@/lib/metadata";
import { photos } from "@/lib/photos";
import { sectionPhotos } from "@/lib/page-photos";

export const metadata = createMetadata({
  title: "Image Credits | Immigration Expert Witnesses",
  description: "Sources, authors and licences for the photographs used on this website.",
  path: "/image-credits",
});

export default function ImageCreditsPage() {
  return (
    <PageShell
      photo={sectionPhotos.credits}
      title="Image credits"
      subtitle="The photographs on this site come from Wikimedia Commons. Each has been resized or cropped to fit its frame and is otherwise unaltered."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Image credits" }]}
    >
      <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {Object.values(photos).map((photo) => (
          <li key={photo.src} className="min-w-0">
            <div className="tile-cut-sm relative aspect-[4/3] overflow-hidden bg-forest">
              <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 640px) 90vw, 380px" className="object-cover" />
              <Road surface="#FFFDF9" width={9} />
            </div>
            <p className="font-display mt-4 break-words text-lg font-bold text-forest">{photo.credit.title}</p>
            <p className="mt-1 text-sm text-body">
              {photo.credit.creator}
              {" · "}
              <a href={photo.credit.licenseUrl} rel="noopener noreferrer" className="font-semibold text-mauve underline">
                {photo.credit.license}
              </a>
              {" · "}
              <a href={photo.credit.source} rel="noopener noreferrer" className="font-semibold text-mauve underline">
                Source
              </a>
            </p>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
