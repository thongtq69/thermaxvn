"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import {
  businessSegments,
  capabilities,
  caseStudies,
  imageUrls,
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
          modules={[Navigation]}
          className="business-swiper"
          slidesPerView="auto"
          spaceBetween={30}
          centeredSlides
          speed={650}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            0: { slidesPerView: 1, centeredSlides: false, spaceBetween: 20 },
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
      <div className="capability-list" aria-label={t("Featured capabilities")}>
        {capabilities.map((capability, capabilityIndex) => (
          <button
            className={index === capabilityIndex ? "capability-link is-active" : "capability-link"}
            key={capability.label}
            type="button"
            onClick={() => swiperRef.current?.slideTo(capabilityIndex)}
          >
            {t(capability.label)}
          </button>
        ))}
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
        modules={[EffectFade]}
        className="capability-swiper"
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={600}
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
        modules={[Navigation]}
        className="case-swiper"
        slidesPerView={1}
        spaceBetween={30}
        speed={650}
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

function PeopleSection() {
  const { t, locale } = useLanguage();
  const peopleImages = [imageUrls.peopleOne, imageUrls.peopleTwo, imageUrls.peopleThree];
  const socialImages = [
    imageUrls.socialVietnamOne,
    imageUrls.socialVietnamTwo,
    imageUrls.socialVietnamThree,
    imageUrls.socialVietnamFour,
    imageUrls.socialVietnamFive,
  ];

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

      <div className="social-follow" data-reveal>
        <p>{t("Follow us on our social media")}</p>
        <div className="social-strip">
          {socialImages.map((image) => (
            <a href={image} key={image} aria-label={t("Follow us")}>
              <img src={image} alt="" />
              <ArrowIcon />
            </a>
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
        <PeopleSection />
      </main>
      <Footer />
    </>
  );
}
