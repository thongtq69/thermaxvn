import type { Metadata } from "next";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { CatalogProductDetail } from "../../../../components/CatalogProductDetail";
import { PageShell } from "../../../../components/PageShell";
import type { Locale } from "../../../../lib/i18n";
import {
  getOfficialCatalogProduct,
  getOfficialCatalogProductParams,
} from "../../../../lib/officialProductCatalog";
import { getLocalizedProductDetail } from "../../../../lib/productContent";

type ProductItemPageProps = {
  params: Promise<{ slug: string; product: string }>;
  searchParams?: Promise<{ lang?: string }>;
};

async function localeFromRequest(params?: { lang?: string }): Promise<Locale> {
  if (params?.lang === "en" || params?.lang === "vi") return params.lang;
  return (await cookies()).get("thermax-language")?.value === "en" ? "en" : "vi";
}

export function generateStaticParams() {
  return getOfficialCatalogProductParams();
}

export async function generateMetadata({ params, searchParams }: ProductItemPageProps): Promise<Metadata> {
  const { slug, product: productSlug } = await params;
  const locale = await localeFromRequest(await searchParams);
  const product = getOfficialCatalogProduct(slug, productSlug, locale);
  return product
    ? { title: `${product.title} | Thermax Vietnam`, description: product.description }
    : { title: "Sản phẩm | Thermax Vietnam" };
}

export default async function ProductItemPage({ params, searchParams }: ProductItemPageProps) {
  const { slug, product: productSlug } = await params;
  const locale = await localeFromRequest(await searchParams);
  const product = getOfficialCatalogProduct(slug, productSlug, locale);
  const parent = getLocalizedProductDetail(slug, locale);

  if (!product || !parent) notFound();

  return (
    <PageShell>
      <CatalogProductDetail
        product={product}
        parentTitle={parent.title}
        parentHref={`/industrial-products/${slug}`}
        locale={locale}
      />
    </PageShell>
  );
}
