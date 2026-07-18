"use client";

import { useEffect, useState } from "react";
import { PageShell } from "../../components/PageShell";
import { InnerHero } from "../../components/InnerHero";
import { ArrowIcon } from "../../components/icons";
import { useLanguage } from "../../components/LanguageProvider";
import { imageUrls } from "../../lib/site";
import type { ManagedNewsItem } from "../../lib/cmsTypes";

const sources = {
  q4Results:
    "https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-05/Press%20Release_Thermax%20Q4%20and%20Annual%20Results_0.pdf",
  q4Presentation:
    "https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-05/Q4_FY2025-26_Thermax%20Investor%20PPT_final.pdf",
  boilerOrder: "https://www.thermaxglobal.com/wp-content/uploads/2026/03/SEintimation-pressrelase.pdf",
  hpclMoU: "https://www.thermaxglobal.com/wp-content/uploads/2026/01/Press-Release_Thermax-MOU-signing-with-HPCL.pdf",
  stockExchange: "https://www.thermaxglobal.com/investors/stock-exchange-intimations",
  nseListing: "https://www.thermaxglobal.com/wp-content/uploads/2025/12/Press-Release-Thermax-30-years-Listing-at-NSE.pdf",
  africaOrder:
    "https://websitenp.thermaxglobal.com/themes/thermax/assets/pdf/Press-Release-Thermax-Group-secures-an-order-valued-at-more-than-Rs.-580-crore-from-an-African-industry-major.pdf",
};

const newsroomStats = [
  { label: "Q4 operating revenue", value: "Rs. 3,428 cr", detail: "+13% YoY" },
  { label: "Q4 PAT", value: "Rs. 244 cr", detail: "+18% YoY" },
  { label: "Order balance", value: "Rs. 13,604 cr", detail: "+27% YoY" },
  { label: "FY2025-26 PAT", value: "Rs. 720 cr", detail: "+15% YoY" },
];

const fallbackNewsItems: ManagedNewsItem[] = [
  {
    id: "local-news-1",
    title: "Thermax reports stronger Q4 with 13% revenue growth and 18% PAT growth",
    date: "May 07, 2026",
    category: "Financial results",
    image: imageUrls.newsOne,
    sourceLabel: "Official Q4 FY2025-26 press release",
    sourceUrl: sources.q4Results,
    summary:
      "Thermax reported consolidated operating revenue of Rs. 3,428 crore for Q4 FY2025-26 and PAT of Rs. 244 crore. Full-year PAT rose 15% to Rs. 720 crore, while the board recommended a regular dividend and a special dividend for the company's 60th anniversary milestone.",
    highlights: [
      "Q4 order booking rose 112% to Rs. 4,490 crore.",
      "Order balance stood at Rs. 13,604 crore as of March 31, 2026.",
      "FY2025-26 consolidated operating revenue reached Rs. 10,694 crore.",
    ],
  },
  {
    id: "local-news-2",
    title: "Rs. 1,600 crore boiler package reinforces Thermax's industrial infrastructure pipeline",
    date: "March 27, 2026",
    category: "Orders",
    image: imageUrls.newsTwo,
    sourceLabel: "Official boiler order press release",
    sourceUrl: sources.boilerOrder,
    summary:
      "Thermax Babcock & Wilcox Energy Solutions secured a boiler package supply order for a 1x800 MW ultra-supercritical thermal power plant in Central India. The scope covers manufacturing, supply, installation supervision, commissioning and performance testing.",
    highlights: [
      "The order supports utility-scale power requirements in Central India.",
      "Execution will follow project milestones and contracted delivery schedules.",
      "The win underlines Thermax's large-scale energy engineering capability.",
    ],
  },
  {
    id: "local-news-3",
    title: "Order book momentum points to demand across power, process and green utilities",
    date: "May 08, 2026",
    category: "Financial results",
    image: imageUrls.newsThree,
    sourceLabel: "Investor presentation",
    sourceUrl: sources.q4Presentation,
    summary:
      "The latest investor presentation shows FY2025-26 order booking at Rs. 13,871 crore and an order balance of Rs. 13,604 crore. Power remained the largest order-book sector, while food and beverages, chemicals, pharma and data centres also contributed to demand visibility.",
    highlights: [
      "Industrial Products and Industrial Infra led the improvement in order booking.",
      "Green Solutions order booking benefited from stronger business performance and updated order-book reporting.",
      "Data centres continued to emerge as a future demand sector for efficient cooling.",
    ],
  },
  {
    id: "local-news-4",
    title: "Thermax and HPCL partner on green hydrogen, carbon capture and bio-based fuels",
    date: "January 29, 2026",
    category: "Energy transition",
    image: imageUrls.newsOne,
    sourceLabel: "Official HPCL MoU press release",
    sourceUrl: sources.hpclMoU,
    summary:
      "Thermax and Hindustan Petroleum Corporation Limited signed an MoU at India Energy Week 2026 to collaborate on sustainable energy technologies, including HP AEM electrolysers, CO2 capture solutions, bio-pyrolysis oil processing and other emerging clean-energy areas.",
    highlights: [
      "The collaboration is aligned with India's energy transition and climate objectives.",
      "The partnership combines Thermax's technology expertise with HPCL's R&D and operational scale.",
      "The focus is on moving innovations from research to on-ground deployment.",
    ],
  },
  {
    id: "local-news-5",
    title: "Digital reliability expands as Exactspace becomes a Thermax subsidiary",
    date: "April 09, 2026",
    category: "Digital & operations",
    image: imageUrls.newsTwo,
    sourceLabel: "Stock exchange intimation",
    sourceUrl: sources.stockExchange,
    summary:
      "Thermax informed the stock exchanges that it completed the acquisition of stake in Exactspace Technologies, resulting in Exactspace becoming a subsidiary. The update strengthens the narrative around industrial AI, predictive analytics and connected asset reliability.",
    highlights: [
      "The update complements Thermax's EDGE Live digital operations capability.",
      "Industrial customers continue to prioritise uptime, reliability and data-led decision-making.",
      "Digital services remain closely linked to energy efficiency and performance improvement.",
    ],
  },
  {
    id: "local-news-6",
    title: "Thermax marks 30 years of NSE listing with a stronger energy-transition identity",
    date: "December 08, 2025",
    category: "Corporate updates",
    image: imageUrls.newsThree,
    sourceLabel: "Official NSE listing anniversary release",
    sourceUrl: sources.nseListing,
    summary:
      "Thermax celebrated 30 years of listing on the National Stock Exchange. The milestone reflects the company's evolution from packaged boilers and heating equipment to a broader energy transition and sustainability solutions provider.",
    highlights: [
      "The listing milestone was marked with a ceremonial bell-ringing event at NSE Mumbai.",
      "The company highlighted three decades of growth across clean air, clean energy and clean water technologies.",
      "The anniversary connects corporate legacy with the current sustainability-led strategy.",
    ],
  },
  {
    id: "local-news-7",
    title: "African utility boiler order highlights Thermax's international project reach",
    date: "November 26, 2025",
    category: "Orders",
    image: imageUrls.newsOne,
    sourceLabel: "Official African order press release",
    sourceUrl: sources.africaOrder,
    summary:
      "Thermax Group secured an order valued at more than Rs. 580 crore from Dangote Industries for utility boilers and associated systems for a refinery and petrochemical complex in Nigeria.",
    highlights: [
      "The scope includes four units of 400 TPH high-pressure utility boilers and allied auxiliaries.",
      "TBWES will manage engineering, procurement, manufacturing, modular supply and commissioning supervision.",
      "The order extends a long-standing relationship with Dangote Industries.",
    ],
  },
];

export default function InTheNewsPage() {
  const { t } = useLanguage();
  const [managedNews, setManagedNews] = useState<ManagedNewsItem[]>(fallbackNewsItems);
  useEffect(() => {
    let mounted = true;
    fetch("/api/cms/news")
      .then((response) => (response.ok ? response.json() : null))
      .then((items) => {
        if (mounted && Array.isArray(items) && items.length > 0) {
          setManagedNews(items.filter((item: ManagedNewsItem) => item.status !== "draft"));
        }
      })
      .catch(() => undefined);
    return () => {
      mounted = false;
    };
  }, []);
  const featured = managedNews[0] ?? fallbackNewsItems[0];

  return (
    <PageShell>
      <InnerHero
        title={t("News")}
        description={t("Current updates on Thermax's business performance, clean-energy projects, digital operations and corporate milestones.")}
        image={imageUrls.bannerMedia}
        mobileImage={imageUrls.bannerMediaMobile}
        breadcrumb={[{ label: t("News") }]}
      />

      <section className="newsroom-intro" data-section="newsroom-intro">
        <div className="newsroom-intro-copy" data-reveal>
          <span>{t("Updated May 12, 2026")}</span>
          <h2>{t("Current developments shaping Thermax's energy transition story")}</h2>
          <p>
            {t(
              "This newsroom page is written from official company announcements, investor updates and current market signals, then edited into concise briefs for customers, partners and investors.",
            )}
          </p>
        </div>
        <div className="newsroom-stat-grid" data-reveal>
          {newsroomStats.map((stat) => (
            <div className="newsroom-stat-card" key={stat.label}>
              <span>{t(stat.label)}</span>
              <strong>{stat.value}</strong>
              <p>{stat.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="newsroom-featured" data-section="featured-news">
        <article className="newsroom-featured-card" data-reveal>
          <div className="newsroom-featured-media">
            <img src={featured.image} alt="" />
          </div>
          <div className="newsroom-featured-copy">
            <span className="newsroom-kicker">{t(featured.category)}</span>
            <p className="newsroom-date">{t(featured.date)}</p>
            <h2>{t(featured.title)}</h2>
            <p>{t(featured.summary)}</p>
            {featured.highlights?.length ? (
              <ul>
                {featured.highlights.map((highlight) => (
                  <li key={highlight}>{t(highlight)}</li>
                ))}
              </ul>
            ) : null}
            {featured.sourceUrl ? (
              <a className="section-cta" href={featured.sourceUrl} target="_blank" rel="noreferrer">
                <span className="cta-arrow">
                  <ArrowIcon />
                </span>
                {t(featured.sourceLabel || "Read more")}
              </a>
            ) : null}
          </div>
        </article>
      </section>

      <section className="news-listing" data-section="news-listing">
        <div className="news-listing-header" data-reveal>
          <h2>{t("Latest newsroom updates")}</h2>
        </div>
        <div className="news-listing-grid" data-reveal>
          {managedNews.map((item) => (
            <article className="news-listing-card" key={item.title}>
              <img src={item.image} alt="" />
              <div className="news-listing-card-body">
                <span>{t(item.category)}</span>
                <p className="newsroom-date">{t(item.date)}</p>
                <h3>{t(item.title)}</h3>
                <p>{t(item.summary)}</p>
                {item.sourceUrl ? (
                  <a href={item.sourceUrl} target="_blank" rel="noreferrer">
                    {t(item.sourceLabel || "Read more")}
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

    </PageShell>
  );
}
