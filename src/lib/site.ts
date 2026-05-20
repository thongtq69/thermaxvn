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
      "Industrial Products businesses offer solutions and services engineered to efficiently meet process heating, cooling, pollution abatement and water management requirements for various segments.",
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
  },
  {
    title: "Thermax’s electrical heat pump delivers sustainable heating for a textile major",
    meta: "Read the case study",
    image: imageUrls.caseVietnamTextile,
    thumb: imageUrls.caseVietnamTextileThumb,
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
