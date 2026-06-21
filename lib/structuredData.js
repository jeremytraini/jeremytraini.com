import { siteConfig } from "@/config/site";
import { getProjectUrl } from "@/lib/projects";

function absoluteUrl(path = "") {
  if (!path) return siteConfig.url;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${siteConfig.url}${path}`;
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    alternateName: siteConfig.applicationName,
    url: siteConfig.url,
    description: siteConfig.description,
  };
}

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    image: absoluteUrl("/images/me.jpg"),
    jobTitle: "Software Engineer",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "UNSW",
      sameAs: "https://www.unsw.edu.au",
    },
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin, siteConfig.links.dribbble],
  };
}

export function getProjectsCollectionSchema(projects) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Projects",
    url: `${siteConfig.url}/projects`,
    description:
      "Software projects and product work from Jeremy Traini across web, mobile, analytics, and platform engineering.",
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${siteConfig.url}${getProjectUrl(project.id)}`,
        name: project.title,
      })),
    },
  };
}

export function getBreadcrumbSchema(project) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: `${siteConfig.url}/projects`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: `${siteConfig.url}${getProjectUrl(project.id)}`,
      },
    ],
  };
}

export function getProjectSchema(project) {
  const projectUrl = `${siteConfig.url}${getProjectUrl(project.id)}`;
  const schemaType =
    project.seo?.schemaType ||
    (!project.repository?.private && project.repository?.name ? "SoftwareSourceCode" : "CreativeWork");
  const sameAs = [
    project.links?.live && project.links.live !== "#" ? project.links.live : null,
    project.links?.figma || null,
    project.links?.appStore || null,
    !project.repository?.private && project.repository?.name
      ? `https://github.com/jeremytraini/${project.repository.name}`
      : null,
  ].filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@type": schemaType,
    name: project.title,
    headline: project.title,
    description: project.description,
    url: projectUrl,
    image: absoluteUrl(project.media?.image?.src || project.imageUrl || siteConfig.ogImage),
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    creator: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    inLanguage: "en-AU",
    keywords: project.technologies.join(", "),
    programmingLanguage: project.technologies,
    about: project.subtitle,
    sameAs,
    isPartOf: {
      "@type": "CollectionPage",
      name: "Projects",
      url: `${siteConfig.url}/projects`,
    },
  };
}
