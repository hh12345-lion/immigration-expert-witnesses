import type { FAQ } from "@/lib/schema";

export type ContentPage = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  content: string[];
  faqs: FAQ[];
  relatedLinks?: { label: string; href: string }[];
};

export type ContentPageGetter = (slug: string) => ContentPage | undefined;
