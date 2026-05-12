import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { RevealWatcher } from "../../components/RevealWatcher";
import { InnerHero } from "../../components/InnerHero";
import { imageUrls } from "../../lib/site";

export const metadata = {
  title: "Thermax Company Overview | Clean Energy & Environment Solutions Since 1966",
  description:
    "Welcome to Thermax – an engineering company providing sustainable solutions in energy and the environment.",
};

const stats = [
  ["60+", "Years of legacy"],
  ["90+", "Countries served"],
  ["45+", "Offices globally"],
  ["16", "Manufacturing facilities"],
];

const family = [
  {
    name: "A. S. Bhathena",
    role: "Founder",
    image: imageUrls.family1,
  },
  {
    name: "Rohinton D. Aga",
    role: "First Chairman and Managing Director",
    image: imageUrls.family2,
  },
  {
    name: "Anu Aga",
    role: "Former Chairperson",
    image: imageUrls.family3,
  },
  {
    name: "Meher Pudumjee",
    role: "Chairperson",
    image: imageUrls.bod1,
  },
  {
    name: "Pheroz Pudumjee",
    role: "Non-Executive, Non-Independent Director",
    image: imageUrls.bod2,
  },
];

const missions = [
  {
    icon: imageUrls.missionIcon1,
    title: "Global vision, quality delivery",
    body:
      "We aspire to become a leading technology company with a global outlook delivering world-class products and services to customers.",
  },
  {
    icon: imageUrls.missionIcon2,
    title: "Customer-first partnership",
    body:
      "We exist to fulfil the needs of our customers – best understood through an enlightened partnership with them.",
  },
  {
    icon: imageUrls.missionIcon3,
    title: "Strong supplier partnerships",
    body:
      "We seek dependable partnership with our suppliers – to generate a strong mutual interest in each other's welfare.",
  },
  {
    icon: imageUrls.missionIcon4,
    title: "Integrity in leadership",
    body: "We live by a high value of integrity and excellence in management.",
  },
  {
    icon: imageUrls.missionIcon5,
    title: "Expanding through innovation",
    body:
      "Our challenge is to continually expand and define new markets by expanding the frontiers of research and engineering and customer applications in our chosen field of business.",
  },
  {
    icon: imageUrls.missionIcon6,
    title: "Empowering people",
    body:
      "Our commitment is to create an organisation, which nurtures the talent and enterprise of our people, helping them to grow and find fulfilment, in an open culture.",
  },
  {
    icon: imageUrls.missionIcon7,
    title: "Sustainability & social impact",
    body:
      "We strive to contribute substantially to the global priority areas of energy conservation, environment protection and enrichment of society.",
  },
];

const coreValues = [
  {
    title: "Respect",
    image: imageUrls.coreValue1,
    points: [
      "Respect for human lives and human dignity",
      "Respect for what is right, and not who is right",
      "Respect for diverse opinions, traditions and cultures",
    ],
  },
  {
    title: "Commitment",
    image: imageUrls.coreValue2,
    points: [
      "Commitment to deliver, on time and as promised",
      "Commitment to take complete ownership of our work",
      "Commitment to learning, sharing and improving",
    ],
  },
  {
    title: "Honesty & integrity",
    image: imageUrls.coreValue3,
    points: [
      "Honesty in dealings, transparent in communication",
      "Integrity in conduct – inside and outside the company",
      "Acknowledging mistakes; taking responsibility for them",
    ],
  },
  {
    title: "Concern for Society & Environment",
    image: imageUrls.coreValue4,
    points: [
      "Caring for the communities we operate in",
      "Conserving energy, water and the world around us",
      "Building solutions that solve real environmental challenges",
    ],
  },
];

const awards = [
  { image: imageUrls.award1, title: "IMD Global Family Business Award — Winner, 2023" },
  { image: imageUrls.award2, title: "Golden Peacock Award for Excellence in Corporate Governance — 2023" },
  { image: imageUrls.award3, title: "Energy Excellence Award 2025 — Outstanding Achievement in R&D and Innovation" },
  { image: imageUrls.award4, title: "AI Gamechanger Challenger Award — for Thermax EDGE Live®" },
  { image: imageUrls.award5, title: "Platinum Certification for Sustainability — Sri City Plant" },
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
              Company <br /> Overview
            </>
          }
          ariaTitle="Company Overview"
          description="Welcome to Thermax – an engineering company providing sustainable solutions in energy and the environment"
          image={imageUrls.bannerCompany}
          mobileImage={imageUrls.bannerCompanyMobile}
          breadcrumb={[{ label: "About Us", href: "/company-overview" }, { label: "Company Overview" }]}
        />

        <section className="inner-intro" data-section="company-intro">
          <div className="inner-intro-grid" data-reveal>
            <h2>
              The company&apos;s vision for the future is firmly anchored in the belief that to stay competitive,
              companies need to adopt <span className="red">sustainable development practices.</span>
            </h2>
            <div>
              <p>
                Thermax Group is an INR 10,389 Cr. (~1.25 Billion US$) company headquartered in Pune, India. Its
                business portfolio includes products for heating, cooling, water and waste management, and speciality
                chemicals, along with its digital capabilities. The company also designs, builds and commissions large
                boilers for steam and power generation, turnkey power plants, industrial and municipal wastewater
                treatment plants, waste heat recovery systems and air pollution control projects.
              </p>
              <p>
                The systems, products and services developed by Thermax help industry achieve better resource
                productivity and improve bottom lines, while maintaining a cleaner environment.
              </p>
            </div>
          </div>
          <div className="inner-intro-stats" data-reveal>
            {stats.map(([num, label]) => (
              <div className="inner-intro-stats-item" key={label}>
                <strong>{num}</strong>
                <p>{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="we-are-thermax" data-section="we-are">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={imageUrls.energyPoster}
            src={imageUrls.energyVideo}
          />
          <button className="play-bt" type="button" aria-label="Play"></button>
        </section>

        <section className="team-section" data-section="founding-family">
          <div className="section-title-block" data-reveal>
            <h2>
              Founding <span className="red">family</span>
            </h2>
            <a className="section-cta" href="/company-overview/leadership/board-of-directors">
              Meet our team
            </a>
          </div>
          <div className="team-grid" data-reveal>
            {family.map((member) => (
              <div className="team-card" key={member.name}>
                <img src={member.image} alt={member.name} />
                <div className="team-card-body">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                  <a className="section-cta" href="#">
                    Read more
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="vision-section" data-section="vision">
          <div className="vision-banner" data-reveal>
            <img src={imageUrls.visionBanner} alt="Thermax vision" />
          </div>
          <div className="vision-content" data-reveal>
            <div className="line-title">
              <span>Vision</span>
            </div>
            <p className="vision-text">
              To be a globally respected high performance organisation offering sustainable solutions in energy and the
              environment.
            </p>
          </div>
        </section>

        <section className="mission-section" data-section="mission">
          <div className="line-title" data-reveal>
            <span>Mission</span>
          </div>
          <div className="mission-grid" data-reveal>
            {missions.map((m) => (
              <div className="mission-card" key={m.title}>
                <div className="mission-card-icon">
                  <img src={m.icon} alt="" />
                </div>
                <h3>{m.title}</h3>
                <p>{m.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="core-values-section" data-section="core-values">
          <h2 className="core-values-title" data-reveal>
            The Core Values
            <br />
            that Drive Us
          </h2>
          <div className="core-values-grid" data-reveal>
            {coreValues.map((value) => (
              <div className="core-value-card" key={value.title}>
                <img src={value.image} alt="" />
                <div className="core-value-content">
                  <h3>{value.title}</h3>
                  <ul>
                    {value.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="awards-section" data-section="awards">
          <div className="section-title-block" data-reveal>
            <h2 style={{ width: "100%", textAlign: "center" }}>
              Featured <span className="red">awards</span>
            </h2>
          </div>
          <div className="awards-grid" data-reveal>
            {awards.map((award) => (
              <div className="award-card" key={award.title}>
                <img src={award.image} alt={award.title} />
                <p>{award.title}</p>
              </div>
            ))}
          </div>
          <div className="awards-cta-wrap" data-reveal>
            <a className="section-cta" href="/company-overview/awards-and-recognitions">
              View all awards
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
