"use client";

import { useLanguage } from "./LanguageProvider";

export type CaseStudyItem = {
  title: string;
  image: string;
  href: string;
  category?: string;
  date?: string;
  summary?: string;
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
  const { t } = useLanguage();

  return (
    <section className="case-section" id="cases" data-section="cases">
      <div className="section-title-block" data-reveal>
        <h2>
          {t(title)} <span className="red">{t(highlight)}</span>
        </h2>
        <a className="section-cta" href={ctaHref}>
          {t(ctaLabel)}
        </a>
      </div>
      <div className="news-listing-grid" data-reveal style={{ marginTop: '40px' }}>
        {items.map((item) => (
          <article className="news-listing-card" key={item.title}>
            <img src={item.image} alt={item.title} />
            <div className="news-listing-card-body">
              <span>{t(item.category || "Case Study")}</span>
              <p className="newsroom-date">{t(item.date || "15/05/2026")}</p>
              <h3>{t(item.title)}</h3>
              {item.summary && <p>{t(item.summary)}</p>}
              <a href={item.href} style={{ marginTop: 'auto' }}>
                {t("Read the case study")}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
