import { industrialInfrastructureProjects } from "./projects";
import { imageUrls, newsItems, productSubcategoryGroups } from "./site";
import type { CmsData, ManagedNewsItem, ManagedProject } from "./cmsTypes";

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
};
