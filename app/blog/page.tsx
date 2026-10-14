import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { Road } from "@/components/brand/Brand";
import { sectionPhotos } from "@/lib/page-photos";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { getAllBlogPosts } from "@/lib/blog";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Blog | Immigration Expert Witnesses",
  description:
    "Articles for solicitors on country conditions evidence, the continuing relevance of earlier expert reports, and instructing immigration expert witnesses.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();
  const crumbs = [{ label: "Home", href: "/" }, { label: "Blog" }];

  return (
    <>
      <PageJsonLd
        breadcrumbs={crumbs}
        extra={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: `${SITE_NAME} Blog`,
          url: `${SITE_URL}/blog`,
          inLanguage: "en-GB",
          blogPost: posts.map((post) => ({
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            dateModified: post.updated || post.date,
            url: `${SITE_URL}/blog/${post.slug}`,
            image: post.image ? `${SITE_URL}${post.image}` : undefined,
          })),
        }}
      />
      <PageShell
        title="Immigration Expert Witnesses Blog"
        subtitle="Practitioner-facing articles on country conditions evidence, tribunal practice and instructing immigration expert witnesses."
        breadcrumbs={crumbs}
        photo={sectionPhotos.blog}
      >
        {posts.length === 0 ? (
          <p className="text-body">Articles will appear here shortly.</p>
        ) : (
          <ul className="grid gap-x-8 gap-y-14 md:grid-cols-2">
            {posts.map((post) => (
              <li key={post.slug} className="min-w-0">
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="tile-cut relative aspect-[16/10] overflow-hidden bg-forest">
                    <Image
                      src={post.image || sectionPhotos.blog.src}
                      alt={post.image ? post.imageAlt || post.title : sectionPhotos.blog.alt}
                      fill
                      sizes="(max-width: 768px) 92vw, 540px"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                    <Road surface="#FFFDF9" width={12} />
                  </div>
                  <p className="mt-5 flex flex-wrap items-center gap-x-3 text-sm text-slate">
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
                  <h2 className="font-display mt-3 text-2xl font-bold leading-snug text-forest group-hover:text-mauve">{post.title}</h2>
                  <p className="mt-3 leading-relaxed text-body">{post.description}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-mauve">
                    Read article
                    <svg aria-hidden viewBox="0 0 16 10" className="h-2.5 w-4 transition-transform group-hover:translate-x-1">
                      <path d="M0 5 H14 M10 1 L14 5 L10 9" fill="none" stroke="currentColor" strokeWidth="1.6" />
                    </svg>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </PageShell>
    </>
  );
}
