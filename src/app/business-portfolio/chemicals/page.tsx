import { PageShell } from "../../../components/PageShell";
import { InnerHero } from "../../../components/InnerHero";
import { IntroBlock } from "../../../components/IntroBlock";
import { InnerSubNav } from "../../../components/InnerSubNav";
import { SolutionsTabs } from "../../../components/SolutionsTabs";
import { imageUrls } from "../../../lib/site";
import { chemicalSolutions } from "../../../lib/segments";

export const metadata = {
  title: "Thermax Performance Engineered Chemicals | Tulsion, Construction & Specialty",
  description:
    "Performance-engineered chemical solutions for product performance, process efficiency, and structure repair & maintenance.",
};

export default function ChemicalsPage() {
  return (
    <PageShell>
      <InnerHero
        title="Performance Engineered Chemicals"
        description="Offering performance-engineered chemical solutions for product performance, process efficiency, and structure repair & maintenance"
        image={imageUrls.bannerChemicals}
        mobileImage={imageUrls.bannerChemicalsMobile}
        breadcrumb={[
          { label: "Business Portfolio", href: "#" },
          { label: "Chemicals" },
        ]}
      />

      <InnerSubNav
        items={[
          { label: "Overview", href: "#overview" },
          { label: "Solutions", href: "#solutions" },
          { label: "Industries", href: "#industries" },
        ]}
        context="Business Portfolio"
        current="Chemicals"
        options={[
          { label: "Industrial Products", href: "/business-segments/industrial-products" },
          { label: "Industrial Infra", href: "/business-portfolio/industrial-infrastructure" },
          { label: "Green Solutions", href: "/business-segments/green-solutions" },
        ]}
      />

      <IntroBlock
        headline={
          <>
            Thermax&apos;s Chemicals business delivers{" "}
            <span className="red">performance-engineered solutions</span> that enhance industrial processes and optimise
            product performance across a wide range of sectors.
          </>
        }
        body={
          <p>
            Recognised as a leading manufacturer and exporter of Tulsion® ion exchange resins, the business also
            provides advanced solutions in fuel and water treatment, oil field chemicals, and a comprehensive range of
            construction chemicals, including concrete admixtures, grouts and anchors, repair and rehabilitation,
            protective coatings, waterproofing, industrial flooring, sealants, and adhesives.
          </p>
        }
      />

      <SolutionsTabs items={chemicalSolutions} />
    </PageShell>
  );
}
