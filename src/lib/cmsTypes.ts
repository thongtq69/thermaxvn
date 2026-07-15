import type { ProductSubcategoryGroup } from "./site";
import type { ProjectShowcaseItem } from "./projects";

export type ManagedAsset = {
  id: string;
  title: string;
  url: string;
  alt?: string;
  publicId?: string;
  createdAt?: string;
};

export type ManagedNewsItem = {
  id: string;
  title: string;
  date: string;
  category: string;
  image: string;
  sourceLabel?: string;
  sourceUrl?: string;
  summary: string;
  highlights?: string[];
  status?: "draft" | "published";
};

export type ManagedProject = ProjectShowcaseItem & {
  id: string;
  slug: string;
  status?: "draft" | "published";
};

export type FooterLink = {
  id: string;
  label: string;
  href: string;
};

export type FooterGroup = {
  id: string;
  title: string;
  links: FooterLink[];
};

export type ManagedFooter = {
  logoUrl: string;
  officeLabel: string;
  address: string[];
  phone: string;
  phoneHref: string;
  email: string;
  emailHref: string;
  groups: FooterGroup[];
  copyright: string;
  legalLinks: FooterLink[];
};

export type CmsData = {
  assets: ManagedAsset[];
  productGroups: ProductSubcategoryGroup[];
  news: ManagedNewsItem[];
  projects: ManagedProject[];
  footer: ManagedFooter;
};

export type ContactRequest = {
  id: string;
  fullName: string;
  companyName?: string;
  email: string;
  phone: string;
  address?: string;
  country?: string;
  industry?: string;
  message?: string;
  source: string;
  status: "new" | "read";
  createdAt: string;
};
