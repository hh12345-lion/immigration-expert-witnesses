import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/ui/CTASection";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { RoadPhoto } from "@/components/brand/Brand";
import { sectionPhotos } from "@/lib/page-photos";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { getBlogBySlug } from "@/lib/blog";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { markdownToHtml } from "@/lib/markdown";
import { createMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};

  const base = createMetadata({
    title: `${post.title} | ${SITE_NAME}`,
    description: post.description,
    path: `/blog/${post.slug}`,
  });

  if (!post.image) return base;

  const imageUrl = `${SITE_URL}${post.image}`;

  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
      images: [{ url: imageUrl, alt: post.imageAlt || post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: typeof base.title === "string" ? base.title : post.title,
      description: post.description,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const html = markdownToHtml(post.content);
  const url = `${SITE_URL}/blog/${post.slug}`;
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: post.title },
  ];

  return (
    <>
      <PageJsonLd
        breadcrumbs={crumbs}
        extra={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          dateModified: post.updated || post.date,
          image: post.image ? `${SITE_URL}${post.image}` : undefined,
          inLanguage: "en-GB",
          author: { "@type": "Organization", name: SITE_NAME },
          publisher: {
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL,
          },
          mainEntityOfPage: url,
          url,
        }}
      />
      <section className="relative overflow-hidden bg-paper">
        <div className="mx-auto grid max-w-7xl min-w-0 gap-10 px-4 pb-14 pt-10 sm:px-6 sm:pt-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-16 lg:px-8 lg:pb-20">
          <div className="min-w-0">
            <h1 className="font-display break-words text-[2.1rem] font-bold leading-[1.1] text-forest sm:text-[2.7rem] lg:text-[3rem]">
              {post.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-body">{post.description}</p>
            <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate">
              <time dateTime={post.updated || post.date} className="font-semibold text-mauve">
                {new Date(post.updated || post.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              <span aria-hidden className="h-1 w-1 rounded-full bg-stone" />
              <span>{post.readingTime}</span>
            </p>
            <Breadcrumbs items={crumbs} />
          </div>
          <RoadPhoto
            photo={{ src: post.image || sectionPhotos.blog.src, alt: post.image ? post.imageAlt || post.title : sectionPhotos.blog.alt }}
            priority
            aspect="aspect-[4/3]"
            sizes="(max-width: 1024px) 90vw, 520px"
            className="mx-auto w-full max-w-lg shadow-[0_30px_60px_rgba(20,26,22,0.18)] lg:max-w-none"
          />
        </div>
      </section>

      <div className="border-t border-line bg-surface">
        <article className="prose-content mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
          <div dangerouslySetInnerHTML={{ __html: html }} />

          <p className="not-prose mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line pt-8 text-sm">
            <Link href="/blog" className="font-semibold text-forest no-underline hover:text-mauve">
              Back to the blog
            </Link>
            <Link href="/contact" className="font-semibold text-mauve hover:text-forest">
              Request a witness
            </Link>
          </p>
        </article>
      </div>
      <CTASection />
    </>
  );
}
