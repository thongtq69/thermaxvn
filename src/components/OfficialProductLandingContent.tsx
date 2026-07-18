import type { LandingCard, OfficialProductLanding } from "../lib/officialProductLanding";
import { vietnamOffice } from "../lib/site";

type OfficialProductLandingContentProps = {
  page: OfficialProductLanding;
  labels: {
    office: string;
    contact: string;
    discover: string;
    challenges: string;
    industries: string;
    caseStudies: string;
    resources: string;
  };
};

function LandingCardLink({ card }: { card: LandingCard }) {
  const content = (
    <>
      {card.image ? (
        <div className="official-product-card-media">
          <img src={card.image} alt="" loading="lazy" decoding="async" />
        </div>
      ) : null}
      <div className="official-product-card-copy">
        {card.badge ? <span>{card.badge}</span> : null}
        <h3>{card.title}</h3>
        {card.description ? <p>{card.description}</p> : null}
        {card.items?.length ? (
          <ul className="official-card-list">
            {card.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </>
  );

  return card.href ? (
    <a className="official-product-card" href={card.href}>
      {content}
    </a>
  ) : (
    <article className="official-product-card">{content}</article>
  );
}

export function OfficialProductLandingContent({ page, labels }: OfficialProductLandingContentProps) {
  return (
    <>
      <section className="official-intro-section" id="overview" data-section="overview">
        <div className="official-intro-grid" data-reveal>
          <div>
            <p className="official-kicker">{page.title}</p>
            <h2>{page.intro}</h2>
          </div>
          <aside className="official-office-card" aria-label={labels.contact}>
            <span>{labels.contact}</span>
            <h3>{labels.office}</h3>
            {vietnamOffice.address.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <a href={vietnamOffice.phoneHref}>{vietnamOffice.phone}</a>
            <a href={vietnamOffice.emailHref}>{vietnamOffice.email}</a>
          </aside>
        </div>
        {page.overviewParagraphs?.length || page.stats?.length ? (
          <div className="official-overview-panel" data-reveal>
            {page.overviewParagraphs?.length ? (
              <div className="official-copy">
                {page.overviewParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            ) : null}
            {page.stats?.length ? (
              <div className="official-stat-grid">
                {page.stats.map((stat) => (
                  <article key={`${stat.value}-${stat.label}`} className="official-stat-card">
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </article>
                ))}
              </div>
            ) : null}
          </div>
        ) : null}
      </section>

      {page.challenges?.length ? (
        <section className="official-challenge-section" id="challenges" data-section="challenges">
          <div className="official-section-inner">
            <div className="official-section-title" data-reveal>
              <p>{page.title}</p>
              <h2>{labels.challenges}</h2>
            </div>
            <div className="official-challenge-grid" data-reveal>
              {page.challenges.map((challenge) => (
                <article key={challenge.number} className="official-challenge-card">
                  <span>{challenge.number}</span>
                  <h3>{challenge.title}</h3>
                  <p>{challenge.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="official-product-section" id="products" data-section="products">
        <div className="official-section-inner">
          <div className="official-section-title" data-reveal>
            <p>{page.title}</p>
            <h2>{page.productHeading}</h2>
          </div>
          <div className="official-product-grid" data-reveal>
            {page.products.map((card) => (
              <LandingCardLink card={card} key={card.title} />
            ))}
          </div>
        </div>
      </section>

      {page.services && page.services.length > 0 ? (
        <section className="official-service-section" id="services" data-section="services">
          <div className="official-section-inner">
            <div className="official-section-title" data-reveal>
              <p>{page.title}</p>
              <h2>{page.serviceHeading}</h2>
              {page.serviceIntro ? <div>{page.serviceIntro}</div> : null}
            </div>
            <div className="official-service-grid" data-reveal>
              {page.services.map((item) => (
                <article className={item.image ? "official-service-card has-image" : "official-service-card"} key={item.title}>
                  {item.image ? (
                    <div className="official-service-card-media">
                      <img src={item.image} alt="" loading="lazy" decoding="async" />
                    </div>
                  ) : (
                    <span aria-hidden="true">+</span>
                  )}
                  <div className="official-service-card-copy">
                    <h3>{item.title}</h3>
                    {item.description ? <p>{item.description}</p> : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {page.features && page.features.length > 0 ? (
        <section className="official-feature-section" id="featured-capabilities" data-section="featured-capabilities">
          <div className="official-section-inner">
            <div className="official-section-title" data-reveal>
              <p>{page.title}</p>
              <h2>{page.featureHeading}</h2>
            </div>
            <div className="official-feature-grid" data-reveal>
              {page.features.map((card) => (
                <LandingCardLink card={card} key={card.title} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {page.industries?.length ? (
        <section className="official-industries-section" id="industries" data-section="industries">
          <div className="official-section-inner">
            <div className="official-section-title" data-reveal>
              <p>{page.title}</p>
              <h2>{labels.industries}</h2>
            </div>
            <div className="official-industries-grid" data-reveal>
              {page.industries.map((industry) => (
                <span key={industry} className="official-industry-chip">
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {page.caseStudies?.length || page.resources?.length ? (
        <section className="official-proof-section" id="case-studies" data-section="case-studies">
          <div className="official-section-inner">
            {page.caseStudies?.length ? (
              <div className="official-proof-block" data-reveal>
                <div className="official-section-title">
                  <p>{page.title}</p>
                  <h2>{labels.caseStudies}</h2>
                </div>
                <div className="official-proof-grid">
                  {page.caseStudies.map((card) => (
                    <LandingCardLink card={card} key={card.title} />
                  ))}
                </div>
              </div>
            ) : null}
            {page.resources?.length ? (
              <div className="official-resource-block" id="resources" data-section="resources" data-reveal>
                <div className="official-section-title">
                  <p>{page.title}</p>
                  <h2>{labels.resources}</h2>
                </div>
                <div className="official-resource-list">
                  {page.resources.map((resource) => (
                    <a className="official-resource-card" href={resource.href ?? "/contact-us"} key={`${resource.type}-${resource.title}`}>
                      <span>{resource.type}</span>
                      <strong>{resource.title}</strong>
                    </a>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </section>
      ) : null}
    </>
  );
}
