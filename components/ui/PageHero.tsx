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
    <section className="relative overflow-hidden border-b border-rule bg-ink text-chalk">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 80% at 90% 20%, rgba(110,36,51,0.35), transparent 55%), radial-gradient(ellipse 50% 60% at 0% 100%, rgba(58,82,68,0.25), transparent 50%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl min-w-0 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {breadcrumbs && breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} />}
        <h1 className="break-words font-display text-3xl tracking-tight text-chalk min-[375px]:text-4xl sm:text-5xl lg:text-[3.25rem]">
          {title}
        </h1>
        <div className="mt-5 h-px w-16 bg-oxblood" aria-hidden />
        {subtitle && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-chalk/75 sm:text-lg">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
