import { PageShell } from "../../../components/PageShell";
import { InnerHero } from "../../../components/InnerHero";
import { IntroBlock } from "../../../components/IntroBlock";
import { imageUrls } from "../../../lib/site";

export const metadata = {
  title: "Global Expertise. Local Commitment. | Thermax Global Presence",
  description: "Thermax serves customers in 90+ countries through 45+ offices and 16 manufacturing facilities.",
};

const regions = [
  {
    name: "Americas",
    body: "Sales and service across North and South America.",
    href: "https://www.thermaxglobal.com/global-presence/americas",
  },
  {
    name: "Europe",
    body: "Manufacturing and engineering across Denmark, Poland, Germany.",
    href: "https://www.thermaxglobal.com/global-presence/europe",
  },
  {
    name: "Sub-Saharan Africa",
    body: "Sales and service teams supporting customers across Africa.",
    href: "https://www.thermaxglobal.com/global-presence/sub-saharan-africa",
  },
  {
    name: "Middle East & North Africa",
    body: "Strong presence in cement, steel, and oil & gas customers.",
    href: "https://www.thermaxglobal.com/global-presence/mena",
  },
  {
    name: "Indonesia",
    body: "Manufacturing facility and sales team serving the archipelago.",
    href: "https://www.thermaxglobal.com/global-presence/indonesia",
  },
  {
    name: "Thailand",
    body: "Sales, service, and operations support for Thai industries.",
    href: "https://www.thermaxglobal.com/global-presence/thailand",
  },
  {
    name: "Vietnam",
    body: "Growing presence supporting Vietnam's industrial expansion.",
    href: "https://www.thermaxglobal.com/global-presence/vietnam",
  },
  {
    name: "Other SEA Countries",
    body: "Coverage across Singapore, Malaysia, Philippines, and beyond.",
    href: "https://www.thermaxglobal.com/global-presence/other-sea-countries",
  },
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
            <a className="feature-card" key={r.name} href={r.href} target="_blank" rel="noreferrer">
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
