import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { caseTypes, getCaseType } from "@/data/case-types";
import { ContentPageView } from "@/components/content/ContentPageView";

export function generateStaticParams() {
  return caseTypes.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getCaseType(slug);
  if (!page) return {};
  return createMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/case-types/${slug}`,
  });
}

export default async function CaseTypePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getCaseType(slug);
  if (!page) notFound();

  return (
    <ContentPageView
      page={page}
      hubLabel="Case Types"
      hubHref="/case-types"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Case Types", href: "/case-types" },
        { label: page.title },
      ]}
    />
  );
}
