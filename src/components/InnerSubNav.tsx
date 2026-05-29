"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageProvider";

type NavLink = {
  label: string;
  href: string;
};

type InnerSubNavProps = {
  items: NavLink[];
  context?: string;
  current?: string;
  options?: NavLink[];
  cta?: NavLink;
};

export function InnerSubNav({ items, context, current, options, cta }: InnerSubNavProps) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <div className="inner-subnav">
      <div className="inner-subnav-inner">
        <details className="inner-subnav-mobile">
          <summary>
            <span>{t("Navigate to")}:</span>
            <strong>{t("Select an option")}</strong>
          </summary>
          <ul>
            {items.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{t(item.label)}</a>
              </li>
            ))}
          </ul>
        </details>

        <ul className="inner-subnav-links">
          {items.map((item) => (
            <li key={item.label}>
              <a href={item.href}>{t(item.label)}</a>
            </li>
          ))}
        </ul>

        {cta ? (
          <a className="inner-subnav-cta" href={cta.href}>
            {t(cta.label)}
          </a>
        ) : null}

        {context && current ? (
          <div className="inner-subnav-dropdown">
            <button type="button" onClick={() => setOpen((value) => !value)}>
              <span>
                <strong>{t(context)}</strong> : {t(current)}
              </span>
            </button>
            {options && options.length > 0 ? (
              <ul className={open ? "is-open" : ""}>
                {options.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} onClick={() => setOpen(false)}>
                      {t(item.label)}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}
