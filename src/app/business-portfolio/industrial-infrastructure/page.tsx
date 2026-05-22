import { PageShell } from "../../../components/PageShell";
import { InnerHero } from "../../../components/InnerHero";
import { IntroBlock } from "../../../components/IntroBlock";
import { InnerSubNav } from "../../../components/InnerSubNav";
import { ProjectShowcase } from "../../../components/ProjectShowcase";
import { CaseStudiesRow } from "../../../components/CaseStudiesRow";
import { imageUrls } from "../../../lib/site";
import { sharedCaseStudies } from "../../../lib/segments";
import { industrialInfrastructureProjects } from "../../../lib/projects";

export const metadata = {
  title: "Thermax Industrial Infrastructure | Turnkey EPC, Boilers and Energy Solutions",
  description: "Integrated Industrial Solutions for Energy Efficiency, Process Optimization & Sustainability",
};

export default function IndustrialInfrastructurePage() {
  return (
    <PageShell>
      <InnerHero
        title="Industrial Infrastructure"
        description="Integrated Industrial Solutions for Energy Efficiency, Process Optimization & Sustainability"
        image={imageUrls.bannerInfra}
        mobileImage={imageUrls.bannerInfraMobile}
        breadcrumb={[
          { label: "Business Portfolio", href: "#" },
          { label: "Industrial Infrastructure" },
        ]}
      />

      <InnerSubNav
        items={[
          { label: "Overview", href: "#overview" },
          { label: "Projects", href: "#solutions" },
          { label: "Case Studies", href: "#cases" },
        ]}
        context="Business Portfolio"
        current="Industrial Infra"
        options={[
          { label: "Industrial Products", href: "/business-segments/industrial-products" },
          { label: "Green Solutions", href: "/business-segments/green-solutions" },
          { label: "Chemicals", href: "/business-portfolio/chemicals" },
        ]}
      />

      <IntroBlock
        headline={
          <>
            The Industrial Infra segment includes <span className="red">customised and bespoke solutions</span> that
            are often large in scale and tailored to meet our customers&apos; specific requirements.
          </>
        }
        body={
          <p>
            Along with turnkey EPC offerings, this also includes our large boilers and heaters vertical. The Industrial
            Infra segment supports industries with utility solutions tailored to meet their specific steam and power
            requirements.
          </p>
        }
      />

      <ProjectShowcase items={industrialInfrastructureProjects} />

      <CaseStudiesRow items={sharedCaseStudies} />
    </PageShell>
  );
}
