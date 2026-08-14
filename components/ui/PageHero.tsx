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
    <section className="border-b border-line bg-surface">
      <div className="mx-auto max-w-6xl min-w-0 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} />}
        <h1 className="break-words font-display text-3xl font-semibold tracking-tight text-ink min-[375px]:text-4xl sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-body sm:text-lg">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
