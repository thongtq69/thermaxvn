"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "./LanguageProvider";
import type { ProjectShowcaseItem } from "../lib/projects";

export type { ProjectShowcaseItem };

export function ProjectShowcase({
  eyebrow = "Projects",
  title = "Featured industrial infrastructure projects",
  description = "A concise view of Thermax delivery capabilities across EPC, large boilers, fired heaters and industrial utility packages.",
  items,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  items: ProjectShowcaseItem[];
}) {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("All projects");

  const categories = useMemo(
    () => ["All projects", ...Array.from(new Set(items.map((item) => item.category)))],
    [items],
  );
  const visibleItems = activeCategory === "All projects"
    ? items
    : items.filter((item) => item.category === activeCategory);

  return (
    <section className="project-showcase" id="solutions" data-section="solutions">
      <div className="project-showcase-header" data-reveal>
        <div>
          <p>{t(eyebrow)}</p>
          <h2>{t(title)}</h2>
        </div>
        <span>{t(description)}</span>
      </div>

      <div className="project-showcase-filter" data-reveal>
        {categories.map((category) => (
          <button
            type="button"
            className={category === activeCategory ? "is-active" : ""}
            onClick={() => setActiveCategory(category)}
            key={category}
          >
            {t(category)}
          </button>
        ))}
      </div>

      <div className="project-showcase-track" data-reveal>
        {visibleItems.map((item, index) => (
          <article className="project-showcase-card" key={item.title}>
            <div className="project-showcase-media">
              <img src={item.image} alt={t(item.title)} />
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="project-showcase-body">
              <p className="project-showcase-kicker">{t(item.category)}</p>
              <h3>{t(item.title)}</h3>
              <p>{t(item.description)}</p>
              <dl>
                <div>
                  <dt>{t("Region")}</dt>
                  <dd>{t(item.region)}</dd>
                </div>
                <div>
                  <dt>{t("Capacity")}</dt>
                  <dd>{t(item.capacity)}</dd>
                </div>
                <div>
                  <dt>{t("Scope")}</dt>
                  <dd>{t(item.scope)}</dd>
                </div>
              </dl>
              <a className="project-showcase-link" href={item.href}>
                {t("View project")}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
