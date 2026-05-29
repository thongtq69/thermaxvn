import type { Metadata } from "next";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { DetailContent } from "../../../components/DetailContent";
import { InnerHero } from "../../../components/InnerHero";
import { PageShell } from "../../../components/PageShell";
import { getLocalizedServiceDetail, getServiceDetail, serviceDetailPages } from "../../../lib/productContent";
import type { Locale } from "../../../lib/i18n";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ lang?: string }>;
};

async function localeFromRequest(params?: { lang?: string }): Promise<Locale> {
  if (params?.lang === "en" || params?.lang === "vi") return params.lang;

  const savedLocale = (await cookies()).get("thermax-language")?.value;
  return savedLocale === "en" ? "en" : "vi";
}

const detailLabels = {
  vi: {
    home: "Trang chủ",
    services: "Dịch vụ",
    contact: "Liên hệ dịch vụ",
    highlights: "Điểm nổi bật",
    applications: "Ứng dụng tiêu biểu",
    relatedTitle: "Các nội dung liên quan",
  },
  en: {
    home: "Home",
    services: "Services",
    contact: "Service contact",
    highlights: "Highlights",
    applications: "Typical applications",
    relatedTitle: "Related services",
  },
} satisfies Record<Locale, Record<string, string>>;

export function generateStaticParams() {
  return serviceDetailPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params, searchParams }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const locale = await localeFromRequest(await searchParams);
  const page = getLocalizedServiceDetail(slug, locale);

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

export default async function ServiceDetailPage({ params, searchParams }: ServicePageProps) {
  const { slug } = await params;
  const locale = await localeFromRequest(await searchParams);
  const rawPage = getServiceDetail(slug);
  const page = getLocalizedServiceDetail(slug, locale);

  if (!page || !rawPage) notFound();

  const related = serviceDetailPages.filter((item) => item.slug !== rawPage.slug).slice(0, 4);

  return (
    <PageShell>
      <InnerHero
        title={page.title}
        description={page.description}
        image={page.image}
        homeLabel={detailLabels[locale].home}
        breadcrumb={[
          { label: detailLabels[locale].services, href: "/sustainability" },
          { label: page.title },
        ]}
      />

      <DetailContent
        page={page}
        related={related.map((item) => getLocalizedServiceDetail(item.slug, locale) ?? item)}
        relatedBaseHref="/services"
        contactLabel={detailLabels[locale].contact}
        labels={{
          highlights: detailLabels[locale].highlights,
          applications: detailLabels[locale].applications,
          relatedTitle: detailLabels[locale].relatedTitle,
        }}
      />
    </PageShell>
  );
}
