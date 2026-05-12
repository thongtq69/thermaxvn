import { ArrowIcon } from "./icons";

export type CaseStudyItem = {
  title: string;
  image: string;
  href: string;
};

export function CaseStudiesRow({
  title = "Delivering",
  highlight = "impact",
  items,
  ctaLabel = "View all case studies",
  ctaHref = "#",
}: {
  title?: string;
  highlight?: string;
  items: CaseStudyItem[];
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="case-section" data-section="cases">
      <div className="section-title-block" data-reveal>
        <h2>
          {title} <span className="red">{highlight}</span>
        </h2>
        <a className="section-cta" href={ctaHref}>
          {ctaLabel}
        </a>
      </div>
      <div className="case-row" data-reveal>
        {items.map((item) => (
          <article className="case-row-card" key={item.title}>
            <div className="case-row-thumb">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="case-row-card-body">
              <h3>{item.title}</h3>
              <a href={item.href}>
                Read more <ArrowIcon />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
