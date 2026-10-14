import { PageHero } from "@/components/ui/PageHero";
import { CTASection } from "@/components/ui/CTASection";
import type { Crumb } from "@/components/ui/Breadcrumbs";
import type { FramePhoto } from "@/components/brand/Brand";

export function PageShell({
  title,
  subtitle,
  breadcrumbs,
  photo,
  children,
}: {
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
  photo?: FramePhoto;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero title={title} subtitle={subtitle} breadcrumbs={breadcrumbs} photo={photo} />
      <main className="border-t border-line bg-surface">
        <div className="mx-auto min-w-0 max-w-6xl overflow-x-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8">{children}</div>
      </main>
      <CTASection />
    </>
  );
}
