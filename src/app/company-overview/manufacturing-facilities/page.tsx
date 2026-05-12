import { PageShell } from "../../../components/PageShell";
import { InnerHero } from "../../../components/InnerHero";
import { IntroBlock } from "../../../components/IntroBlock";
import { imageUrls } from "../../../lib/site";

export const metadata = {
  title: "Manufacturing Facilities | Thermax",
  description: "Delivering excellence across India and worldwide, certified to international standards.",
};

const facilities = [
  {
    name: "Chinchwad, Pune (India)",
    body: "Air pollution control systems and process equipment manufacturing.",
  },
  {
    name: "Sri City (India)",
    body: "Integrated factory for absorption chillers, large boilers, and heaters.",
  },
  { name: "Savli (India)", body: "Cooling and heating systems with advanced testing facilities." },
  { name: "Mundra (India)", body: "Boilers and pressure parts for utility-scale projects." },
  { name: "Solapur (India)", body: "Engineered chemicals and specialty products." },
  { name: "Indonesia", body: "Industrial boilers for the Southeast Asian market." },
  { name: "Denmark", body: "Subsidiary delivering advanced cooling and heating technology." },
  { name: "Poland", body: "Manufacturing for European customers." },
  { name: "Germany", body: "Specialty engineered solutions for European energy markets." },
];

export default function ManufacturingFacilitiesPage() {
  return (
    <PageShell>
      <InnerHero
        title="Manufacturing Facilities"
        description="Delivering excellence across India and worldwide, certified to international standards"
        image={imageUrls.bannerManufacturing}
        mobileImage={imageUrls.bannerManufacturingMobile}
        breadcrumb={[
          { label: "About Us", href: "/company-overview" },
          { label: "Manufacturing Facilities" },
        ]}
      />

      <IntroBlock
        headline={
          <>
            <span className="red">16 manufacturing facilities</span> across India and overseas, engineered for global
            scale.
          </>
        }
        body={
          <>
            <p>
              Our manufacturing footprint spans 12 facilities in India and four overseas — Indonesia, Denmark, Poland,
              and Germany. Each facility is certified to international quality, safety, and environmental standards.
            </p>
            <p>
              Together, these factories deliver air pollution control systems, boilers, chillers, water and waste
              treatment equipment, and specialty chemicals to customers in over 90 countries.
            </p>
          </>
        }
        stats={[
          { value: "12", label: "Facilities in India" },
          { value: "4", label: "Overseas facilities" },
          { value: "90+", label: "Countries served" },
          { value: "ISO", label: "Certified globally" },
        ]}
      />

      <section className="feature-cards" data-section="facility-list">
        <div className="section-title-block" data-reveal>
          <h2>
            Our <span className="red">facilities</span>
          </h2>
        </div>
        <div className="feature-cards-grid" data-reveal>
          {facilities.map((f) => (
            <div className="feature-card" key={f.name}>
              <div className="feature-card-body">
                <h3>{f.name}</h3>
                <p>{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
