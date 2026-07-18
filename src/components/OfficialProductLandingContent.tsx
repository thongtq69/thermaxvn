import type { CSSProperties } from "react";
import type { LandingCard, OfficialProductLanding } from "../lib/officialProductLanding";
import { vietnamOffice } from "../lib/site";
import { OfficialProductCarousel } from "./OfficialProductCarousel";
import { OfficialProductShowcase } from "./OfficialProductShowcase";

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

function HighlightedIntro({ text, highlight }: { text: string; highlight?: string }) {
  if (!highlight) return text;

  const highlightIndex = text.indexOf(highlight);
  if (highlightIndex === -1) return text;

  return (
    <>
      {text.slice(0, highlightIndex)}
      <span className="official-intro-highlight">{highlight}</span>
      {text.slice(highlightIndex + highlight.length)}
    </>
  );
}

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

function IndustryIcon({ index }: { index: number }) {
  const variant = index % 4;

  return (
    <svg aria-hidden="true" viewBox="0 0 48 48">
      {variant === 0 ? (
        <>
          <path d="M7 35h34M10 35V20l10 5v-8l10 6V11h7v24" />
          <path d="M14 31h3m6 0h3m6 0h3" />
        </>
      ) : null}
      {variant === 1 ? (
        <>
          <circle cx="24" cy="24" r="15" />
          <path d="M24 5v7m0 24v7M5 24h7m24 0h7M13 13l5 5m12 12 5 5m0-22-5 5M18 30l-5 5" />
        </>
      ) : null}
      {variant === 2 ? (
        <>
          <path d="M7 36h34L36 15H12L7 36Z" />
          <path d="M15 15V8h7v7m5 7h6m-18 7h18" />
        </>
      ) : null}
      {variant === 3 ? (
        <>
          <path d="M17 8h14v8l5 7v16H12V23l5-7V8Z" />
          <path d="M17 16h14M18 27h12m-12 6h12" />
        </>
      ) : null}
    </svg>
  );
}

export function OfficialProductLandingContent({ page, labels }: OfficialProductLandingContentProps) {
  return (
    <>
      <section className="official-intro-section" id="overview" data-section="overview">
        <div className="official-intro-grid" data-reveal>
          <div>
            <h2>
              <HighlightedIntro text={page.intro} highlight={page.introHighlight} />
            </h2>
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
            <h2>{page.productHeading}</h2>
          </div>
          {page.slug === "air-pollution-control-systems" ? (
            <OfficialProductShowcase products={page.products} />
          ) : (
            <OfficialProductCarousel products={page.products} />
          )}
        </div>
      </section>

      {page.services && page.services.length > 0 ? (
        <section className="official-service-section" id="services" data-section="services">
          <div className="official-section-inner">
            <div className="official-service-layout">
              <div className="official-section-title official-service-intro" data-reveal>
                <h2>{page.serviceHeading}</h2>
                {page.serviceIntro ? <div>{page.serviceIntro}</div> : null}
              </div>
              <div className="official-service-grid" data-reveal>
                {page.services.map((item) => (
                  <article className="official-service-card" key={item.title}>
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
          </div>
        </section>
      ) : null}

      {page.features && page.features.length > 0 ? (
        <section className="official-feature-section" id="featured-capabilities" data-section="featured-capabilities">
          <div className="official-section-inner">
            <div className="official-section-title" data-reveal>
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

      {page.industryCards?.length || page.industries?.length ? (
        <section
          className="official-industries-section"
          id="industries"
          data-section="industries"
          style={{ "--official-industry-background": `url(${page.image})` } as CSSProperties}
        >
          <div className="official-section-inner official-industries-layout">
            <div className="official-section-title" data-reveal>
              <h2>{labels.industries}</h2>
            </div>
            <div className="official-industries-list" data-reveal>
              {(page.industryCards?.map((industry) => industry.title) ?? page.industries ?? []).map((industry, index) => (
                <span key={industry} className="official-industry-row">
                  <IndustryIcon index={index} />
                  <strong>{industry}</strong>
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
