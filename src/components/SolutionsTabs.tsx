"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";

export type SolutionItem = {
  title: string;
  description: string;
  image: string;
  href: string;
  key?: string;
  children?: {
    label: string;
    href: string;
  }[];
};

function solutionKey(item: SolutionItem) {
  if (item.key) return item.key;

  return item.title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/®/g, "")
    .replace(/&/g, "and")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function SolutionsTabs({ items, eyebrow = "Solutions" }: { items: SolutionItem[]; eyebrow?: string }) {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const current = items[active];

  useEffect(() => {
    const syncFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      const hash = window.location.hash.replace(/^#/, "");
      const requested = params.get("solution") || (hash && hash !== "solutions" ? hash : "");
      if (!requested) return;

      const nextIndex = items.findIndex((item) => solutionKey(item) === requested);
      if (nextIndex >= 0) setActive(nextIndex);
    };

    syncFromUrl();
    window.addEventListener("hashchange", syncFromUrl);
    window.addEventListener("popstate", syncFromUrl);
    return () => {
      window.removeEventListener("hashchange", syncFromUrl);
      window.removeEventListener("popstate", syncFromUrl);
    };
  }, [items]);

  const selectItem = (index: number) => {
    setActive(index);
    const url = new URL(window.location.href);
    url.searchParams.set("solution", solutionKey(items[index]));
    url.hash = "solutions";
    window.history.replaceState({}, "", url);
  };

  return (
    <section className="solutions-section" id="solutions" data-section="solutions">
      <div className="solutions-eyebrow" data-reveal>
        {t(eyebrow)}
      </div>
      <div className="solutions-layout" data-reveal>
        <ul className="solutions-tabs">
          {items.map((item, i) => (
            <li key={item.title}>
              <button
                type="button"
                className={i === active ? "is-active" : ""}
                onClick={() => selectItem(i)}
              >
                {t(item.title)}
              </button>
            </li>
          ))}
        </ul>

        <div className="solutions-panel">
          <div className="solutions-panel-img">
            <img src={current.image} alt={t(current.title)} />
          </div>
          <div className="solutions-panel-text">
            <h2>{t(current.title)}</h2>
            <p>{t(current.description)}</p>
            {current.children && current.children.length > 0 ? (
              <div className="solution-child-links" aria-label={t("Product subcategories")}>
                {current.children.map((child) => (
                  <a href={child.href} key={`${current.title}-${child.label}`}>
                    {t(child.label)}
                  </a>
                ))}
              </div>
            ) : null}
            <a className="section-cta" href={current.href}>
              {t("Discover more")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
