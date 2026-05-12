import { footerGroups, imageUrls } from "../lib/site";

export function Footer({ showFooterCta = false }: { showFooterCta?: boolean }) {
  return (
    <footer className="site-footer" id="contact">
      {showFooterCta ? (
        <section className="footer-cta">
          <img src={imageUrls.empower} alt="" />
          <div className="footer-cta-copy">
            <h2>Empowering Young Minds, Transforming Futures</h2>
            <a href="#">
              <span />
              Our social initiatives
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
            <h3>Registered Office Address</h3>
            <p>D-13, MIDC Industrial Area,<br />R. D. Aga Road, Chinchwad,<br />Pune 411019, Maharashtra, India</p>
          </div>
          <div className="footer-address-block">
            <h3>Corporate Office Address</h3>
            <p>Thermax Limited<br />Thermax House,<br />14 Mumbai-Pune Road, Wakdewadi,<br />Pune 411003, Maharashtra, India</p>
          </div>
          <div className="footer-address-block">
            <h3>Corporate Identity Number</h3>
            <p>L29299PN1980PLC022787</p>
          </div>
          <div className="footer-address-block">
            <h3>Toll Free Number</h3>
            <p>1800-209-0115</p>
          </div>
          <div className="footer-social">
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 4h4v4H4zM4 10h4v10H4zM10 10h4v1.5c.7-1 1.9-1.7 3.4-1.7 2.6 0 4.6 2 4.6 4.7V20h-4v-4.5c0-1.2-.6-2-1.8-2s-2.2.8-2.2 2V20h-4z" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 4h-2c-2.2 0-4 1.8-4 4v3H6v3h2v6h3v-6h3l1-3h-4V8c0-.6.4-1 1-1h2z" />
              </svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.6 7.2c-.2-.9-.9-1.6-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4c-.9.2-1.6.9-1.8 1.8C2 8.8 2 12 2 12s0 3.2.4 4.8c.2.9.9 1.6 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5.2 3z" />
              </svg>
            </a>
            <a href="#" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.5 2 2 6.5 2 12c0 1.7.4 3.4 1.3 4.9L2 22l5.2-1.4c1.5.8 3.1 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm5.7 14c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.7-.6-3-1.3-5-4.3-5.1-4.5-.1-.2-1.2-1.7-1.2-3.2 0-1.5.8-2.3 1.1-2.6.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5.2.5.7 1.8.8 1.9.1.1.1.3 0 .5-.1.2-.2.3-.4.5-.2.2-.3.3-.5.5-.1.1-.3.3-.1.6.2.3.9 1.4 1.9 2.3 1.3 1.1 2.4 1.5 2.7 1.6.3.1.5.1.7-.1.2-.2.8-.9 1-1.2.2-.3.4-.3.6-.2.3.1 1.6.8 1.9.9.3.1.5.2.6.3.1.2.1 1-.2 1.7z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-links">
          {footerGroups.map((group) => (
            <div className="footer-link-col" key={group.title}>
              <h3>{group.title}</h3>
              {group.links.map((link) => (
                <a href="#" key={link}>
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <span>© Copyright 2026 Thermax Limited. All Rights Reserved.</span>
        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
}
