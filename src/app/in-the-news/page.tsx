"use client";

import { useState } from "react";
import { PageShell } from "../../components/PageShell";
import { InnerHero } from "../../components/InnerHero";
import { imageUrls } from "../../lib/site";

const filters = ["All", "Press releases", "Articles", "TV Interviews", "Events"];

const newsItems = [
  {
    title: "Thermax Group posts quarterly and annual PAT growth of 18% & 15% YoY respectively",
    date: "May 07, 2026",
    image: imageUrls.newsOne,
    category: "Press releases",
  },
  {
    title:
      "Thermax secures a breakthrough boiler package supply order worth approximately Rs. 1,600 crore for an ultra-supercritical thermal power project",
    date: "March 27, 2026",
    image: imageUrls.newsTwo,
    category: "Press releases",
  },
  {
    title: "Thermax to execute Rs.353 crore energy project for RCF",
    date: "February 22, 2026",
    image: imageUrls.newsThree,
    category: "Press releases",
  },
  {
    title: "Building towards a Viksit Bharat – Thermax Chairperson on India's energy transition",
    date: "February 10, 2026",
    image: imageUrls.newsOne,
    category: "Articles",
  },
  {
    title: "Thermax eyes global leadership, charts strategy for bold transformation in energy transition",
    date: "January 28, 2026",
    image: imageUrls.newsTwo,
    category: "Articles",
  },
  {
    title: "Thermax MD on net-zero industries — TV interview",
    date: "December 15, 2025",
    image: imageUrls.newsThree,
    category: "TV Interviews",
  },
  {
    title: "Thermax at the Global Energy Forum 2025",
    date: "November 12, 2025",
    image: imageUrls.newsOne,
    category: "Events",
  },
  {
    title: "Annual Day 2025: Recognising people who power Thermax",
    date: "October 24, 2025",
    image: imageUrls.newsTwo,
    category: "Events",
  },
  {
    title: "Press release: Thermax launches new EDGE Live capability",
    date: "September 18, 2025",
    image: imageUrls.newsThree,
    category: "Press releases",
  },
];

export default function InTheNewsPage() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? newsItems : newsItems.filter((n) => n.category === filter);

  return (
    <PageShell>
      <InnerHero
        title="In the News"
        image={imageUrls.bannerMedia}
        mobileImage={imageUrls.bannerMediaMobile}
        breadcrumb={[{ label: "Media Centre" }]}
      />

      <section className="news-listing" data-section="news-listing">
        <div className="news-listing-filter" data-reveal>
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              className={f === filter ? "is-active" : ""}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="news-listing-grid" data-reveal>
          {filtered.map((item) => (
            <article className="news-listing-card" key={item.title}>
              <img src={item.image} alt="" />
              <div className="news-listing-card-body">
                <span>{item.date}</span>
                <h3>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
