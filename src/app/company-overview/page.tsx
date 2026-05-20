import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { InnerHero } from "../../components/InnerHero";
import { RevealWatcher } from "../../components/RevealWatcher";
import { imageUrls } from "../../lib/site";

export const metadata = {
  title: "Thermax Vietnam Overview | Sustainable Energy and Environment Solutions",
  description:
    "A concise overview of Thermax Vietnam's local presence, industrial solutions, and customer support focus.",
};

const vietnamStats = [
  ["2008", "Vietnam journey begins"],
  ["2019", "Direct office presence"],
  ["40+", "Installations"],
  ["10+", "Industries served"],
];

const focusAreas = [
  {
    title: "Local industrial support",
    body:
      "Thermax Vietnam supports industrial customers with energy-efficient, sustainability-led solutions adapted to local operating needs.",
  },
  {
    title: "Integrated solutions",
    body:
      "The local portfolio covers process heating, cooling, power generation, air pollution control, water and wastewater management, and performance-engineered chemicals.",
  },
  {
    title: "Global expertise, local commitment",
    body:
      "The Vietnam team combines local customer understanding with Thermax's global engineering experience to improve efficiency, compliance, and long-term reliability.",
  },
];

export default function CompanyOverviewPage() {
  return (
    <>
      <RevealWatcher />
      <Header />
      <main>
        <InnerHero
          title={
            <>
              Thermax <br /> Vietnam
            </>
          }
          ariaTitle="Thermax Vietnam"
          description="A focused Vietnam presence backed by Thermax global engineering expertise"
          image={imageUrls.bannerCompany}
          mobileImage={imageUrls.bannerCompanyMobile}
          breadcrumb={[{ label: "About Us", href: "/company-overview" }, { label: "Company Overview" }]}
        />

        <section className="inner-intro" data-section="company-intro">
          <div className="inner-intro-grid" data-reveal>
            <h2>
              Thermax Vietnam is a local presence focused on supporting industries with
              <span className="red"> sustainable energy and environment solutions.</span>
            </h2>
            <div>
              <p>
                Thermax began its journey in Vietnam in 2008, supporting industries with sustainable and
                energy-efficient solutions through its channel partners.
              </p>
              <p>
                In 2019, Thermax strengthened its presence by establishing a shared office, marking its first direct
                presence in the country. Today, the Vietnam presence supports customers across process heating, cooling,
                power generation, air pollution control, water and wastewater management, and performance-engineered
                chemicals.
              </p>
            </div>
          </div>
          <div className="inner-intro-stats" data-reveal>
            {vietnamStats.map(([num, label]) => (
              <div className="inner-intro-stats-item" key={label}>
                <strong>{num}</strong>
                <p>{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mission-section" data-section="vietnam-focus">
          <div className="line-title" data-reveal>
            <span>Vietnam focus</span>
          </div>
          <div className="mission-grid" data-reveal>
            {focusAreas.map((item) => (
              <div className="mission-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="vision-section" data-section="local-role">
          <div className="vision-banner" data-reveal>
            <img src={imageUrls.hero} alt="Thermax Vietnam" />
          </div>
          <div className="vision-content" data-reveal>
            <div className="line-title">
              <span>Our role</span>
            </div>
            <p className="vision-text">
              We help Vietnamese industries improve operational efficiency, meet compliance requirements, and move
              towards cleaner, more sustainable growth.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
