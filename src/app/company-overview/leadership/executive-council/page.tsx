import { PageShell } from "../../../../components/PageShell";
import { InnerHero } from "../../../../components/InnerHero";
import { LeadershipGrid } from "../../../../components/LeadershipGrid";
import { executiveCouncil } from "../../../../lib/leadership";
import { imageUrls } from "../../../../lib/site";

export const metadata = {
  title: "Executive Council | Thermax",
  description: "The Executive Council of Thermax — leaders driving our businesses, technology, and operations.",
};

export default function ExecutiveCouncilPage() {
  return (
    <PageShell>
      <InnerHero
        title="Executive Council"
        image={imageUrls.bannerEC}
        mobileImage={imageUrls.bannerECMobile}
        breadcrumb={[
          { label: "About Us", href: "/company-overview" },
          { label: "Leadership" },
          { label: "Executive Council" },
        ]}
      />

      <section className="team-section" data-section="ec">
        <div className="section-title-block" data-reveal>
          <h2>
            Executive <span className="red">Council</span>
          </h2>
        </div>
        <LeadershipGrid items={executiveCouncil} />
      </section>
    </PageShell>
  );
}
