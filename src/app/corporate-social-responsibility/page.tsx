import { PageShell } from "../../components/PageShell";
import { InnerHero } from "../../components/InnerHero";
import { IntroBlock } from "../../components/IntroBlock";
import { imageUrls } from "../../lib/site";

export const metadata = {
  title: "Corporate Social Responsibility | Thermax Foundation",
  description: "Thermax Foundation's flagship initiatives in education and community empowerment.",
};

const csrInitiatives = [
  {
    title: "Akanksha Resource Centre",
    body: "An education programme that provides academic, social, and emotional support to thousands of children.",
  },
  {
    title: "Teacher Empowerment",
    body: "Working with municipal school teachers to elevate teaching practices in core subjects.",
  },
  {
    title: "School Adoption Programme",
    body: "Long-term partnerships with under-resourced schools to enable lasting transformation.",
  },
  {
    title: "Community Health",
    body: "Health camps, awareness drives, and infrastructure for communities around our facilities.",
  },
];

export default function CorporateSocialResponsibilityPage() {
  return (
    <PageShell showFooterCta>
      <InnerHero
        title="Corporate Social Responsibility"
        description="Empowering young minds, transforming futures — through Thermax Foundation."
        image={imageUrls.bannerCSR}
        mobileImage={imageUrls.bannerCSRMobile}
        breadcrumb={[
          { label: "Sustainability", href: "/sustainability" },
          { label: "Corporate Social Responsibility" },
        ]}
      />

      <IntroBlock
        headline={
          <>
            We invest in <span className="red">education</span> as the most enduring path to opportunity.
          </>
        }
        body={
          <>
            <p>
              Thermax Foundation drives our flagship social initiatives — primarily focused on improving learning
              outcomes for children in low-income communities across Pune, Mumbai, and other industrial geographies.
            </p>
            <p>
              Our long-term, place-based programmes work alongside government schools, teachers, and parents — building
              capability rather than creating dependence.
            </p>
          </>
        }
        stats={[
          { value: "20K+", label: "Children supported annually" },
          { value: "120+", label: "Schools engaged" },
          { value: "1,500+", label: "Teachers empowered" },
          { value: "20+", label: "Years of service" },
        ]}
      />

      <section className="feature-cards" data-section="csr-initiatives">
        <div className="section-title-block" data-reveal>
          <h2>
            Our <span className="red">initiatives</span>
          </h2>
        </div>
        <div className="feature-cards-grid" data-reveal>
          {csrInitiatives.map((c) => (
            <div className="feature-card" key={c.title}>
              <div className="feature-card-body">
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
