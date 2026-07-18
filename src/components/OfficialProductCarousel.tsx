"use client";

import { useRef } from "react";
import type { LandingCard } from "../lib/officialProductLanding";

type OfficialProductCarouselProps = {
  products: LandingCard[];
};

export function OfficialProductCarousel({ products }: OfficialProductCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const move = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector<HTMLElement>(".official-product-slide");
    const distance = (card?.offsetWidth ?? 380) + 28;
    track.scrollBy({ left: direction * distance, behavior: "smooth" });
  };

  return (
    <div className="official-product-carousel" data-reveal>
      <div className="official-product-carousel-controls" aria-label="Điều khiển danh sách sản phẩm">
        <button aria-label="Sản phẩm trước" onClick={() => move(-1)} type="button">
          ‹
        </button>
        <button aria-label="Sản phẩm tiếp theo" onClick={() => move(1)} type="button">
          ›
        </button>
      </div>
      <div className="official-product-carousel-track" ref={trackRef}>
        {products.map((product) => {
          const content = (
            <>
              {product.image ? <img src={product.image} alt={product.title} loading="lazy" decoding="async" /> : null}
              <span className="official-product-slide-shade" aria-hidden="true" />
              <div className="official-product-slide-copy">
                {product.badge ? <small>{product.badge}</small> : null}
                <h3>{product.title}</h3>
                {product.description ? <p>{product.description}</p> : null}
              </div>
            </>
          );

          return product.href ? (
            <a className="official-product-slide" href={product.href} key={product.title}>
              {content}
            </a>
          ) : (
            <article className="official-product-slide" key={product.title}>
              {content}
            </article>
          );
        })}
      </div>
    </div>
  );
}
