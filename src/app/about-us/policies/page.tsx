import { PageShell } from "../../../components/PageShell";
import { InnerHero } from "../../../components/InnerHero";
import { imageUrls } from "../../../lib/site";

export const metadata = {
  title: "Policies & Certifications | Thermax",
  description: "Corporate policies and international certifications upheld at Thermax.",
};

const policies = [
  { title: "Corporate Social Responsibility Policy", href: "https://www.thermaxglobal.com/sites/default/files/2026-01/CSR-Policy-Dec-14-18.pdf" },
  { title: "Privacy Policy", href: "https://www.thermaxglobal.com/sites/default/files/2026-01/Thermax-PDPF-Policy.pdf" },
  { title: "Drugs & Alcohol Policy", href: "https://www.thermaxglobal.com/sites/default/files/2026-01/Drugs-and-Alcohol-Policy.pdf" },
  { title: "OHSE Policy", href: "https://www.thermaxglobal.com/sites/default/files/2026-01/Thermax-OHSE-Policy-2020.pdf" },
  { title: "Health Policy", href: "https://www.thermaxglobal.com/sites/default/files/2026-01/health-policy.pdf" },
  { title: "Quality Policy", href: "https://www.thermaxglobal.com/sites/default/files/2026-01/quality-policy.pdf" },
  { title: "Whistleblower Policy", href: "https://www.thermaxglobal.com/sites/default/files/2026-01/Whistlerblower-Policy.pdf" },
  { title: "Prevention of Sexual Harassment Policy", href: "https://www.thermaxglobal.com/sites/default/files/2026-01/Prevention-of-Sexual-Harassment-at-the-Workplace.pdf" },
  { title: "Sustainability Policy", href: "https://www.thermaxglobal.com/sites/default/files/2026-01/Sustainability-Policy-June-2023.pdf" },
  { title: "Sustainable Sourcing Policy", href: "https://www.thermaxglobal.com/sites/default/files/2026-01/Thermax-Group-Sustainable-Sourcing-Policy.pdf" },
  { title: "Code of Conduct for Thermax Employees", href: "https://www.thermaxglobal.com/sites/default/files/2025-12/Code-of-Conduct-for-Thermax-Employees.pdf" },
  { title: "Code of Conduct for Supply Chain Partners", href: "https://www.thermaxglobal.com/sites/default/files/2025-12/Thermax-Code-of-Conduct-Alt.pdf" },
  { title: "Employment of Persons with Disabilities", href: "https://www.thermaxglobal.com/sites/default/files/2025-12/Equal-Opportunity-Policy-on-Employment-of-Persons-with-Disabilities_0.pdf" },
  { title: "Anti-Bribery and Anti-Corruption Policy", href: "https://www.thermaxglobal.com/sites/default/files/2025-12/ABC-Policy-final.pdf" },
  { title: "ISO 27001 Certificate", href: "https://www.thermaxglobal.com/sites/default/files/2026-03/Thermax-Limited.pdf" },
  { title: "Thermax Brand Assets Usage and Protection Policy", href: "https://www.thermaxglobal.com/sites/default/files/2026-05/Thermax-Brand-Assets-Usage-and-Protection-Policy.pdf" },
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
              <a href={p.href} target="_blank" rel="noreferrer" style={{ color: "#082033" }}>
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
