import { imageUrls } from "./site";
import type { Locale } from "./i18n";
import type { OfficialCatalogProduct } from "./officialProductCatalog";

export type DetailPage = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  mobileImage?: string;
  category: string;
  overview: string[];
  highlights: string[];
  applications: string[];
  products?: OfficialCatalogProduct[];
};

const productImage = {
  air: "https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2025-09/apc-banner.jpg",
  airMobile: "https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2025-09/apc-banner-mobile.jpg",
  heat:
    "https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-04/Process%20Heat%20Solutions%20Banner.png",
  heatMobile:
    "https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-04/Process%20Heat%20Solutions%20Banner%20mobile.png",
  steam: "https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2025-09/steam_desktop_banner.jpg",
  steamMobile: "https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2025-09/steam_mobile_banner.jpg",
  cooling:
    "https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-04/Cooling%20and%20Heating%20Solutions%20Banner%20updated.png",
  coolingMobile:
    "https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-04/Cooling%20and%20Heating%20Solutions.png",
  water:
    "https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2025-08/water_waste_banner_0.jpg",
  waterMobile:
    "https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2025-08/water_waste_banner_mobile_0.jpg",
  chemicals: imageUrls.bannerChemicals,
  chemicalsMobile: imageUrls.bannerChemicalsMobile,
  service: imageUrls.serve,
};

type DetailPageText = Pick<DetailPage, "title" | "eyebrow" | "description"> &
  Partial<Pick<DetailPage, "overview" | "highlights" | "applications" | "category">>;

const englishCategory: Record<string, string> = {
  "Xử lý khí thải": "Air Pollution Control Systems",
  "Hệ thống gia nhiệt": "Process Heat Solutions",
  "Hệ thống đường ống hơi": "Steam Engineering Solutions",
  "Hệ thống lạnh": "Cooling and Heating Solutions",
  "Xử lý nước": "Water and Waste Solutions",
  "Hóa chất": "Chemicals",
  "Dịch vụ": "Services",
};

const englishApplications: Record<string, string> = {
  "Xi măng": "Cement",
  "Kim loại và khai khoáng": "Metals and mining",
  "Phát điện": "Power generation",
  "Hóa chất": "Chemicals",
  "Thực phẩm & đồ uống": "Food and beverages",
  "Giấy và bột giấy": "Paper and pulp",
  "Thép": "Steel",
  "Lò hơi công nghiệp": "Industrial boilers",
  "Thực phẩm": "Food",
  "Gỗ": "Wood",
  "Khoáng sản": "Minerals",
  "Lò hơi": "Boilers",
  "Lò gia nhiệt": "Fired heaters",
  "Luyện kim": "Metallurgy",
  "Dược phẩm": "Pharmaceuticals",
  "Dệt may": "Textiles",
  "Giấy": "Paper",
  "Cao su": "Rubber",
  "Dệt nhuộm": "Textile dyeing",
  "Nhựa": "Plastics",
  "Sấy nông sản": "Agro drying",
  "Sơn phủ": "Coatings",
  "Khách sạn": "Hotels",
  "Tiện ích nhà máy": "Plant utilities",
  "Bệnh viện": "Hospitals",
  "Nhà lò hơi": "Boiler houses",
  "Tiện ích": "Utilities",
  "Tòa nhà": "Buildings",
  "Tòa nhà thương mại": "Commercial buildings",
  "Dữ liệu": "Data centres",
  "Điều hòa trung tâm": "Central HVAC",
  "Dầu khí": "Oil and gas",
  "Đô thị": "Urban utilities",
  "Điện": "Power",
  "Nước cấp": "Process water",
  "Tháp giải nhiệt": "Cooling towers",
  "Nước quy trình": "Process water",
  "Nước thải": "Wastewater",
  "Kết cấu thép": "Steel structures",
  "Bê tông": "Concrete",
  "Hạ tầng": "Infrastructure",
  "Khu xử lý nước": "Water treatment plants",
  "Nền công nghiệp": "Industrial flooring",
  "Sửa chữa kết cấu": "Structural repair",
  "Chống thấm": "Waterproofing",
  "Liên kết và trám khe": "Bonding and joint sealing",
  "Nhà máy hơi": "Steam plants",
  "Chiller hấp thụ": "Absorption chillers",
  "Heat pump": "Heat pumps",
  "ESP": "ESP",
  "Bag filter": "Bag filters",
  "Combofilter": "Combofilter",
  "Hệ HVAC": "HVAC systems",
  "Nhà máy công nghiệp": "Industrial plants",
};

const englishHighlightsByCategory: Record<string, string[]> = {
  "Air Pollution Control Systems": [
    "Designed for demanding emission limits",
    "Suitable for new plants and retrofits",
    "Lifecycle support, audits and upgrades",
  ],
  "Process Heat Solutions": [
    "Fuel-flexible heating platforms",
    "High thermal efficiency",
    "Configured for process capacity and safety",
  ],
  "Steam Engineering Solutions": [
    "Improves steam distribution reliability",
    "Reduces energy and condensate losses",
    "Supports safer utility operations",
  ],
  "Cooling and Heating Solutions": [
    "Energy-efficient heating and cooling",
    "Waste heat recovery potential",
    "Lifecycle service and performance support",
  ],
  "Water and Waste Solutions": [
    "Improves water recovery and reuse",
    "Supports environmental compliance",
    "Configured around water quality and process demand",
  ],
  Chemicals: [
    "Performance-engineered chemistry",
    "Supports process efficiency and equipment protection",
    "Applicable across industrial operations",
  ],
  Services: [
    "Lifecycle service support",
    "Health checks, spares and troubleshooting",
    "Focused on uptime, safety and efficiency",
  ],
};

const englishDetailText: Record<string, DetailPageText> = {
  "air-pollution-control-systems": {
    title: "Air Pollution Control Systems",
    eyebrow: "Industrial Products",
    description: "Particulate and gaseous emission control solutions for industries with strict compliance needs.",
  },
  "electrostatic-precipitator-esp": {
    title: "Electrostatic Precipitator (ESP)",
    eyebrow: "Air Pollution Control Systems",
    description: "High-efficiency dust collection equipment for large gas volumes and low emission requirements.",
  },
  "bag-house-bag-filters": {
    title: "Bag House / Bag Filters",
    eyebrow: "Air Pollution Control Systems",
    description: "Fabric filtration systems for dry dust, fine particulates and stable outlet emissions.",
  },
  combofilter: {
    title: "Combofilter",
    eyebrow: "Air Pollution Control Systems",
    description: "A hybrid solution combining ESP and bag filter strengths to improve particulate removal.",
  },
  "nox-control": {
    title: "NOx Control",
    eyebrow: "Air Pollution Control Systems",
    description: "Solutions for reducing NOx emissions from boilers, kilns and fuel-fired process equipment.",
  },
  "sox-control": {
    title: "SOx Control",
    eyebrow: "Air Pollution Control Systems",
    description: "Systems for reducing SOx and acid gas emissions from industrial flue gas streams.",
  },
  "process-heat-solutions": {
    title: "Process Heat Solutions",
    eyebrow: "Industrial Products",
    description: "Fuel-flexible, efficient and sustainable process heating solutions for multiple industries.",
  },
  "steam-boilers": {
    title: "Steam Boilers",
    eyebrow: "Process Heat Solutions",
    description: "Industrial steam boiler platforms for saturated steam, superheated steam and diverse fuels.",
  },
  "thermal-oil-heaters": {
    title: "Thermal Oil Heaters",
    eyebrow: "Process Heat Solutions",
    description: "Thermic fluid heating for high-temperature processes operating at relatively low pressure.",
  },
  "hot-air-generators": {
    title: "Hot Air Generators",
    eyebrow: "Process Heat Solutions",
    description: "Stable hot air generation for drying, heat treatment and industrial thermal processes.",
  },
  "hot-water-generators": {
    title: "Hot Water Generators",
    eyebrow: "Process Heat Solutions",
    description: "Hot water systems for process, sanitation and plant utility requirements.",
  },
  "steam-engineering-solutions": {
    title: "Steam Engineering Solutions",
    eyebrow: "Industrial Products",
    description: "Solutions for steam generation, distribution, usage efficiency and condensate recovery.",
  },
  "boiler-house-products": {
    title: "Boiler House Products",
    eyebrow: "Steam Engineering Solutions",
    description: "Measurement, monitoring and automation products for boiler house operation.",
  },
  "steam-distribution": {
    title: "Steam Distribution",
    eyebrow: "Steam Engineering Solutions",
    description: "Steam piping and distribution optimisation for reliable delivery to points of use.",
  },
  "condensate-system-management": {
    title: "Condensate System Management",
    eyebrow: "Steam Engineering Solutions",
    description: "Condensate recovery solutions that save energy, feedwater and treatment chemicals.",
  },
  "hot-water-heating-systems": {
    title: "Hot Water Heating Systems",
    eyebrow: "Steam Engineering Solutions",
    description: "Hot water conversion and distribution solutions for processes and utilities.",
  },
  "cooling-and-heating-solutions": {
    title: "Cooling and Heating Solutions",
    eyebrow: "Industrial Products",
    description: "Cooling, heating and heat recovery solutions for industrial and commercial applications.",
  },
  "absorption-chillers": {
    title: "Absorption Chillers",
    eyebrow: "Cooling and Heating Solutions",
    description: "Thermally driven chillers that generate cooling efficiently and sustainably.",
  },
  "absorption-heat-pumps": {
    title: "Absorption Heat Pumps",
    eyebrow: "Cooling and Heating Solutions",
    description: "Absorption heat pumps that upgrade and reuse heat in industrial systems.",
  },
  "electric-heat-pumps": {
    title: "Electric Heat Pumps",
    eyebrow: "Cooling and Heating Solutions",
    description: "High-efficiency electric heating solutions for electrification and lower emissions.",
  },
  "closed-circuit-cooling-towers": {
    title: "Closed Circuit Cooling Towers",
    eyebrow: "Cooling and Heating Solutions",
    description: "Closed-loop cooling systems that protect process water quality and reduce fouling risk.",
  },
  "air-cooled-heat-exchangers": {
    title: "Air Cooled Heat Exchangers",
    eyebrow: "Cooling and Heating Solutions",
    description: "Dry air cooling for locations with limited water or low-maintenance requirements.",
  },
  "water-and-waste-solutions": {
    title: "Water and Waste Solutions",
    eyebrow: "Industrial Products",
    description: "Water and wastewater solutions for recovery, reuse and environmental compliance.",
  },
  "water-treatment-solutions": {
    title: "Water Treatment Solutions",
    eyebrow: "Water and Waste Solutions",
    description: "Feedwater and process water treatment systems for boilers, utilities and manufacturing.",
  },
  "wastewater-recovery": {
    title: "Wastewater Recovery",
    eyebrow: "Water and Waste Solutions",
    description: "Wastewater recycling and recovery solutions for more sustainable operations.",
  },
  "boiler-water-treatment-chemicals": {
    title: "Boiler Water Treatment Chemicals",
    eyebrow: "Chemicals",
    description: "Boiler water treatment chemistry for scale, corrosion and steam quality control.",
  },
  "water-treatment": {
    title: "Water Treatment Chemicals",
    eyebrow: "Chemicals",
    description: "Chemical programmes for boiler water, cooling water, process water and wastewater.",
  },
  "cooling-water-treatment-chemicals": {
    title: "Cooling Water Treatment Chemicals",
    eyebrow: "Chemicals",
    description: "Cooling water chemicals for scale, corrosion, deposits and microbiological control.",
  },
  "ion-exchange-resins": {
    title: "Ion Exchange Resins",
    eyebrow: "Chemicals",
    description: "Tulsion ion exchange resins for demineralisation, softening, purification and separation.",
  },
  "protective-coatings": {
    title: "Protective Coatings",
    eyebrow: "Chemicals",
    description: "Protective coating and waterproofing systems for industrial structures and infrastructure.",
  },
  "admixtures-and-sealants": {
    title: "Admixtures and Sealants",
    eyebrow: "Chemicals",
    description: "Concrete admixtures, grouts, anchors, sealants and repair materials for industrial construction.",
  },
  "boiler-maintenance-services": {
    title: "Boiler Maintenance Services",
    eyebrow: "Services",
    description: "Boiler lifecycle support from inspections and spares to upgrades and performance optimisation.",
  },
  "absorption-chiller-maintenance-services": {
    title: "Absorption Chiller Maintenance Services",
    eyebrow: "Services",
    description: "Installation, commissioning, maintenance and optimisation support for absorption chillers and heat pumps.",
  },
  "air-pollution-control-system-maintenance-services": {
    title: "Air Pollution Control System Maintenance Services",
    eyebrow: "Services",
    description: "Maintenance, assessment and optimisation support for ESP, bag filters and air pollution control equipment.",
  },
  "automatic-tube-cleaning-system-atcs": {
    title: "Automatic Tube Cleaning System (ATCS)",
    eyebrow: "Services",
    description: "Automatic tube cleaning that helps maintain chiller heat transfer efficiency during operation.",
  },
};

const supplementalEnglishText = {
  scrubber: ["Scrubber", "Air Pollution Control Systems", "Wet and dry scrubbing solutions for particulate, acid gas and industrial emission control."],
  "thermax-neo-gas-enrichment-solutions": ["Thermax Ne0 - Gas Enrichment Solutions", "Air Pollution Control Systems", "Efficient, clean and green gas enrichment technologies for industrial applications."],
  "energy-plant": ["Energy Plant", "Process Heat Solutions", "Integrated steam, thermic fluid and hot gas systems for optimised plant-level energy use."],
  "electric-process-heat-solutions": ["Electric Process Heat Solutions", "Process Heat Solutions", "Zero-emission electric heating platforms with high efficiency and compact installation."],
  "process-automation": ["Process Automation", "Steam Engineering Solutions", "Automation for steam-intensive processes to improve performance, quality and energy savings."],
  "customised-solutions": ["Customised Solutions", "Steam Engineering Solutions", "Packaged hot water and washdown solutions with precise temperature control."],
  "absorption-chiller-heaters": ["Absorption Chiller-Heaters", "Cooling and Heating Solutions", "Dual-function cooling and heating using sustainable thermal energy sources."],
  "absorption-heat-transformer": ["Absorption Heat Transformer", "Cooling and Heating Solutions", "Waste heat upgrading technology for usable medium-grade industrial heat."],
  "hybrid-chiller": ["Hybrid Chiller", "Cooling and Heating Solutions", "Flexible cooling through combined vapour compression and absorption technologies."],
  "heating-solutions": ["Heating Solutions", "Cooling and Heating Solutions", "Electrical and hybrid heat pump solutions for adaptable process heating."],
  "wet-cooling-solutions": ["Wet Cooling Solutions", "Cooling and Heating Solutions", "Evaporation-based cooling solutions for efficient heat rejection."],
  "dry-cooling-solutions": ["Dry Cooling Solutions", "Cooling and Heating Solutions", "Water-free cooling solutions for sustainable thermal management."],
  "industrial-refrigeration-unit": ["Refrigeration Solutions", "Cooling and Heating Solutions", "Reliable low-temperature cooling for demanding industrial processes."],
  "sewage-treatment-and-recycling-plants": ["Sewage Treatment and Recycling Plants", "Water and Waste Solutions", "Treatment and recycling systems for sewage and urban wastewater reuse."],
  "effluent-treatment-recycling-plants": ["Effluent Treatment & Recycling Plants", "Water and Waste Solutions", "Industrial effluent treatment and recycling systems for compliant discharge and reuse."],
  "minimum-liquid-discharge": ["Minimum Liquid Discharge", "Water and Waste Solutions", "Water recovery systems that minimise liquid discharge from industrial operations."],
  "zero-liquid-discharge-system": ["Zero Liquid Discharge System", "Water and Waste Solutions", "Integrated systems designed to eliminate liquid waste discharge."],
} satisfies Record<string, [string, string, string]>;

for (const [slug, [title, eyebrow, description]] of Object.entries(supplementalEnglishText)) {
  englishDetailText[slug] = { title, eyebrow, description };
}

function englishApplicationsFor(items: string[]) {
  return items.map((item) => englishApplications[item] ?? item);
}

function localizeDetail(page: DetailPage, locale: Locale): DetailPage {
  if (locale !== "en") return page;

  const text = englishDetailText[page.slug];
  const category = text?.category ?? englishCategory[page.category] ?? page.category;
  const title = text?.title ?? page.title;
  const description = text?.description ?? page.description;

  return {
    ...page,
    title,
    eyebrow: text?.eyebrow ?? englishCategory[page.eyebrow] ?? page.eyebrow,
    description,
    category,
    overview: text?.overview ?? [
      `${title} is part of Thermax's ${category.toLowerCase()} portfolio, supporting industrial customers with efficient, reliable and sustainability-focused solutions.`,
      "The solution is configured around operating conditions, performance targets and compliance requirements, with Thermax Vietnam supporting enquiry, selection and lifecycle service.",
    ],
    highlights: text?.highlights ?? englishHighlightsByCategory[category] ?? [
      "Configured to customer requirements",
      "Designed for reliable industrial operation",
      "Supported by Thermax lifecycle expertise",
    ],
    applications: text?.applications ?? englishApplicationsFor(page.applications),
  };
}

function supplementalProduct({
  slug,
  title,
  category,
  description,
  image,
  applications,
}: {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  applications: string[];
}): DetailPage {
  return {
    slug,
    title,
    eyebrow: category,
    description,
    image,
    category,
    overview: [
      description,
      "Thermax Vietnam hỗ trợ lựa chọn cấu hình, trao đổi yêu cầu kỹ thuật và dịch vụ vòng đời phù hợp với điều kiện vận hành thực tế.",
    ],
    highlights: ["Thiết kế theo yêu cầu vận hành", "Tối ưu hiệu suất", "Hỗ trợ kỹ thuật vòng đời"],
    applications,
  };
}

const supplementalProductDetailPages: DetailPage[] = [
  supplementalProduct({
    slug: "scrubber",
    title: "Tháp rửa khí",
    category: "Xử lý khí thải",
    description: "Giải pháp rửa khí ướt và khô để xử lý bụi, khí axit và phát thải công nghiệp.",
    image: productImage.air,
    applications: ["Hóa chất", "Xi măng", "Kim loại và khai khoáng", "Phát điện"],
  }),
  supplementalProduct({
    slug: "thermax-neo-gas-enrichment-solutions",
    title: "Thermax Ne0 - Giải pháp làm giàu khí",
    category: "Xử lý khí thải",
    description: "Công nghệ làm giàu khí hiệu quả, sạch và thân thiện môi trường cho ứng dụng công nghiệp.",
    image: productImage.air,
    applications: ["Hóa chất", "Dầu khí", "Phát điện"],
  }),
  supplementalProduct({
    slug: "energy-plant",
    title: "Nhà máy năng lượng",
    category: "Hệ thống gia nhiệt",
    description: "Hệ thống tích hợp hơi, dầu tải nhiệt và khí nóng để tối ưu năng lượng ở cấp nhà máy.",
    image: productImage.heat,
    applications: ["Thực phẩm", "Hóa chất", "Dệt may", "Giấy và bột giấy"],
  }),
  supplementalProduct({
    slug: "electric-process-heat-solutions",
    title: "Giải pháp gia nhiệt quy trình bằng điện",
    category: "Hệ thống gia nhiệt",
    description: "Nền tảng gia nhiệt điện không phát thải tại chỗ, hiệu suất cao và lắp đặt gọn.",
    image: productImage.heat,
    applications: ["Dược phẩm", "Thực phẩm", "Dệt may", "Hóa chất"],
  }),
  supplementalProduct({
    slug: "process-automation",
    title: "Tự động hóa quy trình",
    category: "Hệ thống đường ống hơi",
    description: "Tự động hóa cho quy trình sử dụng nhiều hơi nhằm cải thiện hiệu suất, chất lượng và tiết kiệm năng lượng.",
    image: productImage.steam,
    applications: ["Dệt may", "Thực phẩm", "Dược phẩm", "Hóa chất"],
  }),
  supplementalProduct({
    slug: "customised-solutions",
    title: "Giải pháp tùy chỉnh",
    category: "Hệ thống đường ống hơi",
    description: "Giải pháp nước nóng và vệ sinh đóng gói với khả năng kiểm soát nhiệt độ chính xác.",
    image: productImage.steam,
    applications: ["Thực phẩm", "Dược phẩm", "Khách sạn", "Bệnh viện"],
  }),
  supplementalProduct({
    slug: "absorption-chiller-heaters",
    title: "Chiller hấp thụ hai chiều nóng - lạnh",
    category: "Hệ thống lạnh",
    description: "Giải pháp hai chiều làm mát và gia nhiệt bằng nguồn năng lượng nhiệt bền vững.",
    image: productImage.cooling,
    applications: ["Tòa nhà", "Thực phẩm", "Dược phẩm", "Hóa chất"],
  }),
  supplementalProduct({
    slug: "absorption-heat-transformer",
    title: "Bộ nâng cấp nhiệt hấp thụ",
    category: "Hệ thống lạnh",
    description: "Công nghệ nâng cấp nhiệt thải nhiệt độ thấp thành nguồn nhiệt hữu ích cho công nghiệp.",
    image: productImage.cooling,
    applications: ["Hóa chất", "Dệt may", "Thực phẩm", "Tiện ích"],
  }),
  supplementalProduct({
    slug: "hybrid-chiller",
    title: "Chiller lai",
    category: "Hệ thống lạnh",
    description: "Giải pháp làm mát linh hoạt kết hợp công nghệ nén hơi và hấp thụ.",
    image: productImage.cooling,
    applications: ["Tòa nhà thương mại", "Dữ liệu", "Dược phẩm", "Thực phẩm"],
  }),
  supplementalProduct({
    slug: "heating-solutions",
    title: "Giải pháp gia nhiệt",
    category: "Hệ thống lạnh",
    description: "Heat pump điện và lai cho nhu cầu gia nhiệt quy trình linh hoạt, hiệu quả.",
    image: productImage.cooling,
    applications: ["Dệt may", "Thực phẩm", "Dược phẩm", "Tòa nhà"],
  }),
  supplementalProduct({
    slug: "wet-cooling-solutions",
    title: "Giải pháp làm mát ướt",
    category: "Hệ thống lạnh",
    description: "Giải pháp làm mát bay hơi để thải nhiệt hiệu quả.",
    image: productImage.cooling,
    applications: ["Tòa nhà", "Dữ liệu", "Hóa chất", "Thực phẩm"],
  }),
  supplementalProduct({
    slug: "dry-cooling-solutions",
    title: "Giải pháp làm mát khô",
    category: "Hệ thống lạnh",
    description: "Giải pháp làm mát không dùng nước cho quản lý nhiệt bền vững.",
    image: productImage.cooling,
    applications: ["Dữ liệu", "Dầu khí", "Hóa chất", "Phát điện"],
  }),
  supplementalProduct({
    slug: "industrial-refrigeration-unit",
    title: "Giải pháp làm lạnh công nghiệp",
    category: "Hệ thống lạnh",
    description: "Giải pháp làm lạnh nhiệt độ thấp ổn định cho quy trình công nghiệp khắt khe.",
    image: productImage.cooling,
    applications: ["Thực phẩm", "Kho lạnh", "Hóa chất", "Dược phẩm"],
  }),
  supplementalProduct({
    slug: "sewage-treatment-and-recycling-plants",
    title: "Nhà máy xử lý và tái chế nước thải sinh hoạt",
    category: "Xử lý nước",
    description: "Hệ thống xử lý và tái chế nước thải sinh hoạt cho nhu cầu tái sử dụng nước.",
    image: productImage.water,
    applications: ["Đô thị", "Tòa nhà", "Khu công nghiệp", "Khách sạn"],
  }),
  supplementalProduct({
    slug: "effluent-treatment-recycling-plants",
    title: "Nhà máy xử lý và tái chế nước thải công nghiệp",
    category: "Xử lý nước",
    description: "Hệ thống xử lý và tái chế nước thải công nghiệp để tuân thủ và tái sử dụng.",
    image: productImage.water,
    applications: ["Dệt nhuộm", "Hóa chất", "Thực phẩm", "Giấy"],
  }),
  supplementalProduct({
    slug: "minimum-liquid-discharge",
    title: "Giảm thiểu xả thải lỏng",
    category: "Xử lý nước",
    description: "Hệ thống thu hồi nước giúp giảm thiểu lượng xả thải lỏng trong vận hành công nghiệp.",
    image: productImage.water,
    applications: ["Dệt nhuộm", "Hóa chất", "Điện", "Thực phẩm"],
  }),
  supplementalProduct({
    slug: "zero-liquid-discharge-system",
    title: "Hệ thống không xả thải lỏng",
    category: "Xử lý nước",
    description: "Hệ thống tích hợp được thiết kế để loại bỏ hoàn toàn xả thải lỏng.",
    image: productImage.water,
    applications: ["Dệt nhuộm", "Hóa chất", "Điện", "Giấy"],
  }),
];

export const productDetailPages: DetailPage[] = [
  {
    slug: "air-pollution-control-systems",
    title: "Xử lý khí thải",
    eyebrow: "Sản phẩm công nghiệp",
    description: "Giải pháp kiểm soát bụi và khí ô nhiễm cho các ngành công nghiệp có yêu cầu phát thải nghiêm ngặt.",
    image: imageUrls.bannerPortfolio,
    mobileImage: imageUrls.bannerPortfolioMobile,
    category: "Xử lý khí thải",
    overview: [
      "Thermax cung cấp danh mục xử lý khí thải gồm thiết bị lọc bụi tĩnh điện, túi lọc, combofilter, khử NOx, khử SOx và các hệ thống xử lý khí cho nhà máy công nghiệp.",
      "Các giải pháp được thiết kế để hỗ trợ tuân thủ quy định môi trường, giảm phát thải dạng hạt và khí, đồng thời duy trì hiệu suất vận hành ổn định.",
    ],
    highlights: ["Hơn 50 năm kinh nghiệm", "Tối ưu hiệu suất phát thải", "Hỗ trợ đánh giá, phụ tùng và nâng cấp vòng đời"],
    applications: ["Xi măng", "Kim loại và khai khoáng", "Phát điện", "Hóa chất", "Thực phẩm & đồ uống", "Giấy và bột giấy"],
  },
  {
    slug: "electrostatic-precipitator-esp",
    title: "Bộ lọc tĩnh điện",
    eyebrow: "Xử lý khí thải",
    description: "Thiết bị thu bụi tĩnh điện cho lưu lượng khí lớn và yêu cầu phát thải thấp.",
    image: productImage.air,
    category: "Xử lý khí thải",
    overview: [
      "Bộ lọc tĩnh điện của Thermax dùng trường điện để tách bụi mịn khỏi dòng khí thải, phù hợp với các dây chuyền có lưu lượng lớn và nhiệt độ vận hành cao.",
      "Hệ thống có thể được thiết kế mới hoặc cải tạo để cải thiện hiệu suất ESP hiện hữu mà không làm gián đoạn dài ngày hoạt động nhà máy.",
    ],
    highlights: ["Hiệu quả thu bụi cao", "Phù hợp retrofit và nâng cấp", "Tối ưu phân phối khí bằng thiết kế kỹ thuật"],
    applications: ["Xi măng", "Thép", "Phát điện", "Lò hơi công nghiệp"],
  },
  {
    slug: "bag-house-bag-filters",
    title: "Bộ lọc túi",
    eyebrow: "Xử lý khí thải",
    description: "Hệ thống túi lọc cho bụi khô, bụi mịn và các ứng dụng cần giới hạn phát thải ổn định.",
    image: productImage.air,
    category: "Xử lý khí thải",
    overview: [
      "Bộ lọc túi Thermax dùng vật liệu lọc chuyên dụng để giữ bụi trên bề mặt túi, kết hợp cơ chế rũ bụi tự động giúp hệ thống vận hành liên tục.",
      "Giải pháp phù hợp cho nhà máy xi măng, luyện kim, thực phẩm, hóa chất và các quy trình cần kiểm soát bụi ở mức thấp.",
    ],
    highlights: ["Phát thải ổn định", "Dễ bảo trì và thay thế vật tư", "Tùy biến theo tải bụi và điều kiện khí"],
    applications: ["Xi măng", "Hóa chất", "Thực phẩm", "Gỗ", "Khoáng sản"],
  },
  {
    slug: "combofilter",
    title: "Combofilter",
    eyebrow: "Xử lý khí thải",
    description: "Giải pháp kết hợp ưu điểm của ESP và bag filter để nâng hiệu suất xử lý bụi.",
    image: productImage.air,
    category: "Xử lý khí thải",
    overview: [
      "Combofilter là cấu hình lai giúp xử lý bụi hiệu quả trong các ứng dụng mà một công nghệ đơn lẻ khó đạt đồng thời yêu cầu về phát thải, áp suất và không gian lắp đặt.",
      "Giải pháp này thường được cân nhắc cho các dự án cải tạo, mở rộng hoặc dây chuyền có điều kiện vận hành biến động.",
    ],
    highlights: ["Tận dụng ưu điểm công nghệ lai", "Hữu ích cho retrofit", "Giảm phát thải với diện tích lắp đặt tối ưu"],
    applications: ["Xi măng", "Khoáng sản", "Phát điện", "Lò công nghiệp"],
  },
  {
    slug: "nox-control",
    title: "Khử NOx",
    eyebrow: "Xử lý khí thải",
    description: "Giải pháp giảm phát thải NOx cho lò hơi, lò nung và các quy trình đốt nhiên liệu.",
    image: productImage.air,
    category: "Xử lý khí thải",
    overview: [
      "Các giải pháp khử NOx của Thermax được thiết kế quanh điều kiện cháy, nhiên liệu và yêu cầu phát thải của từng nhà máy.",
      "Tùy ứng dụng, hệ thống có thể kết hợp kiểm soát quá trình đốt, phun tác nhân phản ứng và tối ưu vận hành để đạt hiệu quả giảm NOx bền vững.",
    ],
    highlights: ["Thiết kế theo điều kiện nhiên liệu", "Hỗ trợ tuân thủ tiêu chuẩn phát thải", "Tối ưu hiệu suất vận hành"],
    applications: ["Phát điện", "Xi măng", "Lò hơi", "Lò gia nhiệt"],
  },
  {
    slug: "sox-control",
    title: "Khử SOx",
    eyebrow: "Xử lý khí thải",
    description: "Hệ thống giảm SOx và khí axit trong dòng khí thải công nghiệp.",
    image: productImage.air,
    category: "Xử lý khí thải",
    overview: [
      "Giải pháp khử SOx của Thermax hướng tới việc kiểm soát khí axit phát sinh từ nhiên liệu hoặc nguyên liệu có hàm lượng lưu huỳnh.",
      "Hệ thống được cấu hình theo tải khí, nồng độ ô nhiễm, yêu cầu xả thải và không gian lắp đặt của từng dự án.",
    ],
    highlights: ["Giảm khí axit", "Tùy biến theo tải ô nhiễm", "Phù hợp dự án mới và cải tạo"],
    applications: ["Phát điện", "Xi măng", "Luyện kim", "Hóa chất"],
  },
  {
    slug: "process-heat-solutions",
    title: "Hệ thống gia nhiệt",
    eyebrow: "Sản phẩm công nghiệp",
    description: "Danh mục gia nhiệt linh hoạt nhiên liệu, hiệu quả và bền vững cho nhiều ngành sản xuất.",
    image: imageUrls.bannerPortfolio,
    mobileImage: imageUrls.bannerPortfolioMobile,
    category: "Hệ thống gia nhiệt",
    overview: [
      "Thermax cung cấp các giải pháp gia nhiệt quy trình gồm lò hơi, lò dầu tải nhiệt, hệ thống gia nhiệt không khí nóng, nước nóng, nhà máy năng lượng và các cấu hình gia nhiệt điện.",
      "Danh mục này tập trung vào hiệu suất truyền nhiệt, độ tin cậy, tính linh hoạt nhiên liệu và giảm tác động môi trường.",
    ],
    highlights: ["Linh hoạt nhiên liệu", "Hiệu suất nhiệt cao", "Thiết kế theo nhu cầu công suất và áp suất"],
    applications: ["Dược phẩm", "Thực phẩm & đồ uống", "Dệt may", "Hóa chất", "Giấy", "Cao su"],
  },
  {
    slug: "steam-boilers",
    title: "Lò hơi",
    eyebrow: "Hệ thống gia nhiệt",
    description: "Dải lò hơi công nghiệp cho hơi bão hòa, hơi quá nhiệt và nhiều loại nhiên liệu.",
    image: productImage.heat,
    category: "Hệ thống gia nhiệt",
    overview: [
      "Danh mục lò hơi Thermax bao phủ nhiều mức công suất, từ lò hơi đóng gói quy mô nhỏ đến hệ thống công nghiệp tạo hàng tấn hơi mỗi giờ.",
      "Các lò hơi hỗ trợ nhiên liệu sinh khối, rắn, lỏng, khí và các nguồn nhiệt thải, kết hợp thiết kế truyền nhiệt hiệu quả và điều khiển vận hành ổn định.",
    ],
    highlights: ["Dải công suất rộng", "Hỗ trợ nhiều loại nhiên liệu", "Thiết kế cho hiệu suất và độ tin cậy"],
    applications: ["Dược phẩm", "Thực phẩm", "Dệt may", "Giấy", "Hóa chất"],
  },
  {
    slug: "thermal-oil-heaters",
    title: "Lò dầu tải nhiệt",
    eyebrow: "Hệ thống gia nhiệt",
    description: "Gia nhiệt bằng dầu truyền nhiệt cho quy trình cần nhiệt độ cao và áp suất vận hành thấp.",
    image: productImage.heat,
    category: "Hệ thống gia nhiệt",
    overview: [
      "Lò dầu tải nhiệt được dùng khi quy trình cần nhiệt độ ổn định cao mà không cần áp suất hơi lớn.",
      "Thermax thiết kế hệ thống theo tải nhiệt, loại dầu, nhiên liệu và yêu cầu an toàn vận hành của từng nhà máy.",
    ],
    highlights: ["Nhiệt độ cao với áp suất thấp", "Vận hành ổn định", "Phù hợp nhiều quy trình công nghiệp"],
    applications: ["Hóa chất", "Dệt nhuộm", "Gỗ", "Nhựa", "Thực phẩm"],
  },
  {
    slug: "hot-air-generators",
    title: "Gia nhiệt không khí nóng",
    eyebrow: "Hệ thống gia nhiệt",
    description: "Máy tạo khí nóng cho sấy, xử lý nhiệt và các ứng dụng cần dòng khí nhiệt ổn định.",
    image: productImage.heat,
    category: "Hệ thống gia nhiệt",
    overview: [
      "Hệ thống gia nhiệt không khí nóng cung cấp nguồn khí nhiệt ổn định cho sấy sản phẩm, xử lý vật liệu và nhiều quy trình nhiệt công nghiệp.",
      "Giải pháp được cấu hình theo lưu lượng, nhiệt độ, nhiên liệu và yêu cầu kiểm soát của dây chuyền.",
    ],
    highlights: ["Kiểm soát nhiệt độ ổn định", "Thiết kế theo lưu lượng khí", "Dễ tích hợp vào dây chuyền hiện hữu"],
    applications: ["Sấy nông sản", "Dệt may", "Sơn phủ", "Gỗ", "Thực phẩm"],
  },
  {
    slug: "hot-water-generators",
    title: "Gia nhiệt nước nóng",
    eyebrow: "Hệ thống gia nhiệt",
    description: "Hệ thống nước nóng cho quy trình công nghiệp, vệ sinh và tiện ích nhà máy.",
    image: productImage.heat,
    category: "Hệ thống gia nhiệt",
    overview: [
      "Máy tạo nước nóng Thermax đáp ứng nhu cầu nước nóng liên tục cho sản xuất, vệ sinh công nghiệp và hệ thống tiện ích.",
      "Thiết kế chú trọng hiệu suất truyền nhiệt, điều khiển an toàn và độ bền trong môi trường vận hành liên tục.",
    ],
    highlights: ["Cấp nước nóng ổn định", "Vận hành an toàn", "Tối ưu tiêu thụ nhiên liệu"],
    applications: ["Thực phẩm & đồ uống", "Khách sạn", "Dệt may", "Dược phẩm", "Tiện ích nhà máy"],
  },
  {
    slug: "steam-engineering-solutions",
    title: "Hệ thống đường ống hơi",
    eyebrow: "Sản phẩm công nghiệp",
    description: "Giải pháp tối ưu tạo hơi, phân phối hơi, sử dụng hơi và thu hồi nước ngưng.",
    image: imageUrls.bannerPortfolio,
    mobileImage: imageUrls.bannerPortfolioMobile,
    category: "Hệ thống đường ống hơi",
    overview: [
      "Mảng Steam Engineering của Thermax tập trung vào hiệu quả hệ thống hơi từ phòng lò hơi đến điểm sử dụng và thu hồi nước ngưng.",
      "Danh mục gồm phụ kiện nhà lò hơi, đo lường, phân phối hơi, quản lý nước ngưng và tư vấn tối ưu hệ thống tiện ích.",
    ],
    highlights: ["Đo lường và kiểm soát chính xác", "Giảm thất thoát năng lượng", "Tăng an toàn hệ thống hơi"],
    applications: ["Dược phẩm", "Thực phẩm", "Dệt may", "Hóa chất", "Bệnh viện", "Tiện ích"],
  },
  {
    slug: "boiler-house-products",
    title: "Phụ kiện nhà lò hơi",
    eyebrow: "Hệ thống đường ống hơi",
    description: "Thiết bị đo lường, giám sát và tự động hóa cho phòng lò hơi.",
    image: productImage.steam,
    category: "Hệ thống đường ống hơi",
    overview: [
      "Boiler House Products của Thermax hỗ trợ đo lưu lượng hơi và nước, kiểm soát xả đáy, chỉ báo mức và giám sát chất lượng hơi.",
      "Các thiết bị này giúp tăng độ an toàn, tiết kiệm năng lượng và cung cấp dữ liệu vận hành tin cậy cho phòng lò hơi.",
    ],
    highlights: ["Đo hơi và nước chính xác", "Tự động hóa xả đáy", "Cải thiện an toàn và hiệu suất"],
    applications: ["Nhà lò hơi", "Dược phẩm", "Thực phẩm", "Dệt may", "Hóa chất"],
  },
  {
    slug: "steam-distribution",
    title: "Hệ thống phân phối hơi",
    eyebrow: "Hệ thống đường ống hơi",
    description: "Thiết kế và tối ưu đường ống phân phối hơi đến các điểm sử dụng.",
    image: productImage.steam,
    category: "Hệ thống đường ống hơi",
    overview: [
      "Hệ thống phân phối hơi tốt giúp duy trì áp suất, chất lượng hơi và giảm tổn thất nhiệt trên toàn mạng lưới.",
      "Thermax hỗ trợ lựa chọn bẫy hơi, van, thiết bị tách nước và cấu hình đường ống phù hợp với từng tải sử dụng.",
    ],
    highlights: ["Giảm tổn thất hơi", "Ổn định áp suất", "Nâng chất lượng hơi tại điểm dùng"],
    applications: ["Tiện ích nhà máy", "Dệt may", "Thực phẩm", "Dược phẩm", "Hóa chất"],
  },
  {
    slug: "condensate-system-management",
    title: "Hệ thống thu hồi nước ngưng",
    eyebrow: "Hệ thống đường ống hơi",
    description: "Thu hồi nước ngưng để tiết kiệm năng lượng, nước cấp và hóa chất xử lý.",
    image: productImage.steam,
    category: "Hệ thống đường ống hơi",
    overview: [
      "Quản lý nước ngưng giúp tận dụng lại nhiệt, giảm tải cho hệ thống nước cấp và cải thiện hiệu quả tổng thể của vòng hơi.",
      "Thermax cung cấp thiết bị và tư vấn để thu hồi nước ngưng an toàn, ổn định và phù hợp với điều kiện vận hành thực tế.",
    ],
    highlights: ["Giảm tiêu hao nhiên liệu", "Tiết kiệm nước cấp", "Ổn định vòng hơi - nước ngưng"],
    applications: ["Lò hơi", "Dệt may", "Thực phẩm", "Hóa chất", "Dược phẩm"],
  },
  {
    slug: "hot-water-heating-systems",
    title: "Hệ thống gia nhiệt nước nóng",
    eyebrow: "Hệ thống đường ống hơi",
    description: "Giải pháp chuyển đổi và phân phối nước nóng cho quy trình và tiện ích.",
    image: productImage.steam,
    category: "Hệ thống đường ống hơi",
    overview: [
      "Hệ thống gia nhiệt nước nóng được thiết kế để cung cấp nhiệt ổn định cho quy trình sản xuất hoặc tiện ích tòa nhà.",
      "Giải pháp tập trung vào kiểm soát nhiệt độ, an toàn, hiệu suất trao đổi nhiệt và khả năng tích hợp với hệ thống hơi hiện có.",
    ],
    highlights: ["Gia nhiệt gián tiếp an toàn", "Kiểm soát nhiệt độ tốt", "Phù hợp cải tạo hệ thống hơi"],
    applications: ["Tiện ích", "Thực phẩm", "Dược phẩm", "Khách sạn", "Tòa nhà"],
  },
  {
    slug: "cooling-and-heating-solutions",
    title: "Hệ thống lạnh",
    eyebrow: "Sản phẩm công nghiệp",
    description: "Giải pháp làm lạnh, gia nhiệt và thu hồi nhiệt cho công nghiệp và thương mại.",
    image: imageUrls.bannerPortfolio,
    mobileImage: imageUrls.bannerPortfolioMobile,
    category: "Hệ thống lạnh",
    overview: [
      "Thermax cung cấp chiller hấp thụ, heat pump hấp thụ, heat pump điện, tháp giải nhiệt, giải nhiệt khô và các giải pháp lai cho nhu cầu nhiệt - lạnh.",
      "Danh mục này giúp tận dụng nhiệt thải, giảm điện năng tiêu thụ và hỗ trợ mục tiêu giảm phát thải trong vận hành.",
    ],
    highlights: ["Tận dụng nhiệt thải", "Giảm chi phí vận hành", "Hỗ trợ vòng đời từ thiết kế đến bảo trì"],
    applications: ["Tòa nhà thương mại", "Dược phẩm", "Thực phẩm", "Dữ liệu", "Dệt may", "Hóa chất"],
  },
  {
    slug: "absorption-chillers",
    title: "Chiller hấp thụ",
    eyebrow: "Hệ thống lạnh",
    description: "Chiller dùng năng lượng nhiệt để tạo lạnh hiệu quả và thân thiện môi trường.",
    image: productImage.cooling,
    category: "Hệ thống lạnh",
    overview: [
      "Chiller hấp thụ sử dụng nguồn nhiệt như hơi, nước nóng hoặc nhiệt thải để tạo lạnh, phù hợp khi nhà máy có nguồn nhiệt sẵn có.",
      "Giải pháp giúp giảm phụ thuộc vào điện năng cho làm lạnh và hỗ trợ vận hành bền vững trong các ứng dụng công nghiệp, thương mại.",
    ],
    highlights: ["Dùng nguồn nhiệt thay cho điện nén", "Phù hợp tận dụng nhiệt thải", "Làm lạnh ổn định cho tải lớn"],
    applications: ["Dược phẩm", "Tòa nhà", "Thực phẩm", "Hóa chất", "Dữ liệu"],
  },
  {
    slug: "absorption-heat-pumps",
    title: "Heat Pump hấp thụ",
    eyebrow: "Hệ thống lạnh",
    description: "Heat pump hấp thụ giúp nâng cấp và tái sử dụng nguồn nhiệt trong hệ thống công nghiệp.",
    image: productImage.cooling,
    category: "Hệ thống lạnh",
    overview: [
      "Heat pump hấp thụ truyền và nâng cấp năng lượng nhiệt để phục vụ gia nhiệt hoặc làm lạnh hiệu quả hơn.",
      "Giải pháp phù hợp cho các nhà máy muốn tái sử dụng nhiệt thải và giảm năng lượng sơ cấp.",
    ],
    highlights: ["Tái sử dụng nhiệt thải", "Tăng hiệu quả năng lượng", "Hỗ trợ giảm phát thải"],
    applications: ["Hóa chất", "Dệt may", "Thực phẩm", "Dược phẩm", "Tiện ích"],
  },
  {
    slug: "electric-heat-pumps",
    title: "Heat Pump điện",
    eyebrow: "Hệ thống lạnh",
    description: "Gia nhiệt điện hiệu suất cao cho lộ trình điện hóa và giảm phát thải.",
    image: productImage.cooling,
    category: "Hệ thống lạnh",
    overview: [
      "Heat pump điện cung cấp nhiệt hữu ích với hiệu suất cao hơn gia nhiệt điện trở truyền thống, phù hợp xu hướng điện hóa nhiệt quy trình.",
      "Hệ thống có thể hỗ trợ nước nóng, gia nhiệt quy trình và các nhu cầu nhiệt thấp đến trung bình trong nhà máy.",
    ],
    highlights: ["Điện hóa nguồn nhiệt", "Hiệu suất cao", "Dễ tích hợp với năng lượng tái tạo"],
    applications: ["Dệt may", "Thực phẩm", "Dược phẩm", "Tòa nhà", "Tiện ích"],
  },
  {
    slug: "closed-circuit-cooling-towers",
    title: "Tháp giải nhiệt dạng kín",
    eyebrow: "Hệ thống lạnh",
    description: "Giải nhiệt vòng kín giúp bảo vệ chất lượng nước/quy trình và giảm rủi ro bám bẩn.",
    image: productImage.cooling,
    category: "Hệ thống lạnh",
    overview: [
      "Tháp giải nhiệt dạng kín tách vòng nước quy trình khỏi môi trường bên ngoài, hỗ trợ giảm nhiễm bẩn và cáu cặn.",
      "Giải pháp phù hợp cho các hệ thống trao đổi nhiệt cần độ tin cậy cao và chất lượng nước ổn định.",
    ],
    highlights: ["Bảo vệ vòng nước quy trình", "Giảm cáu cặn", "Tăng độ tin cậy trao đổi nhiệt"],
    applications: ["Dữ liệu", "Dược phẩm", "Nhựa", "Thép", "Điều hòa trung tâm"],
  },
  {
    slug: "air-cooled-heat-exchangers",
    title: "Bộ giải nhiệt bằng không khí",
    eyebrow: "Hệ thống lạnh",
    description: "Giải nhiệt khô bằng không khí cho khu vực hạn chế nước hoặc yêu cầu bảo trì thấp.",
    image: productImage.cooling,
    category: "Hệ thống lạnh",
    overview: [
      "Bộ giải nhiệt bằng không khí thải nhiệt trực tiếp ra môi trường không khí, giúp giảm sử dụng nước làm mát.",
      "Giải pháp phù hợp cho vùng khan hiếm nước và các ứng dụng cần hệ thống giải nhiệt đơn giản, bền và ít phụ thuộc nguồn nước.",
    ],
    highlights: ["Không dùng nước bay hơi", "Phù hợp vùng khan hiếm nước", "Bảo trì gọn"],
    applications: ["Dầu khí", "Hóa chất", "Phát điện", "Dữ liệu", "Tiện ích"],
  },
  {
    slug: "water-and-waste-solutions",
    title: "Xử lý nước",
    eyebrow: "Sản phẩm công nghiệp",
    description: "Giải pháp nước và nước thải giúp thu hồi, tái sử dụng và tuân thủ môi trường.",
    image: imageUrls.bannerPortfolio,
    mobileImage: imageUrls.bannerPortfolioMobile,
    category: "Xử lý nước",
    overview: [
      "Thermax cung cấp giải pháp tổng thể cho xử lý nước cấp, nước thải, tái chế, zero liquid discharge và vận hành bảo trì nhà máy nước.",
      "Danh mục hướng tới kinh tế tuần hoàn nước, tăng tỷ lệ thu hồi và giảm phụ thuộc vào nguồn nước mới.",
    ],
    highlights: ["Hơn 30.000 lắp đặt", "Tái sử dụng và thu hồi nước", "Hỗ trợ vận hành số và nâng cấp nhà máy"],
    applications: ["Dệt may", "Giấy", "Kim loại", "Dược phẩm", "Thực phẩm", "Đô thị"],
  },
  {
    slug: "water-treatment-solutions",
    title: "Xử lý nước cấp",
    eyebrow: "Xử lý nước",
    description: "Hệ thống xử lý nước cấp cho lò hơi, quy trình và tiện ích nhà máy.",
    image: productImage.water,
    category: "Xử lý nước",
    overview: [
      "Giải pháp xử lý nước cấp của Thermax được cấu hình theo chất lượng nước thô, yêu cầu quy trình và tiêu chuẩn vận hành của từng nhà máy.",
      "Hệ thống có thể kết hợp lọc, làm mềm, khử khoáng, RO và các công nghệ xử lý chuyên biệt để tạo nguồn nước ổn định.",
    ],
    highlights: ["Nước cấp ổn định", "Bảo vệ thiết bị", "Thiết kế theo chất lượng nước đầu vào"],
    applications: ["Lò hơi", "Thực phẩm", "Dược phẩm", "Hóa chất", "Điện"],
  },
  {
    slug: "wastewater-recovery",
    title: "Thu hồi nước thải",
    eyebrow: "Xử lý nước",
    description: "Tái chế nước thải và tối đa hóa thu hồi nước cho vận hành bền vững.",
    image: productImage.water,
    category: "Xử lý nước",
    overview: [
      "Giải pháp thu hồi nước thải giúp xử lý các dòng thải phức tạp và tái sử dụng nước trong sản xuất hoặc tiện ích.",
      "Thermax kết hợp xử lý hóa lý, sinh học, màng lọc, oxy hóa nâng cao và các cấu hình MLD/ZLD tùy mục tiêu thu hồi.",
    ],
    highlights: ["Giảm nước thải xả bỏ", "Tăng tái sử dụng nước", "Hỗ trợ tuân thủ môi trường"],
    applications: ["Dệt nhuộm", "Thực phẩm", "Giấy", "Hóa chất", "Đô thị"],
  },
  {
    slug: "boiler-water-treatment-chemicals",
    title: "Hóa chất xử lý lò hơi",
    eyebrow: "Hóa chất",
    description: "Hóa chất xử lý nước lò hơi giúp kiểm soát cáu cặn, ăn mòn và chất lượng hơi.",
    image: productImage.chemicals,
    category: "Hóa chất",
    overview: [
      "Thermax cung cấp hóa chất và giải pháp xử lý nước lò hơi nhằm bảo vệ bề mặt truyền nhiệt, kiểm soát ăn mòn và duy trì hiệu suất tạo hơi.",
      "Chương trình xử lý được lựa chọn theo áp suất lò, chất lượng nước cấp, tải vận hành và mục tiêu tiết kiệm năng lượng.",
    ],
    highlights: ["Kiểm soát cáu cặn", "Giảm ăn mòn", "Ổn định chất lượng hơi"],
    applications: ["Lò hơi công nghiệp", "Dược phẩm", "Thực phẩm", "Dệt may", "Hóa chất"],
  },
  {
    slug: "water-treatment",
    title: "Hóa chất xử lý nước",
    eyebrow: "Hóa chất",
    description: "Chương trình hóa chất xử lý nước cho lò hơi, nước làm mát, nước quy trình và nước thải.",
    image: productImage.chemicals,
    category: "Hóa chất",
    overview: [
      "Danh mục hóa chất xử lý nước của Thermax hỗ trợ kiểm soát cáu cặn, ăn mòn, lắng bùn và vi sinh trong các hệ nước công nghiệp.",
      "Giải pháp được lựa chọn theo chất lượng nước, điều kiện vận hành và mục tiêu hiệu suất của từng hệ thống để bảo vệ thiết bị và giảm chi phí vòng đời.",
    ],
    highlights: ["Bảo vệ thiết bị nước và nhiệt", "Tối ưu chương trình hóa chất", "Hỗ trợ vận hành ổn định"],
    applications: ["Lò hơi", "Tháp giải nhiệt", "Nước quy trình", "Nước thải", "Tiện ích nhà máy"],
  },
  {
    slug: "cooling-water-treatment-chemicals",
    title: "Hóa chất xử lý nước làm mát",
    eyebrow: "Hóa chất",
    description: "Hóa chất cho hệ thống nước làm mát nhằm giảm cáu cặn, ăn mòn và vi sinh.",
    image: productImage.chemicals,
    category: "Hóa chất",
    overview: [
      "Chương trình hóa chất nước làm mát của Thermax hỗ trợ kiểm soát cáu cặn, ăn mòn, bùn lắng và vi sinh trong tháp giải nhiệt và vòng tuần hoàn.",
      "Giải pháp giúp duy trì hiệu suất trao đổi nhiệt, giảm rủi ro dừng máy và kéo dài tuổi thọ thiết bị.",
    ],
    highlights: ["Kiểm soát cáu cặn và ăn mòn", "Giữ hiệu suất trao đổi nhiệt", "Giảm rủi ro vi sinh"],
    applications: ["Tháp giải nhiệt", "Chiller", "Hóa chất", "Dữ liệu", "Dược phẩm"],
  },
  {
    slug: "ion-exchange-resins",
    title: "Hạt nhựa trao đổi Ion",
    eyebrow: "Hóa chất",
    description: "Nhựa trao đổi ion Tulsion cho khử khoáng, làm mềm, tinh sạch và phân tách.",
    image: productImage.chemicals,
    category: "Hóa chất",
    overview: [
      "Thermax được biết đến với dòng nhựa trao đổi ion Tulsion dùng cho xử lý nước, tinh sạch quy trình và các ứng dụng phân tách trong công nghiệp.",
      "Các loại nhựa được lựa chọn theo yêu cầu khử khoáng, làm mềm, đánh bóng nước ngưng hoặc xử lý dòng đặc thù.",
    ],
    highlights: ["Dải nhựa trao đổi ion rộng", "Ứng dụng nước và quy trình", "Hỗ trợ vận hành hệ khử khoáng"],
    applications: ["Nước cấp", "Dược phẩm", "Điện", "Thực phẩm", "Hóa chất"],
  },
  {
    slug: "protective-coatings",
    title: "Sơn phủ bảo vệ",
    eyebrow: "Hóa chất",
    description: "Sơn phủ bảo vệ và hệ chống thấm cho kết cấu công nghiệp, nhà máy và hạ tầng.",
    image: productImage.chemicals,
    category: "Hóa chất",
    overview: [
      "Thermax cung cấp các giải pháp sơn phủ bảo vệ, chống thấm và bảo vệ bề mặt cho môi trường công nghiệp có yêu cầu độ bền cao.",
      "Danh mục được ứng dụng để giảm ăn mòn, bảo vệ bê tông/thép và kéo dài tuổi thọ tài sản trong nhà máy, công trình và hạ tầng.",
    ],
    highlights: ["Bảo vệ chống ăn mòn", "Chống thấm và bảo vệ bề mặt", "Phù hợp sửa chữa - bảo trì công trình"],
    applications: ["Nhà máy công nghiệp", "Kết cấu thép", "Bê tông", "Hạ tầng", "Khu xử lý nước"],
  },
  {
    slug: "admixtures-and-sealants",
    title: "Phụ gia và chất trám",
    eyebrow: "Hóa chất",
    description: "Phụ gia bê tông, vữa rót, neo cấy, keo trám và vật liệu sửa chữa cho xây dựng công nghiệp.",
    image: productImage.chemicals,
    category: "Hóa chất",
    overview: [
      "Các giải pháp phụ gia và chất trám của Thermax hỗ trợ nâng hiệu suất bê tông, sửa chữa kết cấu và hoàn thiện các hạng mục công nghiệp.",
      "Danh mục bao gồm phụ gia, vữa rót, neo cấy, vật liệu phục hồi, keo trám và keo dán cho nhu cầu thi công mới và bảo trì.",
    ],
    highlights: ["Tăng hiệu suất vật liệu", "Hỗ trợ sửa chữa và phục hồi", "Dải ứng dụng xây dựng công nghiệp"],
    applications: ["Bê tông", "Nền công nghiệp", "Sửa chữa kết cấu", "Chống thấm", "Liên kết và trám khe"],
  },
  ...supplementalProductDetailPages,
];

export const serviceDetailPages: DetailPage[] = [
  {
    slug: "boiler-maintenance-services",
    title: "Dịch vụ bảo trì lò hơi",
    eyebrow: "Dịch vụ",
    description: "Hỗ trợ vòng đời lò hơi từ kiểm tra, phụ tùng, cải tạo đến tối ưu vận hành.",
    image: productImage.service,
    category: "Dịch vụ",
    overview: [
      "Dịch vụ bảo trì lò hơi của Thermax tập trung vào độ tin cậy, an toàn và hiệu suất dài hạn của hệ thống hơi.",
      "Đội ngũ kỹ thuật hỗ trợ kiểm tra tình trạng, xử lý sự cố, phụ tùng, cải tạo đốt nhiên liệu, nâng cấp điều khiển và tối ưu vận hành.",
    ],
    highlights: ["Kiểm tra sức khỏe thiết bị", "Phụ tùng và sửa chữa", "Tối ưu hiệu suất và an toàn"],
    applications: ["Lò hơi", "Nhà máy hơi", "Dược phẩm", "Thực phẩm", "Dệt may"],
  },
  {
    slug: "absorption-chiller-maintenance-services",
    title: "Dịch vụ bảo trì Chiller hấp thụ",
    eyebrow: "Dịch vụ",
    description: "Dịch vụ lắp đặt, chạy thử, bảo trì và tối ưu chiller hấp thụ, heat pump hấp thụ.",
    image: productImage.cooling,
    category: "Dịch vụ",
    overview: [
      "Thermax Cooling and Heating Solutions cung cấp hỗ trợ kỹ thuật cho chiller hấp thụ và heat pump từ lắp đặt, chạy thử đến bảo trì vòng đời.",
      "Dịch vụ bao gồm kiểm tra tình trạng, tối ưu vận hành, nâng cấp, retrofit và hỗ trợ phụ tùng để giảm dừng máy.",
    ],
    highlights: ["Hỗ trợ lắp đặt và chạy thử", "Bảo trì vòng đời", "Tối ưu hiệu suất và độ tin cậy"],
    applications: ["Chiller hấp thụ", "Heat pump", "Tòa nhà", "Dược phẩm", "Dữ liệu"],
  },
  {
    slug: "air-pollution-control-system-maintenance-services",
    title: "Dịch vụ bảo trì hệ thống xử lý khí thải",
    eyebrow: "Dịch vụ",
    description: "Bảo trì, đánh giá và tối ưu ESP, bag filter và thiết bị xử lý khí thải.",
    image: productImage.air,
    category: "Dịch vụ",
    overview: [
      "Thermax hỗ trợ thiết bị xử lý khí thải trong suốt vòng đời, bao gồm phụ tùng, đánh giá tình trạng, xử lý sự cố và kiểm toán hiệu suất.",
      "Dịch vụ cũng bao gồm tư vấn thiết kế phân phối khí, tối ưu vận hành và cải tạo để đáp ứng tiêu chuẩn phát thải mới.",
    ],
    highlights: ["Phụ tùng cho thiết bị APC", "Health check và troubleshooting", "Kiểm toán hiệu suất và tối ưu khí động"],
    applications: ["ESP", "Bag filter", "Combofilter", "Xi măng", "Thép", "Phát điện"],
  },
  {
    slug: "automatic-tube-cleaning-system-atcs",
    title: "Bộ đánh ống tự động cho Chiller (ATCS)",
    eyebrow: "Dịch vụ",
    description: "Giải pháp làm sạch ống tự động để duy trì hiệu suất trao đổi nhiệt của chiller.",
    image: productImage.cooling,
    category: "Dịch vụ",
    overview: [
      "ATCS giúp làm sạch ống trao đổi nhiệt trong quá trình vận hành, giảm bám bẩn và duy trì hiệu suất truyền nhiệt.",
      "Giải pháp phù hợp với các hệ chiller cần vận hành liên tục, giảm tiêu thụ năng lượng và giảm can thiệp thủ công.",
    ],
    highlights: ["Duy trì hiệu suất truyền nhiệt", "Giảm bám bẩn trong ống", "Hỗ trợ vận hành liên tục"],
    applications: ["Chiller hấp thụ", "Hệ HVAC", "Dữ liệu", "Tòa nhà", "Nhà máy công nghiệp"],
  },
];

export const allDetailPages = [...productDetailPages, ...serviceDetailPages];

export function getProductDetail(slug: string) {
  return productDetailPages.find((page) => page.slug === slug);
}

export function getServiceDetail(slug: string) {
  return serviceDetailPages.find((page) => page.slug === slug);
}

export function getLocalizedProductDetail(slug: string, locale: Locale) {
  const page = getProductDetail(slug);
  return page ? localizeDetail(page, locale) : undefined;
}

export function getLocalizedServiceDetail(slug: string, locale: Locale) {
  const page = getServiceDetail(slug);
  return page ? localizeDetail(page, locale) : undefined;
}
