"use client";

import { useEffect, useState } from "react";
import {
  businessSegments,
  imageUrls,
  newsItems,
  productSolutionHrefs,
} from "../lib/site";
import { industrialInfrastructureProjects } from "../lib/projects";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ProjectShowcase } from "../components/ProjectShowcase";
import { useLanguage } from "../components/LanguageProvider";
import { RevealWatcher } from "../components/RevealWatcher";

const heroWords = ["better", "sustainable", "cleaner"];

const businessSegmentHrefs: Record<string, string> = {
  "Industrial Products": "/business-segments/industrial-products#solutions",
  "Industrial Infra": "/business-portfolio/industrial-infrastructure#solutions",
  "Green Solutions": "/business-segments/green-solutions#solutions",
  Chemicals: "/business-portfolio/chemicals#solutions",
};

function RevealWords({ text, highlightFromIndex }: { text: string; highlightFromIndex?: number }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, idx) => {
        const highlighted = highlightFromIndex !== undefined && idx >= highlightFromIndex;
        return (
          <span key={idx}>
            <span
              className={highlighted ? "reveal-word is-highlight" : "reveal-word"}
              style={{ ["--word-i" as string]: idx }}
            >
              <span>{word}</span>
            </span>
            {idx < words.length - 1 ? " " : ""}
          </span>
        );
      })}
    </>
  );
}

function SplitChars({ text }: { text: string }) {
  return (
    <span className="split-chars" aria-label={text}>
      {text.split("").map((ch, idx) => (
        <span className="split-char" key={idx} style={{ ["--char-i" as string]: idx }} aria-hidden="true">
          {ch === " " ? " " : ch}
        </span>
      ))}
    </span>
  );
}

function Hero() {
  const { t, locale } = useLanguage();
  const [wordIndex, setWordIndex] = useState(0);
  const words = heroWords.map((word) => t(word));

  useEffect(() => {
    const interval = window.setInterval(() => {
      setWordIndex((value) => (value + 1) % heroWords.length);
    }, 4000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const hero = document.querySelector<HTMLElement>(".hero");
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const pinDistance = 444;
      const progress = Math.max(0, Math.min(1, y / pinDistance));
      root.style.setProperty("--hero-progress", progress.toFixed(4));
      root.toggleAttribute("data-hero-scrolled", y > 60);
      root.toggleAttribute("data-hero-settled", progress >= 0.999);

      const videoRise = Math.max(0, Math.min(1, y / 400));
      root.style.setProperty("--video-rise", videoRise.toFixed(4));

      if (hero) {
        if (y < pinDistance) {
          hero.dataset.pinned = "true";
        } else {
          delete hero.dataset.pinned;
        }
      }
    };
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
      root.removeAttribute("data-hero-scrolled");
      root.removeAttribute("data-hero-settled");
      root.style.removeProperty("--hero-progress");
      root.style.removeProperty("--video-rise");
    };
  }, []);

  return (
    <>
      <div className="hero-pin-wrap" data-section="hero-intro">
        <section className="hero">
          <div className="hero-copy" data-reveal>
            <h1>
              <SplitChars text={`${t("Partners in making")} `} />
              <span>
                <SplitChars text={`${t("the world")} `} />
                <span className="word-rotate">
                  <strong key={`${locale}-${heroWords[wordIndex]}`}>{words[wordIndex]}</strong>
                </span>
              </span>
            </h1>
          </div>
          <div className="hero-summary" data-reveal>
            <p>
              <RevealWords text={t("Thermax is a global engineering company providing sustainable solutions in energy and the environment.")} />
            </p>
            <a className="source-cta" href="#about">
              <span />
              {t("Discover more about Thermax")}
            </a>
          </div>
        </section>
      </div>

      <section className="hero-visual-section" data-section="hero">
        <video
          className="hero-main-image"
          src={imageUrls.heroVideo}
          poster={imageUrls.hero}
          autoPlay
          muted
          loop
          playsInline
          aria-label="Thermax industrial operations"
        />
        <div className="hero-video-label">
          {t("We are")}
          <br />
          Thermax
        </div>
      </section>
    </>
  );
}

function AboutSection() {
  const { t } = useLanguage();
  const firstParagraph =
    "Thermax began its journey in Vietnam in 2008, supporting industries with sustainable and energy-efficient solutions through its channel partners.";
  const secondParagraph =
    "In 2019, we strengthened our presence by establishing a shared office, marking our first direct presence in the country. We offer integrated solutions in process heating, cooling, and power generation, air pollution control, water and wastewater management, and performance-engineered chemicals, helping industries improve efficiency, meet compliance, and move towards a greener, more sustainable future.";

  return (
    <section className="about-section vietnam-about" id="about" data-section="about">
      <div className="vietnam-about-media" data-reveal>
        <img src={imageUrls.hero} alt="" />
      </div>
      <div className="about-copy vietnam-about-copy" data-reveal>
        <h2>
          <span>{t("Thermax")}</span>
          <br />
          <span className="vietnam-heading-accent">{t("in Vietnam")}</span>
        </h2>
        <div className="about-body">
          <p>
            <RevealWords text={t(firstParagraph)} />
          </p>
          <p>
            <RevealWords text={t(secondParagraph)} />
          </p>
        </div>
        <a className="source-cta" href="/company-overview/legacy-milestone">
          <span />
          {t("Know more about Thermax’s legacy")}
        </a>
      </div>
      <div className="stats-grid" data-reveal>
        {[
          ["10+", t("Years")],
          ["40+", t("Installations")],
          ["10+", t("Industries served")],
          ["40+", t("Customer base")],
        ].map(([value, label]) => (
          <div className="stat-item" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function BusinessSection() {
  const { t, locale } = useLanguage();

  return (
    <section className="business-section" id="portfolio" data-section="business">
      <div className="business-intro" data-reveal>
        <h2>
          {locale === "vi" ? "Sản phẩm" : "Products"}
        </h2>
        <p>
          {t(
            "At Thermax, we are committed to forging strong, trusted partnerships with our customers. With a deep-rooted commitment to sustainability, we provide innovative and tailored energy, environment, and chemical solutions, coupled with our digital capabilities, that help industrial, commercial and urban segments achieve better resource productivity and bottom line while reducing their environmental footprint.",
          )}
        </p>
      </div>

      <div className="business-grid" data-reveal>
        {businessSegments.map((segment) => (
          <article className="business-card" key={segment.label}>
            <img src={segment.image} alt="" />
            <div>
              <h3>{t(segment.label)}</h3>
              <span>{t(segment.body)}</span>
              <ul>
                {segment.links.slice(0, 5).map((link) => {
                  const href = productSolutionHrefs[link];
                  return <li key={link}>{href ? <a href={href}>{t(link)}</a> : t(link)}</li>;
                })}
              </ul>
              <a
                className="business-more"
                href={businessSegmentHrefs[segment.label] ?? "/business-segments/industrial-products#solutions"}
              >
                {t("Discover more")}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function HomeProjectsSection() {
  return (
    <ProjectShowcase
      eyebrow="Projects"
      title="Featured projects"
      description="Representative industrial utility and energy projects that show Thermax delivery capability across EPC, boilers and international execution."
      items={industrialInfrastructureProjects.slice(0, 4)}
    />
  );
}

function HomeNewsSection() {
  const { t } = useLanguage();

  return (
    <section className="home-news-section" data-section="home-news">
      <div className="home-news-header" data-reveal>
        <div>
          <p>{t("News")}</p>
          <h2>{t("Latest updates")}</h2>
        </div>
        <a className="section-cta" href="/in-the-news">
          {t("View all news")}
        </a>
      </div>
      <div className="home-news-grid" data-reveal>
        {newsItems.map((item) => (
          <article className="home-news-card" key={item.title}>
            <img src={item.image} alt="" />
            <div>
              <p>{t(item.date)}</p>
              <h3>{t(item.title)}</h3>
              <a href="/in-the-news">{t("Read more")}</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function PeopleSection() {
  const { t, locale } = useLanguage();
  const peopleImages = [imageUrls.peopleOne, imageUrls.peopleTwo, imageUrls.peopleThree];

  return (
    <section className="people-section" data-section="people">
      <div className="people-layout">
        <div className="people-copy" data-reveal>
          <h2>
            {locale === "vi" ? (
              <>
                <span>Con người</span>
                <br />
                Thermax Vietnam
              </>
            ) : (
              <>
                <span>Our</span>
                <br />
                people
              </>
            )}
          </h2>
          <p>
            {t(
              "The driving strength of Thermax Vietnam lies in its people. From skilled technicians and engineers to dedicated support teams, every individual plays a vital role in powering our operations and delivering value. Their commitment is instrumental in building strong partnerships and creating lasting impact for our customers and stakeholders across the region.",
            )}
          </p>
          <a className="source-cta" href="/people">
            <span />
            {t("Know more about Thermax culture")}
          </a>
        </div>
        <div className="people-collage" data-reveal>
          {peopleImages.map((image, index) => (
            <img src={image} alt="" key={image} className={`people-image people-image-${index + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <RevealWatcher />
      <Header />
      <main data-no-translate>
        <Hero />
        <AboutSection />
        <BusinessSection />
        <HomeProjectsSection />
        <HomeNewsSection />
        <PeopleSection />
      </main>
      <Footer />
    </>
  );
}
