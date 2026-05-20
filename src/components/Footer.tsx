"use client";

import { footerGroups, imageUrls, vietnamOffice } from "../lib/site";
import { useLanguage } from "./LanguageProvider";

export function Footer({ showFooterCta = false }: { showFooterCta?: boolean }) {
  const { t } = useLanguage();

  return (
    <footer className="site-footer" id="contact" data-no-translate>
      {showFooterCta ? (
        <section className="footer-cta">
          <img src={imageUrls.empower} alt="" />
          <div className="footer-cta-copy">
            <h2>{t("Empowering Young Minds, Transforming Futures")}</h2>
            <a href="#">
              <span />
              {t("Our social initiatives")}
            </a>
          </div>
        </section>
      ) : null}
      <div className="footer-grid">
        <div className="footer-brand-col">
          <a className="footer-brand" href="/" aria-label="Thermax home">
            <img src={imageUrls.logo} alt="Thermax" />
          </a>
          <div className="footer-address-block">
            <h3>{t(vietnamOffice.label)}</h3>
            <p>
              {vietnamOffice.company}
              <br />
              {vietnamOffice.address.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>
          <div className="footer-address-block">
            <h3>{t("Contact")}</h3>
            <p>
              <a href={vietnamOffice.phoneHref}>{vietnamOffice.phone}</a>
              <br />
              <a href={vietnamOffice.emailHref}>{vietnamOffice.email}</a>
            </p>
          </div>
          <div className="footer-address-block">
            <h3>{t("Connect")}</h3>
            <p>
              <a href="/contact-us">{t("Contact Us")}</a>
              <br />
              <a href="/careers">{t("Careers")}</a>
            </p>
          </div>
        </div>
        <div className="footer-links">
          {footerGroups.map((group) => (
            <div className="footer-link-col" key={group.title}>
              <h3>{t(group.title)}</h3>
              {group.links.map((link) => (
                <a href={link.href} key={link.label}>
                  {t(link.label)}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <span>{t("© Copyright 2026 Thermax Limited. All Rights Reserved.")}</span>
        <div>
          <a href="#">{t("Privacy Policy")}</a>
          <a href="#">{t("Terms of Use")}</a>
        </div>
      </div>
    </footer>
  );
}
