const thermaxAssetBase = "https://www.thermaxglobal.com/themes/thermax/assets/images";

export type NavItem = {
  label: string;
  summary: string;
  links: string[];
  spotlight: string;
  spotlightImage: string;
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
};

export const imageUrls = {
  logo: `${thermaxAssetBase}/thermax-logo.svg`,
  hero: `${thermaxAssetBase}/poster_new_homex-new.webp`,
  heroVideo: `https://www.thermaxglobal.com/themes/thermax/assets/vid/thermax-banner-new.mp4`,
  heroAlt: `${thermaxAssetBase}/indus-pro-newx.webp`,
  banner: `${thermaxAssetBase}/oursolution-pix2.webp`,
  capability: `${thermaxAssetBase}/featured-pix1.webp`,
  companySpotlight: `${thermaxAssetBase}/companyspotlight.webp`,
  portfolioSpotlight: `${thermaxAssetBase}/spotlight.webp`,
  sustainabilitySpotlight: `${thermaxAssetBase}/stainspotlight.webp`,
  globalSpotlight: `${thermaxAssetBase}/globalspotlight.webp`,
  plant: `${thermaxAssetBase}/oursolution-pix3.webp`,
  energy: `${thermaxAssetBase}/digital-solutions.jpg`,
  water: `${thermaxAssetBase}/oursolution-pix4.webp`,
  serve: `${thermaxAssetBase}/thermax-serve.webp`,
  biomass: `${thermaxAssetBase}/Biomass.webp`,
  research: `${thermaxAssetBase}/research-and-development.webp`,
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
  award1: `${thermaxAssetBase}/latest-awards-pic1.jpg`,
  award2: `${thermaxAssetBase}/latest-awards-pic2.jpg`,
  award3: `${thermaxAssetBase}/latest-awards-pic3.jpg`,
  award4: `${thermaxAssetBase}/latest-awards-pic4.jpg`,
  award5: `${thermaxAssetBase}/latest-awards-pic5.jpg`,
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

export const navItems: NavItem[] = [
  {
    label: "About Us",
    summary:
      "Thermax, founded in 1966 and headquartered in Pune, India, is a USD ~1 Billion company offering sustainable solutions in the energy and environment space and a trusted partner in energy transition. With a global presence in over 90 countries, and manufacturing facilities – 12 in India and four overseas (Indonesia, Denmark, Poland, and Germany), Thermax provides essential solutions to industries for clean air, clean energy, and clean water.",
    links: [
      "Company Overview",
      "Legacy Milestones",
      "Leadership",
      "Awards and Recognitions",
      "Manufacturing Facilities",
      "Global Presence",
      "Policies & Certifications",
    ],
    spotlight: "Business with a Purpose",
    spotlightImage: imageUrls.companySpotlight,
  },
  {
    label: "Business Portfolio",
    summary:
      "Spanning across four business segments, our solutions, products, and services improve resource productivity and strengthen the bottom line while maintaining a cleaner environment—delivering value for both industry and society.",
    links: [
      "Industrial Products",
      "Industrial Infra",
      "Green Solutions",
      "Chemicals",
    ],
    spotlight: "Trusted Partner in Energy Transition",
    spotlightImage: imageUrls.portfolioSpotlight,
  },
  {
    label: "Sustainability",
    summary:
      "At Thermax, sustainability is not a target - it is the very foundation of how we engineer progress.",
    links: [
      "Overview",
      "Corporate Social Responsibility",
      "Social Compact",
      "ESG Profile",
      "BRSR Report",
    ],
    spotlight: "Driving Measurable Change",
    spotlightImage: imageUrls.sustainabilitySpotlight,
  },
  {
    label: "Digital Solutions",
    summary:
      "EDGE Live and connected services help industrial teams monitor assets, predict failures and improve performance.",
    links: ["EDGE Live", "Predictive Insights", "Energy Optimisation", "Connected Service"],
    spotlight: "Future-ready operations",
    spotlightImage: imageUrls.capability,
  },
  {
    label: "In the News",
    summary:
      "Current updates on Thermax's business performance, clean-energy projects, digital operations and corporate milestones.",
    links: ["In the News", "Press Releases", "TV Interviews", "Media Kit"],
    spotlight: "Latest newsroom updates",
    spotlightImage: imageUrls.newsOne,
  },
  {
    label: "Investors",
    summary:
      "Thermax is committed to creating long-term value for its investors and shareholders through consistent performance, transparent governance, and responsible financial management.",
    links: [
      "Investor Overview",
      "Financial Information",
      "Governance and Regulatory information",
      "Shareholder Information",
      "Investor Services Contact",
      "Dispute Resolution Mechanism",
      "Disclaimer",
    ],
    spotlight: "Quarterly results and reports",
    spotlightImage: imageUrls.globalSpotlight,
  },
];

export const businessSegments: BusinessSegment[] = [
  {
    label: "Industrial Products",
    image: imageUrls.heroAlt,
    body:
      "The Industrial Products segment offers solutions and services engineered to efficiently meet process heating, cooling, pollution abatement and water management requirements for various sectors.",
    links: [
      "Air Pollution Control Systems",
      "Cooling and Heating Solutions",
      "Process Heat Solutions",
      "Steam Engineering Solutions",
      "Water and Waste Solutions",
    ],
  },
  {
    label: "Industrial Infra",
    image: imageUrls.banner,
    body:
      "Utility-scale solutions that support large steam, power and process requirements with boilers, fired heaters and EPC project capability.",
    links: ["Large Boilers and Fired Heaters", "Projects and Energy Solutions"],
  },
  {
    label: "Green Solutions",
    image: imageUrls.plant,
    body:
      "Decarbonisation platforms covering bio-CNG, build-own-operate models, green hydrogen and renewable energy partnerships.",
    links: ["Bio-CNG Solutions", "Build-Own-Operate Solutions", "Green Hydrogen", "Renewable Energy"],
  },
  {
    label: "Chemicals",
    image: imageUrls.water,
    body:
      "Speciality chemicals, water treatment chemistries, resins and construction chemicals that improve reliability and process efficiency.",
    links: ["Resins", "Water Treatment", "Protective Coatings", "Admixtures and Sealants"],
  },
];

export const capabilities: Capability[] = [
  {
    label: "Energy Transition",
    kicker: "Featured capability",
    image: imageUrls.capability,
    body:
      "Thermax's approach to energy transition is rooted in more than five decades of deep engineering expertise and a legacy of delivering sustainable energy solutions that help industries decarbonise and thrive in a low-carbon future. As climate challenges intensify globally, Thermax recognises that there is no single solution — and this belief shapes our end-to-end capabilities across renewable energy, energy management, waste-to-energy, and clean technologies.",
    body2:
      "Innovation lies at the heart of Thermax's energy transition capability, where pioneering research, strategic partnerships, and practical deployments converge to deliver measurable impact. From waste to energy, scaled-up bio-CNG and hybrid renewable projects to green hydrogen and digital energy management tools, our work accelerates the adoption of cleaner, smarter energy systems across industries. This reinforces Thermax's commitment to be a trusted partner in building resilient and sustainable energy ecosystems for customers and communities worldwide.",
  },
  {
    label: "Digital Solutions",
    kicker: "EDGE Live",
    image: imageUrls.heroAlt,
    body:
      "Industrial IIoT intelligence for uptime, efficiency and early fault detection, combining asset data with Thermax domain expertise.",
  },
  {
    label: "Thermax Serve",
    kicker: "Lifecycle service",
    image: imageUrls.serve,
    body:
      "Service programs, upgrades, audits, genuine spares and life assessment support for Thermax and non-Thermax equipment.",
  },
  {
    label: "Biomass Centre of Excellence",
    kicker: "Cleaner fuels",
    image: imageUrls.biomass,
    body:
      "Fuel evaluation, combustion expertise and system optimisation for industries moving to biomass-based heating.",
  },
  {
    label: "Research and Development",
    kicker: "RTIC",
    image: imageUrls.research,
    body:
      "Technology work in carbon capture, hydrogen, electrochemical systems, biofuels and future-ready industrial decarbonisation.",
  },
  {
    label: "Green Hydrogen",
    kicker: "Featured capability",
    image: imageUrls.plant,
    body:
      "Thermax is partnering with industries to scale green hydrogen production through electrolyser deployment, fuelling the clean-energy transition.",
  },
  {
    label: "Urthh",
    kicker: "Sustainability platform",
    image: imageUrls.banner,
    body:
      "Urthh is Thermax's sustainability platform, helping industrial customers measure and manage emissions, water, energy and waste data to drive decarbonisation.",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: "Thermax Opticor® improves clinker cooler ESP performance by 25%",
    meta: "Read the case study",
    image: "https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-04/Desktop.jpg",
    thumb: "https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-03/project-overview.png",
  },
  {
    title: "Thermax's CLCT boosts reliability and performance of heat exchangers for an IT major",
    meta: "Read the case study",
    image: "https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-04/Desktop_8.jpg",
    thumb: "https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-04/Product_2.jpg",
  },
  {
    title: "Thermax sets a record by installing and commissioning a bi-drum boiler in just 40 days",
    meta: "Read the case study",
    image: "https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-04/Desktop_11.jpg",
    thumb: "https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-03/860px-Width-X-550px-Height_18.png",
  },
  {
    title: "Thermax's absorption heat pumps power Germany's district heating plant",
    meta: "Read the case study",
    image: "https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-04/Desktop_10.jpg",
    thumb: "https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-03/860px-Width-X-550px-Height_1.png",
  },
  {
    title: "Thermax's ZLD technology enables glass manufacturer reduce freshwater consumption",
    meta: "Read the case study",
    image: "https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-04/Desktop_23.jpg",
    thumb: "https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-03/860px-Width-X-550px-Height_2.png",
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
      "Company Overview",
      "Legacy Milestones",
      "Board of Directors",
      "Executive Council",
      "Awards & Recognitions",
      "Manufacturing Facilities",
      "Global Presence",
      "Policies & Certifications",
    ],
  },
  {
    title: "Business Portfolio",
    links: [
      "Air Pollution Control Systems",
      "Cooling and Heating Solutions",
      "Process Heat Solutions",
      "Steam Engineering Solutions",
      "Water and Waste Solutions",
      "Large Boilers and Fired Heaters",
      "Projects and Energy Solutions",
      "Bio-CNG Solutions",
      "Build-Own-Operate Solutions",
      "Green Hydrogen",
      "Renewable Energy",
      "Chemicals",
    ],
  },
  {
    title: "Investors",
    links: [
      "Investor Overview",
      "Quarterly Results",
      "Annual Reports",
      "AGM Information",
      "Thermax Foundation Financial Statements",
      "Board of Directors",
      "Other Directorships",
      "Stock Exchange Intimations",
      "Corporate Governance, Policies and Disclosures",
      "IEPF/Unpaid/Unclaimed Dividend Details",
      "Investor Documents",
      "Shareholding Pattern",
      "Disclosures under Regulation 46 of SEBI (LODR) Regulations",
      "Disclosures Pursuant to SEBI SBEB Regulations",
      "Postal Ballot",
      "TCSL and TIL Notices",
      "Credit Ratings",
      "Insider Trading",
      "Investor Services Contact",
      "Smart ODR Portal",
      "SEBI Investor Website",
      "Disclaimer",
    ],
  },
  {
    title: "Sustainability",
    links: [
      "Overview",
      "Corporate Social Responsibility",
      "Social Compact",
      "ESG Profile",
      "BRSR Report",
    ],
  },
  {
    title: "Corporate Information",
    links: [
      "People",
      "Careers",
      "Press Releases",
      "In the News",
      "TV Interviews",
      "Tenders",
      "Media Kit",
      "Exhibitions",
      "Contact Us",
    ],
  },
  {
    title: "Global Presence",
    links: [
      "Americas",
      "Europe",
      "Sub-Saharan Africa",
      "Middle East & North Africa",
      "Southeast Asia",
      "Indonesia",
      "Thailand",
      "Vietnam",
      "Other Countries (Singapore, Malaysia, Philippines)",
    ],
  },
  {
    title: "Featured Capabilities",
    links: [
      "Digital Solutions",
      "Thermax Serve",
      "Green Hydrogen",
      "Thermax Ne0",
    ],
  },
];
