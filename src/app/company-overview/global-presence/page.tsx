import { PageShell } from "../../../components/PageShell";
import { InnerHero } from "../../../components/InnerHero";
import { IntroBlock } from "../../../components/IntroBlock";
import { imageUrls } from "../../../lib/site";

export const metadata = {
  title: "Global Expertise. Local Commitment. | Thermax Global Presence",
  description: "Thermax serves customers in 90+ countries through 45+ offices and 16 manufacturing facilities.",
};

const regions = [
  { name: "Americas", body: "Sales and service across North and South America." },
  { name: "Europe", body: "Manufacturing and engineering across Denmark, Poland, Germany." },
  { name: "Sub-Saharan Africa", body: "Sales and service teams supporting customers across Africa." },
  { name: "Middle East & North Africa", body: "Strong presence in cement, steel, and oil & gas customers." },
  { name: "Indonesia", body: "Manufacturing facility and sales team serving the archipelago." },
  { name: "Thailand", body: "Sales, service, and operations support for Thai industries." },
  { name: "Vietnam", body: "Growing presence supporting Vietnam's industrial expansion." },
  { name: "Other SEA Countries", body: "Coverage across Singapore, Malaysia, Philippines, and beyond." },
];

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

      <section className="feature-cards" data-section="regions">
        <div className="section-title-block" data-reveal>
          <h2>
            Where we <span className="red">work</span>
          </h2>
        </div>
        <div className="feature-cards-grid" data-reveal>
          {regions.map((r) => (
            <a className="feature-card" key={r.name} href={`/global-presence/${r.name.toLowerCase().replace(/[^a-z]+/g, "-")}`}>
              <div className="feature-card-body">
                <h3>{r.name}</h3>
                <p>{r.body}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
