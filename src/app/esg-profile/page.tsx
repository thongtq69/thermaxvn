import { PageShell } from "../../components/PageShell";
import { InnerHero } from "../../components/InnerHero";
import { IntroBlock } from "../../components/IntroBlock";
import { imageUrls } from "../../lib/site";

export const metadata = {
  title: "ESG Profile | Thermax",
  description: "Thermax's ESG performance and reports — environment, social, and governance disclosures.",
};

const esgPillars = [
  {
    title: "Environment",
    body: "Net-zero roadmap, water-positive manufacturing, circular waste management, biodiversity programmes.",
  },
  {
    title: "Social",
    body: "Employee wellness, diversity & inclusion, supplier responsibility, community partnerships.",
  },
  {
    title: "Governance",
    body: "Board diversity, ethics, anti-corruption framework, transparent disclosure aligned with SEBI BRSR.",
  },
];

export default function EsgProfilePage() {
  return (
    <PageShell>
      <InnerHero
        title="ESG Profile"
        description="Environmental, social, and governance commitments aligned with global frameworks."
        image={imageUrls.bannerSustain}
        mobileImage={imageUrls.bannerSustainMobile}
        breadcrumb={[
          { label: "Sustainability", href: "/sustainability" },
          { label: "ESG Profile" },
        ]}
      />

      <IntroBlock
        headline={
          <>
            <span className="red">Responsible growth</span> measured, disclosed, and continuously improved.
          </>
        }
        body={
          <>
            <p>
              Our ESG profile reflects how we balance ambition for growth with the discipline of measurement. We
              publish our progress through annual integrated reports and the BRSR framework prescribed by SEBI.
            </p>
          </>
        }
      />

      <section className="feature-cards" data-section="esg-pillars">
        <div className="section-title-block" data-reveal>
          <h2>
            Our <span className="red">three pillars</span>
          </h2>
        </div>
        <div className="feature-cards-grid" data-reveal>
          {esgPillars.map((p) => (
            <div className="feature-card" key={p.title}>
              <div className="feature-card-body">
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
