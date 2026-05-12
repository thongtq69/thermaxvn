"use client";

import { useState } from "react";

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
  const [open, setOpen] = useState(false);

  return (
    <div className="inner-subnav">
      <div className="inner-subnav-inner">
        <details className="inner-subnav-mobile">
          <summary>
            <span>Navigate to:</span>
            <strong>Select an option</strong>
          </summary>
          <ul>
            {items.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </details>

        <ul className="inner-subnav-links">
          {items.map((item) => (
            <li key={item.label}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

        {cta ? (
          <a className="inner-subnav-cta" href={cta.href}>
            {cta.label}
          </a>
        ) : null}

        {context && current ? (
          <div className="inner-subnav-dropdown">
            <button type="button" onClick={() => setOpen((value) => !value)}>
              <span>
                <strong>{context}</strong> : {current}
              </span>
            </button>
            {options && options.length > 0 ? (
              <ul className={open ? "is-open" : ""}>
                {options.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} onClick={() => setOpen(false)}>
                      {item.label}
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
