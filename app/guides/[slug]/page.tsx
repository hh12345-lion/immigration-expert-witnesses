import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { guides, getGuide } from "@/data/guides";
import { ContentPageView } from "@/components/content/ContentPageView";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getGuide(slug);
  if (!page) return {};
  return createMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/guides/${slug}`,
  });
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getGuide(slug);
  if (!page) notFound();

  return (
    <ContentPageView
      page={page}
      hubLabel="Guides"
      hubHref="/guides"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Guides", href: "/guides" },
        { label: page.title },
      ]}
    />
  );
}
