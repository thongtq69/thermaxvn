"use client";

import { useState } from "react";

export type SolutionItem = {
  title: string;
  description: string;
  image: string;
  href: string;
};

export function SolutionsTabs({ items, eyebrow = "Solutions" }: { items: SolutionItem[]; eyebrow?: string }) {
  const [active, setActive] = useState(0);
  const current = items[active];

  return (
    <section className="solutions-section" data-section="solutions">
      <div className="solutions-eyebrow" data-reveal>
        {eyebrow}
      </div>
      <div className="solutions-layout" data-reveal>
        <ul className="solutions-tabs">
          {items.map((item, i) => (
            <li key={item.title}>
              <button
                type="button"
                className={i === active ? "is-active" : ""}
                onClick={() => setActive(i)}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>

        <div className="solutions-panel">
          <div className="solutions-panel-img">
            <img src={current.image} alt={current.title} />
          </div>
          <div className="solutions-panel-text">
            <h2>{current.title}</h2>
            <p>{current.description}</p>
            <a className="section-cta" href={current.href}>
              Discover more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
