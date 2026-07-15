import { industrialInfrastructureProjects } from "./projects";
import { footerGroups, imageUrls, newsItems, productSubcategoryGroups, vietnamOffice } from "./site";
import type { CmsData, FooterLink, ManagedFooter, ManagedNewsItem, ManagedProject } from "./cmsTypes";

const slugFromHref = (href: string) => href.split("/").filter(Boolean).pop() || href.replace(/[^a-z0-9]+/gi, "-");

export const defaultNews: ManagedNewsItem[] = newsItems.map((item, index) => ({
  id: `default-news-${index + 1}`,
  title: item.title,
  date: item.date,
  category: index === 0 ? "Financial results" : index === 1 ? "Orders" : "Energy transition",
  image: item.image,
  sourceLabel: "Chi tiết tin tức",
  sourceUrl: "/in-the-news",
  summary: item.title,
  highlights: [],
  status: "published",
}));

export const defaultProjects: ManagedProject[] = industrialInfrastructureProjects.map((project, index) => ({
  ...project,
  id: `default-project-${index + 1}`,
  slug: slugFromHref(project.href),
  status: "published",
}));

const footerLink = (label: string, href: string, id: string): FooterLink => ({ id, label, href });

export const defaultFooter: ManagedFooter = {
  logoUrl: imageUrls.logo,
  officeLabel: vietnamOffice.label,
  address: vietnamOffice.address,
  phone: vietnamOffice.phone,
  phoneHref: vietnamOffice.phoneHref,
  email: vietnamOffice.email,
  emailHref: vietnamOffice.emailHref,
  groups: footerGroups.map((group, groupIndex) => ({
    id: `default-footer-group-${groupIndex + 1}`,
    title: group.title,
    links: group.links.map((link, linkIndex) => footerLink(
      link.label,
      link.href,
      `default-footer-link-${groupIndex + 1}-${linkIndex + 1}`,
    )),
  })),
  copyright: "© Copyright 2026 Thermax Limited. All Rights Reserved.",
  legalLinks: [
    footerLink("Privacy Policy", "#", "default-footer-legal-1"),
    footerLink("Terms of Use", "#", "default-footer-legal-2"),
  ],
};

export const defaultCmsData: CmsData = {
  assets: [
    {
      id: "default-asset-1",
      title: "Thermax Vietnam",
      url: imageUrls.heroAlt,
      alt: "Thermax industrial product image",
    },
  ],
  productGroups: productSubcategoryGroups,
  news: defaultNews,
  projects: defaultProjects,
  footer: defaultFooter,
};
