import { PageShell } from "../../../../components/PageShell";
import { InnerHero } from "../../../../components/InnerHero";
import { LeadershipGrid } from "../../../../components/LeadershipGrid";
import { boardOfDirectors } from "../../../../lib/leadership";
import { imageUrls } from "../../../../lib/site";

export const metadata = {
  title: "Board of Directors | Thermax",
  description: "Meet the Thermax Board of Directors leading our purpose-driven journey.",
};

export default function BoardOfDirectorsPage() {
  return (
    <PageShell>
      <InnerHero
        title="Board of Directors"
        image={imageUrls.bannerBoard}
        mobileImage={imageUrls.bannerBoardMobile}
        breadcrumb={[
          { label: "About Us", href: "/company-overview" },
          { label: "Leadership" },
          { label: "Board of Directors" },
        ]}
      />

      <section className="team-section" data-section="board">
        <div className="section-title-block" data-reveal>
          <h2>
            Our <span className="red">Board</span>
          </h2>
        </div>
        <LeadershipGrid items={boardOfDirectors} />
      </section>
    </PageShell>
  );
}
