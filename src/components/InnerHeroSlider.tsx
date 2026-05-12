"use client";

import { useEffect, useState } from "react";

type InnerHeroSlide = {
  title: string;
  image: string;
  mobileImage?: string;
  cta?: {
    label: string;
    href: string;
  };
};

type InnerHeroSliderProps = {
  slides: InnerHeroSlide[];
  breadcrumb?: { label: string; href?: string }[];
};

export function InnerHeroSlider({ slides, breadcrumb }: InnerHeroSliderProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;

    const timer = window.setInterval(() => {
      setActive((value) => (value + 1) % slides.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <>
      <section className="inner-banner inner-banner-slider" aria-label={slides[active]?.title ?? "Featured news"}>
        {slides.map((slide, index) => (
          <div className={index === active ? "inner-banner-slide is-active" : "inner-banner-slide"} key={slide.title}>
            <picture>
              {slide.mobileImage ? <source srcSet={slide.mobileImage} media="(max-width: 767px)" /> : null}
              <img src={slide.image} alt="" />
            </picture>
            <div className="inner-banner-text">
              <h1>{slide.title}</h1>
              {slide.cta ? (
                <a className="inner-banner-cta" href={slide.cta.href} target="_blank" rel="noreferrer">
                  {slide.cta.label}
                </a>
              ) : null}
            </div>
          </div>
        ))}
        <div className="inner-banner-pagination" aria-hidden="true">
          {slides.map((slide, index) => (
            <button
              className={index === active ? "is-active" : ""}
              key={slide.title}
              type="button"
              onClick={() => setActive(index)}
              tabIndex={-1}
            />
          ))}
        </div>
      </section>
      {breadcrumb && breadcrumb.length > 0 ? (
        <nav className="breadcrumb-bar" aria-label="Breadcrumb">
          <a href="/">Home</a>
          {breadcrumb.map((bc, i) => (
            <span key={i}>
              <span aria-hidden="true">›</span>
              {bc.href ? <a href={bc.href}>{bc.label}</a> : bc.label}
            </span>
          ))}
        </nav>
      ) : null}
    </>
  );
}
