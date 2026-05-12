import { PageShell } from "../../components/PageShell";
import { InnerHero } from "../../components/InnerHero";
import { InnerSubNav } from "../../components/InnerSubNav";
import { imageUrls } from "../../lib/site";

export const metadata = {
  title: "Thermax Limited Investor Relations | Financial Results, Reports & Governance",
  description: "Financial highlights, results, press releases, and investor services contact for Thermax Limited.",
};

const financialHighlights = [
  { value: "10,389", label: "Consolidated revenue", growth: "11.4%" },
  { value: "627", label: "Consolidated profit after tax (PAT)", growth: "2.5%" },
  { value: "10,337", label: "Consolidated order booking", growth: "10.5%" },
  { value: "2,722", label: "Cash and cash equivalents including current investments", growth: "6%" },
];

const latestResultLinks = [
  { label: "Quarterly Result", href: "#" },
  { label: "Press Release", href: "#" },
  { label: "Investor Presentation", href: "#" },
];

const pressReleases = [
  {
    title: "Thermax Group posts quarterly and annual PAT growth of 18% & 15% YoY respectively",
    date: "May 07, 2026",
  },
  {
    title:
      "Thermax secures a breakthrough boiler package supply order worth approximately Rs. 1,600 crore for an ultra-supercritical thermal power project",
    date: "March 27, 2026",
  },
  { title: "Thermax to execute Rs.353 crore energy project for RCF", date: "February 22, 2026" },
  {
    title: "Thermax delivers 50MW gas-based cogeneration plant to RCF Trombay",
    date: "January 15, 2026",
  },
];

const investorContacts = [
  {
    name: "Sangeet Hunjan",
    role: "Company Secretary, Compliance Officer and Nodal Officer",
    addr: ["Thermax Limited", "Thermax House", "14 Mumbai-Pune Road", "Wakdewadi, Pune 411003"],
  },
  {
    name: "Sudhir Lale",
    role: "Deputy Nodal Officer",
    addr: ["Thermax Limited", "Thermax House", "14 Mumbai-Pune Road", "Wakdewadi, Pune 411003"],
  },
  {
    name: "Contact",
    role: "",
    contact: { phone: "020-66051200", tollFree: "18003454001", email: "Cservice@thermaxglobal.com" },
  },
];

const shareholderLinks = [
  { label: "IEPF/Unpaid/Unclaimed dividend details", href: "/investors/iepf-investor-education-protection-fund" },
  {
    label: "Disclosure under Regulation 46 of SEBI (LODR) Regulations",
    href: "/investors/disclosure-under-regulation-46-of-sebi-lodr-regulations",
  },
  { label: "Investor documents", href: "/investors/investor-documents" },
  { label: "Disclosures pursuant to SEBI SBEB regulations", href: "/investors/thermax-disclosures-under-sebi-sbeb-regulations" },
  { label: "Shareholding pattern", href: "/investors/shareholding-pattern" },
  { label: "Stock exchange intimations", href: "/investors/stock-exchange-intimations" },
  { label: "Insider trading", href: "/investors/insider-trading" },
  { label: "Credit ratings", href: "/investors/credit-ratings" },
  { label: "Postal ballot", href: "/investors/postal-ballot" },
  { label: "Corporate governance", href: "/investors/corporate-governance" },
];

export default function InvestorOverviewPage() {
  return (
    <PageShell>
      <InnerHero
        title="Thermax Group posts quarterly and annual PAT growth of 18% & 15% YoY respectively"
        image={imageUrls.bannerInvestor}
        mobileImage={imageUrls.bannerInvestorMobile}
        breadcrumb={[{ label: "Investors" }]}
      />

      <InnerSubNav
        items={[
          { label: "Financial highlights", href: "#financial-highlights" },
          { label: "Latest results", href: "#latest-results" },
          { label: "Press releases", href: "#press-releases" },
          { label: "AGM Information", href: "#agm" },
          { label: "Shareholder information", href: "#shareholder-info" },
          { label: "Investor contact", href: "#investor-contact" },
        ]}
        context="Investors"
        current="Investor Relations"
        options={[
          { label: "Quarterly results", href: "/investors/quarterly-results" },
          { label: "Annual reports", href: "/investors/annual-reports" },
          { label: "AGM", href: "/investors/agm" },
          { label: "Investor services contact", href: "/investors/investor-services-contact" },
        ]}
      />

      <section className="financial-highlights" data-section="financial-highlights">
        <h2 className="fh-title" data-reveal>
          Financial highlights FY 2024-25
        </h2>
        <div className="fh-grid" data-reveal>
          {financialHighlights.map((item) => (
            <div className="fh-card" key={item.label}>
              <div className="fh-num">
                <h3>
                  <span className="cr">Rs. </span>
                  {item.value} <span className="cr">cr</span>
                </h3>
              </div>
              <div className="growth">{item.growth} ↑</div>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="investor-results" data-section="latest-results">
        <h2 className="fh-title" data-reveal>
          Latest financial result
        </h2>
        <div className="investor-results-grid" data-reveal>
          <div>
            <img
              src="https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-04/Untitled-2.webp"
              alt="Latest financial result"
            />
          </div>
          <div className="investor-results-text">
            <h3>Q4 Results 2025-26</h3>
            <ul>
              {latestResultLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="agm-section" id="agm" data-section="agm">
        <div className="agm-inner" data-reveal>
          <h2 className="agm-title">AGM information</h2>
          <a className="agm-explore" href="/investors/agm">
            <span className="cta-arrow">→</span> Explore more
          </a>
          <div className="agm-grid">
            <div className="agm-card">
              <h3>
                AGM <br /> notices
              </h3>
              <a className="agm-list" href="#" target="_blank" rel="noreferrer">
                <p>Notice of the AGM to be held on Thursday, August 1, 2024</p>
              </a>
            </div>
            <div className="agm-card">
              <h3>
                Chairperson <br /> presentation
              </h3>
              <a className="agm-list" href="#" target="_blank" rel="noreferrer">
                <p>Chairperson&apos;s Presentation at the 36th Annual General Meeting</p>
              </a>
            </div>
            <div className="agm-card">
              <h3>
                AGM <br /> transcript
              </h3>
              <a className="agm-list" href="#" target="_blank" rel="noreferrer">
                <p>44th AGM Transcript</p>
              </a>
            </div>
            <div className="agm-card">
              <h3>
                Annual <br /> report
              </h3>
              <a className="agm-list" href="#" target="_blank" rel="noreferrer">
                <p>Integrated Annual Report 2024-25</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="investor-press" data-section="press-releases">
        <h2 className="fh-title" data-reveal style={{ textAlign: "left", maxWidth: 1360 }}>
          Press releases
        </h2>
        <div className="investor-press-grid" data-reveal>
          {pressReleases.map((press) => (
            <a className="investor-press-card" key={press.title} href="#">
              <h4>{press.title}</h4>
              <span className="dstes">{press.date}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="investor-contact" data-section="investor-contact">
        <div className="investor-contact-grid" data-reveal>
          <h2>
            Investor <br /> services contact
          </h2>
          <div className="investor-contact-cards">
            {investorContacts.map((c) => (
              <div className="investor-contact-card" key={c.name}>
                <h3>
                  {c.name}
                  {c.role ? (
                    <>
                      <br />
                      <span style={{ fontWeight: 400, fontSize: 13, color: "#66727c" }}>{c.role}</span>
                    </>
                  ) : null}
                </h3>
                {c.addr ? (
                  <p>{c.addr.map((line, i) => (i === 0 ? line : <span key={i}><br />{line}</span>))}</p>
                ) : null}
                {c.contact ? (
                  <p>
                    <a href={`tel:${c.contact.phone}`}>Tel: {c.contact.phone}</a>
                    <a href={`tel:${c.contact.tollFree}`}>Toll Free No: {c.contact.tollFree}</a>
                    <a href={`mailto:${c.contact.email}`}>Email: {c.contact.email}</a>
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="shareholder-info" data-section="shareholder-info">
        <h2 data-reveal>Shareholder information</h2>
        <ul className="shareholder-info-list" data-reveal>
          {shareholderLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href}>
                <span>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
