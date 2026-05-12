import { PageShell } from "../../../components/PageShell";
import { InnerHero } from "../../../components/InnerHero";
import { IntroBlock } from "../../../components/IntroBlock";
import { InnerSubNav } from "../../../components/InnerSubNav";
import { SolutionsTabs } from "../../../components/SolutionsTabs";
import { CaseStudiesRow } from "../../../components/CaseStudiesRow";
import { imageUrls } from "../../../lib/site";
import { industrialProductsSolutions, sharedCaseStudies } from "../../../lib/segments";

export const metadata = {
  title: "Thermax Industrial Products | Heating, Cooling, Water, Air Pollution Control and Steam engineering solutions",
  description:
    "Integrated industrial solutions for energy efficiency, process optimisation, and sustainability needs.",
};

export default function IndustrialProductsPage() {
  return (
    <PageShell>
      <InnerHero
        title="Industrial Products"
        description="Integrated industrial solutions for energy efficiency, process optimisation, and sustainability needs"
        image={imageUrls.bannerPortfolio}
        mobileImage={imageUrls.bannerPortfolioMobile}
        breadcrumb={[
          { label: "Business Portfolio", href: "#" },
          { label: "Industrial Products" },
        ]}
      />

      <InnerSubNav
        items={[
          { label: "Overview", href: "#overview" },
          { label: "Solutions", href: "#solutions" },
          { label: "Industries", href: "#industries" },
        ]}
        context="Business Portfolio"
        current="Industrial Products"
        options={[
          { label: "Industrial Infra", href: "/business-portfolio/industrial-infrastructure" },
          { label: "Green Solutions", href: "/business-segments/green-solutions" },
          { label: "Chemicals", href: "/business-portfolio/chemicals" },
        ]}
      />

      <IntroBlock
        headline={
          <>
            Our Industrial Products segment is designed to address three critical challenges industries face today:
            <span className="red"> combatting climate change, securing clean energy, and managing water scarcity.</span>
          </>
        }
        body={
          <>
            <p>
              Through our four key businesses – Air Pollution Control, Process Heat Solutions, Cooling and Heating
              Solutions, and Water &amp; Wastewater Management Solutions, we provide cutting-edge solutions that drive
              efficiency, sustainability, and regulatory compliance. From advanced emission control systems that ensure
              cleaner air to energy-efficient heating and cooling solutions that optimise industrial processes, and
              water and wastewater management technologies that promote conservation and reuse, we enable businesses to
              operate with minimal environmental impact.
            </p>
            <p>
              These solutions are powered with AI/ML based digital platform, Thermax EDGE Live®, for real-time insights
              and data-driven decision-making, ensuring peak performance and reliability.
            </p>
          </>
        }
      />

      <SolutionsTabs items={industrialProductsSolutions} />

      <CaseStudiesRow items={sharedCaseStudies} />
    </PageShell>
  );
}
