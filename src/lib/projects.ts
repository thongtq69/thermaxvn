import { imageUrls } from "./site";

export type ProjectShowcaseItem = {
  title: string;
  category: string;
  description: string;
  image: string;
  href: string;
  region: string;
  capacity: string;
  scope: string;
};

export const industrialInfrastructureProjects: ProjectShowcaseItem[] = [
  {
    title: "Turnkey energy projects for industrial utilities",
    category: "EPC & Energy",
    description:
      "End-to-end EPC and asset management for steam, power and process utility requirements.",
    image:
      "https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2025-10/process-and-energy-solutions-mobile.jpg",
    href: "/projects/projects-and-energy-solutions",
    region: "Industrial utilities",
    capacity: "Steam and power packages",
    scope: "Concept to commissioning",
  },
  {
    title: "Large boilers and fired heaters for steam and power",
    category: "Boilers & Heaters",
    description:
      "Advanced boiler and fired heater packages supporting efficient steam generation and heat duty.",
    image:
      "https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-04/Untitled%20design%20%2843%29.png",
    href: "/projects/large-boilers-and-fired-heaters",
    region: "Global industrial sites",
    capacity: "High-pressure steam",
    scope: "Design, supply and commissioning",
  },
  {
    title: "Bi-drum boiler commissioned in 40 days",
    category: "Execution Record",
    description:
      "A fast-track installation and commissioning reference for a pharmaceutical major in Indonesia.",
    image: "https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-04/Desktop_11.jpg",
    href: "/projects/bi-drum-boiler-40-days",
    region: "Indonesia",
    capacity: "40-day delivery",
    scope: "Installation and commissioning",
  },
  {
    title: "1x800 MW boiler package for utility-scale power",
    category: "Utility Power",
    description:
      "Manufacturing, supply, installation supervision and performance testing for an ultra-supercritical power project.",
    image: imageUrls.bannerInfra,
    href: "/projects/ultra-supercritical-boiler-800-mw",
    region: "Central India",
    capacity: "1x800 MW",
    scope: "Boiler package supply",
  },
  {
    title: "Utility boilers for refinery and petrochemical complex",
    category: "International Delivery",
    description:
      "Engineering, procurement, manufacturing and modular supply for large high-pressure utility boilers.",
    image: imageUrls.heroAlt,
    href: "/projects/refinery-petrochemical-units",
    region: "Nigeria",
    capacity: "4 x 400 TPH",
    scope: "Engineering and modular supply",
  },
];
