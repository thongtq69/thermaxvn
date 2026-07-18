"use client";

import { useEffect, useMemo, useState } from "react";
import { imageUrls, navItems, productSolutionHrefs, productSubcategoryGroups } from "../lib/site";
import type { ProductSubcategoryGroup } from "../lib/site";
import type { ManagedNewsItem, ManagedProject } from "../lib/cmsTypes";
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
  "Financial Information": "/investor-overview#latest-results",
  "Governance and Regulatory information": "/investor-overview#shareholder-info",
  "Shareholder Information": "/investor-overview#shareholder-info",
  "Investor Services Contact": "/investor-overview#investor-contact",
  "Dispute Resolution Mechanism": "/investor-overview",
  Disclaimer: "/investor-overview",
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

type LocalizedSearchPage = {
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  href: string;
  keywords: string;
};

type SearchResult = {
  title: string;
  description: string;
  href: string;
  keywords: string;
  kind: string;
};

const siteSearchPages: LocalizedSearchPage[] = [
  { title: { en: "Company Overview", vi: "Tổng quan công ty" }, description: { en: "Learn about Thermax and its presence in Vietnam.", vi: "Tìm hiểu về Thermax và hoạt động tại Việt Nam." }, href: "/company-overview", keywords: "about company giới thiệu công ty thermax vietnam" },
  { title: { en: "Global Presence", vi: "Hiện diện toàn cầu" }, description: { en: "Explore Thermax offices and facilities around the world.", vi: "Khám phá văn phòng và cơ sở Thermax trên toàn thế giới." }, href: "/company-overview/global-presence", keywords: "global presence bản đồ văn phòng nhà máy thế giới" },
  { title: { en: "Industrial Products", vi: "Sản phẩm công nghiệp" }, description: { en: "Browse Thermax products and industrial solutions.", vi: "Xem sản phẩm và giải pháp công nghiệp của Thermax." }, href: "/business-segments/industrial-products", keywords: "products sản phẩm giải pháp công nghiệp" },
  { title: { en: "Industrial Infrastructure", vi: "Hạ tầng công nghiệp" }, description: { en: "Projects, boilers, fired heaters and energy solutions.", vi: "Dự án, lò hơi, thiết bị gia nhiệt và giải pháp năng lượng." }, href: "/business-portfolio/industrial-infrastructure", keywords: "industrial infrastructure boiler heater dự án lò hơi hạ tầng" },
  { title: { en: "Green Solutions", vi: "Giải pháp xanh" }, description: { en: "Clean energy and decarbonisation solutions.", vi: "Giải pháp năng lượng sạch và giảm phát thải carbon." }, href: "/business-segments/green-solutions", keywords: "green hydrogen clean energy hydro xanh năng lượng sạch carbon" },
  { title: { en: "Chemicals", vi: "Hóa chất" }, description: { en: "Performance chemicals for industrial applications.", vi: "Hóa chất hiệu năng cho các ứng dụng công nghiệp." }, href: "/business-portfolio/chemicals", keywords: "chemicals hóa chất resin nhựa trao đổi ion" },
  { title: { en: "Sustainability", vi: "Phát triển bền vững" }, description: { en: "Thermax sustainability commitments and services.", vi: "Cam kết và dịch vụ phát triển bền vững của Thermax." }, href: "/sustainability", keywords: "sustainability service bền vững dịch vụ thermax serve" },
  { title: { en: "Digital Solutions", vi: "Giải pháp số" }, description: { en: "Connected operations, insights and EDGE Live.", vi: "Vận hành kết nối, phân tích dữ liệu và EDGE Live." }, href: "/digital", keywords: "digital edge live ai số hóa vận hành kết nối" },
  { title: { en: "News", vi: "Tin tức" }, description: { en: "Latest Thermax business and technology updates.", vi: "Tin mới nhất về hoạt động và công nghệ Thermax." }, href: "/in-the-news", keywords: "news press release tin tức cập nhật" },
  { title: { en: "Careers", vi: "Tuyển dụng" }, description: { en: "Career opportunities and life at Thermax.", vi: "Cơ hội nghề nghiệp và môi trường làm việc tại Thermax." }, href: "/careers", keywords: "careers jobs tuyển dụng việc làm" },
  { title: { en: "Contact Us", vi: "Liên hệ" }, description: { en: "Contact Thermax Vietnam for support and enquiries.", vi: "Liên hệ Thermax Việt Nam để được tư vấn và hỗ trợ." }, href: "/contact-us", keywords: "contact enquiry liên hệ tư vấn điện thoại email" },
  { title: { en: "Corporate Social Responsibility", vi: "Trách nhiệm xã hội" }, description: { en: "Thermax community and social initiatives.", vi: "Các chương trình cộng đồng và trách nhiệm xã hội của Thermax." }, href: "/corporate-social-responsibility", keywords: "csr social community trách nhiệm xã hội cộng đồng" },
  { title: { en: "ESG Profile", vi: "Hồ sơ ESG" }, description: { en: "Environmental, social and governance profile.", vi: "Thông tin môi trường, xã hội và quản trị doanh nghiệp." }, href: "/esg-profile", keywords: "esg environment social governance môi trường quản trị" },
  { title: { en: "People", vi: "Con người Thermax" }, description: { en: "Meet the people and culture behind Thermax Vietnam.", vi: "Tìm hiểu con người và văn hóa Thermax Việt Nam." }, href: "/people", keywords: "people culture con người văn hóa" },
];

function normalizeSearchValue(value: string) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d");
}

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
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [managedProductGroups, setManagedProductGroups] = useState<ProductSubcategoryGroup[]>(productSubcategoryGroups);
  const active = navItems.find((item) => item.label === menu) ?? navItems[0];
  const activeProductGroup = managedProductGroups[productMenuIndex] ?? managedProductGroups[0];

  useEffect(() => {
    let mounted = true;
    fetch("/api/cms/productGroups")
      .then((response) => (response.ok ? response.json() : null))
      .then((groups) => {
        if (mounted && Array.isArray(groups) && groups.length > 0) {
          setManagedProductGroups(groups);
        }
      })
      .catch(() => undefined);
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (!mobileOpen) {
      setMobileExpanded(null);
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

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

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileExpanded(null);
  };

  const toggleMobileSection = (label: string) => {
    setMobileExpanded((value) => (value === label ? null : label));
  };

  return (
    <>
      <header className="site-header" onMouseLeave={() => setMenu("")} data-no-translate>
        <div className="utility-bar">
          <div />
          <div className="utility-right" />
        </div>
        <div className="main-nav">
          <button
            className={mobileOpen ? "hamburger is-active" : "hamburger"}
            onClick={(event) => {
              setMobileOpen((value) => !value);
              if (event.detail > 0) {
                event.currentTarget.blur();
              }
            }}
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
                  window.location.href = localizedHref(navHref[item.label] ?? "/");
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
          {active.label !== "Business Portfolio" ? (
            <div className="mega-copy">
              <h2>{t(active.label === "About Us" ? "Thermax" : getNavDisplayLabel(active.label))}</h2>
              <p>{t(active.summary)}</p>
            </div>
          ) : null}
          {active.label === "Business Portfolio" ? (
            <div className="mega-product-browser">
              <div className="mega-product-intro">
                <h2>{t("Product categories")}</h2>
                <p>{t(active.summary)}</p>
              </div>
              <div className="mega-product-primary" aria-label={t("Product categories")}>
                {managedProductGroups.map((group, index) => (
                  <a
                    className={index === productMenuIndex ? "is-active" : ""}
                    href={group.href}
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
              <div className="mega-product-children" aria-label={t("Product subcategories")}>
                <p>{t(activeProductGroup.label)}</p>
                {activeProductGroup.children.map((child) => (
                  <a href={child.href} key={child.href}>
                    {t(child.label)}
                  </a>
                ))}
              </div>
              <a className="mega-product-spotlight" href="/business-segments/green-solutions">
                <span>{t("In the Spotlight")}</span>
                <img src={imageUrls.greenHydrogen} alt={t(active.spotlight)} />
                <strong>{t(active.spotlight)}</strong>
              </a>
            </div>
          ) : (
            <div className="mega-links">
              {active.links.map((link) => (
                <a href={megaHref[link] ?? "/"} key={link}>
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
          {active.label !== "Business Portfolio" ? (
            <div className="mega-card">
              <p>{t("In the Spotlight")}</p>
              <img src={active.spotlightImage} alt="" />
              <strong>{t(active.spotlight)}</strong>
            </div>
          ) : null}
        </div>

        <div className={mobileOpen ? "mobile-panel is-open" : "mobile-panel"}>
          <div className="mobile-nav-list">
            {navItems.map((item) => {
              const isProducts = item.label === "Business Portfolio";
              const isNews = item.label === "In the News";
              const hasChildren = isProducts || item.links.length > 0;
              const isExpanded = mobileExpanded === item.label;

              if (!hasChildren) {
                return (
                  <div className="mobile-nav-section" key={item.label}>
                    <a className="mobile-nav-link" href={localizedHref(navHref[item.label] ?? "/")} onClick={closeMobileMenu}>
                      {t(getNavDisplayLabel(item.label))}
                    </a>
                  </div>
                );
              }

              return (
                <div className={isExpanded ? "mobile-nav-section is-open" : "mobile-nav-section"} key={item.label}>
                  <button
                    className="mobile-nav-trigger"
                    type="button"
                    aria-expanded={isExpanded}
                    onClick={(event) => {
                      toggleMobileSection(item.label);
                      if (event.detail > 0) {
                        event.currentTarget.blur();
                      }
                    }}
                  >
                    {t(getNavDisplayLabel(item.label))}
                  </button>
                  {isExpanded ? (
                    <div className="mobile-submenu">
                      {!isNews ? (
                        <a
                          className="mobile-overview-link"
                          href={localizedHref(navHref[item.label] ?? "/")}
                          onClick={closeMobileMenu}
                        >
                          {t("Overview")}
                        </a>
                      ) : null}
                      {isProducts
                        ? managedProductGroups.map((group) => (
                            <details className="mobile-subgroup" key={group.label}>
                              <summary>{t(group.label)}</summary>
                              <div className="mobile-subgroup-links">
                                <a href={localizedHref(group.href)} onClick={closeMobileMenu}>
                                  {t("Overview")}
                                </a>
                                {group.children.map((child) => (
                                  <a href={localizedHref(child.href)} key={child.label} onClick={closeMobileMenu}>
                                    {t(child.label)}
                                  </a>
                                ))}
                              </div>
                            </details>
                          ))
                        : item.links.map((link) => (
                            <a href={localizedHref(megaHref[link] ?? "/")} key={link} onClick={closeMobileMenu}>
                              {t(link)}
                            </a>
                          ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
          <button
            className="mobile-enquiry"
            type="button"
            onClick={() => {
              setCallbackOpen(true);
              closeMobileMenu();
            }}
          >
            {t("Submit enquiry")}
          </button>
        </div>
      </header>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} productGroups={managedProductGroups} />
      <CallbackModal open={callbackOpen} onClose={() => setCallbackOpen(false)} />
    </>
  );
}

function SearchOverlay({ open, onClose, productGroups }: { open: boolean; onClose: () => void; productGroups: ProductSubcategoryGroup[] }) {
  const { locale, t } = useLanguage();
  const [query, setQuery] = useState("");
  const [managedContent, setManagedContent] = useState<{ news: ManagedNewsItem[]; projects: ManagedProject[] }>({ news: [], projects: [] });

  useEffect(() => {
    if (!open) {
      setQuery("");
      return;
    }

    const controller = new AbortController();
    Promise.all([
      fetch("/api/cms/news", { signal: controller.signal }).then((response) => response.ok ? response.json() : []),
      fetch("/api/cms/projects", { signal: controller.signal }).then((response) => response.ok ? response.json() : []),
    ])
      .then(([news, projects]) => {
        setManagedContent({
          news: Array.isArray(news) ? news.filter((item: ManagedNewsItem) => item.status !== "draft") : [],
          projects: Array.isArray(projects) ? projects.filter((item: ManagedProject) => item.status !== "draft") : [],
        });
      })
      .catch(() => undefined);

    return () => controller.abort();
  }, [open]);

  const searchResults = useMemo(() => {
    const pageKind = locale === "vi" ? "Trang" : "Page";
    const productKind = locale === "vi" ? "Sản phẩm" : "Product";
    const newsKind = locale === "vi" ? "Tin tức" : "News";
    const projectKind = locale === "vi" ? "Dự án" : "Project";
    const genericProductDescription = locale === "vi" ? "Sản phẩm và giải pháp Thermax" : "Thermax product and solution";

    const pages: SearchResult[] = siteSearchPages.map((item) => ({
      title: item.title[locale],
      description: item.description[locale],
      href: item.href,
      keywords: `${item.keywords} ${item.title.en} ${item.title.vi}`,
      kind: pageKind,
    }));
    const products: SearchResult[] = productGroups.flatMap((group) => [
      { title: t(group.label), description: genericProductDescription, href: group.href, keywords: `${group.label} ${t(group.label)}`, kind: productKind },
      ...group.children.map((item) => ({ title: t(item.label), description: t(group.label), href: item.href, keywords: `${item.label} ${group.label} ${t(item.label)}`, kind: productKind })),
    ]);
    const news: SearchResult[] = managedContent.news.map((item) => ({
      title: t(item.title),
      description: t(item.summary),
      href: "/in-the-news",
      keywords: `${item.title} ${item.category} ${item.summary}`,
      kind: newsKind,
    }));
    const projects: SearchResult[] = managedContent.projects.map((item) => ({
      title: t(item.title),
      description: t(item.description),
      href: item.href,
      keywords: `${item.title} ${item.category} ${item.region} ${item.description}`,
      kind: projectKind,
    }));
    const terms = normalizeSearchValue(query).split(/\s+/).filter(Boolean);
    if (terms.length === 0) return [];

    return [...pages, ...products, ...news, ...projects]
      .filter((item) => {
        const searchable = normalizeSearchValue(`${item.title} ${item.description} ${item.keywords}`);
        return terms.every((term) => searchable.includes(term));
      })
      .sort((first, second) => {
        const normalizedQuery = normalizeSearchValue(query.trim());
        const firstStarts = normalizeSearchValue(first.title).startsWith(normalizedQuery) ? 1 : 0;
        const secondStarts = normalizeSearchValue(second.title).startsWith(normalizedQuery) ? 1 : 0;
        return secondStarts - firstStarts;
      })
      .slice(0, 8);
  }, [locale, managedContent, productGroups, query, t]);

  const resultHref = (href: string) => {
    const url = new URL(href, window.location.origin);
    if (locale === "en") url.searchParams.set("lang", "en");
    else url.searchParams.delete("lang");
    return `${url.pathname}${url.search}${url.hash}`;
  };

  const goToResult = (href: string) => {
    window.location.href = resultHref(href);
  };

  return (
    <div
      className={open ? "modal-shell is-open" : "modal-shell"}
      role="dialog"
      aria-modal="true"
      aria-label={t("Search")}
      aria-hidden={!open}
      inert={!open}
      data-no-translate
    >
      <button className="modal-backdrop" type="button" onClick={onClose} aria-label={t("Close search")} />
      <div className="search-panel">
        <button className="close-button" type="button" onClick={onClose} aria-label={t("Close")}>
          <CloseIcon />
        </button>
        <label htmlFor="site-search">{locale === "vi" ? "Tìm kiếm trên website" : "Search the website"}</label>
        <form className="search-input" onSubmit={(event) => { event.preventDefault(); if (searchResults[0]) goToResult(searchResults[0].href); }}>
          <SearchIcon />
          <input id="site-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={t("Search Thermax solutions")} autoComplete="off" />
          <button className="search-submit" type="submit" disabled={!searchResults.length} aria-label={locale === "vi" ? "Mở kết quả đầu tiên" : "Open first result"}><SearchIcon /></button>
        </form>
        {query.trim() ? (
          <div className="search-results" aria-live="polite">
            <div className="search-results-heading">
              <p>{locale === "vi" ? "Kết quả tìm kiếm" : "Search results"}</p>
              <span>{searchResults.length} {locale === "vi" ? "kết quả" : "results"}</span>
            </div>
            {searchResults.length ? (
              <div className="search-result-list">
                {searchResults.map((item) => (
                  <a href={resultHref(item.href)} key={`${item.kind}-${item.href}-${item.title}`}>
                    <span>{item.kind}</span>
                    <strong>{item.title}</strong>
                    <small>{item.description}</small>
                    <ArrowIcon />
                  </a>
                ))}
              </div>
            ) : <div className="search-empty">{locale === "vi" ? "Không tìm thấy nội dung phù hợp. Hãy thử từ khóa khác." : "No matching content found. Try another keyword."}</div>}
          </div>
        ) : (
          <>
            <p>{t("Popular searches")}</p>
            <div className="chip-row">
              {["Air Pollution Control", "Cooling and Heating", "Process Heat", "Water and Waste", "Green Hydrogen"].map((item) => (
                <button type="button" key={item} onClick={() => setQuery(t(item))}>{t(item)}</button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function CallbackModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t } = useLanguage();
  const [status, setStatus] = useState("");

  return (
    <div
      className={open ? "modal-shell is-open" : "modal-shell"}
      role="dialog"
      aria-modal="true"
      aria-label={t("Request a call back")}
      aria-hidden={!open}
      inert={!open}
      data-no-translate
    >
      <button className="modal-backdrop" type="button" onClick={onClose} aria-label={t("Close form")} />
      <form
        className="callback-panel"
        onSubmit={async (event) => {
          event.preventDefault();
          const formElement = event.currentTarget;
          const form = new FormData(formElement);
          setStatus(t("Sending..."));
          try {
            const response = await fetch("/api/contact-requests", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                fullName: form.get("fullName"),
                companyName: form.get("companyName"),
                phone: form.get("phone"),
                address: form.get("address"),
                email: form.get("email"),
                message: form.get("message"),
                source: "header-callback",
              }),
            });
            if (response.ok) {
              formElement.reset();
              setStatus(t("Thanks! We will get in touch shortly."));
            } else {
              setStatus(t("Please try again later."));
            }
          } catch {
            setStatus(t("Please try again later."));
          }
        }}
      >
        <button className="close-button" type="button" onClick={onClose} aria-label={t("Close")}>
          <CloseIcon />
        </button>
        <p>{t("Request a call back")}</p>
        <h2>{t("Submit your enquiry")}</h2>
        <div className="form-grid">
          <input name="fullName" placeholder={t("Full name*")} required />
          <input name="companyName" placeholder={t("Company name*")} />
          <input name="phone" placeholder={t("Phone number*")} required />
          <input name="address" placeholder={t("Company address*")} />
          <input name="email" placeholder={t("Email*")} type="email" required />
          <textarea name="message" placeholder={t("How can Thermax help?")} />
        </div>
        {status ? <span className="form-status">{status}</span> : null}
        <button className="primary-button" type="submit">
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
