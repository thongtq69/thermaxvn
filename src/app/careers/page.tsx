import { PageShell } from "../../components/PageShell";
import { InnerHero } from "../../components/InnerHero";
import { InnerSubNav } from "../../components/InnerSubNav";
import { imageUrls } from "../../lib/site";

export const metadata = {
  title: "Careers at Thermax | Build a Sustainable Future With Us",
  description:
    "Explore meaningful careers at Thermax. We are hiring engineers, leaders, and specialists to power the energy transition.",
};

const jobs = [
  {
    title: "Mechanical Design Engineer",
    location: "Pune, India",
    type: "Full-time",
    body: "Design and engineer next-generation boiler and heat-exchange systems for global customers.",
  },
  {
    title: "Senior Process Engineer – Air Pollution Control",
    location: "Pune, India",
    type: "Full-time",
    body: "Lead the engineering of cutting-edge ESP and FGD systems for cement and metals customers.",
  },
  {
    title: "Service Manager – Indonesia",
    location: "Jakarta, Indonesia",
    type: "Full-time",
    body: "Drive customer service excellence across our installed base in Indonesia and Southeast Asia.",
  },
  {
    title: "Software Engineer – EDGE Live",
    location: "Pune, India",
    type: "Full-time",
    body: "Build the next generation of our AI-powered IIoT platform for industrial assets.",
  },
];

export default function CareersPage() {
  return (
    <PageShell>
      <InnerHero
        title="Careers"
        description="Build a sustainable future with us — meaningful work, an open culture, and global impact."
        image={imageUrls.bannerCareers}
        mobileImage={imageUrls.bannerCareersMobile}
        breadcrumb={[
          { label: "People", href: "/people" },
          { label: "Careers" },
        ]}
      />

      <InnerSubNav
        items={[
          { label: "Overview", href: "/people#overview" },
          { label: "Become an intrapreneur", href: "/people#intrapreneur" },
          { label: "Life at Thermax", href: "/people#life-at-thermax" },
          { label: "Learning & Organisational Development", href: "/people#learning" },
          { label: "Careers", href: "/careers" },
          { label: "Thermax Cares", href: "/people#thermax-cares" },
          { label: "Employee Magazine", href: "/people#employee-magazine" },
          { label: "FAQs", href: "/people#faqs" },
        ]}
      />

      <section className="text-section" data-section="careers-intro">
        <h2>
          Engineer the <span className="red">future</span>, with us.
        </h2>
        <p>
          We are looking for curious, capable people to join our journey — engineers, designers, project managers, and
          service specialists who want to shape the next generation of energy and environment solutions.
        </p>
        <p>
          At Thermax, careers are built on three things: meaningful work, an open culture, and the freedom to grow.
        </p>
      </section>

      <section className="feature-cards" data-section="open-roles">
        <div className="section-title-block" data-reveal>
          <h2>
            Open <span className="red">roles</span>
          </h2>
          <a className="section-cta" href="https://www.thermaxglobal.com/careers" target="_blank" rel="noreferrer">
            See all roles
          </a>
        </div>
        <div className="feature-cards-grid" data-reveal>
          {jobs.map((job) => (
            <a
              className="feature-card"
              key={job.title}
              href="https://www.thermaxglobal.com/careers"
              target="_blank"
              rel="noreferrer"
            >
              <div className="feature-card-body">
                <h3>{job.title}</h3>
                <p style={{ marginBottom: 6 }}>{job.body}</p>
                <span style={{ fontSize: 13, color: "#c8102e", fontWeight: 500 }}>
                  {job.location} · {job.type}
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
