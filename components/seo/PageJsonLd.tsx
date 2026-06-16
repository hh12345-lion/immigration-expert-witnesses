import { JsonLd } from "@/components/ui/JsonLd";
import {
  organizationSchema,
  breadcrumbSchema,
  faqSchema,
  type FAQ,
} from "@/lib/schema";

type Crumb = { label: string; href?: string };

export function PageJsonLd({
  breadcrumbs,
  faqs,
  extra,
}: {
  breadcrumbs?: Crumb[];
  faqs?: FAQ[];
  extra?: object | object[];
}) {
  const schemas: object[] = [organizationSchema()];
  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push(breadcrumbSchema(breadcrumbs));
  }
  if (faqs && faqs.length > 0) {
    schemas.push(faqSchema(faqs));
  }
  if (extra) {
    const items = Array.isArray(extra) ? extra : [extra];
    schemas.push(...items);
  }
  return <JsonLd data={schemas} />;
}
