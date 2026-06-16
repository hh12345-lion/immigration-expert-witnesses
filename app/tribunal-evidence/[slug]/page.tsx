import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { tribunalEvidence, getTribunalEvidence } from "@/data/tribunal-evidence";
import { ContentPageView } from "@/components/content/ContentPageView";

export function generateStaticParams() {
  return tribunalEvidence.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getTribunalEvidence(slug);
  if (!page) return {};
  return createMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/tribunal-evidence/${slug}`,
  });
}

export default async function TribunalEvidencePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getTribunalEvidence(slug);
  if (!page) notFound();

  return (
    <ContentPageView
      page={page}
      hubLabel="Tribunal Evidence"
      hubHref="/tribunal-evidence"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Tribunal Evidence", href: "/tribunal-evidence" },
        { label: page.title },
      ]}
    />
  );
}
