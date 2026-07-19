import type { OfficialCatalogProduct } from "../lib/officialProductCatalog";
import { vietnamOffice } from "../lib/site";

type CatalogProductDetailProps = {
  product: OfficialCatalogProduct;
  parentTitle: string;
  parentHref: string;
  locale: "vi" | "en";
};

export function CatalogProductDetail({ product, parentTitle, parentHref, locale }: CatalogProductDetailProps) {
  const copy = locale === "vi"
    ? {
        home: "Trang chủ",
        products: "Sản phẩm",
        enquiry: "Gửi yêu cầu của bạn",
        overview: "Tổng quan",
        technical: "Thông số chính",
        features: "Đặc điểm nổi bật",
        capacity: "Phạm vi công suất",
        energy: "Nguồn năng lượng / nhiên liệu",
        support: "Trao đổi với Thermax Vietnam",
      }
    : {
        home: "Home",
        products: "Products",
        enquiry: "Submit your enquiry",
        overview: "Overview",
        technical: "Technical data",
        features: "Product features",
        capacity: "Capacity range",
        energy: "Energy / fuel source",
        support: "Talk to Thermax Vietnam",
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
          <p>{product.description}</p>
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
        <a href="#technical-data">{copy.technical}</a>
        <a href="#features">{copy.features}</a>
      </nav>

      <section className="catalog-product-overview" id="overview">
        <div>
          <span>{copy.overview}</span>
          <h2>{product.description}</h2>
          {(product.overview ?? []).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <aside>
          <span>{copy.support}</span>
          <h3>{vietnamOffice.label}</h3>
          {vietnamOffice.address.map((line) => <p key={line}>{line}</p>)}
          <a href={vietnamOffice.phoneHref}>{vietnamOffice.phone}</a>
          <a href={vietnamOffice.emailHref}>{vietnamOffice.email}</a>
        </aside>
      </section>

      <section className="catalog-product-technical" id="technical-data">
        <div className="catalog-product-section-heading">
          <span>{copy.technical}</span>
          <h2>{product.title}</h2>
        </div>
        <dl>
          <div><dt>{copy.capacity}</dt><dd>{product.capacity}</dd></div>
          <div><dt>{copy.energy}</dt><dd>{product.fuel}</dd></div>
        </dl>
      </section>

      <section className="catalog-product-features" id="features">
        <div className="catalog-product-section-heading"><h2>{copy.features}</h2></div>
        <div>
          {(product.features ?? []).map((feature, index) => (
            <article key={feature}><span>{String(index + 1).padStart(2, "0")}</span><h3>{feature}</h3></article>
          ))}
        </div>
      </section>
    </main>
  );
}
