const thermaxAssetBase = "https://www.thermaxglobal.com/themes/thermax/assets/images";

export type NavItem = {
  label: string;
  summary: string;
  links: string[];
  spotlight: string;
  spotlightImage: string;
};

export type ProductSubcategory = {
  label: string;
  href: string;
};

export type ProductSubcategoryGroup = {
  label: string;
  href: string;
  children: ProductSubcategory[];
};

export type BusinessSegment = {
  label: string;
  image: string;
  body: string;
  links: string[];
};

export type Capability = {
  label: string;
  kicker: string;
  image: string;
  body: string;
  body2?: string;
};

export type CaseStudy = {
  title: string;
  meta: string;
  image: string;
  thumb: string;
  category: string;
  date: string;
  summary: string;
  href?: string;
};

export const imageUrls = {
  logo: `/thermax-logo.svg`,
  hero: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-04/poster-video.webp`,
  heroVideo: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-04/thermax-banner-new.mp4`,
  heroAlt: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-04/indus-pro-newx.webp`,
  banner: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-04/oursolution-pix2.webp`,
  capability: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-04/featured-pix1.webp`,
  companySpotlight: `${thermaxAssetBase}/companyspotlight.webp`,
  portfolioSpotlight: `${thermaxAssetBase}/spotlight.webp`,
  sustainabilitySpotlight: `${thermaxAssetBase}/stainspotlight.webp`,
  globalSpotlight: `${thermaxAssetBase}/globalspotlight.webp`,
  plant: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-04/oursolution-pix3.webp`,
  energy: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-04/digital-solutions.jpg`,
  water: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-04/oursolution-pix4.webp`,
  serve: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-04/thermax-serve.webp`,
  biomass: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-04/Biomass.webp`,
  research: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-04/research-and-development.webp`,
  greenHydrogen: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-04/featured-pix6.webp`,
  urthh: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-04/URTHH.webp`,
  peopleOne: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-04/our-people-pic1.jpg`,
  peopleTwo: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-04/our-people-pic2.jpg`,
  peopleThree: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-04/our-people-pic3.jpg`,
  socialVietnamOne: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-04/vietnam%20insta%202.jpg`,
  socialVietnamTwo: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-04/Vietnam%20insta%204.jpg`,
  socialVietnamThree: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-04/vietnam%20insta%203.jpg`,
  socialVietnamFour: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-04/vietnam%20insta%20post%201.jpg`,
  socialVietnamFive: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-04/social4.jpg`,
  caseVietnamCoffee: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-04/Desktop_24.jpg`,
  caseVietnamCoffeeThumb: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-04/Product_5.jpg`,
  caseVietnamTextile: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-04/Desktop_25.jpg`,
  caseVietnamTextileThumb: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-04/Product_6.jpg`,
  empower: `${thermaxAssetBase}/empower-banner.webp`,
  annualReport: `${thermaxAssetBase}/annual-reports-cover-24-25-new1.webp`,
  q4Report: `${thermaxAssetBase}/Q4-2025-26.jpg`,
  newsOne: `${thermaxAssetBase}/news-img1.webp`,
  newsTwo: `${thermaxAssetBase}/news-img2.webp`,
  newsThree: `${thermaxAssetBase}/news-img3.webp`,
  // Inner page banner backgrounds (verified URLs)
  bannerCompany: `${thermaxAssetBase}/company-overview-pic.webp`,
  bannerCompanyMobile: `${thermaxAssetBase}/company-overview-pic_mobile.webp`,
  bannerPortfolio: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2025-09/Industrial_product_banner.jpg`,
  bannerPortfolioMobile: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2025-09/Industrial_product_banner_mobile.jpg`,
  bannerInfra: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2025-10/Industrial-infrastructure-desktop.jpg`,
  bannerInfraMobile: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2025-10/Industrial-infrastructure-mobile.jpg`,
  bannerGreen: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2025-10/green-solutions-desktop.jpg`,
  bannerGreenMobile: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2025-10/green-solutions-mobile.jpg`,
  bannerChemicals: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2025-10/chemicals-desktop-banner.jpg`,
  bannerChemicalsMobile: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2025-10/chemicals-mobile-banner.jpg`,
  bannerSustain: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-01/sustain-banner.jpg`,
  bannerSustainMobile: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-01/sustain-banner-mobile.jpg`,
  bannerInvestor: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-05/Q4%20Banner.png`,
  bannerInvestorMobile: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-05/Q4%20Mobile.png`,
  bannerDigital: `${thermaxAssetBase}/digital-desk-bnr.webp`,
  bannerDigitalMobile: `${thermaxAssetBase}/digital-mob-bnr.webp`,
  bannerCareers: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2025-12/Careers-desktop-banner.jpg`,
  bannerCareersMobile: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2025-12/Careers-mobile-banners_0.png`,
  bannerContact: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-01/contact-us.jpg`,
  bannerContactMobile: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-01/contact-us-mobile.jpg`,
  bannerMedia: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-04/media-desk_0.jpg`,
  bannerMediaMobile: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-04/media-mob_0.jpg`,
  bannerPeople: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-01/people-banner.jpg`,
  bannerPeopleMobile: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-01/people-banner-mobile.jpg`,
  bannerLegacy: `${thermaxAssetBase}/milestone-banner.webp`,
  bannerLegacyMobile: `${thermaxAssetBase}/molestone-pic_mobile.webp`,
  bannerAwards: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2025-12/Awards-banner.jpg`,
  bannerAwardsMobile: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2025-12/Awards-mobile-banner.jpg`,
  bannerManufacturing: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-03/Untitled-1.webp`,
  bannerManufacturingMobile: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-03/manu-banner-mobile.jpg`,
  bannerGlobal: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-01/global-banner.jpg`,
  bannerGlobalMobile: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-01/global-banner-mobile.jpg`,
  bannerPolicies: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2025-12/Policies-banner.jpg`,
  bannerPoliciesMobile: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2025-12/Policies-mobile-banner.jpg`,
  bannerBoard: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2025-12/bod-banner.jpg`,
  bannerBoardMobile: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2025-12/bod-banner-mobile.png`,
  bannerEC: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-03/ec-desktop-banner.webp`,
  bannerECMobile: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-03/ec-desktop-banner-mobile.webp`,
  bannerCSR: `${thermaxAssetBase}/csr_desk_new.webp`,
  bannerCSRMobile: `${thermaxAssetBase}/csr_mob_new.webp`,
  bannerSocial: `${thermaxAssetBase}/socialimpact-banner.webp`,
  bannerSocialMobile: `${thermaxAssetBase}/socialimpact-banner-mobile.webp`,
  // Vision/mission/story image
  visionBanner: `${thermaxAssetBase}/vision-banner.jpg`,
  // Founding family
  family1: `${thermaxAssetBase}/founding-family-pic1.jpg`,
  family2: `${thermaxAssetBase}/founding-family-pic2.jpg`,
  family3: `${thermaxAssetBase}/founding-family-pic3.jpg`,
  bod1: `${thermaxAssetBase}/bod-pic1.jpg`,
  bod2: `${thermaxAssetBase}/bod-pic2.jpg`,
  // Awards
  award1: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-02/Thermax-recognised-with-the-prestigious-Family-Business-Award.jpg`,
  award2: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-02/Golden-Peacock-Award.jpg`,
  award3: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-02/Thermax-Wins-Excellence-in-Sustainability-and-Circular-Economy-Award.jpg`,
  award4: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-03/Untitled-1.png`,
  award5: `https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-02/Meher-Pudumjee-Receives--EY-Entrepreneur-of-The-Year%E2%84%A2-2024-Award.jpg`,
  // Mission icons
  missionIcon1: `${thermaxAssetBase}/mission-icon1.svg`,
  missionIcon2: `${thermaxAssetBase}/mission-icon2.svg`,
  missionIcon3: `${thermaxAssetBase}/mission-icon3.svg`,
  missionIcon4: `${thermaxAssetBase}/mission-icon4.svg`,
  missionIcon5: `${thermaxAssetBase}/mission-icon5.svg`,
  missionIcon6: `${thermaxAssetBase}/mission-icon6.svg`,
  missionIcon7: `${thermaxAssetBase}/mission-icon7.svg`,
  // Core value background
  coreValue1: `${thermaxAssetBase}/core-value-back%20pic1.jpg`,
  coreValue2: `${thermaxAssetBase}/core-value-back%20pic2.jpg`,
  coreValue3: `${thermaxAssetBase}/core-value-back%20pic3.jpg`,
  coreValue4: `${thermaxAssetBase}/core-value-back%20pic4.jpg`,
  // Energy transition video poster
  energyPoster: `${thermaxAssetBase}/poster_new_homex_energy.webp`,
  energyVideo: `https://www.thermaxglobal.com/themes/thermax/assets/vid/EnergyTransition.mp4`,
  // Discover arrow
  discoverArrow: `${thermaxAssetBase}/discover-arrow.svg`,
};

export const vietnamOffice = {
  label: "Thermax Vietnam Office",
  company: "",
  address: [
    "Room 2-3, 1st Floor",
    "WiYO Complex, No. 46 N3C Street",
    "Binh Trung Ward",
    "Ho Chi Minh City",
    "Vietnam",
  ],
  phone: "+84 90 880 8597",
  phoneHref: "tel:+84908808597",
  email: "enquiry.vietnam@thermaxglobal.com",
  emailHref: "mailto:enquiry.vietnam@thermaxglobal.com",
};

export const navItems: NavItem[] = [
  {
    label: "About Us",
    summary:
      "Thermax Vietnam supports local industries with sustainable and energy-efficient solutions, backed by Thermax global engineering expertise.",
    links: ["Company Overview", "Global Presence", "Careers", "Contact Us"],
    spotlight: "Thermax Vietnam",
    spotlightImage: imageUrls.companySpotlight,
  },
  {
    label: "Business Portfolio",
    summary:
      "Spanning across four business segments, our solutions, products, and services improve resource productivity and strengthen the bottom line while maintaining a cleaner environment—delivering value for both industry and society.",
    links: [
      "Air Pollution Control Systems",
      "Process Heat Solutions",
      "Steam Engineering Solutions",
      "Cooling and Heating Solutions",
      "Water and Waste Solutions",
      "Chemicals",
    ],
    spotlight: "Trusted Partner in Energy Transition",
    spotlightImage: imageUrls.portfolioSpotlight,
  },
  {
    label: "Sustainability",
    summary:
      "Thermax Vietnam supports customers with lifecycle service, digital reliability and responsible operations backed by Thermax expertise.",
    links: [
      "Boiler Maintenance Services",
      "Absorption Chiller Maintenance Services",
      "Air Pollution Control System Maintenance Services",
      "Automatic Tube Cleaning System (ATCS)",
    ],
    spotlight: "Lifecycle service and digital reliability",
    spotlightImage: imageUrls.serve,
  },
  {
    label: "Digital Solutions",
    summary:
      "Industrial infrastructure projects and energy solutions support large-scale steam, power and process requirements.",
    links: ["Industrial Infra", "Projects and Energy Solutions", "Large Boilers and Fired Heaters"],
    spotlight: "Projects and Energy Solutions",
    spotlightImage: imageUrls.banner,
  },
  {
    label: "In the News",
    summary:
      "Current updates on Thermax's business performance, clean-energy projects, digital operations and corporate milestones.",
    links: ["In the News", "Careers"],
    spotlight: "Latest newsroom updates",
    spotlightImage: imageUrls.newsOne,
  },
  {
    label: "Contact Us",
    summary:
      "Connect with Thermax Vietnam for product enquiries, service support and project discussions.",
    links: [],
    spotlight: "Thermax Vietnam Office",
    spotlightImage: imageUrls.bannerContact,
  },
];

export const productSolutionHrefs: Record<string, string> = {
  "Air Pollution Control Systems": "/industrial-products/air-pollution-control-systems",
  "Process Heat Solutions": "/industrial-products/process-heat-solutions",
  "Steam Engineering Solutions": "/industrial-products/steam-engineering-solutions",
  "Cooling and Heating Solutions": "/industrial-products/cooling-and-heating-solutions",
  "Water and Waste Solutions": "/industrial-products/water-and-waste-solutions",
  "Large Boilers and Fired Heaters": "/business-portfolio/industrial-infrastructure?solution=large-boilers-and-fired-heaters#solutions",
  "Projects and Energy Solutions": "/business-portfolio/industrial-infrastructure?solution=projects-and-energy-solutions#solutions",
  "Bio-CNG Solutions": "/business-segments/green-solutions?solution=bio-cng-solutions#solutions",
  "Build-Own-Operate Solutions": "/business-segments/green-solutions?solution=build-own-operate-solutions#solutions",
  "Green Hydrogen": "/business-segments/green-solutions?solution=green-hydrogen#solutions",
  "Renewable Energy": "/business-segments/green-solutions?solution=renewable-energy#solutions",
  "Resins": "/industrial-products/ion-exchange-resins",
  "Ion Exchange Resins": "/industrial-products/ion-exchange-resins",
  "Water Treatment": "/industrial-products/water-treatment",
  "Protective Coatings": "/industrial-products/protective-coatings",
  "Admixtures and Sealants": "/industrial-products/admixtures-and-sealants",
  "NOx Control": "/industrial-products/nox-control",
  "SOx Control": "/industrial-products/sox-control",
  "Hot Water Heating Systems": "/industrial-products/hot-water-heating-systems",
  "Electric Heat Pumps": "/industrial-products/electric-heat-pumps",
  "Closed Circuit Cooling Towers": "/industrial-products/closed-circuit-cooling-towers",
  "Air Cooled Heat Exchangers": "/industrial-products/air-cooled-heat-exchangers",
  "Wastewater Recovery": "/industrial-products/wastewater-recovery",
  "Boiler Water Treatment Chemicals": "/industrial-products/boiler-water-treatment-chemicals",
  "Cooling Water Treatment Chemicals": "/industrial-products/cooling-water-treatment-chemicals",
};

export const businessSegments: BusinessSegment[] = [
  {
    label: "Industrial Products",
    image: imageUrls.heroAlt,
    body:
      "Industrial Products businesses offer solutions and services engineered to efficiently meet process heating, cooling, pollution abatement and water management requirements for various segments.",
    links: [
      "Air Pollution Control Systems",
      "Process Heat Solutions",
      "Steam Engineering Solutions",
      "Cooling and Heating Solutions",
      "Water and Waste Solutions",
    ],
  },
  {
    label: "Industrial Infra",
    image: imageUrls.banner,
    body:
      "Industrial Infra supports industries with utility solutions tailored to meet their specific steam and power requirements.",
    links: ["Large Boilers and Fired Heaters", "Projects and Energy Solutions"],
  },
  {
    label: "Green Solutions",
    image: imageUrls.plant,
    body:
      "Green Solutions focuses on providing new energy and bespoke decarbonisation offerings to industrial customers on a long-term basis.",
    links: ["Bio-CNG Solutions", "Build-Own-Operate Solutions", "Green Hydrogen", "Renewable Energy"],
  },
  {
    label: "Chemicals",
    image: imageUrls.water,
    body:
      "The Chemicals segment offers resins, water treatment, and speciality chemicals, as well as construction chemicals (admixtures, protective coatings, waterproofing, industrial flooring, sealants, adhesives), to help improve processes across a spectrum of industries.",
    links: ["Resins", "Water Treatment", "Protective Coatings", "Admixtures and Sealants"],
  },
];

export const productSubcategoryGroups: ProductSubcategoryGroup[] = [
  {
    label: "Air Pollution Control Systems",
    href: productSolutionHrefs["Air Pollution Control Systems"],
    children: [
      {
        label: "Electrostatic Precipitator (ESP)",
        href: "/industrial-products/electrostatic-precipitator-esp",
      },
      {
        label: "Bag House/Bag Filters",
        href: "/industrial-products/bag-house-bag-filters",
      },
      {
        label: "Combofilter",
        href: "/industrial-products/combofilter",
      },
      {
        label: "Scrubber",
        href: "/industrial-products/scrubber",
      },
      {
        label: "Thermax Ne0 - Gas Enrichment Solutions",
        href: "/industrial-products/thermax-neo-gas-enrichment-solutions",
      },
    ],
  },
  {
    label: "Process Heat Solutions",
    href: productSolutionHrefs["Process Heat Solutions"],
    children: [
      {
        label: "Steam Boilers",
        href: "/industrial-products/steam-boilers",
      },
      {
        label: "Thermal Oil Heaters",
        href: "/industrial-products/thermal-oil-heaters",
      },
      {
        label: "Hot Air Generators",
        href: "/industrial-products/hot-air-generators",
      },
      {
        label: "Hot Water Generators",
        href: "/industrial-products/hot-water-generators",
      },
      {
        label: "Energy Plant",
        href: "/industrial-products/energy-plant",
      },
      {
        label: "Electric Process Heat Solutions",
        href: "/industrial-products/electric-process-heat-solutions",
      },
    ],
  },
  {
    label: "Steam Engineering Solutions",
    href: productSolutionHrefs["Steam Engineering Solutions"],
    children: [
      {
        label: "Boiler House Products",
        href: "/industrial-products/boiler-house-products",
      },
      {
        label: "Steam Distribution",
        href: "/industrial-products/steam-distribution",
      },
      {
        label: "Condensate System Management",
        href: "/industrial-products/condensate-system-management",
      },
      {
        label: "Process Automation",
        href: "/industrial-products/process-automation",
      },
      {
        label: "Customised Solutions",
        href: "/industrial-products/customised-solutions",
      },
    ],
  },
  {
    label: "Cooling and Heating Solutions",
    href: productSolutionHrefs["Cooling and Heating Solutions"],
    children: [
      {
        label: "Absorption Chillers",
        href: "/industrial-products/absorption-chillers",
      },
      {
        label: "Absorption Heat Pumps",
        href: "/industrial-products/absorption-heat-pumps",
      },
      {
        label: "Absorption Chiller-Heaters",
        href: "/industrial-products/absorption-chiller-heaters",
      },
      {
        label: "Absorption Heat Transformer",
        href: "/industrial-products/absorption-heat-transformer",
      },
      {
        label: "Hybrid Chiller",
        href: "/industrial-products/hybrid-chiller",
      },
      {
        label: "Heating Solutions",
        href: "/industrial-products/heating-solutions",
      },
      {
        label: "Wet Cooling Solutions",
        href: "/industrial-products/wet-cooling-solutions",
      },
      {
        label: "Dry Cooling Solutions",
        href: "/industrial-products/dry-cooling-solutions",
      },
      {
        label: "Refrigeration Solutions",
        href: "/industrial-products/industrial-refrigeration-unit",
      },
    ],
  },
  {
    label: "Water and Waste Solutions",
    href: productSolutionHrefs["Water and Waste Solutions"],
    children: [
      {
        label: "Water Treatment Solutions",
        href: "/industrial-products/water-treatment-solutions",
      },
      {
        label: "Sewage Treatment and Recycling Plants",
        href: "/industrial-products/sewage-treatment-and-recycling-plants",
      },
      {
        label: "Effluent Treatment & Recycling Plants",
        href: "/industrial-products/effluent-treatment-recycling-plants",
      },
      {
        label: "Minimum Liquid Discharge",
        href: "/industrial-products/minimum-liquid-discharge",
      },
      {
        label: "Zero Liquid Discharge System",
        href: "/industrial-products/zero-liquid-discharge-system",
      },
    ],
  },
  {
    label: "Chemicals",
    href: "/business-portfolio/chemicals#solutions",
    children: [
      {
        label: "Boiler Water Treatment Chemicals",
        href: productSolutionHrefs["Boiler Water Treatment Chemicals"],
      },
      {
        label: "Cooling Water Treatment Chemicals",
        href: productSolutionHrefs["Cooling Water Treatment Chemicals"],
      },
      {
        label: "Ion Exchange Resins",
        href: productSolutionHrefs["Ion Exchange Resins"],
      },
    ],
  },
];

export const capabilities: Capability[] = [
  {
    label: "Energy Transition",
    kicker: "Featured capability",
    image: imageUrls.capability,
    body:
      "Thermax’s approach to energy transition is rooted in more than five decades of deep engineering expertise and a legacy of delivering sustainable energy solutions that help industries decarbonise and thrive in a low-carbon future. As climate challenges intensify globally, Thermax recognises that there is no single solution and this belief shapes our end-to-end capabilities across renewable energy, energy management, waste-to-energy, and clean technologies.",
    body2:
      "Innovation lies at the heart of Thermax’s energy transition capability, where pioneering research, strategic partnerships, and practical deployments converge to deliver measurable impact. From waste to energy, scaled-up bio-CNG and hybrid renewable projects to green hydrogen and digital energy management tools, our work accelerates the adoption of cleaner, smarter energy systems across industries. This focus not only aligns with global climate goals but also reinforces Thermax’s commitment to be a trusted partner in building resilient and sustainable energy ecosystems for customers and communities worldwide.",
  },
  {
    label: "Digital Solutions",
    kicker: "EDGE Live",
    image: imageUrls.energy,
    body:
      "EDGE Live, Thermax’s IIoT digital solution, delivers real-time intelligence for industrial assets, enabling customers to operate with greater reliability, efficiency, and confidence. By continuously monitoring asset performance, it detects early signs of inefficiency or potential failure and recommends the right corrective actions. This proactive approach helps reduce unplanned downtime, improve operational performance, and support decarbonisation and energy efficiency goals.",
    body2:
      "Powered by advanced AI and machine learning models that continuously learn from real operating data, EDGE Live analyses large volumes of structured information to uncover hidden patterns and accurately predict performance outcomes. Using techniques such as decision trees, neural networks, and association rules, these insights are translated into clear recommendations and task-based actions for plant teams. Combined with Thermax’s deep expertise in energy and environment solutions, EDGE Live goes beyond digital monitoring to deliver expert guidance that drives smarter, future-ready operations.",
  },
  {
    label: "Thermax Serve",
    kicker: "Lifecycle service",
    image: imageUrls.serve,
    body:
      "Drawing on decades of industry expertise, Thermax Serve offers a comprehensive portfolio of solutions aimed at enhancing operational reliability, improving system performance and extending equipment life. What distinguishes Thermax Serve is its ability to support equipment from all manufacturers, not just Thermax, thereby widening its impact and relevance across the industrial landscape.",
    body2:
      "Delivered through a global network of trained professionals, the platform integrates specialised capabilities such as annual service support, automation and fuel conversion upgrades, waste heat recovery, advanced welding repairs, safety and remaining life assessments, operational health checks, rapid troubleshooting, and genuine spares. Together, these services provide customers with assured support, faster issue resolution, regulatory compliance, and sustained performance, translating into higher productivity, lower operating costs, and long-term peace of mind backed by the Thermax brand.",
  },
  {
    label: "Biomass Centre of Excellence",
    kicker: "Cleaner fuels",
    image: imageUrls.biomass,
    body:
      "The Biomass Centre of Excellence represents Thermax’s commitment to delivering best-in-class biomass heating solutions through extensive experience in fuels, advanced combustion technologies, and continuous research, innovation, and development. It brings together deep technical knowledge of biomass fuels (including agro-residues, woody biomass, briquettes, pellets, and industrial waste) and their chemical and physical properties to design efficient, reliable biomass-based heating systems.",
    body2:
      "Serving as a hub for innovation and collaboration, the centre supports customers across the entire lifecycle—from fuel selection and technology evaluation to system integration, optimisation, and performance enhancement. Through continuous research, technology development, and knowledge sharing, the Biomass Centre of Excellence helps industries maximise efficiency and uptime while transitioning to cleaner, sustainable energy solutions with confidence.",
  },
  {
    label: "Research and Development",
    kicker: "RTIC",
    image: imageUrls.research,
    body:
      "The Research, Technology and Innovation Centre (RTIC) of Thermax is dedicated to advancing next-generation technologies that support a cleaner, more sustainable future. Our R&D spans three high-impact areas: Carbon Capture and Utilisation (CCU) technologies, Green Hydrogen and Electrochemical Technologies, and Biofuels and Bioprocessing.",
    body2:
      "In CCU, we are developing low-energy solvents, solid-state absorbents, CO₂ electrolysers, and advanced simulation frameworks to enable viable pathways for converting carbon emissions into low-carbon fuels. Our work in green hydrogen and electrochemical technologies covers solid oxide and anion exchange membrane electrolysers, hydrogen compression, coal-to-chemicals conversion, and waste-to–SAF (sustainable aviation fuel)/green hydrogen/CBG (compressed biogas), supported by gen-AI–enabled design and optimisation. In biofuels and bioprocessing, we focus on biohydrogen, bio-waste to CNG, waste-to-fuel and waste-to-energy technologies, along with sustainable aviation fuel development. Through continuous innovation across these strategic areas, Thermax remains committed to delivering technologies that accelerate energy transition and build a better tomorrow.",
  },
  {
    label: "Green Hydrogen",
    kicker: "Featured capability",
    image: imageUrls.greenHydrogen,
    body:
      "Among Thermax’s future-ready offerings is green hydrogen—a clean fuel set to play a defining role in global decarbonisation. Backed by advanced manufacturing, world-class partnerships, and a proven track record in executing complex projects, Thermax is well-positioned to support industries and align with India’s National Green Hydrogen Mission, which targets 5 million metric tonnes of green hydrogen production by 2030.",
    body2:
      "Thermax’s Green Hydrogen capability combines proven and next-generation electrolyser technologies to support industries across every stage of their decarbonisation journey. In collaboration with HydrogenPro, Thermax offers indigenised alkaline water electrolysis (AWE) systems that are reliable, scalable, and ready for large-scale deployment today, supported by local manufacturing and full lifecycle expertise. Complementing this is Thermax’s partnership with Ceres Power to deliver solid oxide electrolysis (SOEC), a next-generation technology that offers superior energy efficiency through high-temperature electrolysis and is well suited for energy- intensive industries with access to waste heat. Together, AWE and SOEC position Thermax as a comprehensive green hydrogen partner, enabling adoption from pilot initiatives to gigawatt-scale projects and supporting scalable, reliable green hydrogen deployment across industries.",
  },
  {
    label: "Urthh",
    kicker: "Sustainability platform",
    image: imageUrls.urthh,
    body:
      "Urthh, a dedicated business model under Thermax Water and Waste Solutions business, is designed to address the pressing challenges of urban water management. As cities face rising water scarcity, regulatory pressures, and the need for sustainable solutions, Urthh aims to be a transformative force in urban water conservation, strengthening both environmental responsibility and economic resilience.",
    body2:
      "Urthh provides end-to-end water and wastewater solutions, including technical audits, plant improvements and upgrades, integrated IoT-enabled monitoring, and water recycling systems. Our goal is to ensure that urban spaces minimise dependency on external water sources, adapt to water recycling and reuse, comply with stringent environmental regulations, and optimise operational efficiency while reducing costs.",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: "Thermax’s Combipac boilers enable green steam generation for a coffee manufacturer",
    meta: "Read the case study",
    image: imageUrls.caseVietnamCoffee,
    thumb: imageUrls.caseVietnamCoffeeThumb,
    category: "Green Energy",
    date: "05/05/2026",
    summary: "Thermax engineered a custom Combipac boiler solution for a major coffee manufacturer, utilizing biomass to generate green steam, reducing fossil fuel consumption and lowering operating costs.",
    href: "#",
  },
  {
    title: "Thermax’s electrical heat pump delivers sustainable heating for a textile major",
    meta: "Read the case study",
    image: imageUrls.caseVietnamTextile,
    thumb: imageUrls.caseVietnamTextileThumb,
    category: "Heating Solutions",
    date: "28/04/2026",
    summary: "Thermax designed and installed a high-efficiency electrical heat pump system for a leading textile company, providing zero-emission heating and reducing carbon footprint.",
    href: "#",
  },
  {
    title: "Thermax provides advanced water treatment for a leading food processor",
    meta: "Read the case study",
    image: imageUrls.water,
    thumb: imageUrls.water,
    category: "Water Treatment",
    date: "12/04/2026",
    summary: "An advanced water treatment and recycling plant by Thermax helps a prominent food processing facility achieve zero liquid discharge (ZLD) and secure high-quality process water.",
    href: "#",
  },
];

export const newsItems = [
  {
    date: "May 07, 2026",
    title: "Thermax reports stronger Q4 with 13% revenue growth and 18% PAT growth",
    image: imageUrls.newsOne,
  },
  {
    date: "March 27, 2026",
    title: "Rs. 1,600 crore boiler package reinforces Thermax's industrial infrastructure pipeline",
    image: imageUrls.newsTwo,
  },
  {
    date: "January 29, 2026",
    title: "Thermax and HPCL partner on green hydrogen, carbon capture and bio-based fuels",
    image: imageUrls.newsThree,
  },
];

export const footerGroups = [
  {
    title: "About Us",
    links: [
      { label: "Company Overview", href: "/company-overview" },
      { label: "Global Presence", href: "/company-overview/global-presence" },
    ],
  },
  {
    title: "Product Portfolio",
    links: [
      { label: "Air Pollution Control Systems", href: productSolutionHrefs["Air Pollution Control Systems"] },
      { label: "Process Heat Solutions", href: productSolutionHrefs["Process Heat Solutions"] },
      { label: "Steam Engineering Solutions", href: productSolutionHrefs["Steam Engineering Solutions"] },
      { label: "Cooling and Heating Solutions", href: productSolutionHrefs["Cooling and Heating Solutions"] },
      { label: "Water and Waste Solutions", href: productSolutionHrefs["Water and Waste Solutions"] },
      { label: "Chemicals", href: "/business-portfolio/chemicals" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Thermax Serve", href: "/sustainability" },
      { label: "EDGE Live", href: "/digital" },
      { label: "Corporate Social Responsibility", href: "/corporate-social-responsibility" },
      { label: "ESG Profile", href: "/esg-profile" },
    ],
  },
];
