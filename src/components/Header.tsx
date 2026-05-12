"use client";

import { useState } from "react";
import { imageUrls, navItems } from "../lib/site";
import { ArrowIcon, CloseIcon, SearchIcon } from "./icons";

const navHref: Record<string, string> = {
  "About Us": "/company-overview",
  "Business Portfolio": "/business-segments/industrial-products",
  Sustainability: "/sustainability",
  "Digital Solutions": "/digital",
  Investors: "/investor-overview",
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
  "Green Solutions": "/business-segments/green-solutions",
  Chemicals: "/business-portfolio/chemicals",
  Overview: "/sustainability",
  "Corporate Social Responsibility": "/corporate-social-responsibility",
  "Social Compact": "/social-compact",
  "ESG Profile": "/esg-profile",
  "BRSR Report": "/sustainability",
  "EDGE Live": "/digital",
  "Predictive Insights": "/digital",
  "Energy Optimisation": "/digital",
  "Connected Service": "/digital",
  "Investor Overview": "/investor-overview",
  "Financial Information": "/investors/quarterly-results",
  "Governance and Regulatory information": "/investors/corporate-governance",
  "Shareholder Information": "/investors/shareholding-pattern",
  "Investor Services Contact": "/investors/investor-services-contact",
  "Dispute Resolution Mechanism": "/investor-overview",
  Disclaimer: "/investors/investor-disclaimer",
};

export function Header() {
  const [menu, setMenu] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [callbackOpen, setCallbackOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = navItems.find((item) => item.label === menu) ?? navItems[0];

  return (
    <>
      <header className="site-header" onMouseLeave={() => setMenu("")}>
        <div className="utility-bar">
          <div />
          <div className="utility-right">
            <a href="/people">People</a>
            <a href="/in-the-news">Media Centre</a>
            <a href="/contact-us">Contact Us</a>
          </div>
        </div>
        <div className="main-nav">
          <button
            className={mobileOpen ? "hamburger is-active" : "hamburger"}
            onClick={() => setMobileOpen((value) => !value)}
            type="button"
            aria-label="Toggle menu"
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
                onFocus={() => setMenu(item.label)}
                onMouseEnter={() => setMenu(item.label)}
                type="button"
              >
                {item.label === "Digital Solutions" ? "Digital" : item.label}
              </button>
            ))}
          </nav>

          <div className="nav-actions">
            <button className="callback-button" onClick={() => setCallbackOpen(true)} type="button">
              Request a call back
            </button>
            <button className="icon-button" onClick={() => setSearchOpen(true)} type="button" aria-label="Search">
              <SearchIcon />
            </button>
            <button className="icon-button" type="button" aria-label="Global region">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18" />
              </svg>
            </button>
            <button className="icon-button" onClick={() => setCallbackOpen(true)} type="button" aria-label="User enquiry">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c1.4-4 14.6-4 16 0" />
              </svg>
            </button>
          </div>
        </div>

        <div className={menu ? "mega-menu is-open" : "mega-menu"} onMouseEnter={() => setMenu(active.label)}>
          <div className="mega-copy">
            <h2>{active.label === "About Us" ? "Thermax" : active.label}</h2>
            <p>{active.summary}</p>
          </div>
          <div className="mega-links">
            {active.links.map((link) => (
              <a href={megaHref[link] ?? "#"} key={link}>
                {link}
                <span className="mega-row-arrow" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="m9 5 7 7-7 7" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
          <div className="mega-card">
            <p>In the Spotlight</p>
            <img src={active.spotlightImage} alt="" />
            <strong>{active.spotlight}</strong>
          </div>
        </div>

        <div className={mobileOpen ? "mobile-panel is-open" : "mobile-panel"}>
          {navItems.map((item) => (
            <a href={navHref[item.label] ?? "#"} key={item.label} onClick={() => setMobileOpen(false)}>
              {item.label}
            </a>
          ))}
          <button type="button" onClick={() => setCallbackOpen(true)}>
            Request a call back
          </button>
        </div>
      </header>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
      <CallbackModal open={callbackOpen} onClose={() => setCallbackOpen(false)} />
    </>
  );
}

function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div className={open ? "modal-shell is-open" : "modal-shell"} role="dialog" aria-modal="true" aria-label="Search">
      <button className="modal-backdrop" type="button" onClick={onClose} aria-label="Close search" />
      <div className="search-panel">
        <button className="close-button" type="button" onClick={onClose} aria-label="Close">
          <CloseIcon />
        </button>
        <label htmlFor="site-search">Search Results</label>
        <div className="search-input">
          <SearchIcon />
          <input id="site-search" placeholder="Search Thermax solutions" autoComplete="off" />
        </div>
        <p>Popular searches</p>
        <div className="chip-row">
          {["Air Pollution Control", "Cooling and Heating", "Process Heat", "Water and Waste", "Green Hydrogen"].map(
            (item) => (
              <button type="button" key={item}>
                {item}
              </button>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

function CallbackModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div
      className={open ? "modal-shell is-open" : "modal-shell"}
      role="dialog"
      aria-modal="true"
      aria-label="Request a call back"
    >
      <button className="modal-backdrop" type="button" onClick={onClose} aria-label="Close form" />
      <form className="callback-panel">
        <button className="close-button" type="button" onClick={onClose} aria-label="Close">
          <CloseIcon />
        </button>
        <p>Request a call back</p>
        <h2>Submit your enquiry</h2>
        <div className="form-grid">
          <input placeholder="Full name*" />
          <input placeholder="Business email*" />
          <input placeholder="Phone number*" />
          <select defaultValue="">
            <option value="" disabled>
              Country*
            </option>
            <option>India</option>
            <option>Vietnam</option>
            <option>United States</option>
          </select>
          <select defaultValue="">
            <option value="" disabled>
              Select industry
            </option>
            <option>Power Generation</option>
            <option>Chemicals</option>
            <option>Urban & Infra</option>
          </select>
          <textarea placeholder="How can Thermax help?" />
        </div>
        <button className="primary-button" type="button">
          Submit enquiry
          <ArrowIcon />
        </button>
      </form>
    </div>
  );
}
