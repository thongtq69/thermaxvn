import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailContent } from "../../../components/DetailContent";
import { InnerHero } from "../../../components/InnerHero";
import { PageShell } from "../../../components/PageShell";
import { getProductDetail, productDetailPages } from "../../../lib/productContent";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return productDetailPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getProductDetail(slug);

  if (!page) {
    return {
      title: "Sản phẩm | Thermax Vietnam",
    };
  }

  return {
    title: `${page.title} | Thermax Vietnam`,
    description: page.description,
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const page = getProductDetail(slug);

  if (!page) notFound();

  const related = productDetailPages
    .filter((item) => item.category === page.category && item.slug !== page.slug)
    .slice(0, 6);
  const breadcrumb =
    page.category === page.title
      ? [{ label: "Sản phẩm", href: "/business-segments/industrial-products" }, { label: page.title }]
      : [
          { label: "Sản phẩm", href: "/business-segments/industrial-products" },
          { label: page.category },
          { label: page.title },
        ];

  return (
    <PageShell>
      <InnerHero
        title={page.title}
        description={page.description}
        image={page.image}
        mobileImage={page.mobileImage}
        homeLabel="Trang chủ"
        breadcrumb={breadcrumb}
      />

      <DetailContent page={page} related={related} />
    </PageShell>
  );
}
