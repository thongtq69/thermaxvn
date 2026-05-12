import { PageShell } from "../../../components/PageShell";
import { InnerHero } from "../../../components/InnerHero";
import { imageUrls } from "../../../lib/site";

export const metadata = {
  title: "A Timeless Legacy | Thermax Limited",
  description: "Built on trust, powered by people, and committed to the future.",
};

const milestones = [
  {
    year: "1966",
    title: "The journey begins",
    body: "A. S. Bhathena founds Wanson, the company that would become Thermax.",
  },
  {
    year: "1980",
    title: "Going public",
    body: "Thermax Limited is incorporated and lists on Indian stock exchanges.",
  },
  {
    year: "1991",
    title: "Going global",
    body: "Thermax sets up its first international subsidiary, beginning a global expansion.",
  },
  {
    year: "1995",
    title: "Innovation focus",
    body: "Establishment of dedicated R&D division to drive next-gen energy solutions.",
  },
  {
    year: "2010",
    title: "Pune campus",
    body: "Inauguration of the integrated manufacturing campus at Sri City, Andhra Pradesh.",
  },
  {
    year: "2018",
    title: "Crossing INR 5,000 crore",
    body: "Company crosses INR 5,000 crore in consolidated revenue.",
  },
  {
    year: "2022",
    title: "Green Solutions launch",
    body: "Dedicated Green Solutions business segment launched with Build-Own-Operate model.",
  },
  {
    year: "2024",
    title: "Crossing INR 10,000 crore",
    body: "Group revenue surpasses INR 10,000 crore on the strength of clean-energy demand.",
  },
];

export default function LegacyMilestonePage() {
  return (
    <PageShell>
      <InnerHero
        title="A Timeless Legacy"
        description="Built on trust, powered by people, and committed to the future."
        image={imageUrls.bannerLegacy}
        mobileImage={imageUrls.bannerLegacyMobile}
        breadcrumb={[
          { label: "About Us", href: "/company-overview" },
          { label: "Legacy Milestones" },
        ]}
      />

      <section className="text-section" data-section="legacy-intro">
        <h2>
          Six decades of <span className="red">purposeful progress</span>
        </h2>
        <p>
          From a single product offering to a USD ~1.25 Billion enterprise spanning 90+ countries, the Thermax journey
          has been shaped by the conviction that engineering can serve a higher purpose.
        </p>
      </section>

      <section className="feature-cards" data-section="legacy-timeline">
        <div className="feature-cards-grid" data-reveal>
          {milestones.map((m) => (
            <div className="feature-card" key={m.year}>
              <div className="feature-card-body">
                <strong
                  style={{
                    fontSize: 36,
                    fontWeight: 600,
                    background: "linear-gradient(90deg, #c8102e 0%, #f08a22 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                    display: "block",
                    marginBottom: 6,
                  }}
                >
                  {m.year}
                </strong>
                <h3>{m.title}</h3>
                <p>{m.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
