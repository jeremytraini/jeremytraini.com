import projects from "@/data/projects.yaml";

function normalizeProject(project) {
  const image = project.media?.image || {};
  const repository = project.repository || {};
  const links = project.links || {};
  const visibility = project.visibility || {};
  const seo = project.seo || {};
  const content = project.content || {};

  return {
    ...project,
    media: {
      image,
    },
    repository,
    links,
    visibility,
    seo,
    content,
    imageUrl: image.src,
    imageHeight: image.height,
    imageWidth: image.width,
    githubRepo: repository.name,
    isPrivate: repository.private ?? false,
    liveLink: links.live,
    figmaLink: links.figma,
    appStoreUrl: links.appStore,
    hidden: visibility.listed === false,
  };
}

export function getAllProjects() {
  return projects.map(normalizeProject);
}

export function getPublicProjects() {
  return getAllProjects().filter((project) => !project.hidden);
}

export function getProjectBySlug(slug) {
  return getPublicProjects().find((project) => project.id === slug) || null;
}

export function getProjectUrl(slug) {
  return `/projects/${slug}`;
}
