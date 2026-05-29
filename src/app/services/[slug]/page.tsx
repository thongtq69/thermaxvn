import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailContent } from "../../../components/DetailContent";
import { InnerHero } from "../../../components/InnerHero";
import { PageShell } from "../../../components/PageShell";
import { getServiceDetail, serviceDetailPages } from "../../../lib/productContent";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return serviceDetailPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getServiceDetail(slug);

  if (!page) {
    return {
      title: "Dịch vụ | Thermax Vietnam",
    };
  }

  return {
    title: `${page.title} | Thermax Vietnam`,
    description: page.description,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const page = getServiceDetail(slug);

  if (!page) notFound();

  const related = serviceDetailPages.filter((item) => item.slug !== page.slug).slice(0, 4);

  return (
    <PageShell>
      <InnerHero
        title={page.title}
        description={page.description}
        image={page.image}
        homeLabel="Trang chủ"
        breadcrumb={[
          { label: "Dịch vụ", href: "/sustainability" },
          { label: page.title },
        ]}
      />

      <DetailContent page={page} related={related} relatedBaseHref="/services" contactLabel="Liên hệ dịch vụ" />
    </PageShell>
  );
}
