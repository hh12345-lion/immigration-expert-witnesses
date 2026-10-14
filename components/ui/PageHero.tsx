import { Globe, RoadPhoto, type FramePhoto } from "@/components/brand/Brand";
import { fallbackPhoto } from "@/lib/page-photos";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

/** Title first, then the introduction and breadcrumbs, beside a photograph in the monogram tile. */
export function PageHero({
  title,
  subtitle,
  breadcrumbs,
  photo,
}: {
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
  photo?: FramePhoto;
}) {
  const picture = photo ?? fallbackPhoto(title);
  return (
    <section className="relative overflow-hidden bg-paper">
      <Globe className="pointer-events-none absolute -left-40 top-1/2 hidden h-[34rem] w-[34rem] -translate-y-1/2 text-moss/10 lg:block" />
      <div className="relative mx-auto grid max-w-7xl min-w-0 gap-10 px-4 pb-14 pt-10 sm:px-6 sm:pt-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-16 lg:px-8 lg:pb-20 lg:pt-16">
        <div className="min-w-0">
          <h1 className="font-display max-w-3xl break-words text-[2.3rem] font-bold leading-[1.08] text-forest sm:text-5xl lg:text-[3.35rem]">
            {title}
          </h1>
          <svg aria-hidden viewBox="0 0 120 14" className="mt-6 h-3.5 w-28">
            <path d="M2 4 C 40 4, 70 12, 118 10" fill="none" stroke="#725865" strokeWidth="3" strokeLinecap="round" />
          </svg>
          {subtitle && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-body">{subtitle}</p>}
          {breadcrumbs && breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} />}
        </div>
        <RoadPhoto
          photo={picture}
          priority
          aspect="aspect-[5/4]"
          sizes="(max-width: 1024px) 90vw, 520px"
          className="mx-auto w-full max-w-lg shadow-[0_30px_60px_rgba(20,26,22,0.18)] lg:max-w-none"
        />
      </div>
    </section>
  );
}
