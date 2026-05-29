"use client";

import { footerGroups, imageUrls, vietnamOffice } from "../lib/site";
import { useLanguage } from "./LanguageProvider";
import { PhoneIcon, EmailIcon } from "./icons";

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
          <div className="footer-address-block footer-office-block">
            <h3>{t(vietnamOffice.label)}</h3>
            <p className="footer-office-details">
              {vietnamOffice.address.map((line) => (
                <span className="footer-office-line" key={line}>
                  {line}
                </span>
              ))}
              <a className="footer-office-contact" href={vietnamOffice.phoneHref}>
                <span className="footer-icon"><PhoneIcon /></span>
                <span>{vietnamOffice.phone}</span>
              </a>
              <a className="footer-office-contact" href={vietnamOffice.emailHref}>
                <span className="footer-icon"><EmailIcon /></span>
                <span>{vietnamOffice.email}</span>
              </a>
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
