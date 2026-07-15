"use client";

import { useEffect, useState } from "react";
import { defaultFooter } from "../lib/cmsDefaults";
import type { ManagedFooter } from "../lib/cmsTypes";
import { imageUrls } from "../lib/site";
import { useLanguage } from "./LanguageProvider";
import { PhoneIcon, EmailIcon } from "./icons";

export function Footer({ showFooterCta = false }: { showFooterCta?: boolean }) {
  const { t } = useLanguage();
  const [footer, setFooter] = useState<ManagedFooter>(defaultFooter);

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/cms/footer", { signal: controller.signal })
      .then((response) => response.ok ? response.json() : Promise.reject())
      .then((data: ManagedFooter) => setFooter(data))
      .catch(() => undefined);
    return () => controller.abort();
  }, []);

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
            <img src={footer.logoUrl || imageUrls.logo} alt="Thermax" />
          </a>
          <div className="footer-address-block footer-office-block">
            <h3>{t(footer.officeLabel)}</h3>
            <p className="footer-office-details">
              {footer.address.map((line, index) => (
                <span className="footer-office-line" key={`${line}-${index}`}>
                  {line}
                </span>
              ))}
              <a className="footer-office-contact" href={footer.phoneHref}>
                <span className="footer-icon"><PhoneIcon /></span>
                <span>{footer.phone}</span>
              </a>
              <a className="footer-office-contact" href={footer.emailHref}>
                <span className="footer-icon"><EmailIcon /></span>
                <span>{footer.email}</span>
              </a>
            </p>
          </div>
        </div>
        <div className="footer-links">
          {footer.groups.map((group) => (
            <div className="footer-link-col" key={group.id}>
              <h3>{t(group.title)}</h3>
              {group.links.map((link) => (
                <a href={link.href} key={link.id}>
                  {t(link.label)}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <span>{t(footer.copyright)}</span>
        <div>
          {footer.legalLinks.map((link) => (
            <a href={link.href} key={link.id}>{t(link.label)}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
