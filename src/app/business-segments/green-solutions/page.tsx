import { PageShell } from "../../../components/PageShell";
import { InnerHero } from "../../../components/InnerHero";
import { IntroBlock } from "../../../components/IntroBlock";
import { InnerSubNav } from "../../../components/InnerSubNav";
import { SolutionsTabs } from "../../../components/SolutionsTabs";
import { CaseStudiesRow } from "../../../components/CaseStudiesRow";
import { imageUrls } from "../../../lib/site";
import { greenSolutions, sharedCaseStudies } from "../../../lib/segments";

export const metadata = {
  title: "Thermax Green Solutions | Bio-CNG, Renewable Energy, Build-Own-Operate, Green Hydrogen",
  description:
    "Opex-based green utilities and renewable energy solutions enabling cleaner energy transition for industries.",
};

export default function GreenSolutionsPage() {
  return (
    <PageShell>
      <InnerHero
        title="Green Solutions"
        description="Opex-based green utilities and renewable energy solutions, enabling customers to transition towards cleaner energy"
        image={imageUrls.bannerGreen}
        mobileImage={imageUrls.bannerGreenMobile}
        breadcrumb={[
          { label: "Business Portfolio", href: "#" },
          { label: "Green Solutions" },
        ]}
      />

      <InnerSubNav
        items={[
          { label: "Overview", href: "#overview" },
          { label: "Solutions", href: "#solutions" },
          { label: "Industries", href: "#industries" },
        ]}
        context="Business Portfolio"
        current="Green Solutions"
        options={[
          { label: "Industrial Products", href: "/business-segments/industrial-products" },
          { label: "Industrial Infra", href: "/business-portfolio/industrial-infrastructure" },
          { label: "Chemicals", href: "/business-portfolio/chemicals" },
        ]}
      />

      <IntroBlock
        headline={
          <>
            The Green Solutions segment delivers opex-based{" "}
            <span className="red">green utilities and renewable energy solutions</span>, enabling customers to
            transition towards cleaner energy while ensuring operational efficiency and reliability.
          </>
        }
        body={
          <p>
            This segment includes green utilities on a build-own-operate basis, bioenergy solutions (bio-CNG), renewable
            energy solutions, and green hydrogen. With contract tenures ranging from 10 to 25 years, it provides stable,
            annuity-based returns while supporting customers in their decarbonisation journey.
          </p>
        }
      />

      <SolutionsTabs items={greenSolutions} />

      <CaseStudiesRow items={sharedCaseStudies} />
    </PageShell>
  );
}
