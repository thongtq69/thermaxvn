import { PageShell } from "../../components/PageShell";
import { InnerHero } from "../../components/InnerHero";
import { IntroBlock } from "../../components/IntroBlock";
import { InnerSubNav } from "../../components/InnerSubNav";
import { imageUrls } from "../../lib/site";

export const metadata = {
  title: "People at Thermax | Careers, Culture and Employee Stories",
  description: "Our strength lies in our people. Discover Thermax's culture, programs, and employee stories.",
};

const cultureCards = [
  {
    icon: imageUrls.missionIcon4,
    title: "Integrity in everything we do",
    body:
      "We hold ourselves to the highest standards of ethical behavior, and treat each other with respect at every level.",
  },
  {
    icon: imageUrls.missionIcon6,
    title: "Empowering people",
    body:
      "Our people are encouraged to take ownership of their work, drive impact, and grow alongside the company.",
  },
  {
    icon: imageUrls.missionIcon3,
    title: "A culture of partnership",
    body:
      "We believe great work happens through enlightened partnerships — with our customers, suppliers, and each other.",
  },
];

const programs = [
  {
    title: "Thermax Cares",
    body:
      "Wellness and benefit programmes that support our people through every life stage — physical, mental, and family.",
  },
  {
    title: "Learning & development",
    body: "Structured pathways for engineers, leaders, and operators to grow technically and professionally.",
  },
  {
    title: "Diversity & inclusion",
    body:
      "We actively cultivate an environment where diverse perspectives lead to better solutions and stronger teams.",
  },
];

export default function PeoplePage() {
  return (
    <PageShell showFooterCta>
      <InnerHero
        title="People"
        description="Our strength lies in our people."
        image={imageUrls.bannerPeople}
        mobileImage={imageUrls.bannerPeopleMobile}
        breadcrumb={[{ label: "People" }]}
      />

      <InnerSubNav
        items={[
          { label: "Overview", href: "#overview" },
          { label: "Become an intrapreneur", href: "#intrapreneur" },
          { label: "Life at Thermax", href: "#life-at-thermax" },
          { label: "Learning & Organisational Development", href: "#learning" },
          { label: "Careers", href: "/careers" },
          { label: "Thermax Cares", href: "#thermax-cares" },
          { label: "Employee Magazine", href: "#employee-magazine" },
          { label: "FAQs", href: "#faqs" },
        ]}
      />

      <IntroBlock
        headline={
          <>
            Make your contribution count! If you are looking to make a difference,{" "}
            <span className="red">that is seen, heard, and felt, you have landed at the right place!</span>
          </>
        }
        body={
          <>
            <p>
              This is where every voice matters, and the work you do here doesn&apos;t stop at your desk; it extends
              outward, touching industries, communities, and the planet. Our culture gives people the chance to solve
              real-world problems, grow, lead, and reimagine what&apos;s possible.
            </p>
            <p>
              As stated by our first Chairman and Managing Director R.D. Aga, Thermax believes in nurturing a human
              organisation which understands the paradox that the total organisation is more important than the
              individual but this does not make the individual less important.
            </p>
          </>
        }
      />

      <section className="people-intrapreneur" id="intrapreneur" data-section="intrapreneur">
        <div className="people-intrapreneur-grid" data-reveal>
          <div className="people-intrapreneur-media">
            <img
              src="https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-03/intrapreneur-pic_0.jpg"
              alt="Become an intrapreneur"
            />
          </div>
          <div className="people-intrapreneur-copy">
            <h2>
              Be an <span className="red">intrapreneur!</span>
            </h2>
            <p>
              First Chairman and Managing Director R.D. Aga introduced the intrapreneurial culture into the
              organisation. He believed that innovation and growth in large corporations can occur only when an
              individual or a group is passionately dedicated to making it happen.
            </p>
            <p>
              These corporate risk-takers were more enterprising than typical entrepreneurs, bringing ownership,
              curiosity, and courage into everyday work.
            </p>
          </div>
        </div>
      </section>

      <section className="feature-cards" data-section="culture">
        <div className="section-title-block" data-reveal>
          <h2>
            Our <span className="red">culture</span>
          </h2>
        </div>
        <div className="feature-cards-grid" data-reveal>
          {cultureCards.map((c) => (
            <div className="feature-card" key={c.title}>
              <div className="feature-card-body">
                <div className="mission-card-icon" style={{ marginBottom: 16 }}>
                  <img src={c.icon} alt="" />
                </div>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="text-section" data-section="programs">
        <h2>
          Programmes that <span className="red">support our people</span>
        </h2>
        <div className="contact-grid" style={{ marginTop: 40, padding: 0 }}>
          {programs.map((p) => (
            <div className="contact-card" key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
