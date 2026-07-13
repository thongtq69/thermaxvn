"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "./LanguageProvider";

const s3 = "https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public";

const products = [
  {
    name: { en: "Thermax Opticor®", vi: "Thermax Opticor®" },
    category: { en: "Air pollution control", vi: "Kiểm soát ô nhiễm không khí" },
    description: {
      en: "An intelligent ESP optimisation solution that improves clinker cooler performance and supports stringent emission compliance.",
      vi: "Giải pháp tối ưu ESP thông minh giúp cải thiện hiệu suất bộ làm mát clinker và đáp ứng các yêu cầu khí thải nghiêm ngặt.",
    },
    image: `${s3}/2026-04/Desktop.jpg`,
    href: "/industrial-products/air-pollution-control-systems",
  },
  {
    name: { en: "Closed Circuit Cooling Tower (CLCT)", vi: "Tháp giải nhiệt dạng kín (CLCT)" },
    category: { en: "Cooling and heating", vi: "Làm mát và gia nhiệt" },
    description: {
      en: "A closed-loop cooling solution engineered to improve heat exchanger reliability, thermal performance and water efficiency.",
      vi: "Giải pháp làm mát tuần hoàn kín giúp nâng cao độ tin cậy của bộ trao đổi nhiệt, hiệu suất nhiệt và hiệu quả sử dụng nước.",
    },
    image: `${s3}/2026-04/Desktop_8.jpg`,
    href: "/industrial-products/closed-circuit-cooling-towers",
  },
  {
    name: { en: "Bi-drum Boiler", vi: "Lò hơi hai bao hơi" },
    category: { en: "Process heat", vi: "Nhiệt quy trình" },
    description: {
      en: "A high-capacity steam boiler solution demonstrated through installation and commissioning completed in only 40 days.",
      vi: "Giải pháp lò hơi công suất lớn được minh chứng bằng dự án lắp đặt và chạy thử hoàn thành chỉ trong 40 ngày.",
    },
    image: `${s3}/2026-04/Desktop_11.jpg`,
    href: "/projects/bi-drum-boiler-40-days",
  },
  {
    name: { en: "Zero Liquid Discharge (ZLD)", vi: "Hệ thống không xả thải lỏng (ZLD)" },
    category: { en: "Water and waste", vi: "Nước và chất thải" },
    description: {
      en: "An integrated water recovery solution that reduces freshwater consumption and enables sustainable industrial reuse.",
      vi: "Giải pháp thu hồi nước tích hợp giúp giảm tiêu thụ nước ngọt và thúc đẩy tái sử dụng nước bền vững trong công nghiệp.",
    },
    image: `${s3}/2026-04/Desktop_23.jpg`,
    href: "/industrial-products/zero-liquid-discharge-system",
  },
];

export function IndustrialProductHighlights() {
  const { locale } = useLanguage();
  const [active, setActive] = useState(0);
  const current = products[active];
  const labels = locale === "vi"
    ? {
        title: "Sản phẩm",
        intro: "Khám phá các sản phẩm và công nghệ tiêu biểu của Thermax trong kiểm soát ô nhiễm, gia nhiệt, làm mát và quản lý nước.",
        previous: "Sản phẩm trước",
        next: "Sản phẩm tiếp theo",
        discover: "Xem sản phẩm",
      }
    : {
        title: "Products",
        intro: "Explore featured Thermax products and technologies across pollution control, heating, cooling and water management.",
        previous: "Previous product",
        next: "Next product",
        discover: "View product",
      };

  const move = (direction: number) => {
    setActive((index) => (index + direction + products.length) % products.length);
  };

  return (
    <section className="industrial-product-highlights" aria-labelledby="industrial-product-highlights-title">
      <div className="industrial-product-highlights-header" data-reveal>
        <h2 id="industrial-product-highlights-title">{labels.title}</h2>
        <div>
          <p>{labels.intro}</p>
          <div className="industrial-product-highlights-controls" aria-label={labels.title}>
            <button type="button" onClick={() => move(-1)} aria-label={labels.previous}>←</button>
            <span>{String(active + 1).padStart(2, "0")} / {String(products.length).padStart(2, "0")}</span>
            <button type="button" onClick={() => move(1)} aria-label={labels.next}>→</button>
          </div>
        </div>
      </div>

      <article className="industrial-product-highlight-card" key={current.name.en} data-reveal>
        <img
          src={current.image}
          alt={current.name[locale]}
          width="1600"
          height="900"
          loading="lazy"
        />
        <div className="industrial-product-highlight-card-copy">
          <p>{current.category[locale]}</p>
          <h3>{current.name[locale]}</h3>
          <span>{current.description[locale]}</span>
          <Link href={current.href}>{labels.discover}</Link>
        </div>
      </article>

      <div className="industrial-product-highlight-dots" aria-label={labels.title}>
        {products.map((product, index) => (
          <button
            type="button"
            key={product.name.en}
            className={index === active ? "is-active" : ""}
            onClick={() => setActive(index)}
            aria-label={product.name[locale]}
            aria-current={index === active ? "true" : undefined}
          />
        ))}
      </div>
    </section>
  );
}

