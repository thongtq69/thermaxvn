import { PageShell } from "../../../components/PageShell";
import { InnerHero } from "../../../components/InnerHero";
import { imageUrls } from "../../../lib/site";

export const metadata = {
  title: "Policies & Certifications | Thermax",
  description: "Corporate policies and international certifications upheld at Thermax.",
};

const policies = [
  { title: "Code of Conduct", href: "#" },
  { title: "Whistleblower Policy", href: "#" },
  { title: "Supplier Code of Conduct", href: "#" },
  { title: "Anti-Bribery and Anti-Corruption Policy", href: "#" },
  { title: "Health, Safety, and Environment Policy", href: "#" },
  { title: "Information Security Policy", href: "#" },
  { title: "Privacy Policy", href: "#" },
  { title: "Sustainability Policy", href: "#" },
  { title: "Human Rights Policy", href: "#" },
  { title: "Diversity, Equity, and Inclusion Policy", href: "#" },
];

const certifications = [
  "ISO 9001 (Quality Management)",
  "ISO 14001 (Environment)",
  "ISO 45001 (Occupational Health & Safety)",
  "ISO 27001 (Information Security)",
  "ISO 50001 (Energy Management)",
];

export default function PoliciesPage() {
  return (
    <PageShell>
      <InnerHero
        title="Policies & Certifications"
        image={imageUrls.bannerPolicies}
        mobileImage={imageUrls.bannerPoliciesMobile}
        breadcrumb={[
          { label: "About Us", href: "/company-overview" },
          { label: "Policies & Certifications" },
        ]}
      />

      <section className="text-section" data-section="policies-list">
        <h2>
          Corporate <span className="red">policies</span>
        </h2>
        <ul className="shareholder-info-list" style={{ color: "#082033" }}>
          {policies.map((p) => (
            <li key={p.title} style={{ borderColor: "#d9e2e8" }}>
              <a href={p.href} style={{ color: "#082033" }}>
                <span>{p.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="awards-section" data-section="certifications">
        <div className="section-title-block" data-reveal>
          <h2>
            Global <span className="red">certifications</span>
          </h2>
        </div>
        <div className="feature-cards-grid" style={{ maxWidth: 1360, margin: "0 auto" }} data-reveal>
          {certifications.map((c) => (
            <div className="feature-card" key={c} style={{ padding: "30px 32px" }}>
              <h3 style={{ margin: 0 }}>{c}</h3>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
