import type { LandingCard, OfficialProductLanding } from "../lib/officialProductLanding";
import { vietnamOffice } from "../lib/site";

type OfficialProductLandingContentProps = {
  page: OfficialProductLanding;
  labels: {
    office: string;
    contact: string;
    discover: string;
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
      </section>

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
                <article key={item.title}>
                  <span aria-hidden="true">+</span>
                  <h3>{item.title}</h3>
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
    </>
  );
}
