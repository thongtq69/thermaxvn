import type { SolutionItem } from "../components/SolutionsTabs";
import { productSubcategoryGroups } from "./site";

function subcategoriesFor(label: string) {
  return productSubcategoryGroups.find((group) => group.label === label)?.children ?? [];
}

export const industrialProductsSolutions: SolutionItem[] = [
  {
    title: "Air Pollution Control Systems",
    description: "Effective solutions for abatement of particulate and gaseous pollutants",
    image: "https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2025-09/apc-banner-mobile.jpg",
    href: "/industrial-products/air-pollution-control-systems",
    children: subcategoriesFor("Air Pollution Control Systems"),
  },
  {
    title: "Process Heat Solutions",
    description: "Reliable, fuel-flexible, efficient, and sustainable heating solutions for every industry",
    image:
      "https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-04/Process%20Heat%20Solutions%20Banner%20mobile.png",
    href: "/industrial-products/process-heat-solutions",
    children: subcategoriesFor("Process Heat Solutions"),
  },
  {
    title: "Steam Engineering Solutions",
    description: "Driving efficiency, compliance, and sustainability with advanced steam systems",
    image: "https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2025-09/steam_mobile_banner.jpg",
    href: "/industrial-products/steam-engineering-solutions",
    children: subcategoriesFor("Steam Engineering Solutions"),
  },
  {
    title: "Cooling and Heating Solutions",
    description: "Energy-efficient cooling and heating systems for industrial and commercial spaces",
    image:
      "https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2025-09/cooling-heating-mobile.jpg",
    href: "/industrial-products/cooling-and-heating-solutions",
    children: subcategoriesFor("Cooling and Heating Solutions"),
  },
  {
    title: "Water and Waste Solutions",
    description: "Comprehensive water treatment and wastewater management for sustainable operations",
    image: "https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2025-09/water-banner-mobile.jpg",
    href: "/industrial-products/water-and-waste-solutions",
    children: subcategoriesFor("Water and Waste Solutions"),
  },
];

export const industrialInfraSolutions: SolutionItem[] = [
  {
    title: "Projects and Energy Solutions",
    description:
      "From concept to commissioning and beyond, turnkey EPC and asset management solutions delivering assured performance, safe and timely execution, and the lowest lifetime cost",
    image:
      "https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2025-10/process-and-energy-solutions-mobile.jpg",
    href: "/industrial-infra/projects-and-energy-solutions",
  },
  {
    title: "Large Boilers and Fired Heaters",
    description:
      "Advanced boiler and fired heater solutions enabling efficient steam and energy generation worldwide",
    image:
      "https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-04/Untitled%20design%20%2843%29.png",
    href: "/industrial-infra/large-boilers-and-fired-heaters",
  },
];

export const greenSolutions: SolutionItem[] = [
  {
    title: "Bio-CNG Solutions",
    description: "Enabling circular energy with scalable bio-CNG solutions",
    image:
      "https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2025-10/bioenergy-solutions-mobile.jpg",
    href: "/green-solutions/bio-energy-solutions",
  },
  {
    title: "Build-Own-Operate Solutions",
    description:
      "TOESL's assured green utility solutions are based on the build-own-operate model for optimised lifecycle performance",
    image:
      "https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-04/Build-Own-Operate%20Solutions%20Mobile.png",
    href: "/green-solutions/build-own-operate-solutions",
  },
  {
    title: "Green Hydrogen",
    description: "Powering a green transition through scalable alkaline systems and solid oxide electrolysers",
    image:
      "https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-04/Green%20hydrogen%20mobile_0.png",
    href: "/green-solutions/green-hydrogen",
  },
  {
    title: "Renewable Energy",
    description: "First Energy (FEPL), under the Thermax brand, delivers bespoke renewable energy solutions worldwide",
    image:
      "https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-04/banner-solar-energy-mob_0.jpg",
    href: "/green-solutions/renewable-energy",
  },
];

export const chemicalSolutions: SolutionItem[] = [
  {
    title: "Ion Exchange Resins",
    description:
      "Industry-leading ion exchange resins for water purification, separation, and process applications across diverse industries.",
    image:
      "https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2025-10/chemicals-desktop-banner.jpg",
    href: "/industrial-products/ion-exchange-resins",
  },
  {
    title: "Water Treatment",
    description:
      "Specialised treatment chemicals for boiler water, cooling water, process water and wastewater applications.",
    image: "https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2025-10/chemicals-desktop-banner.jpg",
    href: "/industrial-products/water-treatment",
  },
  {
    title: "Protective Coatings",
    description: "Protective coatings and waterproofing systems for industrial structures, plants and infrastructure assets.",
    image: "https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2025-10/chemicals-desktop-banner.jpg",
    href: "/industrial-products/protective-coatings",
  },
  {
    title: "Admixtures and Sealants",
    description: "Concrete admixtures, grouts, anchors, sealants and adhesives for construction and repair applications.",
    image: "https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2025-10/chemicals-desktop-banner.jpg",
    href: "/industrial-products/admixtures-and-sealants",
  },
];

export const sharedCaseStudies = [
  {
    title: "Thermax Opticor® improves clinker cooler ESP performance by 25%",
    image: "https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-04/Desktop.jpg",
    href: "/case-study/thermax-opticor-improves-clinker-cooler-esp-performance-by-25",
    category: "Air Pollution Control",
    date: "18/04/2026",
    summary: "Thermax Opticor® solution improves the clinker cooler electrostatic precipitator (ESP) performance by 25%, ensuring strict emissions compliance.",
  },
  {
    title: "Thermax's CLCT boosts reliability and performance of heat exchangers for an IT major",
    image: "https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-04/Desktop_8.jpg",
    href: "/case-study/thermaxs-clct-boosts-reliability-and-performance-of-heat-exchangers-for-an-it-major",
    category: "Cooling & Heating",
    date: "08/04/2026",
    summary: "Thermax's closed loop cooling tower (CLCT) boosts reliability and performance of heat exchangers for a prominent IT major's data centre.",
  },
  {
    title: "Bi-drum boiler installed and commissioned in just 40 days for a pharmaceutical major",
    image: "https://tmx-drupal-global-prod-s3.s3.ap-south-1.amazonaws.com/s3fs-public/2026-04/Desktop_11.jpg",
    href: "/case-study/thermax-sets-a-record-by-installing-and-commissioning-a-bi-drum-boiler-in-just-40-days-for-a-pharmaceutical-major-in-indonesia",
    category: "Process Heat",
    date: "26/03/2026",
    summary: "Thermax set a record by installing and commissioning a bi-drum boiler in just 40 days for a pharmaceutical major in Indonesia.",
  },
];
