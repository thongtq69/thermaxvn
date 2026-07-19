import type { OfficialCatalogProduct } from "../lib/officialProductCatalog";

type CatalogProductDetailProps = {
  product: OfficialCatalogProduct;
  parentTitle: string;
  parentHref: string;
  locale: "vi" | "en";
};

export function CatalogProductDetail({ product, parentTitle, parentHref, locale }: CatalogProductDetailProps) {
  const technicalData = product.technicalData ?? [];
  const hasTechnicalData = technicalData.length > 0;
  const hasFeatures = Boolean(product.featureDetails?.length || product.features?.length);
  const copy = locale === "vi"
    ? {
        home: "Trang chủ",
        products: "Sản phẩm",
        enquiry: "Gửi yêu cầu của bạn",
        overview: "Tổng quan",
        technical: "Dữ liệu kỹ thuật",
        features: "Tính năng sản phẩm",
        resources: "Tài liệu sản phẩm",
        capacity: "Phạm vi công suất",
        energy: "Nguồn năng lượng / nhiên liệu",
      }
    : {
        home: "Home",
        products: "Products",
        enquiry: "Submit your enquiry",
        overview: "Overview",
        technical: "Technical data",
        features: "Product features",
        resources: "Product resources",
        capacity: "Capacity range",
        energy: "Energy / fuel source",
      };

  return (
    <main className="catalog-product-detail">
      <nav className="catalog-product-breadcrumb" aria-label="Breadcrumb">
        <a href="/">{copy.home}</a><span>/</span>
        <a href="/business-segments/industrial-products">{copy.products}</a><span>/</span>
        <a href={parentHref}>{parentTitle}</a><span>/</span>
        <strong>{product.title}</strong>
      </nav>

      <section className="catalog-product-hero">
        <div className="catalog-product-hero-copy">
          <span>{parentTitle}</span>
          <h1>{product.title}</h1>
          <p>{product.subtitle ?? product.description}</p>
          <a className="catalog-product-enquiry" href={`/contact-us?product=${encodeURIComponent(product.title)}`}>
            {copy.enquiry}
          </a>
        </div>
        <div className="catalog-product-hero-media">
          <img src={product.image} alt={product.title} decoding="async" />
        </div>
      </section>

      <nav className="catalog-product-tabs" aria-label={copy.overview}>
        <a href="#overview">{copy.overview}</a>
        {hasTechnicalData ? <a href="#technical-data">{copy.technical}</a> : null}
        {hasFeatures ? <a href="#features">{copy.features}</a> : null}
        {product.resources?.length ? <a href="#resources">{copy.resources}</a> : null}
      </nav>

      <section className="catalog-product-overview" id="overview">
        <aside className="catalog-product-side-nav">
          <a className="is-active" href="#overview">{copy.overview}</a>
          {hasTechnicalData ? <a href="#technical-data">{copy.technical}</a> : null}
          {hasFeatures ? <a href="#features">{copy.features}</a> : null}
          {product.resources?.length ? <a href="#resources">{copy.resources}</a> : null}
        </aside>
        <div className="catalog-product-overview-copy">
          <h2>{product.overview?.[0] ?? product.description}</h2>
          {(product.overview ?? []).slice(1).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <div className="catalog-product-overview-media">
          <img src={product.secondaryImage ?? product.image} alt={product.title} loading="lazy" decoding="async" />
        </div>
      </section>

      {hasTechnicalData ? (
        <section className="catalog-product-technical" id="technical-data">
          <div className="catalog-product-section-heading">
            <span>{copy.technical}</span>
            <h2>{product.title}</h2>
          </div>
          <dl>
            {technicalData.map((item, index) => (
              <div key={`${item.label}-${index}`}><dt>{item.label}</dt><dd>{item.value}</dd></div>
            ))}
          </dl>
        </section>
      ) : null}

      {hasFeatures ? (
        <section className="catalog-product-features" id="features">
          <div className="catalog-product-section-heading"><h2>{copy.features}</h2></div>
          <div className={product.featureDetails?.length ? "has-feature-details" : undefined}>
            {product.featureDetails?.length
              ? product.featureDetails.map((feature, index) => (
                  <article key={`${feature.title}-${index}`}>
                    {feature.image ? <img src={feature.image} alt="" loading="lazy" decoding="async" /> : <span>{String(index + 1).padStart(2, "0")}</span>}
                    <h3>{feature.title}</h3>
                    {feature.description ? <p>{feature.description}</p> : null}
                  </article>
                ))
              : (product.features ?? []).map((feature, index) => (
                  <article key={feature}><span>{String(index + 1).padStart(2, "0")}</span><h3>{feature}</h3></article>
                ))}
          </div>
        </section>
      ) : null}

      {product.resources?.length ? (
        <section className="catalog-product-resources" id="resources">
          <div className="catalog-product-section-heading"><h2>{copy.resources}</h2></div>
          <div className="catalog-product-resource-list">
            {product.resources.map((resource, index) => (
              <a key={`${resource.url}-${index}`} href={resource.url} target="_blank" rel="noreferrer">
                <span>{resource.title}</span><strong aria-hidden="true">↗</strong>
              </a>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
