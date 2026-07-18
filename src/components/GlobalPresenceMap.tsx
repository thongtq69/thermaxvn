"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageProvider";

type LocalizedText = {
  en: string;
  vi: string;
};

type MapLocation = {
  id: string;
  label: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  address?: LocalizedText[];
  x: number;
  y: number;
};

const worldMapImage =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/WorldMap-Blank-Noborders.svg/1280px-WorldMap-Blank-Noborders.svg.png";

const locations: MapLocation[] = [
  {
    id: "usa",
    label: { en: "USA", vi: "Hoa Kỳ" },
    title: { en: "Americas", vi: "Châu Mỹ" },
    description: {
      en: "Sales, engineering and service support for customers across North and South America.",
      vi: "Mạng lưới bán hàng, kỹ thuật và dịch vụ hỗ trợ khách hàng trên khắp Bắc Mỹ và Nam Mỹ.",
    },
    x: 20,
    y: 34,
  },
  {
    id: "brazil",
    label: { en: "Brazil", vi: "Brazil" },
    title: { en: "Brazil", vi: "Brazil" },
    description: {
      en: "Thermax supports industrial customers in Brazil and the wider Latin American market.",
      vi: "Thermax hỗ trợ khách hàng công nghiệp tại Brazil và thị trường Mỹ Latinh.",
    },
    x: 32,
    y: 68,
  },
  {
    id: "united-kingdom",
    label: { en: "United Kingdom", vi: "Vương quốc Anh" },
    title: { en: "United Kingdom", vi: "Vương quốc Anh" },
    description: {
      en: "Regional commercial and service presence serving the United Kingdom.",
      vi: "Hiện diện thương mại và dịch vụ khu vực phục vụ thị trường Vương quốc Anh.",
    },
    x: 47,
    y: 27,
  },
  {
    id: "denmark",
    label: { en: "Denmark", vi: "Đan Mạch" },
    title: { en: "Denmark – Manufacturing facility", vi: "Đan Mạch – Nhà máy sản xuất" },
    description: {
      en: "One of Thermax's four overseas manufacturing locations.",
      vi: "Một trong bốn địa điểm sản xuất của Thermax bên ngoài Ấn Độ.",
    },
    x: 51,
    y: 22,
  },
  {
    id: "germany",
    label: { en: "Germany", vi: "Đức" },
    title: { en: "Germany – Bremen (Manufacturing facility)", vi: "Đức – Bremen (Nhà máy sản xuất)" },
    description: {
      en: "Thermax Chemical Europe",
      vi: "Công ty Thermax Chemical Europe",
    },
    address: [
      { en: "Bahnhofstrasse 11,", vi: "Bahnhofstrasse 11," },
      { en: "56457 Westerburg, Germany", vi: "56457 Westerburg, Đức" },
    ],
    x: 51,
    y: 31,
  },
  {
    id: "poland",
    label: { en: "Poland", vi: "Ba Lan" },
    title: { en: "Poland – Manufacturing facility", vi: "Ba Lan – Nhà máy sản xuất" },
    description: {
      en: "A key Thermax manufacturing and engineering location in Europe.",
      vi: "Địa điểm sản xuất và kỹ thuật quan trọng của Thermax tại châu Âu.",
    },
    x: 54,
    y: 28,
  },
  {
    id: "nigeria",
    label: { en: "Nigeria", vi: "Nigeria" },
    title: { en: "Nigeria", vi: "Nigeria" },
    description: {
      en: "Sales and service support for industrial customers in West Africa.",
      vi: "Hỗ trợ bán hàng và dịch vụ cho khách hàng công nghiệp tại Tây Phi.",
    },
    x: 48,
    y: 54,
  },
  {
    id: "kenya",
    label: { en: "Kenya", vi: "Kenya" },
    title: { en: "Kenya", vi: "Kenya" },
    description: {
      en: "Regional presence supporting customers across East Africa.",
      vi: "Hiện diện khu vực hỗ trợ khách hàng trên khắp Đông Phi.",
    },
    x: 57,
    y: 61,
  },
  {
    id: "uae",
    label: { en: "UAE", vi: "UAE" },
    title: { en: "United Arab Emirates", vi: "Các Tiểu vương quốc Ả Rập Thống nhất" },
    description: {
      en: "Thermax's regional hub for the Middle East and North Africa.",
      vi: "Trung tâm khu vực của Thermax phục vụ Trung Đông và Bắc Phi.",
    },
    x: 63,
    y: 47,
  },
  {
    id: "india",
    label: { en: "India", vi: "Ấn Độ" },
    title: { en: "India – Thermax registered office", vi: "Ấn Độ – Trụ sở đăng ký Thermax" },
    description: { en: "Thermax Limited", vi: "Công ty Thermax Limited" },
    address: [
      { en: "D-13, MIDC Industrial Area, R. D. Aga Road, Chinchwad,", vi: "D-13, Khu công nghiệp MIDC, đường R. D. Aga, Chinchwad," },
      { en: "Pune 411019, Maharashtra, India", vi: "Pune 411019, Maharashtra, Ấn Độ" },
    ],
    x: 68,
    y: 49,
  },
  {
    id: "bangladesh",
    label: { en: "Bangladesh", vi: "Bangladesh" },
    title: { en: "Bangladesh", vi: "Bangladesh" },
    description: {
      en: "Local sales and service support for Bangladesh's industrial market.",
      vi: "Đội ngũ bán hàng và dịch vụ địa phương hỗ trợ thị trường công nghiệp Bangladesh.",
    },
    x: 72,
    y: 48,
  },
  {
    id: "sri-lanka",
    label: { en: "Sri Lanka", vi: "Sri Lanka" },
    title: { en: "Sri Lanka", vi: "Sri Lanka" },
    description: {
      en: "Thermax solutions and service expertise for customers in Sri Lanka.",
      vi: "Giải pháp và chuyên môn dịch vụ Thermax dành cho khách hàng tại Sri Lanka.",
    },
    x: 68,
    y: 61,
  },
  {
    id: "thailand",
    label: { en: "Thailand", vi: "Thái Lan" },
    title: { en: "Thermax Thailand", vi: "Thermax Thái Lan" },
    description: {
      en: "Sales, service and operational support for Thai industries.",
      vi: "Bán hàng, dịch vụ và hỗ trợ vận hành cho các ngành công nghiệp Thái Lan.",
    },
    x: 76,
    y: 54,
  },
  {
    id: "vietnam",
    label: { en: "Vietnam", vi: "Việt Nam" },
    title: { en: "Thermax Vietnam Office", vi: "Văn phòng Thermax Việt Nam" },
    description: { en: "Room 2–3, 1st Floor", vi: "Phòng 2–3, tầng 1" },
    address: [
      { en: "WiYO Complex, No. 46 N3C Street, Binh Trung Ward,", vi: "WiYO Complex, số 46 đường N3C, phường Bình Trưng," },
      { en: "Ho Chi Minh City, Vietnam", vi: "Thành phố Hồ Chí Minh, Việt Nam" },
    ],
    x: 79,
    y: 53,
  },
  {
    id: "malaysia",
    label: { en: "Malaysia", vi: "Malaysia" },
    title: { en: "Malaysia", vi: "Malaysia" },
    description: {
      en: "Sales and service coverage for Malaysia and nearby markets.",
      vi: "Mạng lưới bán hàng và dịch vụ cho Malaysia và các thị trường lân cận.",
    },
    x: 77,
    y: 63,
  },
  {
    id: "indonesia",
    label: { en: "Indonesia", vi: "Indonesia" },
    title: { en: "Indonesia – Manufacturing facility", vi: "Indonesia – Nhà máy sản xuất" },
    description: {
      en: "Manufacturing, sales and service operations serving the Indonesian market.",
      vi: "Hoạt động sản xuất, bán hàng và dịch vụ phục vụ thị trường Indonesia.",
    },
    x: 80,
    y: 68,
  },
  {
    id: "philippines",
    label: { en: "Philippines", vi: "Philippines" },
    title: { en: "Philippines", vi: "Philippines" },
    description: {
      en: "Thermax solutions and service support for customers in the Philippines.",
      vi: "Giải pháp và dịch vụ Thermax hỗ trợ khách hàng tại Philippines.",
    },
    x: 83,
    y: 55,
  },
];

export function GlobalPresenceMap() {
  const { locale } = useLanguage();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  const selected = locations.find((location) => location.id === selectedId) ?? null;
  const copy = locale === "vi"
    ? {
        instruction: "Nhấp chuột vào con trỏ vị trí để xem chi tiết.",
        zoomIn: "Phóng to bản đồ",
        zoomOut: "Thu nhỏ bản đồ",
        close: "Đóng thông tin địa điểm",
      }
    : {
        instruction: "Click a location marker to view details.",
        zoomIn: "Zoom in",
        zoomOut: "Zoom out",
        close: "Close location details",
      };

  return (
    <div className="global-map" data-no-translate>
      <div className="global-map-instruction">
        <span aria-hidden="true" />
        {copy.instruction}
      </div>

      <div className="global-map-frame">
        <div className="global-map-controls" aria-label={locale === "vi" ? "Điều khiển bản đồ" : "Map controls"}>
          <button type="button" onClick={() => setZoom((value) => Math.min(1.6, value + 0.2))} disabled={zoom >= 1.6} aria-label={copy.zoomIn}>+</button>
          <button type="button" onClick={() => setZoom((value) => Math.max(1, value - 0.2))} disabled={zoom <= 1} aria-label={copy.zoomOut}>−</button>
        </div>

        <div className="global-map-canvas" style={{ transform: `scale(${zoom})` }}>
          <img className="global-map-image" src={worldMapImage} alt="" aria-hidden="true" />
          {locations.map((location) => (
            <button
              className={`global-map-marker${selectedId === location.id ? " is-active" : ""}`}
              data-location={location.id}
              key={location.id}
              type="button"
              style={{ left: `${location.x}%`, top: `${location.y}%` }}
              aria-label={`${location.label[locale]} — ${copy.instruction}`}
              aria-pressed={selectedId === location.id}
              onClick={() => setSelectedId(location.id)}
            >
              <span>{location.label[locale]}</span>
              <i aria-hidden="true" />
            </button>
          ))}
        </div>

        {selected ? (
          <aside className="global-map-popup" role="dialog" aria-live="polite" aria-label={selected.title[locale]}>
            <button className="global-map-popup-close" type="button" onClick={() => setSelectedId(null)} aria-label={copy.close}>×</button>
            <h3>{selected.title[locale]}</h3>
            <p>{selected.description[locale]}</p>
            {selected.address?.map((line) => <p key={line.en}>{line[locale]}</p>)}
          </aside>
        ) : null}
      </div>
    </div>
  );
}
