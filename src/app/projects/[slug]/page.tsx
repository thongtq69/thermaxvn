import type { Metadata } from "next";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { InnerHero } from "../../../components/InnerHero";
import { PageShell } from "../../../components/PageShell";
import { ProjectDetailContent } from "../../../components/ProjectDetailContent";
import type { Locale } from "../../../lib/i18n";
import { getProjectDetail, projectDetails } from "../../../lib/projectDetails";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ lang?: string }>;
};

async function localeFromRequest(params?: { lang?: string }): Promise<Locale> {
  if (params?.lang === "en" || params?.lang === "vi") return params.lang;
  return (await cookies()).get("thermax-language")?.value === "en" ? "en" : "vi";
}

export function generateStaticParams() {
  return projectDetails.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params, searchParams }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectDetail(slug);
  const locale = await localeFromRequest(await searchParams);

  if (!project) return { title: "Dự án | Thermax Vietnam" };

  return {
    title: `${project.title[locale]} | Thermax Vietnam`,
    description: project.summary[locale],
  };
}

export default async function ProjectPage({ params, searchParams }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectDetail(slug);
  const locale = await localeFromRequest(await searchParams);

  if (!project) notFound();

  const labels = locale === "vi"
    ? { home: "Trang chủ", projects: "Dự án" }
    : { home: "Home", projects: "Projects" };

  return (
    <PageShell>
      <InnerHero
        title={project.title[locale]}
        description={project.summary[locale]}
        image={project.image}
        homeLabel={labels.home}
        breadcrumb={[
          { label: labels.projects, href: "/business-portfolio/industrial-infrastructure#solutions" },
          { label: project.title[locale] },
        ]}
      />
      <ProjectDetailContent project={project} locale={locale} />
    </PageShell>
  );
}

