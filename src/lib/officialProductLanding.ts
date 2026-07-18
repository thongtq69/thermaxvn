import type { Locale } from "./i18n";

export type LandingCard = {
  title: string;
  description?: string;
  image?: string;
  href?: string;
  badge?: string;
  items?: string[];
};

export type LandingStat = {
  value: string;
  label: string;
};

export type LandingChallenge = {
  number: string;
  title: string;
  description: string;
};

export type LandingResource = {
  title: string;
  type: string;
  href?: string;
};

export type OfficialProductLanding = {
  slug: string;
  title: string;
  heroDescription: string;
  image: string;
  mobileImage: string;
  intro: string;
  introHighlight?: string;
  overviewParagraphs?: string[];
  stats?: LandingStat[];
  challenges?: LandingChallenge[];
  productHeading: string;
  products: LandingCard[];
  serviceHeading?: string;
  serviceIntro?: string;
  services?: LandingCard[];
  featureHeading?: string;
  features?: LandingCard[];
  industries?: string[];
  caseStudies?: LandingCard[];
  resources?: LandingResource[];
};

const s3 = "https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public";

const productPages: Record<Locale, OfficialProductLanding[]> = {
  en: [
    {
      slug: "air-pollution-control-systems",
      title: "Air Pollution Control Systems",
      heroDescription: "Effective solutions for abatement of particulate and gaseous pollutants",
      image: `${s3}/2025-12/LP%20Banner%20Image_1800X700_2.jpg`,
      mobileImage: `${s3}/2025-09/apc-banner-mobile.jpg`,
      intro: "Thermax's Air Pollution Control business leads with the simple belief: while pollutants may be inevitable, pollution is not.",
      introHighlight: "while pollutants may be inevitable, pollution is not.",
      productHeading: "Our products",
      products: [
        {
          title: "Electrostatic Precipitator (ESP)",
          description: "Available in dry and wet types, with automatic DSP-based control and power optimisation for dependable particulate capture.",
          image: `${s3}/2025-09/ESP.jpg`,
          href: "/industrial-products/electrostatic-precipitator-esp",
        },
        {
          title: "Bag House / Bag Filters",
          image: `${s3}/2026-04/Bag%20HouseBag%20Filters.png`,
          href: "/industrial-products/bag-house-bag-filters",
        },
        {
          title: "Combofilter",
          image: `${s3}/2025-12/Combofilter.png`,
          href: "/industrial-products/combofilter",
        },
        {
          title: "Scrubber",
          image: `${s3}/2025-11/APC-Scrubber.jpg`,
          href: "/industrial-products/scrubber",
        },
        {
          title: "Thermax Ne0 - Gas Enrichment Solutions",
          image: `${s3}/2025-12/Thermax%20Ne0%20-%20Gas%20Enrichment%20Solutions.jpg`,
          href: "/industrial-products/thermax-neo-gas-enrichment-solutions",
        },
      ],
      serviceHeading: "Our services",
      serviceIntro: "Thermax offers comprehensive support across the product lifecycle that extends beyond brand boundaries.",
      services: [
        { title: "Spare parts management for all air pollution control equipment" },
        { title: "Conditional assessment, health check-up and troubleshooting" },
        { title: "Design engineering services, including efficient gas distribution" },
        { title: "Optimisation studies and performance audits" },
        { title: "Remote assistance and virtual technical support" },
        { title: "Annual maintenance and service contracts" },
        { title: "Overhauling and repairs" },
      ],
      featureHeading: "Featured capabilities",
      features: [
        {
          title: "Thermax Ne0",
          description: "Efficient, clean and green technologies for gas enrichment",
          image: `${s3}/2025-12/Thermax%20Ne0%20-%20Featured%20Capability_0.png`,
        },
        { title: "Thermax Filter Bag", image: `${s3}/2025-12/Thermax%20Filter%20Bag.png` },
        { title: "Opticor®", image: `${s3}/2025-12/Thermax%20Opticor.png` },
        { title: "Cartridge Filter", image: `${s3}/2026-01/Thermax%20Cartridge%20Filter_0.png` },
        { title: "Value-Added Services", image: `${s3}/2025-12/Value%20added%20services.png` },
      ],
    },
    {
      slug: "process-heat-solutions",
      title: "Process Heat Solutions",
      heroDescription: "Reliable, fuel-flexible, efficient, and sustainable heating solutions for every industry",
      image: `${s3}/2026-04/Process%20Heat%20Solutions%20Banner.png`,
      mobileImage: `${s3}/2026-04/Process%20Heat%20Solutions%20Banner%20mobile.png`,
      intro: "Thermax's Process Heat Solutions portfolio offers a wide range of energy-efficient, fuel-flexible, and environmentally conscious heating solutions tailored to diverse industry needs.",
      introHighlight: "energy-efficient, fuel-flexible, and environmentally conscious heating solutions",
      productHeading: "Product categories",
      products: [
        {
          title: "Steam Boilers",
          description: "Steam generation capacities of up to 50 TPH, available in solid fuel, biomass, oil, and gas variants.",
          image: `${s3}/2025-07/product1.png`,
          href: "/industrial-products/steam-boilers",
        },
        {
          title: "Thermal Oil Heaters",
          description: "Available up to 20 Mn kcal/hr for high-temperature indirect heating applications.",
          image: `${s3}/2026-03/Thermal%20Oil%20Heaters%20Listing.png`,
          href: "/industrial-products/thermal-oil-heaters",
        },
        {
          title: "Hot Air Generators",
          description: "Solid fuel-fired systems delivering hot air for industrial drying applications.",
          image: `${s3}/2026-03/Hot%20Air%20Generators%20listing.png`,
          href: "/industrial-products/hot-air-generators",
        },
        {
          title: "Hot Water Generators",
          description: "Direct and indirect heating designs for commercial and industrial requirements.",
          image: `${s3}/2025-07/product4.png`,
          href: "/industrial-products/hot-water-generators",
        },
        {
          title: "Energy Plant",
          description: "Integrated steam, thermic fluid, and hot gas systems with capacities up to 100 MW.",
          image: `${s3}/2025-12/Energy%20Plant_tile%20image.jpg`,
          href: "/industrial-products/energy-plant",
        },
        {
          title: "Electric Process Heat Solutions",
          description: "Zero-emission electric boilers, thermal oil heaters, and hot water generators.",
          image: `${s3}/2025-12/510%20X%20650%20tile.jpg`,
          href: "/industrial-products/electric-process-heat-solutions",
        },
      ],
      serviceHeading: "Our services",
      serviceIntro: "Thermax offers comprehensive support across the product lifecycle.",
      services: [
        { title: "Installation and commissioning" },
        { title: "Annual maintenance contracts (AMC)" },
        { title: "Remote monitoring (IoT-enabled)" },
        { title: "Retrofit and revamp capabilities" },
        { title: "Training and operator skill development" },
        { title: "Genuine services and spares" },
      ],
      featureHeading: "Featured capabilities",
      features: [
        {
          title: "Biomass Centre of Excellence",
          description: "Helping industries adopt biomass-based heating with suitable technologies and operating support.",
          image: `${s3}/2025-07/feature-bg2.jpg`,
        },
        {
          title: "Straw-Fired Heating Solutions",
          image: `${s3}/2026-04/Untitled%20design%20%2838%29.png`,
        },
        {
          title: "Electric Heating Solutions",
          image: `${s3}/2026-04/Untitled%20design%20%2840%29.png`,
        },
      ],
    },
    {
      slug: "steam-engineering-solutions",
      title: "Steam Engineering Solutions",
      heroDescription: "Driving efficiency, compliance, and sustainability with advanced steam systems",
      image: `${s3}/2025-09/Untitled%20design%20%2884%29.png`,
      mobileImage: `${s3}/2025-09/steam_mobile_banner.jpg`,
      intro: "Thermax's Steam Engineering business group delivers cutting-edge solutions that optimise steam generation, distribution, utilisation and condensate recovery systems.",
      introHighlight: "cutting-edge solutions that optimise steam generation, distribution, utilisation and condensate recovery systems",
      productHeading: "Our products and solutions",
      products: [
        {
          title: "Boiler House Products",
          description: "Precise measurement, monitoring, and automation for steam and water systems.",
          image: `${s3}/2025-12/Boiler%20House%20Products.png`,
          href: "/industrial-products/boiler-house-products",
        },
        {
          title: "Steam Distribution",
          description: "An integrated portfolio that precisely controls flow, temperature, and pressure.",
          image: `${s3}/2025-12/steam%20distribution_tile_510%20X%20650.jpg`,
          href: "/industrial-products/steam-distribution",
        },
        {
          title: "Condensate System Management",
          description: "Maximising heat recovery, reducing water consumption, and improving boiler efficiency.",
          image: `${s3}/2025-12/Condensate%20System_tile_510%20X%20650.jpg`,
          href: "/industrial-products/condensate-system-management",
        },
        {
          title: "Process Automation",
          description: "Automation for steam-intensive processes to improve performance, quality, and energy savings.",
          image: `${s3}/2025-12/Process%20Automation_tile_510%20X%20650.jpg`,
          href: "/industrial-products/process-automation",
        },
        {
          title: "Customised Solutions",
          description: "On-demand hot water generation and efficient washdown systems with precise temperature control.",
          image: `${s3}/2025-12/Customised%20Solutions_510%20X%20650.jpg`,
          href: "/industrial-products/customised-solutions",
        },
      ],
      serviceHeading: "Our services",
      serviceIntro: "Choose the best with Thermax's Steam Engineering services.",
      services: [
        { title: "Utility piping consultancy" },
        { title: "Energy audits" },
        { title: "Turnkey installations" },
        { title: "Performance monitoring" },
      ],
      featureHeading: "Featured capabilities",
      features: [
        {
          title: "Instaheat 2.0 - Instantaneous Hot Water Generator",
          image: `${s3}/2026-03/Instaheat%202.0%20%E2%80%93%20Instantaneous%20Hot%20water%20generator_0.jpg`,
        },
        { title: "CPCRS", image: `${s3}/2026-03/2.jpg` },
        { title: "A2Zflo-S Steam Flow Meter", image: `${s3}/2026-03/3.jpg` },
        { title: "RealSteam", image: `${s3}/2026-03/4.jpg` },
        { title: "TACTS-Rx", image: `${s3}/2026-03/5.jpg` },
      ],
    },
    {
      slug: "cooling-and-heating-solutions",
      title: "Cooling and Heating Solutions",
      heroDescription: "Innovative thermal solutions that maximise energy efficiency, utilise waste heat, save water and support a sustainable future",
      image: `${s3}/2026-04/Cooling%20and%20Heating%20Solutions%20Banner%20updated.png`,
      mobileImage: `${s3}/2026-04/Cooling%20and%20Heating%20Solutions.png`,
      intro: "Thermax's Cooling and Heating Solutions deliver energy-efficient systems that use advanced energy recovery and transfer technologies to minimise environmental impact across industrial and commercial operations.",
      introHighlight: "advanced energy recovery and transfer technologies",
      productHeading: "Our products",
      products: [
        {
          title: "Absorption Chillers",
          description: "Thermally driven chillers for efficient and sustainable industrial and commercial cooling.",
          image: `${s3}/2026-03/Absorption%20Chillers%20Listing.png`,
          href: "/industrial-products/absorption-chillers",
        },
        {
          title: "Absorption Chiller-Heaters",
          description: "Dual-function cooling and heating using sustainable thermal energy sources.",
          image: `${s3}/2026-03/Absorption%20Chiller-Heaters%20Listing_0.png`,
          href: "/industrial-products/absorption-chiller-heaters",
        },
        {
          title: "Absorption Heat Pumps",
          description: "Energy-efficient heating and cooling by transferring thermal energy.",
          image: `${s3}/2026-03/Absorpption-heat-pump%20Listing.png`,
          href: "/industrial-products/absorption-heat-pumps",
        },
        {
          title: "Absorption Heat Transformer",
          description: "Upgrades low-temperature waste heat into usable medium-grade heat.",
          image: `${s3}/2026-04/Absorption%20Heat%20transformer.png`,
          href: "/industrial-products/absorption-heat-transformer",
        },
        {
          title: "Hybrid Chiller",
          description: "Combines vapour compression and vapour absorption technologies for flexible cooling.",
          image: `${s3}/2026-03/Hybrid%20chillers%20%20Listing.png`,
          href: "/industrial-products/hybrid-chiller",
        },
        {
          title: "Heating Solutions",
          description: "Electrical and hybrid heat pumps for efficient, adaptable process heating.",
          image: `${s3}/2026-02/banner-heating-solutions-proc.jpg`,
          href: "/industrial-products/heating-solutions",
          badge: "SustainX",
        },
        {
          title: "Wet Cooling Solutions",
          description: "Evaporation-based cooling towers and evaporative condensers.",
          image: `${s3}/2026-02/banner-wet-cooling-proc.jpg`,
          href: "/industrial-products/wet-cooling-solutions",
          badge: "SustainX",
        },
        {
          title: "Dry Cooling Solutions",
          description: "Water-free cooling through air-cooled heat exchangers and dry coolers.",
          image: `${s3}/2026-02/banner-dry-cooling-solution-proc_0.jpg`,
          href: "/industrial-products/dry-cooling-solutions",
          badge: "SustainX",
        },
        {
          title: "Refrigeration Solutions",
          description: "Reliable low-temperature cooling for demanding industrial processes.",
          image: `${s3}/2026-02/banner-refrigeration-unit-mainpg.jpg`,
          href: "/industrial-products/industrial-refrigeration-unit",
          badge: "SustainX",
        },
      ],
      serviceHeading: "Our services",
      serviceIntro: "Comprehensive lifecycle support.",
      services: [
        { title: "Timely installation, commissioning, and lifecycle support" },
        { title: "Value-added products, upgrades, retrofits, and engineered components" },
        { title: "Wide service network with global presence and local support" },
        { title: "Optimisation, health assessments, troubleshooting, and maintenance" },
        { title: "Real-time monitoring and controlling using digital solutions" },
        { title: "Customised solutions and process optimisation" },
      ],
    },
    {
      slug: "water-and-waste-solutions",
      title: "Water and Waste Solutions",
      heroDescription: "Delivering advanced water and wastewater management technologies, ensuring resource efficiency, regulatory compliance, and sustainable industrial operations",
      image: `${s3}/2025-08/water_waste_banner_0.jpg`,
      mobileImage: `${s3}/2025-08/water_waste_banner_mobile_0.jpg`,
      intro: "We offer integrated, digitally enabled water and wastewater solutions that recover, reuse, and rethink water, helping industries and urban areas thrive sustainably in a resource-constrained world and meet sustainability, efficiency, and compliance goals.",
      introHighlight: "recover, reuse, and rethink water",
      overviewParagraphs: [
        "With over 50 years of experience in providing innovative water and wastewater treatment solutions, we are committed to transforming the way industries manage water. From raw water treatment to sewage and effluent recycling, we deliver complete, digitally enabled solutions designed for performance, compliance, and sustainability.",
        "Thermax offers one-stop solutions for water and wastewater treatment, recycling, zero liquid discharge, and seawater desalination plants, along with standardised products, digitally enabled operations and maintenance, spares, audit support, and plant improvement services.",
      ],
      stats: [
        { value: "30,000", label: "Installations" },
        { value: "500 MLD", label: "Water treated" },
        { value: "130 MLD", label: "Water recycled" },
        { value: "70 MLD", label: "Wastewater treated" },
      ],
      challenges: [
        {
          number: "01",
          title: "Stringent environmental regulations",
          description: "We help ensure full compliance with local and global standards through advanced treatment systems and consistent performance monitoring.",
        },
        {
          number: "02",
          title: "Water scarcity & rising freshwater costs",
          description: "Our solutions maximise water recovery, reduce dependency on freshwater, and enable circular water use across industrial processes.",
        },
        {
          number: "03",
          title: "Treating complex industrial wastewater",
          description: "Robust, proven technologies are tailored for high TDS, COD, variable loads, and emerging contaminants, ensuring reliability under demanding conditions.",
        },
        {
          number: "04",
          title: "Ensuring operational stability & efficiency",
          description: "Digitally enabled operations and maintenance services provide remote monitoring, predictive insights, and round-the-clock support.",
        },
      ],
      productHeading: "Offerings",
      products: [
        {
          title: "Water Treatment Solutions",
          description: "Innovative, high-performance water solutions for efficient, sustainable resource optimisation.",
          href: "/industrial-products/water-treatment-solutions",
          items: ["Standard Product Range", "Industrial Project Range"],
        },
        {
          title: "Sewage Treatment and Recycling Plants",
          description: "Modular, energy-efficient plants that treat sewage and recover water for non-potable applications.",
          href: "/industrial-products/sewage-treatment-and-recycling-plants",
          items: ["Industrial Project Range", "Standard Product Range"],
        },
        {
          title: "Effluent Treatment & Recycling Plants",
          description: "Engineered systems for complex effluent streams with options for complete water recycling.",
          href: "/industrial-products/effluent-treatment-recycling-plants",
          items: ["Physico Chemical Treatment", "Oil Removing System", "Biological Treatment", "Advanced Oxidation", "Special Media Filter"],
        },
        {
          title: "Minimum Liquid Discharge",
          description: "High-efficiency MLD systems that maximise water recovery while significantly reducing liquid waste.",
          href: "/industrial-products/minimum-liquid-discharge",
          items: ["Advanced Reverse Osmosis (ARO)", "Electrodialysis Reversal (EDR)"],
        },
        {
          title: "Zero Liquid Discharge System",
          description: "Fully integrated ZLD packages for total elimination of liquid effluent discharge.",
          href: "/industrial-products/zero-liquid-discharge-system",
          items: ["VapoNovae+", "SteMNovas+", "Stripper", "ATFD"],
        },
      ],
      serviceHeading: "Our services",
      services: [
        {
          title: "Plant Upgrade & Improvement",
          description: "Engineered solutions to upgrade water and waste treatment plants by using existing and new units to meet current requirements with enhanced results.",
          image: `${s3}/2026-04/Plant%20Upgrade%20%26%20Improvement%20%282%29.png`,
        },
        {
          title: "Plant Management Services",
          description: "Operations and maintenance support backed by decades of experience in designing, installing, commissioning, and troubleshooting treatment systems.",
          image: `${s3}/2026-04/Plant%20Management%20Services.png`,
        },
        {
          title: "Spare Parts Management",
          description: "Genuine spares designed for Thermax equipment and systems to maintain performance, extend equipment life, and keep plants dependable.",
          image: `${s3}/2026-04/Spare%20Parts%20Management.png`,
        },
        {
          title: "Plant Audit & Evaluation",
          description: "Water audits assess usage, treatment performance, reuse opportunities, and long-term improvement strategies for industrial operations.",
          image: `${s3}/2026-04/Plant%20Audit%20%26%20Evaluation%20%282%29.png`,
        },
      ],
      featureHeading: "Featured capabilities",
      features: [
        {
          title: "Thermax Edge Live®",
          description: "Real-time monitoring, predictive analytics, and intelligent control for dynamic water treatment operations with varying loads and water quality.",
          image: `${s3}/2025-08/feature-bg1_0.jpg`,
          href: "https://edgelive.thermaxglobal.com/",
        },
        {
          title: "Sea-water Desalination",
          description: "Reliable water supply solutions built on experience across major desalination technologies and industrial water demands.",
          image: `${s3}/2026-04/Sea-water%20Desalination.png`,
        },
        {
          title: "Zero Liquid Discharge",
          description: "Advanced effluent treatment that recycles wastewater into reusable process water while converting salts into solid by-products.",
          image: `${s3}/2026-03/fc-zeroliquid-wastewatercapabilities_0.jpg`,
        },
        {
          title: "Urthh",
          description: "Urban, digitally enabled operations and maintenance solutions designed for modern water management challenges.",
          image: `${s3}/2026-03/FC-urthh-bg.jpg`,
        },
        {
          title: "Manufacturing Facility",
          description: "A state-of-the-art IGBC-compliant facility using automated production, robotic welding, solar power, and water-conscious processes.",
          image: `${s3}/2026-04/Manufacturing%20Facility%20%282%29.png`,
          href: "/company-overview/manufacturing-facilities",
        },
      ],
      industries: [
        "Automobile",
        "Cement",
        "Chemical",
        "Drugs and Pharmaceuticals",
        "Engineering & OEM",
        "Food & Beverage",
        "Infrastructure",
        "Metals",
        "Paper & Pulp",
        "Wood",
        "Power",
        "Refinery & Petrochemicals",
        "Tyres and Rubber",
        "Textile",
      ],
      caseStudies: [
        {
          title: "Thermax's ZLD technology enables glass manufacturer reduce freshwater consumption",
          description: "Water and Waste Solutions",
          image: `${s3}/2026-04/Tumbnail_23.jpg`,
          href: "https://www.thermaxglobal.com/case-study/thermaxs-zld-technology-enables-glass-manufacturer-reduce-freshwater-consumption",
        },
      ],
      resources: [
        { type: "Brochure", title: "Thermax Water & Wastewater Solutions Download" },
        { type: "Brochure", title: "Product Portfolio Download" },
      ],
    },
  ],
  vi: [],
};

const translations: Record<string, string> = {
  "Air Pollution Control Systems": "Xử lý khí thải",
  "Effective solutions for abatement of particulate and gaseous pollutants": "Giải pháp hiệu quả để kiểm soát bụi và khí ô nhiễm",
  "Thermax's Air Pollution Control business leads with the simple belief: while pollutants may be inevitable, pollution is not.": "Mảng xử lý khí thải của Thermax hoạt động với một niềm tin đơn giản: chất ô nhiễm có thể khó tránh khỏi, nhưng ô nhiễm thì có thể được kiểm soát.",
  "while pollutants may be inevitable, pollution is not.": "chất ô nhiễm có thể khó tránh khỏi, nhưng ô nhiễm thì có thể được kiểm soát.",
  "Our products": "Sản phẩm",
  "Our services": "Dịch vụ",
  "Featured capabilities": "Năng lực nổi bật",
  "Product categories": "Danh mục sản phẩm",
  "Our products and solutions": "Sản phẩm và giải pháp",
  Offerings: "Giải pháp",
  "Process Heat Solutions": "Hệ thống gia nhiệt",
  "Reliable, fuel-flexible, efficient, and sustainable heating solutions for every industry": "Giải pháp gia nhiệt tin cậy, linh hoạt nhiên liệu, hiệu quả và bền vững cho mọi ngành",
  "Thermax's Process Heat Solutions portfolio offers a wide range of energy-efficient, fuel-flexible, and environmentally conscious heating solutions tailored to diverse industry needs.": "Danh mục giải pháp gia nhiệt của Thermax cung cấp nhiều giải pháp tiết kiệm năng lượng, linh hoạt nhiên liệu và thân thiện môi trường, phù hợp với nhu cầu đa dạng của từng ngành.",
  "energy-efficient, fuel-flexible, and environmentally conscious heating solutions": "giải pháp tiết kiệm năng lượng, linh hoạt nhiên liệu và thân thiện môi trường",
  "Steam Engineering Solutions": "Hệ thống đường ống hơi",
  "Driving efficiency, compliance, and sustainability with advanced steam systems": "Nâng cao hiệu quả, tuân thủ và tính bền vững bằng hệ thống hơi tiên tiến",
  "Thermax's Steam Engineering business group delivers cutting-edge solutions that optimise steam generation, distribution, utilisation and condensate recovery systems.": "Mảng kỹ thuật hơi của Thermax cung cấp các giải pháp tiên tiến để tối ưu hệ thống tạo hơi, phân phối, sử dụng hơi và thu hồi nước ngưng.",
  "cutting-edge solutions that optimise steam generation, distribution, utilisation and condensate recovery systems": "các giải pháp tiên tiến để tối ưu hệ thống tạo hơi, phân phối, sử dụng hơi và thu hồi nước ngưng",
  "Cooling and Heating Solutions": "Hệ thống lạnh",
  "Innovative thermal solutions that maximise energy efficiency, utilise waste heat, save water and support a sustainable future": "Giải pháp nhiệt đổi mới giúp tối đa hiệu quả năng lượng, tận dụng nhiệt thải, tiết kiệm nước và hướng tới tương lai bền vững",
  "Thermax's Cooling and Heating Solutions deliver energy-efficient systems that use advanced energy recovery and transfer technologies to minimise environmental impact across industrial and commercial operations.": "Giải pháp làm mát và gia nhiệt của Thermax sử dụng công nghệ thu hồi và truyền năng lượng tiên tiến để giảm tác động môi trường trong vận hành công nghiệp và thương mại.",
  "advanced energy recovery and transfer technologies": "công nghệ thu hồi và truyền năng lượng tiên tiến",
  "Water and Waste Solutions": "Xử lý nước",
  "Delivering advanced water and wastewater management technologies, ensuring resource efficiency, regulatory compliance, and sustainable industrial operations": "Công nghệ quản lý nước và nước thải tiên tiến, bảo đảm hiệu quả tài nguyên, tuân thủ quy định và vận hành công nghiệp bền vững",
  "We offer integrated, digitally enabled water and wastewater solutions that recover, reuse, and rethink water, helping industries and urban areas thrive sustainably in a resource-constrained world and meet sustainability, efficiency, and compliance goals.": "Chúng tôi cung cấp giải pháp nước và nước thải tích hợp, hỗ trợ số hóa để thu hồi, tái sử dụng và tái định hình cách quản lý nước, giúp các ngành công nghiệp và đô thị phát triển bền vững trong bối cảnh tài nguyên hạn chế, đồng thời đáp ứng mục tiêu về hiệu quả và tuân thủ.",
  "recover, reuse, and rethink water": "thu hồi, tái sử dụng và tái định hình cách quản lý nước",
  "Electrostatic Precipitator (ESP)": "Bộ lọc tĩnh điện (ESP)",
  "Bag House / Bag Filters": "Bộ lọc túi",
  Scrubber: "Tháp rửa khí",
  "Thermax Ne0 - Gas Enrichment Solutions": "Thermax Ne0 - Giải pháp làm giàu khí",
  "Steam Boilers": "Lò hơi",
  "Thermal Oil Heaters": "Lò dầu tải nhiệt",
  "Hot Air Generators": "Gia nhiệt không khí nóng",
  "Hot Water Generators": "Gia nhiệt nước nóng",
  "Energy Plant": "Nhà máy năng lượng",
  "Electric Process Heat Solutions": "Giải pháp gia nhiệt quy trình bằng điện",
  "Boiler House Products": "Phụ kiện nhà lò hơi",
  "Steam Distribution": "Hệ thống phân phối hơi",
  "Condensate System Management": "Hệ thống thu hồi nước ngưng",
  "Process Automation": "Tự động hóa quy trình",
  "Customised Solutions": "Giải pháp tùy chỉnh",
  "Absorption Chillers": "Chiller hấp thụ",
  "Absorption Chiller-Heaters": "Chiller hấp thụ hai chiều nóng - lạnh",
  "Absorption Heat Pumps": "Heat pump hấp thụ",
  "Absorption Heat Transformer": "Bộ nâng cấp nhiệt hấp thụ",
  "Hybrid Chiller": "Chiller lai",
  "Heating Solutions": "Giải pháp gia nhiệt",
  "Wet Cooling Solutions": "Giải pháp làm mát ướt",
  "Dry Cooling Solutions": "Giải pháp làm mát khô",
  "Refrigeration Solutions": "Giải pháp làm lạnh công nghiệp",
  "Water Treatment Solutions": "Xử lý nước cấp",
  "Sewage Treatment and Recycling Plants": "Nhà máy xử lý và tái chế nước thải sinh hoạt",
  "Effluent Treatment & Recycling Plants": "Nhà máy xử lý và tái chế nước thải công nghiệp",
  "Minimum Liquid Discharge": "Giảm thiểu xả thải lỏng",
  "Zero Liquid Discharge System": "Hệ thống không xả thải lỏng",
  "Plant upgrade and improvement": "Nâng cấp và cải thiện nhà máy",
  "Plant management services": "Dịch vụ quản lý nhà máy",
  "Spare parts management": "Quản lý phụ tùng",
  "Plant audit and evaluation": "Kiểm toán và đánh giá nhà máy",
  "Comprehensive lifecycle support.": "Hỗ trợ toàn diện trong suốt vòng đời.",
  "Available in dry and wet types, with automatic DSP-based control and power optimisation for dependable particulate capture.": "Có phiên bản khô và ướt, tích hợp điều khiển DSP tự động và tối ưu công suất để thu giữ bụi ổn định.",
  "Efficient, clean and green technologies for gas enrichment": "Công nghệ làm giàu khí hiệu quả, sạch và thân thiện môi trường",
  "Spare parts management for all air pollution control equipment": "Quản lý phụ tùng cho toàn bộ thiết bị xử lý khí thải",
  "Thermax offers comprehensive support across the product lifecycle that extends beyond brand boundaries.": "Thermax cung cấp hỗ trợ toàn diện trong suốt vòng đời sản phẩm, không giới hạn theo thương hiệu thiết bị.",
  "Conditional assessment, health check-up and troubleshooting": "Đánh giá tình trạng, kiểm tra sức khỏe thiết bị và xử lý sự cố",
  "Design engineering services, including efficient gas distribution": "Dịch vụ thiết kế kỹ thuật, bao gồm tối ưu phân phối khí",
  "Optimisation studies and performance audits": "Nghiên cứu tối ưu và kiểm toán hiệu suất",
  "Remote assistance and virtual technical support": "Hỗ trợ từ xa và tư vấn kỹ thuật trực tuyến",
  "Annual maintenance and service contracts": "Hợp đồng bảo trì và dịch vụ định kỳ",
  "Overhauling and repairs": "Đại tu và sửa chữa",
  "Steam generation capacities of up to 50 TPH, available in solid fuel, biomass, oil, and gas variants.": "Công suất tạo hơi đến 50 TPH, với các phiên bản dùng nhiên liệu rắn, sinh khối, dầu và khí.",
  "Available up to 20 Mn kcal/hr for high-temperature indirect heating applications.": "Công suất đến 20 triệu kcal/giờ cho các ứng dụng gia nhiệt gián tiếp nhiệt độ cao.",
  "Solid fuel-fired systems delivering hot air for industrial drying applications.": "Hệ thống đốt nhiên liệu rắn cung cấp khí nóng cho ứng dụng sấy công nghiệp.",
  "Direct and indirect heating designs for commercial and industrial requirements.": "Thiết kế gia nhiệt trực tiếp và gián tiếp cho nhu cầu thương mại và công nghiệp.",
  "Integrated steam, thermic fluid, and hot gas systems with capacities up to 100 MW.": "Hệ thống tích hợp hơi, dầu tải nhiệt và khí nóng với công suất đến 100 MW.",
  "Zero-emission electric boilers, thermal oil heaters, and hot water generators.": "Lò hơi điện, lò dầu tải nhiệt và bộ gia nhiệt nước nóng không phát thải tại chỗ.",
  "Thermax offers comprehensive support across the product lifecycle.": "Thermax cung cấp hỗ trợ toàn diện trong suốt vòng đời sản phẩm.",
  "Installation and commissioning": "Lắp đặt và chạy thử",
  "Annual maintenance contracts (AMC)": "Hợp đồng bảo trì định kỳ (AMC)",
  "Remote monitoring (IoT-enabled)": "Giám sát từ xa hỗ trợ IoT",
  "Retrofit and revamp capabilities": "Năng lực cải tạo và nâng cấp",
  "Training and operator skill development": "Đào tạo và phát triển kỹ năng vận hành",
  "Genuine services and spares": "Dịch vụ và phụ tùng chính hãng",
  "Helping industries adopt biomass-based heating with suitable technologies and operating support.": "Hỗ trợ doanh nghiệp chuyển đổi sang gia nhiệt bằng sinh khối với công nghệ phù hợp và hỗ trợ vận hành.",
  "Biomass Centre of Excellence": "Trung tâm xuất sắc về sinh khối",
  "Straw-Fired Heating Solutions": "Giải pháp gia nhiệt đốt rơm",
  "Electric Heating Solutions": "Giải pháp gia nhiệt điện",
  "Precise measurement, monitoring, and automation for steam and water systems.": "Đo lường, giám sát và tự động hóa chính xác cho hệ thống hơi và nước.",
  "An integrated portfolio that precisely controls flow, temperature, and pressure.": "Danh mục tích hợp giúp kiểm soát chính xác lưu lượng, nhiệt độ và áp suất.",
  "Maximising heat recovery, reducing water consumption, and improving boiler efficiency.": "Tối đa thu hồi nhiệt, giảm tiêu thụ nước và cải thiện hiệu suất lò hơi.",
  "Automation for steam-intensive processes to improve performance, quality, and energy savings.": "Tự động hóa quy trình sử dụng nhiều hơi để cải thiện hiệu suất, chất lượng và tiết kiệm năng lượng.",
  "On-demand hot water generation and efficient washdown systems with precise temperature control.": "Cấp nước nóng theo nhu cầu và hệ thống vệ sinh hiệu quả với khả năng kiểm soát nhiệt độ chính xác.",
  "Choose the best with Thermax's Steam Engineering services.": "Lựa chọn tối ưu với dịch vụ kỹ thuật hơi của Thermax.",
  "Utility piping consultancy": "Tư vấn đường ống tiện ích",
  "Energy audits": "Kiểm toán năng lượng",
  "Turnkey installations": "Lắp đặt trọn gói",
  "Performance monitoring": "Giám sát hiệu suất",
  "Instaheat 2.0 - Instantaneous Hot Water Generator": "Instaheat 2.0 - Bộ gia nhiệt nước nóng tức thời",
  "Thermally driven chillers for efficient and sustainable industrial and commercial cooling.": "Chiller vận hành bằng nhiệt để làm mát hiệu quả và bền vững cho công nghiệp và thương mại.",
  "Dual-function cooling and heating using sustainable thermal energy sources.": "Làm mát và gia nhiệt hai chiều bằng nguồn năng lượng nhiệt bền vững.",
  "Energy-efficient heating and cooling by transferring thermal energy.": "Gia nhiệt và làm mát tiết kiệm năng lượng bằng công nghệ truyền nhiệt.",
  "Upgrades low-temperature waste heat into usable medium-grade heat.": "Nâng cấp nhiệt thải nhiệt độ thấp thành nguồn nhiệt trung cấp có thể sử dụng.",
  "Combines vapour compression and vapour absorption technologies for flexible cooling.": "Kết hợp công nghệ nén hơi và hấp thụ để tạo giải pháp làm mát linh hoạt.",
  "Electrical and hybrid heat pumps for efficient, adaptable process heating.": "Heat pump điện và lai cho nhu cầu gia nhiệt quy trình linh hoạt, hiệu quả.",
  "Evaporation-based cooling towers and evaporative condensers.": "Tháp giải nhiệt và bình ngưng bay hơi cho làm mát hiệu quả.",
  "Water-free cooling through air-cooled heat exchangers and dry coolers.": "Làm mát không dùng nước bằng bộ trao đổi nhiệt không khí và bộ làm mát khô.",
  "Reliable low-temperature cooling for demanding industrial processes.": "Làm lạnh nhiệt độ thấp ổn định cho quy trình công nghiệp khắt khe.",
  "Timely installation, commissioning, and lifecycle support": "Lắp đặt, chạy thử kịp thời và hỗ trợ vòng đời",
  "Value-added products, upgrades, retrofits, and engineered components": "Sản phẩm giá trị gia tăng, nâng cấp, cải tạo và linh kiện kỹ thuật",
  "Wide service network with global presence and local support": "Mạng lưới dịch vụ rộng, hiện diện toàn cầu và hỗ trợ tại địa phương",
  "Optimisation, health assessments, troubleshooting, and maintenance": "Tối ưu, đánh giá tình trạng, xử lý sự cố và bảo trì",
  "Real-time monitoring and controlling using digital solutions": "Giám sát và điều khiển thời gian thực bằng giải pháp số",
  "Customised solutions and process optimisation": "Giải pháp tùy chỉnh và tối ưu quy trình",
  "Real-time monitoring, predictive analytics, and intelligent control for water treatment.": "Giám sát thời gian thực, phân tích dự đoán và điều khiển thông minh cho xử lý nước.",
  "Thermax Edge Live®": "Thermax EDGE Live®",
  "Seawater Desalination": "Khử mặn nước biển",
  "Sea-water Desalination": "Khử mặn nước biển",
  "Zero Liquid Discharge": "Không xả thải lỏng",
  "Manufacturing Facility": "Cơ sở sản xuất",
  "With over 50 years of experience in providing innovative water and wastewater treatment solutions, we are committed to transforming the way industries manage water. From raw water treatment to sewage and effluent recycling, we deliver complete, digitally enabled solutions designed for performance, compliance, and sustainability.": "Với hơn 50 năm kinh nghiệm cung cấp các giải pháp xử lý nước và nước thải đổi mới, Thermax hỗ trợ doanh nghiệp thay đổi cách quản lý tài nguyên nước. Từ xử lý nước thô đến xử lý nước thải sinh hoạt và tái chế nước thải công nghiệp, chúng tôi cung cấp giải pháp trọn gói, hỗ trợ số hóa, được thiết kế cho hiệu suất, tuân thủ và phát triển bền vững.",
  "Thermax offers one-stop solutions for water and wastewater treatment, recycling, zero liquid discharge, and seawater desalination plants, along with standardised products, digitally enabled operations and maintenance, spares, audit support, and plant improvement services.": "Thermax cung cấp giải pháp một điểm đến cho xử lý nước, xử lý và tái chế nước thải, hệ thống không xả thải lỏng và nhà máy khử mặn nước biển, cùng các sản phẩm tiêu chuẩn, vận hành bảo trì hỗ trợ số hóa, phụ tùng, kiểm toán và dịch vụ cải thiện nhà máy.",
  Installations: "Hệ thống đã lắp đặt",
  "Water treated": "Nước được xử lý",
  "Water recycled": "Nước được tái chế",
  "Wastewater treated": "Nước thải được xử lý",
  "Stringent environmental regulations": "Quy định môi trường ngày càng nghiêm ngặt",
  "We help ensure full compliance with local and global standards through advanced treatment systems and consistent performance monitoring.": "Chúng tôi hỗ trợ doanh nghiệp đáp ứng tiêu chuẩn trong nước và quốc tế thông qua hệ thống xử lý tiên tiến và giám sát hiệu suất liên tục.",
  "Water scarcity & rising freshwater costs": "Khan hiếm nước và chi phí nước sạch tăng",
  "Our solutions maximise water recovery, reduce dependency on freshwater, and enable circular water use across industrial processes.": "Các giải pháp của Thermax tối đa hóa khả năng thu hồi nước, giảm phụ thuộc vào nước sạch và thúc đẩy mô hình tuần hoàn nước trong quy trình công nghiệp.",
  "Treating complex industrial wastewater": "Xử lý nước thải công nghiệp phức tạp",
  "Robust, proven technologies are tailored for high TDS, COD, variable loads, and emerging contaminants, ensuring reliability under demanding conditions.": "Các công nghệ đã được chứng minh được tùy chỉnh cho nước thải có TDS, COD cao, tải lượng biến động và chất ô nhiễm mới, bảo đảm độ tin cậy trong điều kiện vận hành khắt khe.",
  "Ensuring operational stability & efficiency": "Duy trì ổn định và hiệu quả vận hành",
  "Digitally enabled operations and maintenance services provide remote monitoring, predictive insights, and round-the-clock support.": "Dịch vụ vận hành và bảo trì hỗ trợ số hóa cung cấp giám sát từ xa, phân tích dự báo và hỗ trợ liên tục.",
  "Innovative, high-performance water solutions for efficient, sustainable resource optimisation.": "Giải pháp xử lý nước hiệu suất cao giúp tối ưu tài nguyên theo hướng hiệu quả và bền vững.",
  "Modular, energy-efficient plants that treat sewage and recover water for non-potable applications.": "Hệ thống mô-đun tiết kiệm năng lượng xử lý nước thải sinh hoạt và thu hồi nước cho các ứng dụng không dùng để uống.",
  "Engineered systems for complex effluent streams with options for complete water recycling.": "Hệ thống kỹ thuật cho các dòng nước thải công nghiệp phức tạp, có tùy chọn tái chế nước hoàn chỉnh.",
  "High-efficiency MLD systems that maximise water recovery while significantly reducing liquid waste.": "Hệ thống MLD hiệu suất cao giúp tối đa hóa thu hồi nước và giảm đáng kể lượng chất thải lỏng.",
  "Fully integrated ZLD packages for total elimination of liquid effluent discharge.": "Gói ZLD tích hợp toàn diện nhằm loại bỏ hoàn toàn xả thải lỏng ra môi trường.",
  "Standard Product Range": "Dải sản phẩm tiêu chuẩn",
  "Industrial Project Range": "Dải giải pháp dự án công nghiệp",
  "Physico Chemical Treatment": "Xử lý hóa lý",
  "Oil Removing System": "Hệ thống tách dầu",
  "Biological Treatment": "Xử lý sinh học",
  "Advanced Oxidation": "Oxy hóa nâng cao",
  "Special Media Filter": "Bộ lọc vật liệu chuyên dụng",
  "Advanced Reverse Osmosis (ARO)": "Thẩm thấu ngược nâng cao (ARO)",
  "Electrodialysis Reversal (EDR)": "Điện thẩm tách đảo chiều (EDR)",
  "Plant Upgrade & Improvement": "Nâng cấp và cải thiện nhà máy",
  "Plant Management Services": "Dịch vụ quản lý nhà máy",
  "Spare Parts Management": "Quản lý phụ tùng",
  "Plant Audit & Evaluation": "Kiểm toán và đánh giá nhà máy",
  "Engineered solutions to upgrade water and waste treatment plants by using existing and new units to meet current requirements with enhanced results.": "Giải pháp kỹ thuật giúp nâng cấp nhà máy xử lý nước và nước thải bằng cách kết hợp hạng mục hiện hữu với thiết bị mới để đáp ứng yêu cầu hiện tại và nâng cao kết quả vận hành.",
  "Operations and maintenance support backed by decades of experience in designing, installing, commissioning, and troubleshooting treatment systems.": "Hỗ trợ vận hành và bảo trì dựa trên nhiều thập kỷ kinh nghiệm thiết kế, lắp đặt, chạy thử và xử lý sự cố hệ thống xử lý nước.",
  "Genuine spares designed for Thermax equipment and systems to maintain performance, extend equipment life, and keep plants dependable.": "Phụ tùng chính hãng được thiết kế cho thiết bị và hệ thống Thermax, giúp duy trì hiệu suất, kéo dài tuổi thọ thiết bị và bảo đảm độ tin cậy của nhà máy.",
  "Water audits assess usage, treatment performance, reuse opportunities, and long-term improvement strategies for industrial operations.": "Kiểm toán nước đánh giá mức sử dụng, hiệu suất xử lý, cơ hội tái sử dụng và chiến lược cải thiện dài hạn cho vận hành công nghiệp.",
  "Real-time monitoring, predictive analytics, and intelligent control for dynamic water treatment operations with varying loads and water quality.": "Giám sát thời gian thực, phân tích dự báo và điều khiển thông minh cho vận hành xử lý nước có tải lượng và chất lượng nước biến động.",
  "Reliable water supply solutions built on experience across major desalination technologies and industrial water demands.": "Giải pháp cấp nước tin cậy dựa trên kinh nghiệm triển khai các công nghệ khử mặn chính và nhu cầu nước công nghiệp.",
  "Advanced effluent treatment that recycles wastewater into reusable process water while converting salts into solid by-products.": "Giải pháp xử lý nước thải tiên tiến tái chế nước thải thành nước quy trình có thể tái sử dụng, đồng thời chuyển muối thành phụ phẩm rắn.",
  "Urban, digitally enabled operations and maintenance solutions designed for modern water management challenges.": "Giải pháp vận hành và bảo trì đô thị hỗ trợ số hóa, được thiết kế cho các thách thức quản lý nước hiện đại.",
  "A state-of-the-art IGBC-compliant facility using automated production, robotic welding, solar power, and water-conscious processes.": "Cơ sở hiện đại đạt định hướng IGBC, ứng dụng sản xuất tự động, hàn robot, năng lượng mặt trời và quy trình chú trọng tiết kiệm nước.",
  Automobile: "Ô tô",
  Cement: "Xi măng",
  Chemical: "Hóa chất",
  "Drugs and Pharmaceuticals": "Dược phẩm",
  "Engineering & OEM": "Kỹ thuật và OEM",
  "Food & Beverage": "Thực phẩm và đồ uống",
  Infrastructure: "Hạ tầng",
  Metals: "Kim loại",
  "Paper & Pulp": "Giấy và bột giấy",
  Wood: "Gỗ",
  Power: "Điện",
  "Refinery & Petrochemicals": "Lọc dầu và hóa dầu",
  "Tyres and Rubber": "Lốp xe và cao su",
  Textile: "Dệt may",
  "Thermax's ZLD technology enables glass manufacturer reduce freshwater consumption": "Công nghệ ZLD của Thermax giúp nhà sản xuất kính giảm tiêu thụ nước sạch",
  "Thermax Water & Wastewater Solutions Download": "Tải brochure Giải pháp nước và nước thải Thermax",
  "Product Portfolio Download": "Tải danh mục sản phẩm",
  Brochure: "Brochure",
};

function tr(value: string): string {
  return translations[value] ?? value;
}

function translateCard(card: LandingCard): LandingCard {
  return {
    ...card,
    title: tr(card.title),
    description: card.description ? tr(card.description) : undefined,
    badge: card.badge ? tr(card.badge) : undefined,
    items: card.items?.map(tr),
  };
}

function translateStat(stat: LandingStat): LandingStat {
  return {
    ...stat,
    label: tr(stat.label),
  };
}

function translateChallenge(challenge: LandingChallenge): LandingChallenge {
  return {
    ...challenge,
    title: tr(challenge.title),
    description: tr(challenge.description),
  };
}

function translateResource(resource: LandingResource): LandingResource {
  return {
    ...resource,
    type: tr(resource.type),
    title: tr(resource.title),
  };
}

productPages.vi = productPages.en.map((page) => ({
  ...page,
  title: tr(page.title),
  heroDescription: tr(page.heroDescription),
  intro: tr(page.intro),
  introHighlight: page.introHighlight ? tr(page.introHighlight) : undefined,
  overviewParagraphs: page.overviewParagraphs?.map(tr),
  stats: page.stats?.map(translateStat),
  challenges: page.challenges?.map(translateChallenge),
  productHeading: tr(page.productHeading),
  serviceHeading: page.serviceHeading ? tr(page.serviceHeading) : undefined,
  serviceIntro: page.serviceIntro ? tr(page.serviceIntro) : undefined,
  featureHeading: page.featureHeading ? tr(page.featureHeading) : undefined,
  products: page.products.map(translateCard),
  services: page.services?.map(translateCard),
  features: page.features?.map(translateCard),
  industries: page.industries?.map(tr),
  caseStudies: page.caseStudies?.map(translateCard),
  resources: page.resources?.map(translateResource),
}));

export function getOfficialProductLanding(slug: string, locale: Locale) {
  return productPages[locale].find((page) => page.slug === slug);
}
