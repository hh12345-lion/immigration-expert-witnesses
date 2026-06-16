import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { witnessTypes, getWitnessType } from "@/data/witness-types";
import { WitnessTypePageView } from "@/components/content/WitnessTypePageView";

export function generateStaticParams() {
  return witnessTypes.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getWitnessType(slug);
  if (!page) return {};
  return createMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/witness-types/${slug}`,
  });
}

export default async function WitnessTypePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getWitnessType(slug);
  if (!page) notFound();

  return (
    <WitnessTypePageView
      page={page}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Witness Types", href: "/witness-types" },
        { label: page.title },
      ]}
    />
  );
}
