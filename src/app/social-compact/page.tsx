import { PageShell } from "../../components/PageShell";
import { InnerHero } from "../../components/InnerHero";
import { IntroBlock } from "../../components/IntroBlock";
import { imageUrls } from "../../lib/site";

export const metadata = {
  title: "Social Compact | Thermax",
  description: "Thermax's social commitments to people, partners, and communities.",
};

const compactPillars = [
  {
    title: "Employees",
    body: "Open culture, fair compensation, lifelong learning, and a workplace where everyone is treated with respect.",
  },
  {
    title: "Customers",
    body: "Reliable, sustainable solutions delivered with care — and partnerships that endure beyond the contract.",
  },
  {
    title: "Suppliers",
    body: "Mutual prosperity, ethical sourcing, and capability-building across our supply chain.",
  },
  {
    title: "Communities",
    body: "Education, health, and local livelihood programmes that strengthen the places where we live and work.",
  },
];

export default function SocialCompactPage() {
  return (
    <PageShell>
      <InnerHero
        title="Social Compact"
        description="Our promise to the people, partners, and communities we serve."
        image={imageUrls.bannerSocial}
        mobileImage={imageUrls.bannerSocialMobile}
        breadcrumb={[
          { label: "Sustainability", href: "/sustainability" },
          { label: "Social Compact" },
        ]}
      />

      <IntroBlock
        headline={
          <>
            Our <span className="red">social compact</span> sets out the promises we make — and how we keep them.
          </>
        }
        body={
          <>
            <p>
              The Thermax Social Compact codifies our commitments to four critical stakeholder groups: employees,
              customers, suppliers, and communities. Every commitment is concrete, measurable, and tied to leaders who
              are accountable for keeping it.
            </p>
          </>
        }
      />

      <section className="feature-cards" data-section="compact-pillars">
        <div className="section-title-block" data-reveal>
          <h2>
            The four <span className="red">commitments</span>
          </h2>
        </div>
        <div className="feature-cards-grid" data-reveal>
          {compactPillars.map((p) => (
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
