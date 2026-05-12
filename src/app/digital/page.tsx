import { PageShell } from "../../components/PageShell";
import { InnerHero } from "../../components/InnerHero";
import { IntroBlock } from "../../components/IntroBlock";
import { InnerSubNav } from "../../components/InnerSubNav";
import { imageUrls } from "../../lib/site";

export const metadata = {
  title: "Digital | Thermax Global",
  description:
    "Thermax EDGE Live® — AI-powered IIoT platform for energy transition, plant reliability, and performance optimisation.",
};

const capabilities360 = [
  {
    icon: "https://www.thermaxglobal.com/themes/thermax/assets/images/digital-360-1.png",
    title: "Value discovery",
    body:
      "Pre-assessment of the plant to understand the current challenges, instrumentation availability and identification of digital use-cases",
  },
  {
    icon: "https://www.thermaxglobal.com/themes/thermax/assets/images/digital-360-2.png",
    title: "Sensorisation",
    body: "Supply and commissioning of necessary hardware (sensors / meters / controller equipment) as required",
  },
  {
    icon: "https://www.thermaxglobal.com/themes/thermax/assets/images/digital-360-3.png",
    title: "OT-IT connect",
    body: "OT security assessment and cloud connectivity using a secured OT architecture",
  },
  {
    icon: "https://www.thermaxglobal.com/themes/thermax/assets/images/digital-360-4.png",
    title: "Onboarding",
    body:
      "Seamless onboarding of assets on EDGE Live, platform configuration, model deployment and finetuning, user training, etc.",
  },
  {
    icon: "https://www.thermaxglobal.com/themes/thermax/assets/images/digital-360-5.png",
    title: "Value delivery",
    body:
      "Customer engagement through remote monitoring and expert insights leveraging the capabilities of EDGE Live and extensive domain knowledge",
  },
  {
    icon: "https://www.thermaxglobal.com/themes/thermax/assets/images/digital-360-6.png",
    title: "On-site intervention",
    body: "On-site visit and support as and when required • Providing spares and services as applicable",
  },
];

export default function DigitalPage() {
  return (
    <PageShell>
      <InnerHero
        title="Thermax EDGE Live®"
        description="Thermax's AI-powered IIoT platform built to support industrial customers in their journey towards energy transition, plant reliability, and performance optimisation"
        image={imageUrls.bannerDigital}
        mobileImage={imageUrls.bannerDigitalMobile}
        breadcrumb={[{ label: "Digital" }]}
      />

      <InnerSubNav
        items={[
          { label: "Overview", href: "#overview" },
          { label: "360° Digital Capabilities", href: "#digital-360" },
          { label: "Digital Portfolio", href: "#digital-portfolio" },
          { label: "Why EDGE Live®", href: "#why-edge" },
          { label: "EDGE Live Operations Center", href: "#operations-center" },
          { label: "Awards", href: "#awards" },
        ]}
        cta={{ label: "Submit your enquiry", href: "#digital-submit-enquiry-form" }}
      />

      <IntroBlock
        headline={
          <>
            <span className="red">Thermax EDGE Live®</span> brings real-time intelligence to our customers&apos;
            industrial assets.
          </>
        }
        body={
          <>
            <p>
              By monitoring performance, identifying issues early, and recommending the right actions, it helps
              businesses run their operations with greater reliability and efficiency. With AI-driven insights and
              Thermax&apos;s engineering expertise, EDGE Live empowers plants to reduce downtime, improve performance,
              and move towards decarbonisation.
            </p>
            <p>
              Thermax EDGE Live® uses advanced machine learning models that continuously learn from real operating
              data. These models analyse large volumes of structured data, identify hidden patterns, and accurately
              predict performance parameters using techniques like decision trees, neural networks, and association
              rules.
            </p>
          </>
        }
      />

      <section className="digital-overview-diagram" id="digital-360" data-section="digital-overview-diagram">
        <h2 data-reveal>
          <span>Asset performance enhancement using IIoT capability</span>
        </h2>
        <div className="digital-overview-diagram-media" data-reveal>
          <img
            src="https://www.thermaxglobal.com/themes/thermax/assets/images/asset-work-flow-pic.png"
            alt="Asset performance enhancement using IIoT capability"
          />
        </div>
        <div className="digital-stats-row" data-reveal>
          <div className="digital-stat">
            <h3>200+</h3>
            <p>Customers</p>
          </div>
          <div className="digital-stat">
            <h3>4,600+</h3>
            <p>Assets</p>
          </div>
          <div className="digital-stat">
            <h3>3-5%</h3>
            <p>Fuel savings across all assets</p>
          </div>
          <div className="digital-stat">
            <h3>30%</h3>
            <p>Reduction in unplanned downtime</p>
          </div>
          <div className="digital-stat">
            <h3>50+</h3>
            <p>AI models</p>
          </div>
        </div>
      </section>

      <section className="digital-360-section" data-section="digital-360">
        <h2 className="digital-360-title" data-reveal>
          Our <span className="red">360º</span> digital capabilities
        </h2>
        <div className="digital-360-grid" data-reveal>
          {capabilities360.map((cap) => (
            <div className="digital-360-card" key={cap.title}>
              <span className="icn">
                <img src={cap.icon} alt="" />
              </span>
              <h3>{cap.title}</h3>
              <p>{cap.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="digital-portfolio" data-section="digital-portfolio">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://www.thermaxglobal.com/themes/thermax/assets/images/digital-portfolio-poster.jpg"
          src="https://www.thermaxglobal.com/themes/thermax/assets/vid/digital-portfolio-video.mp4"
        />
        <h2 data-reveal>Our digital portfolio</h2>
        <div className="digital-portfolio-grid" data-reveal>
          <div className="digital-portfolio-section">
            <h3>Products for predictive diagnostics</h3>
            <div className="digital-portfolio-row">
              <div className="digital-portfolio-card">
                <h4 className="ttle">APM Suite</h4>
                <ul>
                  <li>EDGE Live - Boilers</li>
                  <li>EDGE Live - Chillers</li>
                  <li>EDGE Live – Water Systems</li>
                  <li>EDGE Live – Air Pollution Control Equipment</li>
                  <li>EDGE Live – Vibration Monitoring</li>
                </ul>
              </div>
              <div className="digital-portfolio-card">
                <h4 className="ttle">Plant Suite</h4>
                <ul>
                  <li>EDGE Live - Power Plant</li>
                  <li>
                    EDGE Live – Utility &amp; Energy Management System (UEMS)
                    <span>Integrated Multi-Utility Asset Coverage &amp; Energy Flow Predictive Insights</span>
                  </li>
                  <li>
                    EDGE Live – EMS
                    <span>Integrated Energy Flow Monitoring &amp; Analytics</span>
                  </li>
                  <li>EDGE Live - Historian</li>
                  <li>EDGE Live - Digital Logbook</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="digital-portfolio-section">
            <h3>Services</h3>
            <div className="digital-portfolio-card">
              <h4 className="ttle">Specialised Services</h4>
              <ul>
                <li>
                  <strong>OT Security Suite</strong>
                  <span>Risk Assessment &amp; Advisory · Design &amp; Implementation Service · Sustenance Service</span>
                </li>
                <li>
                  <strong>Automation Services</strong>
                </li>
                <li>
                  <strong>Plant Utility &amp; Energy Audit</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="why-edge-section" id="why-edge" data-section="why-edge">
        <div className="why-edge-inner" data-reveal>
          <h2 className="why-edge-title">
            Why <span className="red">EDGE Live?</span>
          </h2>
          <p className="why-edge-sub">
            EDGE Live empowers industries to evolve from basic equipment monitoring to advanced analysis and
            optimisation through domain-engineered AI intelligence.
          </p>
          <div className="why-edge-grid">
            <div className="why-edge-img">
              <img
                src="https://www.thermaxglobal.com/themes/thermax/assets/images/digi-edge-live-ai.jpg"
                alt=""
              />
            </div>
            <div className="why-edge-copy">
              <p>
                Built on Thermax&apos;s deep process expertise, it connects every layer of the factory, from
                operators to CXOs, enabling smarter, data-driven decisions.
              </p>
              <p>
                By bridging gaps in sensorisation, automation, and digital intelligence, EDGE Live drives measurable
                ROI through enhanced reliability, efficiency, and decarbonisation. It supports manufacturers on their
                journey from Industry 4.0 (smart factory) to Industry 5.0 (human-centric factory), where technology
                and human insight work together to create truly smart and sustainable operations.
              </p>
              <p>
                It provides a single industrial digital platform that unifies all assets and energy systems -
                electrical, heating and cooling systems, water and wastewater management systems etc.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-edge-section" id="operations-center" data-section="operations-center">
        <div className="why-edge-inner" data-reveal>
          <div className="why-edge-grid is-reverse">
            <div className="why-edge-copy">
              <h2 className="why-edge-title">
                EDGE Live
                <br />
                <span className="red">Operations Centre</span>
              </h2>
              <p>
                The EDGE Live Operations Centre is a centralised hub for monitoring and analysis of assets&apos;
                performance at customer sites. The team continuously tracks anomalies, validates deviations, and
                collaborates closely with on-site teams to ensure smooth plant performance. Subject matter experts
                (SMEs) provide technical interpretation of data, actionable insights, and recommendations for
                operational improvements, enabling proactive maintenance, enhanced efficiency, and optimised
                reliability across the plant.
              </p>
            </div>
            <div className="why-edge-img">
              <img
                src="https://www.thermaxglobal.com/themes/thermax/assets/images/edge-live-operations.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="digital-awards-section" id="awards" data-section="awards">
        <div className="digital-awards-inner" data-reveal>
          <h2 className="digital-awards-title">
            <span className="red">Awards</span>
          </h2>
          <div className="digital-awards-grid">
            <div className="digital-award-card">
              <div className="digital-award-img">
                <img
                  src="https://www.thermaxglobal.com/themes/thermax/assets/images/digital-awards-1.jpg"
                  alt=""
                />
              </div>
              <div className="digital-award-body">
                <p className="ttle">AI Gamechanger Award 2023-24</p>
                <p>
                  Achieved the AI Gamechanger – Challenger Award from NASSCOM for innovative use of AI via Edge Live
                  to solve critical industry problems, driving efficiency, fuel savings, carbon emission reduction,
                  and enhanced uptime
                </p>
              </div>
            </div>
            <div className="digital-award-card">
              <div className="digital-award-img">
                <img
                  src="https://www.thermaxglobal.com/themes/thermax/assets/images/digital-awards-2.jpg"
                  alt=""
                />
              </div>
              <div className="digital-award-body">
                <p className="ttle">GOLD Award by CII</p>
                <p>
                  Thermax EDGE Live® was conferred with the Gold award as the Best Smart Product - Customer Facing
                  in Manufacturing Category for leveraging real-time monitoring, predictive analytics with actionable
                  recommendations to achieve higher asset efficiency, enhanced customer satisfaction, and sustainable
                  growth
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
