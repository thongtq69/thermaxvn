"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import type { ProjectShowcaseItem } from "../lib/projects";

export type { ProjectShowcaseItem };

export function ProjectShowcase({
  eyebrow = "Projects",
  title = "Featured industrial infrastructure projects",
  description = "A concise view of Thermax delivery capabilities across EPC, large boilers, fired heaters and industrial utility packages.",
  items,
  showHeader = true,
  stacked = false,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  items: ProjectShowcaseItem[];
  showHeader?: boolean;
  stacked?: boolean;
}) {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const [managedItems, setManagedItems] = useState<ProjectShowcaseItem[]>(items);

  useEffect(() => {
    let mounted = true;
    fetch("/api/cms/projects")
      .then((response) => (response.ok ? response.json() : null))
      .then((projects) => {
        if (mounted && Array.isArray(projects) && projects.length > 0) {
          setManagedItems(projects.filter((project) => project.status !== "draft"));
        }
      })
      .catch(() => {
        if (mounted) setManagedItems(items);
      });
    return () => {
      mounted = false;
    };
  }, [items]);

  useEffect(() => {
    setActive(0);
  }, [managedItems]);

  useEffect(() => {
    if (stacked || managedItems.length < 2) return;

    const interval = window.setInterval(() => {
      setActive((value) => (value + 1) % managedItems.length);
    }, 5200);
    return () => window.clearInterval(interval);
  }, [managedItems.length, stacked]);

  if (managedItems.length === 0) return null;

  const current = managedItems[active] ?? managedItems[0];
  const goToProject = (direction: number) => {
    setActive((value) => (value + direction + managedItems.length) % managedItems.length);
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

      <div className={stacked ? "project-showcase-track is-stacked" : "project-showcase-track"} data-reveal>
        {(stacked ? managedItems : [current]).map((project, index) => (
          <article className="project-showcase-card" key={project.title}>
            <div className="project-showcase-media">
              <img src={project.image} alt={t(project.title)} />
              <span>{String(stacked ? index + 1 : active + 1).padStart(2, "0")}</span>
            </div>
            <div className="project-showcase-body">
              <p className="project-showcase-kicker">{t(project.category)}</p>
              <h3>{t(project.title)}</h3>
              <p>{t(project.description)}</p>
              <dl>
                <div>
                  <dt>{t("Region")}</dt>
                  <dd>{t(project.region)}</dd>
                </div>
                <div>
                  <dt>{t("Capacity")}</dt>
                  <dd>{t(project.capacity)}</dd>
                </div>
                <div>
                  <dt>{t("Scope")}</dt>
                  <dd>{t(project.scope)}</dd>
                </div>
              </dl>
              <Link className="project-showcase-link" href={project.href}>
                {t("View project")}
              </Link>
            </div>
          </article>
        ))}
        {!stacked ? (
          <div className="carousel-controls project-showcase-controls" aria-label={t("Projects")}>
            <button type="button" onClick={() => goToProject(-1)} aria-label={t("Previous")}>
              &lt;
            </button>
            <div className="carousel-counter">
              {String(active + 1).padStart(2, "0")} / {String(managedItems.length).padStart(2, "0")}
            </div>
            <button type="button" onClick={() => goToProject(1)} aria-label={t("Next")}>
              &gt;
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
