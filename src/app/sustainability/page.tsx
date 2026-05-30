import { PageShell } from "../../components/PageShell";
import { InnerHero } from "../../components/InnerHero";
import { imageUrls } from "../../lib/site";

export const metadata = {
  title: "Thermax Sustainability | Clean Energy, ESG Commitments & Net-Zero Solutions for Industry",
  description:
    "Thermax's commitment to sustainability through energy transition, water-positive manufacturing, and responsible business practices.",
};

export default function SustainabilityPage() {
  return (
    <PageShell>
      <InnerHero
        title="Sustainability"
        image={imageUrls.bannerSustain}
        mobileImage={imageUrls.bannerSustainMobile}
        breadcrumb={[{ label: "Sustainability" }]}
      />

      <section className="inner-intro" data-section="sustain-intro">
        <div className="inner-intro-grid is-sustain" data-reveal>
          <h2>
            <strong>
              At Thermax, sustainability is not a target - it is the very foundation of how we engineer progress.
            </strong>{" "}
            As a company that straddles both energy and environment, our commitment to sustainability is two-fold—one
            for our customers and one for ourselves.
          </h2>
          <div>
            <p>
              We enable industries to advance their clean air, clean energy, and clean water goals through innovative
              solutions that improve efficiency, reduce water footprint and lower emissions.
            </p>
            <p>
              At the same time, we hold ourselves to the same standards by integrating sustainable practices across our
              own operations to cut emissions, conserve resources, and promote responsible manufacturing across our
              value chain. Guided by our belief of &lsquo;Business with a Purpose,&rsquo; we are advancing
              India&apos;s net-zero journey through renewable energy adoption, generation &amp; distribution, resource
              circularity initiatives, and green manufacturing while fostering responsible supply chains and innovation
              partnerships that accelerate the global energy transition and environmental sustainability.
            </p>
          </div>
        </div>
      </section>

      <section className="driving-change-section" data-section="driving-change">
        <h2 className="driving-change-title" data-reveal>
          Driving Measurable <span className="red">Change</span>
        </h2>

        {/* Block 1: Decarbonisation Roadmap */}
        <div className="driving-block" data-reveal>
          <div className="driving-block-banner">
            <img
              src="/assets/sustainability/decarbonisation-img.jpg"
              alt="Decarbonisation Roadmap"
            />
            <div className="driving-block-banner-content">
              <img
                src="/assets/sustainability/driving-icon1.svg"
                alt=""
              />
              <h3>Decarbonisation Roadmap</h3>
            </div>
          </div>
          <p className="driving-block-intro">
            Our journey toward decarbonisation is guided by clear goals, measurable outcomes, and continual
            improvement.
          </p>
          <div className="driving-block-body">
            <div>
              <small>Goal</small>
              <div className="text24">To reduce its carbon footprint by 25% by 2025</div>
              <p>
                Aligned with the Paris Agreement and India&apos;s nationally determined contributions, our
                sustainability roadmap integrates climate action with operational excellence. From water-positive
                manufacturing and rooftop solar installations to biomass-based heating systems and circular resource
                management, every initiative reflects our intent to create lasting environmental value while
                strengthening industrial performance.
              </p>
            </div>
            <div>
              <small className="greenbg">✓ ACHIEVED</small>
              <div className="text24">
                37% reduction in absolute emissions, surpassing the target ahead of schedule.
              </div>
              <p>
                Through focused interventions — energy efficiency, renewable energy sourcing, fuel transition, and
                sustainable factory design.
              </p>
              <div className="goal-progress">
                <div className="goal-progress-header">
                  <span>
                    <span className="dot grey" /> Goal: <strong>25% by 2025</strong>
                  </span>
                  <span>
                    <span className="dot green" /> New Goal: <strong>50% by 2030</strong>
                  </span>
                </div>
                <div className="goal-progress-bar">
                  <div className="goal-progress-fill" style={{ width: "37%" }} />
                </div>
                <div className="goal-progress-achieved">
                  <span className="dot green" /> Achieved: <strong>37% by 2025</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="roadmap" data-reveal>
            <div className="roadmap-grid">
              <div>
                <p className="roadmap-title">Roadmap till 2030 (%)</p>
                <div className="roadmap-img">
                  <img
                    src="/assets/sustainability/roadmap-img.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className="roadmap-graph">
                  <div className="carbon-wrapper">
                    <div className="chart">
                      <div className="col">
                        <div className="bar grey full" />
                        <div className="label">FY19</div>
                        <div className="grow-arrow">
                          <img
                            src="/assets/sustainability/grow-big-arrow.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="bar">
                          <div className="percent">10%</div>
                          <div className="fill grey" style={{ height: "90%" }} />
                          <div className="fill green" style={{ height: "10%" }} />
                        </div>
                        <div className="vlabel">Energy Efficiency</div>
                      </div>
                      <div className="col">
                        <div className="bar" style={{ height: 300 }}>
                          <div className="percent">4.5%</div>
                          <div className="fill grey" style={{ height: "91%" }} />
                          <div className="fill green" style={{ height: "8%" }} />
                        </div>
                        <div className="vlabel">Addition to Ex-30 Renewable Energy</div>
                      </div>
                      <div className="col">
                        <div className="bar" style={{ height: 270 }}>
                          <div className="percent">27.3%</div>
                          <div className="fill grey" style={{ height: "74%" }} />
                          <div className="fill green" style={{ height: "25%" }} />
                        </div>
                        <div className="vlabel">Renewable Energy Procurement</div>
                      </div>
                      <div className="col">
                        <div className="bar" style={{ height: 240 }}>
                          <div className="percent">8.1%</div>
                          <div className="fill grey" style={{ height: "95%" }} />
                          <div className="fill green" style={{ height: "5%" }} />
                        </div>
                        <div className="vlabel">Fuel Switch</div>
                      </div>
                      <div className="col">
                        <div className="down-arrow">
                          <img
                            src="/assets/sustainability/down-big-arrow.png"
                            alt=""
                          />
                        </div>
                        <div className="bar dark" style={{ height: 200 }}>
                          <div className="percent value">22,436 tCO₂e</div>
                        </div>
                        <div className="label">FY30</div>
                      </div>
                    </div>
                    <div className="goal-text">
                      50% Absolute Carbon Emission
                      <br />
                      Reduction from FY 2018-19
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Block 2: Waste Management */}
        <div className="driving-block" data-reveal>
          <div className="driving-block-banner">
            <img
              src="/assets/sustainability/waste-management-banner.jpg"
              alt="Waste Management"
            />
            <div className="driving-block-banner-content">
              <img
                src="/assets/sustainability/waste-management-icon.svg"
                alt=""
              />
              <h3>Waste Management</h3>
            </div>
          </div>
          <p className="driving-block-intro">Thermax is advancing circularity by turning waste into value.</p>
          <div className="driving-block-body">
            <div>
              <small className="greenbg">AIM</small>
              <p>Single-use plastic (SUP) certificate across manufacturing locations</p>
            </div>
            <div>
              <small className="greenbg">✓ ACHIEVED</small>
              <div className="text24">
                As we move toward zero waste to landfill, we aim to restrict landfill disposal to below 5% of total
                waste generated each year.
              </div>
            </div>
          </div>
        </div>

        {/* Block 3: Biodiversity */}
        <div className="driving-block" data-reveal>
          <div className="driving-block-banner">
            <img
              src="/assets/sustainability/biodiversity-banner.jpg"
              alt="Biodiversity"
            />
            <div className="driving-block-banner-content">
              <img
                src="/assets/sustainability/biodiversity-icon.svg"
                alt=""
              />
              <h3>Biodiversity</h3>
            </div>
          </div>
          <p className="driving-block-intro">
            At Thermax, we recognise that preserving biodiversity is essential to sustaining ecosystems and
            strengthening environmental resilience.
          </p>
          <div className="driving-block-body">
            <div>
              <small>Goal</small>
              <div className="text24">
                In FY 2024–25, we set a goal to
                <br />
                plant 5,000 trees
              </div>
            </div>
            <div>
              <small className="greenbg">✓ ACHIEVED</small>
              <div className="text24">
                Surpassed it by planting
                <br />
                <span style={{ color: "#37B459" }}>17,523 trees</span>
                <br />
                across our operational and community sites.
              </div>
              <p>
                These initiatives contribute to carbon sequestration, cleaner air, and the restoration of green
                cover.
              </p>
            </div>
          </div>
          <div className="bio-cards-grid" data-reveal>
            <div className="bio-card">
              <div className="bio-card-icon">
                <img
                  src="/assets/sustainability/lab-icon1.svg"
                  alt=""
                />
              </div>
              <p>
                At Thermax, we recognise that preserving biodiversity is essential to sustaining ecosystems and
                strengthening environmental resilience. In FY 2024–25, we set a goal to plant 5,000 trees — and
                surpassed it by planting 17,523 trees across our operational and community sites. These initiatives
                contribute to carbon sequestration, cleaner air, and the restoration of green cover.
              </p>
            </div>
            <div className="bio-card green">
              <p style={{ fontWeight: 500 }}>
                Beyond afforestation, we focus on creating biodiversity-rich spaces across our offices, manufacturing
                units, and project sites through native landscaping. Specially curated zones such as medicinal
                gardens, butterfly gardens, and women&apos;s gardens (developed by our women workforce) nurture local
                ecosystems while offering serene, educational spaces for employees and the community.
              </p>
              <p>
                Our biodiversity-friendly campuses have evolved into thriving habitats for native birds, butterflies,
                reptiles, and small mammals. Through regular awareness and training sessions, we continue to inspire
                our teams to coexist harmoniously with nature — reinforcing our belief that sustainability begins
                where we work and live.
              </p>
            </div>
            <div className="bio-card-image">
              <img
                src="/assets/sustainability/bio-thumb.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* Block 4: Water Management */}
        <div className="driving-block" data-reveal>
          <div className="driving-block-banner">
            <img
              src="/assets/sustainability/water-management-banner.jpg"
              alt="Water Management"
            />
            <div className="driving-block-banner-content">
              <img
                src="/assets/sustainability/water-icon.svg"
                alt=""
              />
              <h3>Water Management</h3>
            </div>
          </div>
          <p className="driving-block-intro">
            At Thermax, we are committed to safeguarding water resources through targeted, data-driven conservation
            and optimisation initiatives.
          </p>
          <div className="driving-block-body">
            <div>
              <div className="text24">
                In FY 2024–25, our Shirwal manufacturing plant in Maharashtra and Sri City manufacturing plant in
                Andhra Pradesh achieved Water Positive Certification, joining our Solapur plant in Maharashtra, which
                successfully maintained its recognition through recertification.
              </div>
              <div className="text24" style={{ marginTop: 16 }}>
                These milestones underscore our integrated approach to water stewardship and sustainable operations.
              </div>
            </div>
            <div>
              <small className="greenbg">Key Highlights (FY 2024-25)</small>
              <ul className="water-highlights">
                <li>
                  191% increase in rainwater harvesting capacity, enhancing our ability to capture and conserve
                  rainwater.
                </li>
                <li>
                  21% reduction in freshwater intake across operational units through improved recycling and reuse.
                </li>
                <li>
                  Comprehensive water audits at Dahej and Jhagadia plants in Gujarat to benchmark consumption and
                  progress toward water neutrality.
                </li>
                <li>
                  Infrastructure development at Chinchwad in Maharashtra to enable its transition to a water-neutral
                  facility.
                </li>
              </ul>
              <p>
                As part of our long-term vision, Thermax has set a Group-wide target to reduce freshwater consumption
                by 5% by 2030, using FY 2024–25 as the baseline year. Through continuous efficiency improvements,
                innovative reuse strategies, and a strong culture of responsible water use, we are working toward a
                water-secure and sustainable future.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="esg-band" data-section="esg">
        <img src="/assets/sustainability/decarbonisation-img.jpg" alt="" />
        <div className="esg-band-content" data-reveal>
          <div className="esg-band-inner">
            <p>
              Our ESG journey reflects Thermax&apos;s long-standing commitment to responsible growth, ethical
              governance, and environmental stewardship. Explore how we integrate sustainability principles across our
              business, operations, and stakeholder relationships through our detailed ESG Profile.
            </p>
            <a className="section-cta" href="/esg-profile">
              <span className="cta-arrow">
                <img
                  src="/assets/sustainability/discover-arrow.svg"
                  alt=""
                />
              </span>
              ESG Profile
            </a>
            <p style={{ marginTop: 16 }}>
              Thermax&apos;s Business Responsibility and Sustainability Report (BRSR) outlines our progress,
              performance metrics, and policies under India&apos;s SEBI framework. It demonstrates our ongoing efforts
              toward transparency, accountability, and sustainable value creation
            </p>
            <a className="section-cta" href="#">
              <span className="cta-arrow">
                <img
                  src="/assets/sustainability/discover-arrow.svg"
                  alt=""
                />
              </span>
              View BRSR Report
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
