import { PageShell } from "../../../components/PageShell";
import { InnerHero } from "../../../components/InnerHero";
import { imageUrls } from "../../../lib/site";

export const metadata = {
  title: "Awards and Recognitions | Thermax",
  description: "Awards and recognitions earned by Thermax across innovation, sustainability, and governance.",
};

const featuredAwards = [
  { image: imageUrls.award1, title: "IMD Global Family Business Award — Winner, 2023" },
  { image: imageUrls.award2, title: "Golden Peacock Award for Excellence in Corporate Governance — 2023" },
  { image: imageUrls.award3, title: "Energy Excellence Award 2025 — Outstanding Achievement in R&D and Innovation" },
  { image: imageUrls.award4, title: "AI Gamechanger Challenger Award — for Thermax EDGE Live®" },
  { image: imageUrls.award5, title: "Platinum Certification for Sustainability — Sri City Plant" },
];

const allAwards = [
  ...featuredAwards,
  { image: imageUrls.award1, title: "Dun & Bradstreet Corporate Award 2024" },
  { image: imageUrls.award2, title: "ICAI Award for Excellence in Financial Reporting 2023-24" },
  { image: imageUrls.award3, title: "FICCI Innovation Award – Sustainability Category 2023" },
  { image: imageUrls.award4, title: "ET Most Promising Brand 2024" },
  { image: imageUrls.award5, title: "Asia Pacific HRM Congress – Best HR Practices" },
];

export default function AwardsAndRecognitionsPage() {
  return (
    <PageShell>
      <InnerHero
        title="Awards and Recognitions"
        image={imageUrls.bannerAwards}
        mobileImage={imageUrls.bannerAwardsMobile}
        breadcrumb={[
          { label: "About Us", href: "/company-overview" },
          { label: "Awards and Recognitions" },
        ]}
      />

      <section className="awards-section" data-section="awards-list">
        <div className="section-title-block" data-reveal>
          <h2>
            Recognised for <span className="red">our work</span>
          </h2>
        </div>
        <div className="awards-grid" data-reveal>
          {allAwards.map((award, idx) => (
            <div className="award-card" key={`${award.title}-${idx}`}>
              <img src={award.image} alt={award.title} />
              <p>{award.title}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
