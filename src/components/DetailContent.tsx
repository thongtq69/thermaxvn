import { vietnamOffice } from "../lib/site";
import type { DetailPage } from "../lib/productContent";

type DetailContentProps = {
  page: DetailPage;
  related?: DetailPage[];
  contactLabel?: string;
  relatedBaseHref?: string;
  labels?: {
    highlights: string;
    applications: string;
    relatedTitle: string;
  };
};

export function DetailContent({
  page,
  related = [],
  contactLabel = "Trao đổi với Thermax Vietnam",
  relatedBaseHref = "/industrial-products",
  labels = {
    highlights: "Điểm nổi bật",
    applications: "Ứng dụng tiêu biểu",
    relatedTitle: "Các nội dung liên quan",
  },
}: DetailContentProps) {
  return (
    <>
      <section className="detail-overview-section" id="overview" data-section="overview">
        <div className="detail-overview-grid" data-reveal>
          <div className="detail-copy">
            <h2>{page.title}</h2>
            {page.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <aside className="detail-contact-card" aria-label={contactLabel}>
            <span>{contactLabel}</span>
            <h3>{vietnamOffice.label}</h3>
            <a href={vietnamOffice.phoneHref}>{vietnamOffice.phone}</a>
            <a href={vietnamOffice.emailHref}>{vietnamOffice.email}</a>
          </aside>
        </div>
      </section>

      <section className="detail-info-band" data-section="capabilities">
        <div className="detail-info-grid" data-reveal>
          <article>
            <p>{labels.highlights}</p>
            <ul>
              {page.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article>
            <p>{labels.applications}</p>
            <ul>
              {page.applications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="detail-related-section" data-section="related">
          <div className="detail-related-header" data-reveal>
            <h2>{labels.relatedTitle}</h2>
          </div>
          <div className="detail-related-grid" data-reveal>
            {related.map((item) => (
              <a className="detail-related-card" href={`${relatedBaseHref}/${item.slug}`} key={item.slug}>
                <span>{item.eyebrow}</span>
                <strong>{item.title}</strong>
                <small>{item.description}</small>
              </a>
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}
