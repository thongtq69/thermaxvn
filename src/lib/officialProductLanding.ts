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
      overviewParagraphs: [
        "The business delivers advanced solutions for particulate and gaseous emission control—from bag filters and electrostatic precipitators (ESPs) to scrubbers and flue gas desulphurisation (FGD) systems, along with biogas and hydrogen purification and upgradation technologies—ensuring cleaner air, greener energy, and regulatory compliance.",
      ],
      stats: [
        { value: "50+", label: "Years of expertise" },
        { value: "90+", label: "Million m³/hour air cleaned annually" },
        { value: "35,000+", label: "Installations worldwide" },
        { value: "50+", label: "Types of dust and gaseous pollutants handled" },
      ],
      productHeading: "Our products",
      products: [
        {
          title: "Electrostatic Precipitator (ESP)",
          image: `${s3}/2025-09/ESP.jpg`,
          href: "/industrial-products/electrostatic-precipitator-esp",
          items: [
            "Available in dry and wet types",
            "Captures 100+ types of particulate matters",
            "Continuous operation with minimal maintenance requirements",
            "Fully automatic DSP-based controller with power optimisation",
            "Double-spiked rigid discharge electrodes",
            "Specially designed self-stiffened collecting electrodes",
            "Equipped with a Thermax impulse gravity impact (TIGI) top rapping system and a tumbling hammer-based bottom rapping mechanism for efficient and reliable ash dislodging",
          ],
        },
        {
          title: "Bag House / Bag Filters",
          image: `${s3}/2026-04/Bag%20HouseBag%20Filters.png`,
          href: "/industrial-products/bag-house-bag-filters",
          items: [
            "Pulse jet fabric filters with online and offline design offerings and patented pulsing technology",
            "Low compressed air pressure and consumption",
            "Low range of operating differential pressure",
            "Varied bag lengths available from 1 to 12 metres",
            "Site-specific design",
            "Designed in compliance with NFPA guidelines",
          ],
        },
        {
          title: "Combofilter",
          image: `${s3}/2025-12/Combofilter.png`,
          href: "/industrial-products/combofilter",
          items: [
            "Enables system upgrades that comply with revised emission norms without additional space requirements",
            "Low compressed air pressure and consumption",
            "Lower differential pressure across the system",
            "Ensures optimum use of the allied system",
          ],
        },
        {
          title: "Scrubber",
          image: `${s3}/2025-11/APC-Scrubber.jpg`,
          href: "/industrial-products/scrubber",
          items: [
            "High collection efficiency for small and sub-micronic particles",
            "Custom-built units capable of handling high gas volumes",
            "Designed to handle high pressure drops",
            "High system tolerance for fluctuating gas volumes",
            "Uniform water distribution that avoids hotspots and reduces abrasion",
          ],
        },
        {
          title: "Thermax Ne0 - Gas Enrichment Solutions",
          image: `${s3}/2025-12/Thermax%20Ne0%20-%20Gas%20Enrichment%20Solutions.jpg`,
          href: "/industrial-products/thermax-neo-gas-enrichment-solutions",
          items: [
            "Biogas purification and upgradation technologies",
            "VPSA for high-purity biogas with low energy consumption",
            "PSA for reliable and proven gas separation performance",
            "Membrane scrubbing systems for compact and flexible biogas upgradation",
            "Hydrogen purification systems for high-purity hydrogen in industrial applications",
          ],
        },
      ],
      serviceHeading: "Our services",
      serviceIntro: "Thermax offers comprehensive support across the product lifecycle that extends beyond brand boundaries.",
      services: [
        {
          title: "Spare parts management for all air pollution control equipment",
          image: `${s3}/2026-03/Spare%20parts%20management%20for%20all%20air%20pollution%20control%20equipment_0.png`,
        },
        {
          title: "Conditional assessment, health check-up and troubleshooting of equipment",
          image: `${s3}/2026-04/health%20check-up%2C%20troubleshooting%20of%20equipment%20%281%29.png`,
        },
        {
          title: "Design engineering services, including efficient gas distribution (CFD analysis)",
          image: `${s3}/2026-03/Design%20engineering%20services%2C%20including%20efficient%20gas%20distribution%20%28CFD%20analysis%29_0.png`,
        },
        {
          title: "Optimisation studies and performance audits",
          image: `${s3}/2026-03/Optimisation%20studies%20and%20performance%20audits_0.png`,
        },
        {
          title: "Remote assistance and virtual technical support (VTS)",
          image: `${s3}/2026-04/Virtual%20technical%20support%20%28VTS%29%20%281%29.png`,
        },
        {
          title: "Annual maintenance contract (AMC)",
          image: `${s3}/2026-03/Annual%20maintenance%20contract%20%28AMC%29_0.png`,
        },
        {
          title: "Annual service contract (ASC)",
          image: `${s3}/2026-03/Annual%20service%20contract%20%28ASC%29_0.png`,
        },
        {
          title: "Overhauling and repairs",
          image: `${s3}/2026-03/Overhauling%20and%20repairs_0.png`,
        },
      ],
      featureHeading: "Featured capabilities",
      features: [
        {
          title: "Thermax Ne0",
          description: "Efficient, clean and green technologies for gas enrichment",
          image: `${s3}/2025-12/Thermax%20Ne0%20-%20Featured%20Capability_0.png`,
          href: "/industrial-products/thermax-neo-gas-enrichment-solutions",
        },
        {
          title: "Thermax Filter Bag",
          description: "Precision-engineered filtration solutions",
          image: `${s3}/2025-12/Thermax%20Filter%20Bag.png`,
        },
        {
          title: "Opticor®",
          description: "Next-generation smart controller for ESPs",
          image: `${s3}/2025-12/Thermax%20Opticor.png`,
          href: "https://www.thermaxglobal.com/industrial-products/air-pollution-control-systems/value-added-services",
        },
        {
          title: "Cartridge Filter",
          description: "Suited for specialised dedusting applications",
          image: `${s3}/2026-01/Thermax%20Cartridge%20Filter_0.png`,
        },
        {
          title: "Value added services",
          description: "Enhancing reliability, efficiency, and equipment performance",
          image: `${s3}/2025-12/Value%20added%20services.png`,
          href: "https://www.thermaxglobal.com/industrial-products/air-pollution-control-systems/value-added-services",
        },
      ],
      industries: [
        "Metal and Mining",
        "Cement",
        "Power Generation",
        "Waste to Energy",
        "Renewable Energy",
        "Refineries & Petrochemicals",
        "Semiconductor and Electronics",
        "Sugar",
        "Drugs and Pharmaceuticals",
        "Food & Beverage",
        "Rubber",
        "Paper & Pulp",
      ],
      caseStudies: [
        {
          title: "Thermax Opticor® improves clinker cooler ESP performance by 25%",
          badge: "Air Pollution Control Systems",
          image: `${s3}/2026-04/Tumbnail.jpg`,
          href: "https://www.thermaxglobal.com/case-study/thermax-opticor-improves-clinker-cooler-esp-performance-by-25",
        },
        {
          title: "Thermax Opticor® reduces emissions by 20% from ESP without equipment replacement",
          badge: "Air Pollution Control Systems",
          image: `${s3}/2026-04/Tumbnail_0.jpg`,
          href: "https://www.thermaxglobal.com/case-study/thermax-opticor-reduces-emissions-by-20-from-esp-without-equipment-replacement",
        },
        {
          title: "Strengthening India's solar manufacturing with indigenous air pollution control solutions",
          badge: "Air Pollution Control Systems",
          image: `${s3}/2026-04/Tumbnail_3.jpg`,
          href: "https://www.thermaxglobal.com/case-study/strengthening-indias-solar-manufacturing-with-indigenous-air-pollution-control-solutions",
        },
        {
          title: "Thermax Ne0 showcases the true potential of VSA technology in biogas upgradation",
          badge: "Air Pollution Control Systems",
          image: `${s3}/2026-04/Tumbnail_4.jpg`,
          href: "https://www.thermaxglobal.com/case-study/thermax-ne0-showcases-the-true-potential-of-vsa-technology-in-biogas-upgradation",
        },
        {
          title: "Steel manufacturer improved ESP performance by 40% with Thermax Opticor®",
          badge: "Air Pollution Control Systems",
          image: `${s3}/2026-04/Tumbnail_2.jpg`,
          href: "https://www.thermaxglobal.com/case-study/steel-manufacturer-improved-esp-performance-by-40-with-thermax-opticor",
        },
        {
          title: "Compact yet powerful: Thermax's advanced baghouse solution for cement plant expansion",
          badge: "Air Pollution Control Systems",
          image: `${s3}/2026-04/Tumbnail_1.jpg`,
          href: "https://www.thermaxglobal.com/case-study/compact-yet-powerful-thermaxs-advanced-baghouse-solution-for-cement-plant-expansion",
        },
      ],
      resources: [
        {
          type: "Brochure",
          title: "Air Pollution Control Systems Download",
          href: `${s3}/2026-04/Thermax%20Air%20Pollution%20Control%20Products%20Brochure.pdf`,
        },
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
      overviewParagraphs: [
        "With steam, thermal oil, hot water, hot air, and their combinations as heating media, these solutions use biomass, electricity, and conventional solid, liquid, and gaseous fuels to deliver efficiency, reliability, flexibility, and sustainability across industrial applications.",
      ],
      stats: [
        { value: "35,000+", label: "Installations" },
        { value: "38+", label: "Countries served" },
        { value: "4", label: "Types of heating media" },
        { value: "150+", label: "Types of energy sources leveraged" },
      ],
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
      overviewParagraphs: [
        "From high-performance products to expert consultancy, Thermax helps industries improve operational excellence, energy efficiency, and regulatory compliance while reducing their environmental footprint.",
      ],
      stats: [
        { value: "17+", label: "Years of technical expertise" },
        { value: "20+", label: "Presence in countries" },
        { value: "230,000+", label: "Installations" },
        { value: "80+", label: "Dealer network" },
      ],
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
      overviewParagraphs: [
        "With over three decades of experience, Thermax delivers end-to-end cooling and heating expertise using waste heat, electricity, and hybrid technologies to lower operating costs and support a more sustainable future.",
      ],
      stats: [
        { value: "8,300+", label: "Installations" },
        { value: "100+", label: "Countries served" },
        { value: "6+", label: "Heat sources" },
        { value: "-40°C to 140°C", label: "Temperature range" },
      ],
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
  "The business delivers advanced solutions for particulate and gaseous emission control—from bag filters and electrostatic precipitators (ESPs) to scrubbers and flue gas desulphurisation (FGD) systems, along with biogas and hydrogen purification and upgradation technologies—ensuring cleaner air, greener energy, and regulatory compliance.": "Mảng này cung cấp các giải pháp tiên tiến để kiểm soát bụi và khí thải, từ bộ lọc túi, bộ lọc tĩnh điện (ESP), tháp rửa khí đến hệ thống khử lưu huỳnh khí thải (FGD), cùng công nghệ tinh sạch và nâng cấp khí sinh học, hydro, góp phần bảo đảm không khí sạch hơn, năng lượng xanh hơn và tuân thủ quy định.",
  "Years of expertise": "Năm kinh nghiệm",
  "Air cleaned annually": "Lưu lượng không khí được làm sạch mỗi giờ",
  "Million m³/hour air cleaned annually": "Triệu m³ không khí được làm sạch mỗi giờ",
  "Installations worldwide": "Hệ thống đã lắp đặt toàn cầu",
  "Types of pollutants handled": "Loại bụi và khí ô nhiễm được xử lý",
  "Types of dust and gaseous pollutants handled": "Loại bụi và khí ô nhiễm được xử lý",
  "Available in dry and wet types": "Có phiên bản khô và ướt",
  "Captures 100+ types of particulate matters": "Thu giữ hơn 100 loại bụi hạt",
  "Continuous operation with minimal maintenance requirements": "Vận hành liên tục với yêu cầu bảo trì tối thiểu",
  "Fully automatic DSP-based controller with power optimisation": "Bộ điều khiển DSP hoàn toàn tự động, có chức năng tối ưu công suất",
  "Double-spiked rigid discharge electrodes": "Điện cực phóng dạng cứng hai hàng gai",
  "Specially designed self-stiffened collecting electrodes": "Điện cực thu tự tăng cứng được thiết kế chuyên biệt",
  "Equipped with a Thermax impulse gravity impact (TIGI) top rapping system and a tumbling hammer-based bottom rapping mechanism for efficient and reliable ash dislodging": "Trang bị hệ thống gõ đỉnh TIGI của Thermax và cơ cấu búa lật gõ đáy, giúp tách tro hiệu quả và tin cậy",
  "Pulse jet fabric filters with online and offline design offerings and patented pulsing technology": "Bộ lọc vải xung khí nén có thiết kế trực tuyến và ngoại tuyến, ứng dụng công nghệ tạo xung đã được cấp bằng sáng chế",
  "Low compressed air pressure and consumption": "Áp suất và mức tiêu thụ khí nén thấp",
  "Low range of operating differential pressure": "Dải chênh áp vận hành thấp",
  "Varied bag lengths available from 1 to 12 metres": "Nhiều lựa chọn chiều dài túi lọc từ 1 đến 12 mét",
  "Site-specific design": "Thiết kế phù hợp với điều kiện lắp đặt",
  "Designed in compliance with NFPA guidelines": "Thiết kế tuân thủ hướng dẫn của NFPA",
  "Enables system upgrades that comply with revised emission norms without additional space requirements": "Cho phép nâng cấp hệ thống để đáp ứng tiêu chuẩn phát thải mới mà không cần thêm diện tích lắp đặt",
  "Lower differential pressure across the system": "Chênh áp qua hệ thống thấp hơn",
  "Ensures optimum use of the allied system": "Bảo đảm khai thác tối ưu các hệ thống phụ trợ",
  "High collection efficiency for small and sub-micronic particles": "Hiệu suất thu gom cao đối với hạt nhỏ và hạt dưới micromet",
  "Custom-built units capable of handling high gas volumes": "Thiết bị được thiết kế theo yêu cầu, có khả năng xử lý lưu lượng khí lớn",
  "Designed to handle high pressure drops": "Thiết kế để đáp ứng mức tổn thất áp suất cao",
  "High system tolerance for fluctuating gas volumes": "Hệ thống thích ứng tốt với lưu lượng khí biến động",
  "Uniform water distribution that avoids hotspots and reduces abrasion": "Phân phối nước đồng đều, tránh điểm nóng và giảm mài mòn",
  "Biogas purification and upgradation technologies": "Công nghệ tinh sạch và nâng cấp khí sinh học",
  "VPSA for high-purity biogas with low energy consumption": "Công nghệ VPSA tạo khí sinh học độ tinh khiết cao với mức tiêu thụ năng lượng thấp",
  "PSA for reliable and proven gas separation performance": "Công nghệ PSA mang lại hiệu suất tách khí tin cậy đã được kiểm chứng",
  "Membrane scrubbing systems for compact and flexible biogas upgradation": "Hệ thống màng tách nhỏ gọn, linh hoạt cho quá trình nâng cấp khí sinh học",
  "Hydrogen purification systems for high-purity hydrogen in industrial applications": "Hệ thống tinh sạch hydro tạo hydro độ tinh khiết cao cho các ứng dụng công nghiệp",
  "Spare parts management for all air pollution control equipment": "Quản lý phụ tùng cho toàn bộ thiết bị kiểm soát ô nhiễm không khí",
  "Conditional assessment, health check-up and troubleshooting of equipment": "Đánh giá tình trạng, kiểm tra sức khỏe và xử lý sự cố thiết bị",
  "Design engineering services, including efficient gas distribution (CFD analysis)": "Dịch vụ thiết kế kỹ thuật, bao gồm tối ưu phân phối khí bằng phân tích CFD",
  "Optimisation studies and performance audits": "Nghiên cứu tối ưu và kiểm toán hiệu suất",
  "Remote assistance and virtual technical support (VTS)": "Hỗ trợ từ xa và hỗ trợ kỹ thuật trực tuyến (VTS)",
  "Annual maintenance contract (AMC)": "Hợp đồng bảo trì hằng năm (AMC)",
  "Annual service contract (ASC)": "Hợp đồng dịch vụ hằng năm (ASC)",
  "Overhauling and repairs": "Đại tu và sửa chữa",
  "Precision-engineered filtration solutions": "Giải pháp lọc được thiết kế với độ chính xác cao",
  "Next-generation smart controller for ESPs": "Bộ điều khiển thông minh thế hệ mới cho hệ thống ESP",
  "Suited for specialised dedusting applications": "Phù hợp với các ứng dụng khử bụi chuyên biệt",
  "Value added services": "Dịch vụ giá trị gia tăng",
  "Enhancing reliability, efficiency, and equipment performance": "Nâng cao độ tin cậy, hiệu quả và hiệu suất thiết bị",
  "Metal and Mining": "Kim loại và khai khoáng",
  "Power Generation": "Phát điện",
  "Waste to Energy": "Chuyển đổi chất thải thành năng lượng",
  "Renewable Energy": "Năng lượng tái tạo",
  "Refineries & Petrochemicals": "Lọc dầu và hóa dầu",
  "Semiconductor and Electronics": "Bán dẫn và điện tử",
  Sugar: "Mía đường",
  Rubber: "Cao su",
  "Thermax Opticor® improves clinker cooler ESP performance by 25%": "Thermax Opticor® cải thiện 25% hiệu suất ESP của bộ làm mát clinker",
  "Thermax Opticor® reduces emissions by 20% from ESP without equipment replacement": "Thermax Opticor® giảm 20% phát thải từ ESP mà không cần thay thế thiết bị",
  "Strengthening India's solar manufacturing with indigenous air pollution control solutions": "Nâng cao năng lực sản xuất năng lượng mặt trời tại Ấn Độ bằng giải pháp kiểm soát ô nhiễm không khí nội địa",
  "Thermax Ne0 showcases the true potential of VSA technology in biogas upgradation": "Thermax Ne0 khẳng định tiềm năng thực tế của công nghệ VSA trong nâng cấp khí sinh học",
  "Steel manufacturer improved ESP performance by 40% with Thermax Opticor®": "Nhà sản xuất thép cải thiện 40% hiệu suất ESP với Thermax Opticor®",
  "Compact yet powerful: Thermax's advanced baghouse solution for cement plant expansion": "Nhỏ gọn nhưng mạnh mẽ: giải pháp lọc túi tiên tiến của Thermax cho dự án mở rộng nhà máy xi măng",
  "Air Pollution Control Systems Download": "Tải brochure Hệ thống kiểm soát ô nhiễm không khí",
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
  "With steam, thermal oil, hot water, hot air, and their combinations as heating media, these solutions use biomass, electricity, and conventional solid, liquid, and gaseous fuels to deliver efficiency, reliability, flexibility, and sustainability across industrial applications.": "Với hơi nước, dầu tải nhiệt, nước nóng, không khí nóng và các tổ hợp làm môi chất gia nhiệt, những giải pháp này sử dụng sinh khối, điện cùng nhiên liệu rắn, lỏng và khí truyền thống để mang lại hiệu quả, độ tin cậy, tính linh hoạt và bền vững cho nhiều ứng dụng công nghiệp.",
  "Countries served": "Quốc gia được phục vụ",
  "Types of heating media": "Loại môi chất gia nhiệt",
  "Types of energy sources leveraged": "Loại nguồn năng lượng được sử dụng",
  "Steam Engineering Solutions": "Hệ thống đường ống hơi",
  "Driving efficiency, compliance, and sustainability with advanced steam systems": "Nâng cao hiệu quả, tuân thủ và tính bền vững bằng hệ thống hơi tiên tiến",
  "Thermax's Steam Engineering business group delivers cutting-edge solutions that optimise steam generation, distribution, utilisation and condensate recovery systems.": "Mảng kỹ thuật hơi của Thermax cung cấp các giải pháp tiên tiến để tối ưu hệ thống tạo hơi, phân phối, sử dụng hơi và thu hồi nước ngưng.",
  "cutting-edge solutions that optimise steam generation, distribution, utilisation and condensate recovery systems": "các giải pháp tiên tiến để tối ưu hệ thống tạo hơi, phân phối, sử dụng hơi và thu hồi nước ngưng",
  "From high-performance products to expert consultancy, Thermax helps industries improve operational excellence, energy efficiency, and regulatory compliance while reducing their environmental footprint.": "Từ sản phẩm hiệu suất cao đến tư vấn chuyên sâu, Thermax giúp doanh nghiệp nâng cao chất lượng vận hành, hiệu quả năng lượng và khả năng tuân thủ, đồng thời giảm tác động môi trường.",
  "Years of technical expertise": "Năm kinh nghiệm kỹ thuật",
  "Presence in countries": "Quốc gia hiện diện",
  "Dealer network": "Đối tác trong mạng lưới phân phối",
  "Cooling and Heating Solutions": "Hệ thống lạnh",
  "Innovative thermal solutions that maximise energy efficiency, utilise waste heat, save water and support a sustainable future": "Giải pháp nhiệt đổi mới giúp tối đa hiệu quả năng lượng, tận dụng nhiệt thải, tiết kiệm nước và hướng tới tương lai bền vững",
  "Thermax's Cooling and Heating Solutions deliver energy-efficient systems that use advanced energy recovery and transfer technologies to minimise environmental impact across industrial and commercial operations.": "Giải pháp làm mát và gia nhiệt của Thermax sử dụng công nghệ thu hồi và truyền năng lượng tiên tiến để giảm tác động môi trường trong vận hành công nghiệp và thương mại.",
  "advanced energy recovery and transfer technologies": "công nghệ thu hồi và truyền năng lượng tiên tiến",
  "With over three decades of experience, Thermax delivers end-to-end cooling and heating expertise using waste heat, electricity, and hybrid technologies to lower operating costs and support a more sustainable future.": "Với hơn ba thập kỷ kinh nghiệm, Thermax cung cấp giải pháp làm mát và gia nhiệt toàn diện sử dụng nhiệt thải, điện và công nghệ lai nhằm giảm chi phí vận hành và hướng tới tương lai bền vững hơn.",
  "Heat sources": "Nguồn nhiệt",
  "Temperature range": "Dải nhiệt độ đáp ứng",
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
  "Thermax offers comprehensive support across the product lifecycle that extends beyond brand boundaries.": "Thermax cung cấp hỗ trợ toàn diện trong suốt vòng đời sản phẩm, không giới hạn theo thương hiệu thiết bị.",
  "Conditional assessment, health check-up and troubleshooting": "Đánh giá tình trạng, kiểm tra sức khỏe thiết bị và xử lý sự cố",
  "Design engineering services, including efficient gas distribution": "Dịch vụ thiết kế kỹ thuật, bao gồm tối ưu phân phối khí",
  "Remote assistance and virtual technical support": "Hỗ trợ từ xa và tư vấn kỹ thuật trực tuyến",
  "Annual maintenance and service contracts": "Hợp đồng bảo trì và dịch vụ định kỳ",
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
