"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";
import type { ProjectShowcaseItem } from "../lib/projects";

export type { ProjectShowcaseItem };

export function ProjectShowcase({
  eyebrow = "Projects",
  title = "Featured industrial infrastructure projects",
  description = "A concise view of Thermax delivery capabilities across EPC, large boilers, fired heaters and industrial utility packages.",
  items,
  showHeader = true,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  items: ProjectShowcaseItem[];
  showHeader?: boolean;
}) {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);

  useEffect(() => {
    setActive(0);
  }, [items]);

  useEffect(() => {
    if (items.length < 2) return;

    const interval = window.setInterval(() => {
      setActive((value) => (value + 1) % items.length);
    }, 5200);
    return () => window.clearInterval(interval);
  }, [items.length]);

  if (items.length === 0) return null;

  const current = items[active];
  const goToProject = (direction: number) => {
    setActive((value) => (value + direction + items.length) % items.length);
  };

  return (
    <section className="project-showcase" id="solutions" data-section="solutions">
      {showHeader ? (
        <div className="project-showcase-header" data-reveal>
          <div>
            {eyebrow ? <p>{t(eyebrow)}</p> : null}
            <h2>{t(title)}</h2>
          </div>
          {description ? <span>{t(description)}</span> : null}
        </div>
      ) : null}

      <div className="project-showcase-track" data-reveal>
        <article className="project-showcase-card" key={current.title}>
          <div className="project-showcase-media">
            <img src={current.image} alt={t(current.title)} />
            <span>{String(active + 1).padStart(2, "0")}</span>
          </div>
          <div className="project-showcase-body">
            <p className="project-showcase-kicker">{t(current.category)}</p>
            <h3>{t(current.title)}</h3>
            <p>{t(current.description)}</p>
            <dl>
              <div>
                <dt>{t("Region")}</dt>
                <dd>{t(current.region)}</dd>
              </div>
              <div>
                <dt>{t("Capacity")}</dt>
                <dd>{t(current.capacity)}</dd>
              </div>
              <div>
                <dt>{t("Scope")}</dt>
                <dd>{t(current.scope)}</dd>
              </div>
            </dl>
            <a className="project-showcase-link" href={current.href}>
              {t("View project")}
            </a>
          </div>
        </article>
        <div className="carousel-controls project-showcase-controls" aria-label={t("Projects")}>
          <button type="button" onClick={() => goToProject(-1)} aria-label={t("Previous")}>
            &lt;
          </button>
          <div className="carousel-counter">
            {String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          </div>
          <button type="button" onClick={() => goToProject(1)} aria-label={t("Next")}>
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}
