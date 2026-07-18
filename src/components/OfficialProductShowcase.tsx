"use client";

import { useState } from "react";
import type { LandingCard } from "../lib/officialProductLanding";

type OfficialProductShowcaseProps = {
  products: LandingCard[];
};

export function OfficialProductShowcase({ products }: OfficialProductShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProduct = products[activeIndex] ?? products[0];

  if (!activeProduct) return null;

  return (
    <div className="official-product-showcase" data-reveal>
      <div className="official-product-tabs" role="tablist" aria-label="Products">
        {products.map((product, index) => (
          <button
            aria-controls={`official-product-panel-${index}`}
            aria-selected={activeIndex === index}
            className={activeIndex === index ? "official-product-tab is-active" : "official-product-tab"}
            id={`official-product-tab-${index}`}
            key={product.title}
            onClick={() => setActiveIndex(index)}
            role="tab"
            type="button"
          >
            {product.title}
          </button>
        ))}
      </div>

      <div
        aria-labelledby={`official-product-tab-${activeIndex}`}
        className="official-product-panel"
        id={`official-product-panel-${activeIndex}`}
        role="tabpanel"
      >
        {activeProduct.image ? (
          <div className="official-product-panel-media">
            <img src={activeProduct.image} alt={activeProduct.title} loading="lazy" decoding="async" />
          </div>
        ) : null}
        <div className="official-product-panel-copy">
          <h3>
            {activeProduct.href ? <a href={activeProduct.href}>{activeProduct.title}</a> : activeProduct.title}
          </h3>
          {activeProduct.description ? <p>{activeProduct.description}</p> : null}
          {activeProduct.items?.length ? (
            <ul>
              {activeProduct.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
}
