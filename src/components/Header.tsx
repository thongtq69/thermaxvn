"use client";

import { useState } from "react";
import { businessSegments, imageUrls, navItems, productSolutionHrefs } from "../lib/site";
import { localeLabels, type Locale } from "../lib/i18n";
import { ArrowIcon, CloseIcon, SearchIcon } from "./icons";
import { useLanguage } from "./LanguageProvider";

const navHref: Record<string, string> = {
  "About Us": "/company-overview",
  "Business Portfolio": "/business-segments/industrial-products",
  Sustainability: "/sustainability",
  "Digital Solutions": "/business-portfolio/industrial-infrastructure",
  "In the News": "/in-the-news",
  Investors: "/investor-overview",
  "Contact Us": "/contact-us",
};

const megaHref: Record<string, string> = {
  "Company Overview": "/company-overview",
  "Legacy Milestones": "/company-overview/legacy-milestone",
  Leadership: "/company-overview/leadership/board-of-directors",
  "Awards and Recognitions": "/company-overview/awards-and-recognitions",
  "Manufacturing Facilities": "/company-overview/manufacturing-facilities",
  "Global Presence": "/company-overview/global-presence",
  "Policies & Certifications": "/about-us/policies",
  "Industrial Products": "/business-segments/industrial-products",
  "Industrial Infra": "/business-portfolio/industrial-infrastructure",
  "Large Boilers and Fired Heaters": "/business-portfolio/industrial-infrastructure?solution=large-boilers-and-fired-heaters#solutions",
  "Projects and Energy Solutions": "/business-portfolio/industrial-infrastructure?solution=projects-and-energy-solutions#solutions",
  "Green Solutions": "/business-segments/green-solutions",
  Chemicals: "/business-portfolio/chemicals",
  "Thermax Serve": "/sustainability",
  Overview: "/sustainability",
  "Corporate Social Responsibility": "/corporate-social-responsibility",
  "Social Compact": "/social-compact",
  "ESG Profile": "/esg-profile",
  "BRSR Report": "/sustainability",
  "EDGE Live": "/digital",
  "Predictive Insights": "/digital",
  "Energy Optimisation": "/digital",
  "Connected Service": "/digital",
  "Boiler Maintenance Services": "/services/boiler-maintenance-services",
  "Absorption Chiller Maintenance Services": "/services/absorption-chiller-maintenance-services",
  "Air Pollution Control System Maintenance Services": "/services/air-pollution-control-system-maintenance-services",
  "Automatic Tube Cleaning System (ATCS)": "/services/automatic-tube-cleaning-system-atcs",
  "Investor Overview": "/investor-overview",
  "Financial Information": "/investors/quarterly-results",
  "Governance and Regulatory information": "/investors/corporate-governance",
  "Shareholder Information": "/investors/shareholding-pattern",
  "Investor Services Contact": "/investors/investor-services-contact",
  "Dispute Resolution Mechanism": "/investor-overview",
  Disclaimer: "/investors/investor-disclaimer",
  "In the News": "/in-the-news",
  "Press Releases": "/in-the-news",
  "TV Interviews": "/in-the-news",
  "Media Kit": "/in-the-news",
  Careers: "/careers",
  "Contact Us": "/contact-us",
  ...productSolutionHrefs,
};

const navDisplayLabel: Record<string, string> = {
  "Business Portfolio": "Products",
  Sustainability: "Services",
  "Digital Solutions": "Projects",
  "In the News": "News",
};

const directNavLabels = new Set(["About Us", "Digital Solutions", "Contact Us"]);

function getNavDisplayLabel(label: string) {
  return navDisplayLabel[label] ?? label;
}

export function Header() {
  const { locale, t } = useLanguage();
  const [menu, setMenu] = useState("");
  const [productMenuIndex, setProductMenuIndex] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);
  const [callbackOpen, setCallbackOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = navItems.find((item) => item.label === menu) ?? navItems[0];
  const activeProductGroup = businessSegments[productMenuIndex] ?? businessSegments[0];

  const openMega = (label: string) => {
    setMenu(directNavLabels.has(label) ? "" : label);
  };

  const localizedHref = (href: string) => {
    if (typeof window === "undefined") return href;

    const url = new URL(href, window.location.href);
    if (locale === "en") {
      url.searchParams.set("lang", "en");
    } else {
      url.searchParams.delete("lang");
    }
    return `${url.pathname}${url.search}${url.hash}`;
  };

  return (
    <>
      <header className="site-header" onMouseLeave={() => setMenu("")} data-no-translate>
        <div className="utility-bar">
          <div />
          <div className="utility-right">
            <a href="/careers">{t("Careers")}</a>
          </div>
        </div>
        <div className="main-nav">
          <button
            className={mobileOpen ? "hamburger is-active" : "hamburger"}
            onClick={() => setMobileOpen((value) => !value)}
            type="button"
            aria-label={t("Toggle menu")}
          >
            <span />
            <span />
            <span />
          </button>

          <a className="brand" href="/" aria-label="Thermax home">
            <img src={imageUrls.logo} alt="Thermax" />
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <button
                className={menu === item.label ? "nav-link is-active" : "nav-link"}
                key={item.label}
                onFocus={() => {
                  openMega(item.label);
                }}
                onMouseEnter={() => {
                  openMega(item.label);
                }}
                onClick={() => {
                  window.location.href = localizedHref(navHref[item.label] ?? "#");
                }}
                type="button"
              >
                {t(getNavDisplayLabel(item.label))}
              </button>
            ))}
          </nav>

          <div className="nav-actions">
            <button
              className={callbackOpen ? "callback-button is-active" : "callback-button"}
              onClick={() => setCallbackOpen(true)}
              type="button"
            >
              {t("Submit enquiry")}
            </button>
            <button className="icon-button" onClick={() => setSearchOpen(true)} type="button" aria-label={t("Search")}>
              <SearchIcon />
            </button>
            <LanguageSwitch />
          </div>
        </div>

        <div
          className={[
            "mega-menu",
            menu ? "is-open" : "",
            active.label === "Business Portfolio" ? "mega-menu-products" : "",
          ]
            .filter(Boolean)
            .join(" ")}
          onMouseEnter={() => setMenu(active.label)}
        >
          <div className="mega-copy">
            <h2>{t(active.label === "About Us" ? "Thermax" : getNavDisplayLabel(active.label))}</h2>
            <p>{t(active.summary)}</p>
          </div>
          {active.label === "Business Portfolio" ? (
            <div className="mega-product-browser">
              <div className="mega-product-primary" aria-label={t("Product categories")}>
                {businessSegments.map((group, index) => (
                  <a
                    className={index === productMenuIndex ? "is-active" : ""}
                    href={megaHref[group.label] ?? "#"}
                    key={group.label}
                    onFocus={() => setProductMenuIndex(index)}
                    onMouseEnter={() => setProductMenuIndex(index)}
                  >
                    {t(group.label)}
                    <span className="mega-row-arrow" aria-hidden="true">
                      <svg viewBox="0 0 24 24">
                        <path d="m9 5 7 7-7 7" />
                      </svg>
                    </span>
                  </a>
                ))}
              </div>
              <div className="mega-product-secondary" aria-label={t(activeProductGroup.label)}>
                {activeProductGroup.links.map((child) => (
                  <a href={productSolutionHrefs[child] ?? megaHref[child] ?? "#"} key={child}>
                    {t(child)}
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <div className="mega-links">
              {active.links.map((link) => (
                <a href={megaHref[link] ?? "#"} key={link}>
                  {t(link)}
                  <span className="mega-row-arrow" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="m9 5 7 7-7 7" />
                    </svg>
                  </span>
                </a>
              ))}
            </div>
          )}
          <div className="mega-card">
            <p>{t("In the Spotlight")}</p>
            <img src={active.spotlightImage} alt="" />
            <strong>{t(active.spotlight)}</strong>
          </div>
        </div>

        <div className={mobileOpen ? "mobile-panel is-open" : "mobile-panel"}>
          {navItems.map((item) => (
            <a href={navHref[item.label] ?? "#"} key={item.label} onClick={() => setMobileOpen(false)}>
              {t(getNavDisplayLabel(item.label))}
            </a>
          ))}
          <div className="mobile-utility-links">
            <a href="/careers" onClick={() => setMobileOpen(false)}>
              {t("Careers")}
            </a>
          </div>
          <div className="mobile-language-row">
            <span>{t("Language")}</span>
            <LanguageSwitch compact />
          </div>
          <button type="button" onClick={() => setCallbackOpen(true)}>
            {t("Submit enquiry")}
          </button>
        </div>
      </header>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
      <CallbackModal open={callbackOpen} onClose={() => setCallbackOpen(false)} />
    </>
  );
}

function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t } = useLanguage();

  return (
    <div
      className={open ? "modal-shell is-open" : "modal-shell"}
      role="dialog"
      aria-modal="true"
      aria-label={t("Search")}
      data-no-translate
    >
      <button className="modal-backdrop" type="button" onClick={onClose} aria-label={t("Close search")} />
      <div className="search-panel">
        <button className="close-button" type="button" onClick={onClose} aria-label={t("Close")}>
          <CloseIcon />
        </button>
        <label htmlFor="site-search">{t("Search Results")}</label>
        <div className="search-input">
          <SearchIcon />
          <input id="site-search" placeholder={t("Search Thermax solutions")} autoComplete="off" />
        </div>
        <p>{t("Popular searches")}</p>
        <div className="chip-row">
          {["Air Pollution Control", "Cooling and Heating", "Process Heat", "Water and Waste", "Green Hydrogen"].map(
            (item) => (
              <button type="button" key={item}>
                {t(item)}
              </button>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

function CallbackModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t } = useLanguage();

  return (
    <div
      className={open ? "modal-shell is-open" : "modal-shell"}
      role="dialog"
      aria-modal="true"
      aria-label={t("Request a call back")}
      data-no-translate
    >
      <button className="modal-backdrop" type="button" onClick={onClose} aria-label={t("Close form")} />
      <form className="callback-panel">
        <button className="close-button" type="button" onClick={onClose} aria-label={t("Close")}>
          <CloseIcon />
        </button>
        <p>{t("Request a call back")}</p>
        <h2>{t("Submit your enquiry")}</h2>
        <div className="form-grid">
          <input placeholder={t("Full name*")} />
          <input placeholder={t("Company name*")} />
          <input placeholder={t("Phone number*")} />
          <input placeholder={t("Company address*")} />
          <input placeholder={t("Email*")} />
          <textarea placeholder={t("How can Thermax help?")} />
        </div>
        <button className="primary-button" type="button">
          {t("Submit enquiry")}
          <ArrowIcon />
        </button>
      </form>
    </div>
  );
}

function LanguageSwitch({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale, t } = useLanguage();
  const options: Locale[] = ["en", "vi"];

  return (
    <div
      className={compact ? "language-switch is-compact" : "language-switch"}
      data-no-translate
      role="group"
      aria-label={t("Language selector")}
      title={localeLabels[locale]}
    >
      <span className="language-switch-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18" />
        </svg>
      </span>
      {options.map((option) => (
        <button
          className={locale === option ? "is-active" : ""}
          key={option}
          onClick={() => setLocale(option)}
          type="button"
          aria-pressed={locale === option}
          aria-label={option === "en" ? t("Switch to English") : t("Switch to Vietnamese")}
        >
          {option === "en" ? "EN" : "VN"}
        </button>
      ))}
    </div>
  );
}
