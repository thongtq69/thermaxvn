import { PageShell } from "../../../components/PageShell";
import { InnerHero } from "../../../components/InnerHero";
import { IntroBlock } from "../../../components/IntroBlock";
import { GlobalPresenceMap } from "../../../components/GlobalPresenceMap";
import { imageUrls } from "../../../lib/site";

export const metadata = {
  title: "Global Expertise. Local Commitment. | Thermax Global Presence",
  description: "Thermax serves customers in 90+ countries through 45+ offices and 16 manufacturing facilities.",
};

export default function GlobalPresencePage() {
  return (
    <PageShell>
      <InnerHero
        title="Global Expertise. Local Commitment."
        image={imageUrls.bannerGlobal}
        mobileImage={imageUrls.bannerGlobalMobile}
        breadcrumb={[
          { label: "About Us", href: "/company-overview" },
          { label: "Global Presence" },
        ]}
      />

      <IntroBlock
        headline={
          <>
            From Pune to <span className="red">Pittsburgh, Jakarta to Johannesburg</span> — engineering local
            outcomes from a global platform.
          </>
        }
        body={
          <>
            <p>
              Our customers operate in some of the most demanding industrial environments on the planet. We meet them
              where they are — through a global network of offices, factories, and service teams that share a single
              commitment: to engineer outcomes that matter.
            </p>
          </>
        }
        stats={[
          { value: "90+", label: "Countries" },
          { value: "45+", label: "Offices" },
          { value: "16", label: "Manufacturing facilities" },
          { value: "5", label: "Continents" },
        ]}
      />

      <section className="global-presence-map-section" data-section="regions">
        <div className="section-title-block" data-reveal>
          <h2>
            Where we <span className="red">work</span>
          </h2>
        </div>
        <GlobalPresenceMap />
      </section>
    </PageShell>
  );
}
