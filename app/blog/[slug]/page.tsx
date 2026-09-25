import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/ui/CTASection";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { getBlogBySlug, getBlogSlugs } from "@/lib/blog";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { markdownToHtml } from "@/lib/markdown";
import { createMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

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
      {post.image ? (
        <div className="relative mx-auto h-[min(28rem,55vw)] w-full max-w-6xl border-b border-line">
          <Image
            src={post.image}
            alt={post.imageAlt || post.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ) : null}

      <article className="prose-content mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6 not-prose text-sm text-slate">
          <Link href="/" className="hover:text-sky">
            Home
          </Link>
          {" / "}
          <Link href="/blog" className="hover:text-sky">
            Blog
          </Link>
          {" / "}
          <span className="text-ink">{post.title}</span>
        </nav>

        <p className="not-prose text-[11px] font-semibold uppercase tracking-widest text-slate">
          <time dateTime={post.updated || post.date}>
            {new Date(post.updated || post.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
          <span className="mx-2">·</span>
          <span className="normal-case tracking-normal">{post.readingTime}</span>
        </p>
        <h1 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-body">{post.description}</p>

        <div className="mt-10" dangerouslySetInnerHTML={{ __html: html }} />

        <p className="not-prose mt-12 border-t border-line pt-8 text-sm">
          <Link href="/blog" className="font-semibold text-sky hover:text-sky-deep">
            ← Back to the blog
          </Link>
          <span className="mx-3 text-slate/50">·</span>
          <Link href="/contact" className="font-semibold text-sky hover:text-sky-deep">
            Request a witness
          </Link>
        </p>
      </article>
      <CTASection />
    </>
  );
}
