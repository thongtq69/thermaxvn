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
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  items: ProjectShowcaseItem[];
  showHeader?: boolean;
}) {
  const { t } = useLanguage();
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

  if (managedItems.length === 0) return null;

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

      <div className="project-showcase-track is-stacked" data-reveal>
        {managedItems.map((project, index) => (
          <article className="project-showcase-card" key={project.title}>
            <div className="project-showcase-media">
              <img src={project.image} alt={t(project.title)} />
              <span>{String(index + 1).padStart(2, "0")}</span>
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
      </div>
    </section>
  );
}
