"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import {
  businessSegments,
  capabilities,
  caseStudies,
  imageUrls,
  newsItems,
} from "../lib/site";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useLanguage } from "../components/LanguageProvider";
import { RevealWatcher } from "../components/RevealWatcher";
import { ArrowIcon } from "../components/icons";

const heroWords = ["better", "sustainable", "cleaner"];

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
  const aboutCopy =
    t("Backed by our strong engineering prowess and domain expertise over decades, we offer comprehensive solutions to ensure clean air, clean energy and clean water.");
  const aboutBody =
    t("From curbing emissions with advanced air pollution control systems, enabling energy efficiency through clean technologies, to conserving water with cutting-edge treatment and recycling solutions, our commitment lies in fostering a world where progress and sustainability go hand in hand. With every solution, we aim to build a better tomorrow-one that thrives on responsible innovation and leaves a lasting legacy for generations to come.");
  const splitIdx = aboutCopy.split(" ").findIndex((w) => w.startsWith("we") || w.startsWith("chúng"));

  return (
    <section className="about-section" id="about" data-section="about">
      <div className="about-copy" data-reveal>
        <h2>
          <RevealWords text={aboutCopy} highlightFromIndex={splitIdx} />
        </h2>
      </div>
      <div className="about-body" data-reveal>
        <p>
          <RevealWords text={aboutBody} />
        </p>
      </div>
      <div className="stats-grid" data-reveal>
        {[
          ["60+", t("Years of legacy")],
          ["90+", t("Countries served")],
          ["45+", t("Offices globally")],
          ["16", t("Manufacturing facilities")],
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
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="business-section" id="portfolio" data-section="business">
      <div className="business-intro" data-reveal>
        <h2>
          {locale === "vi" ? (
            <>
              Dẫn dắt bởi
              <br />
              <span>giải pháp</span> tiên phong
            </>
          ) : (
            <>
              Enabled by cutting-
              <br />
              edge <span>solutions</span>
            </>
          )}
        </h2>
        <p>
          {t(
            "At Thermax, we are committed to forging strong, trusted partnerships with our customers. With a deep-rooted commitment to sustainability, we provide innovative and tailored energy, environment, and chemical solutions, coupled with our digital capabilities, that help industrial, commercial and urban segments achieve better resource productivity and bottom line while reducing their environmental footprint.",
          )}
        </p>
      </div>

      <div className="business-layout" data-reveal>
        <Swiper
          modules={[Navigation, Autoplay]}
          className="business-swiper"
          slidesPerView="auto"
          spaceBetween={30}
          centeredSlides
          loop
          speed={650}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            0: { slidesPerView: 1.1, centeredSlides: true, spaceBetween: 16 },
            780: { slidesPerView: "auto", centeredSlides: true, spaceBetween: 30 },
          }}
        >
          {businessSegments.map((segment) => (
            <SwiperSlide className="business-card" key={segment.label}>
              <img src={segment.image} alt="" />
              <div>
                <h3>{t(segment.label)}</h3>
                <span>{t(segment.body)}</span>
                <ul>
                  {segment.links.slice(0, 5).map((link) => (
                    <li key={link}>{t(link)}</li>
                  ))}
                </ul>
                <a className="business-more" href="#">
                  {t("Discover more")}
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="source-arrows">
          <button type="button" onClick={() => swiperRef.current?.slidePrev()} aria-label="Previous business segment">
            {"<"}
          </button>
          <button type="button" onClick={() => swiperRef.current?.slideNext()} aria-label="Next business segment">
            {">"}
          </button>
        </div>
      </div>
    </section>
  );
}

function CapabilitySection() {
  const { t } = useLanguage();
  const swiperRef = useRef<SwiperType | null>(null);
  const [index, setIndex] = useState(0);
  const total = capabilities.length;

  return (
    <section className="capability-section" data-section="capabilities">
      <div className="source-title">
        {t("Featured")} <span>{t("capabilities")}</span>
      </div>
      <div className="capability-counter">
        <span className="capability-counter-text">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        <div className="capability-arrows">
          <button type="button" aria-label={t("Previous capability")} onClick={() => swiperRef.current?.slidePrev()}>
            {"<"}
          </button>
          <button type="button" aria-label={t("Next capability")} onClick={() => swiperRef.current?.slideNext()}>
            {">"}
          </button>
        </div>
      </div>
      <Swiper
        modules={[EffectFade, Autoplay]}
        className="capability-swiper"
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={600}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        allowTouchMove={false}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => setIndex(swiper.realIndex)}
      >
        {capabilities.map((capability) => (
          <SwiperSlide key={capability.label}>
            <div className="capability-slide">
              <div className="capability-media">
                <img src={capability.image} alt="" />
              </div>
              <div className="capability-copy">
                <h2>{t(capability.label)}</h2>
                <p>{t(capability.body)}</p>
                {capability.body2 && <p>{t(capability.body2)}</p>}
                <a className="capability-cta" href="#">
                  {t("Discover more")}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

function ImpactSection() {
  const { t, locale } = useLanguage();
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="impact-section" data-section="impact">
      <div className="impact-intro" data-reveal>
        <h2>
          {locale === "vi" ? (
            <>
              <span>Tạo tác động</span>
              <br />
              trên nhiều ngành
            </>
          ) : (
            <>
              <span>Delivering impact</span>
              <br />
              across industries
            </>
          )}
        </h2>
        <p>
          {t(
            "Backed by a legacy of trust and a commitment towards a sustainable future, Thermax empowers industries to transform responsibly. Through our expertise in pollution control, energy and water management, and renewable solutions, we help customers reduce emissions, optimise resource use, and enhance operational efficiency, while lowering costs.",
          )}
        </p>
      </div>
      <div className="case-toolbar" data-reveal>
        <button type="button" onClick={() => swiperRef.current?.slidePrev()} aria-label={t("Previous case")}>
          {"<"}
        </button>
        <button type="button" onClick={() => swiperRef.current?.slideNext()} aria-label={t("Next case")}>
          {">"}
        </button>
      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        className="case-swiper"
        slidesPerView={1}
        spaceBetween={30}
        loop
        speed={650}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {caseStudies.map((item) => (
          <SwiperSlide className="case-card" key={item.title}>
            <img className="case-main" src={item.image} alt="" />
            <div className="case-content">
              <img className="case-thumb" src={item.thumb} alt="" />
              <h3>{t(item.title)}</h3>
              <a href="#">
                {t(item.meta)}
                <ArrowIcon />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

function InvestorsSection() {
  const { t } = useLanguage();
  const [market, setMarket] = useState<"NSE" | "BSE">("NSE");
  const marketValue = market === "NSE" ? "4,182.30" : "4,182.65";
  const marketChange = market === "NSE" ? "105.40 (2.59%)" : "104.35 (2.56%)";

  return (
    <section className="investors-section" id="investors" data-section="investors">
      <div className="investor-hero">
        <div className="investor-copy" data-reveal>
          <h2>{t("Investors")}</h2>
          <div>
            <p>
              {t(
                "Our commitment to creating stakeholder value is reflected in our strategy, fundamentals and performance. Stay up to date on key financial information, reports, and upcoming events.",
              )}
            </p>
            <a className="primary-button" href="#">
              {t("Explore more")}
              <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="investor-panel" data-reveal>
        <div className="market-block">
          <div className="market-toggle">
            {["NSE", "BSE"].map((item) => (
              <button
                className={market === item ? "is-active" : ""}
                key={item}
                onClick={() => setMarket(item as "NSE" | "BSE")}
                type="button"
              >
                {item}
              </button>
            ))}
          </div>
          <strong>
            {marketValue} <span>INR</span>
          </strong>
          <span className="market-up">{marketChange} ↑</span>
          <div className="market-meta">
            <small>07-05-2026 03:56 PM</small>
            <a href="#">{t("Disclaimer")}</a>
          </div>
        </div>
        <div className="publication-block">
          <h3>{t("Latest publication & results")}</h3>
          <div className="publication-grid">
            <a href="#" className="publication-card">
              <img src={imageUrls.annualReport} alt="" />
              <span>{t("Annual Report 2024-25")}</span>
            </a>
            <a href="#" className="publication-card">
              <img src={imageUrls.q4Report} alt="" />
              <span>{t("Q4 Results 2025-26")}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function NewsSection() {
  const { t, locale } = useLanguage();

  return (
    <section className="news-section" id="media" data-section="news">
      <div className="news-layout">
        <div className="news-heading" data-reveal>
          <h2>
            {locale === "vi" ? (
              <>
                Tin tức và
                <br />
                góc nhìn
              </>
            ) : (
              <>
                News and
                <br />
                Insights
              </>
            )}
          </h2>
          <a href="#">
            <span />
            {t("Explore the latest")}
          </a>
        </div>
        <div className="news-grid" data-reveal>
          {newsItems.map((item) => (
            <article className="news-card" key={item.title}>
              <img src={item.image} alt="" />
              <span>{t(item.date)}</span>
              <h3>{t(item.title)}</h3>
            </article>
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
        <CapabilitySection />
        <ImpactSection />
        <InvestorsSection />
        <NewsSection />
      </main>
      <Footer showFooterCta />
    </>
  );
}
