import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

export function PageHero({
  title,
  subtitle,
  breadcrumbs,
}: {
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
}) {
  return (
    <section className="bg-[#1A2744] py-14 md:py-20">
      <div className="mx-auto max-w-6xl min-w-0 px-4 sm:px-6 lg:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} />}
        <h1 className="break-words text-2xl font-bold tracking-tight text-white min-[375px]:text-3xl sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle && <p className="mt-4 max-w-3xl text-base text-white/80 sm:text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}
