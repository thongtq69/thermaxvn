import type { Metadata } from "next";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { DetailContent } from "../../../components/DetailContent";
import { InnerHero } from "../../../components/InnerHero";
import { InnerSubNav } from "../../../components/InnerSubNav";
import { OfficialProductLandingContent } from "../../../components/OfficialProductLandingContent";
import { PageShell } from "../../../components/PageShell";
import {
  getLocalizedProductDetail,
  getProductDetail,
  productDetailPages,
} from "../../../lib/productContent";
import type { Locale } from "../../../lib/i18n";
import { getOfficialProductLanding } from "../../../lib/officialProductLanding";

type ProductPageProps = {
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
    products: "Sản phẩm",
    contact: "Trao đổi với Thermax Vietnam",
    challenges: "Thách thức",
    industries: "Ngành ứng dụng",
    caseStudies: "Nghiên cứu điển hình",
    resources: "Tài nguyên",
    highlights: "Điểm nổi bật",
    applications: "Ứng dụng tiêu biểu",
    relatedTitle: "Các nội dung liên quan",
  },
  en: {
    home: "Home",
    products: "Products",
    contact: "Talk to Thermax Vietnam",
    challenges: "Challenges",
    industries: "Industries",
    caseStudies: "Case studies",
    resources: "Resources",
    highlights: "Highlights",
    applications: "Typical applications",
    relatedTitle: "Related solutions",
  },
} satisfies Record<Locale, Record<string, string>>;

export function generateStaticParams() {
  return productDetailPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params, searchParams }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const locale = await localeFromRequest(await searchParams);
  const page = getLocalizedProductDetail(slug, locale);

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

export default async function ProductDetailPage({ params, searchParams }: ProductPageProps) {
  const { slug } = await params;
  const locale = await localeFromRequest(await searchParams);
  const rawPage = getProductDetail(slug);
  const page = getLocalizedProductDetail(slug, locale);
  const officialLanding = getOfficialProductLanding(slug, locale);

  if (!page || !rawPage) notFound();

  const related = productDetailPages
    .filter((item) => item.category === rawPage.category && item.slug !== rawPage.slug)
    .slice(0, 6);
  const breadcrumb =
    page.category === page.title
      ? [{ label: detailLabels[locale].products, href: "/business-segments/industrial-products" }, { label: page.title }]
      : [
          { label: detailLabels[locale].products, href: "/business-segments/industrial-products" },
          { label: page.category },
          { label: page.title },
        ];

  if (officialLanding) {
    const subnavItems = [
      { label: locale === "vi" ? "Tổng quan" : "Overview", href: "#overview" },
      ...(officialLanding.challenges?.length
        ? [{ label: detailLabels[locale].challenges, href: "#challenges" }]
        : []),
      { label: officialLanding.productHeading, href: "#products" },
      ...(officialLanding.services?.length
        ? [{ label: officialLanding.serviceHeading ?? (locale === "vi" ? "Dịch vụ" : "Services"), href: "#services" }]
        : []),
      ...(officialLanding.features?.length
        ? [
            {
              label: officialLanding.featureHeading ?? (locale === "vi" ? "Năng lực nổi bật" : "Featured capabilities"),
              href: "#featured-capabilities",
            },
          ]
        : []),
      ...(officialLanding.industries?.length
        ? [{ label: detailLabels[locale].industries, href: "#industries" }]
        : []),
      ...(officialLanding.caseStudies?.length
        ? [{ label: detailLabels[locale].caseStudies, href: "#case-studies" }]
        : []),
      ...(officialLanding.resources?.length
        ? [{ label: detailLabels[locale].resources, href: "#resources" }]
        : []),
    ];

    return (
      <PageShell>
        <InnerHero
          title={officialLanding.title}
          description={officialLanding.heroDescription}
          image={officialLanding.image}
          mobileImage={officialLanding.mobileImage}
          homeLabel={detailLabels[locale].home}
          breadcrumb={[
            { label: detailLabels[locale].products, href: "/business-segments/industrial-products" },
            { label: officialLanding.title },
          ]}
        />
        <InnerSubNav
          items={subnavItems}
          cta={{ label: locale === "vi" ? "Gửi yêu cầu" : "Submit your enquiry", href: "/contact-us" }}
        />
        <OfficialProductLandingContent
          page={officialLanding}
          labels={{
            office: "Thermax Vietnam Office",
            contact: detailLabels[locale].contact,
            discover: locale === "vi" ? "Khám phá thêm" : "Discover more",
            challenges: detailLabels[locale].challenges,
            industries: detailLabels[locale].industries,
            caseStudies: detailLabels[locale].caseStudies,
            resources: detailLabels[locale].resources,
          }}
        />
      </PageShell>
    );
  }

  return (
    <PageShell>
      <InnerHero
        title={page.title}
        description={page.description}
        image={page.image}
        mobileImage={page.mobileImage}
        homeLabel={detailLabels[locale].home}
        breadcrumb={breadcrumb}
      />

      <DetailContent
        page={page}
        related={related.map((item) => getLocalizedProductDetail(item.slug, locale) ?? item)}
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
