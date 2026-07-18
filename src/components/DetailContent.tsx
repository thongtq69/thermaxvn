import { vietnamOffice } from "../lib/site";
import type { DetailPage } from "../lib/productContent";

type DetailContentProps = {
  page: DetailPage;
  related?: DetailPage[];
  contactLabel?: string;
  relatedBaseHref?: string;
  labels?: {
    catalog?: string;
    capacity?: string;
    fuel?: string;
    discover?: string;
    highlights: string;
    applications: string;
    relatedTitle: string;
  };
};

function OverviewText({ paragraph, accent }: { paragraph: string; accent: boolean }) {
  if (!accent) return paragraph;

  const commaIndex = paragraph.indexOf(",");
  let accentStart = commaIndex >= 0 ? commaIndex + 1 : -1;

  if (accentStart === -1) {
    const markers = [
      " hướng tới ",
      " giúp ",
      " để ",
      " nhằm ",
      " phù hợp ",
      " hỗ trợ ",
      " designed to ",
      " helps ",
      " supports ",
      " to improve ",
    ];
    const markerIndexes = markers
      .map((marker) => paragraph.toLowerCase().indexOf(marker))
      .filter((index) => index > paragraph.length * 0.2);

    if (markerIndexes.length > 0) {
      accentStart = Math.min(...markerIndexes) + 1;
    }
  }

  if (accentStart === -1) {
    const fallbackStart = paragraph.indexOf(" ", Math.floor(paragraph.length * 0.58));
    accentStart = fallbackStart >= 0 ? fallbackStart + 1 : -1;
  }

  if (accentStart <= 0 || accentStart >= paragraph.length) return paragraph;

  const regularText = paragraph.slice(0, accentStart).trimEnd();
  const accentText = paragraph.slice(accentStart).trimStart();

  return (
    <>
      {regularText}{" "}
      <span className="detail-overview-accent">{accentText}</span>
    </>
  );
}

export function DetailContent({
  page,
  related = [],
  contactLabel = "Trao đổi với Thermax Vietnam",
  relatedBaseHref = "/industrial-products",
  labels = {
    catalog: "Sản phẩm",
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
            {page.overview.map((paragraph, index) => (
              <p key={paragraph}>
                <OverviewText paragraph={paragraph} accent={index === 0} />
              </p>
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

      {page.products?.length ? (
        <section className="detail-catalog-section" id="products" data-section="products">
          <div className="detail-catalog-inner">
            <div className="detail-related-header" data-reveal>
              <h2>{labels.catalog ?? "Sản phẩm"}</h2>
            </div>
            <div className="detail-catalog-grid" data-reveal>
              {page.products.map((product) => (
                <article className="detail-catalog-card detail-catalog-card-rich" key={product.title}>
                  <h3>{product.title}</h3>
                  <div className="detail-catalog-media">
                    <img src={product.image} alt={product.title} loading="lazy" decoding="async" />
                  </div>
                  <div className="detail-catalog-body">
                    {product.description ? <p>{product.description}</p> : null}
                    {product.capacity || product.fuel ? (
                      <dl>
                        {product.capacity ? (
                          <div>
                            <dt>{labels.capacity ?? "Capacity Range"}</dt>
                            <dd>{product.capacity}</dd>
                          </div>
                        ) : null}
                        {product.fuel ? (
                          <div>
                            <dt>{labels.fuel ?? "Fuel Types"}</dt>
                            <dd>{product.fuel}</dd>
                          </div>
                        ) : null}
                      </dl>
                    ) : null}
                  </div>
                  <a className="detail-catalog-cta" href={product.href ?? "/contact-us"}>
                    {labels.discover ?? "Discover more"}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

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
