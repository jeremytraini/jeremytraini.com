import { siteConfig } from "@/config/site";
import { getPublicProjects } from "@/lib/projects";

export default function sitemap() {
  const projectPages = getPublicProjects().map((project) => ({
    url: `${siteConfig.url}/projects/${project.id}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: siteConfig.url,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/projects`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...projectPages,
  ];
}
