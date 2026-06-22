import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import clsx from "clsx";
import { TbArrowLeft } from "react-icons/tb";
import { fontGabarito } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import BackToHomepageButton from "@/components/BackToHomepageButton";
import ProjectActionLinks from "@/components/ProjectActionLinks";
import { getProjectBySlug, getProjectUrl, getPublicProjects } from "@/lib/projects";
import { getBreadcrumbSchema, getProjectSchema } from "@/lib/structuredData";

export function generateStaticParams() {
  return getPublicProjects().map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const title = project.title;
  const description = project.description;

  return {
    title,
    description,
    alternates: {
      canonical: getProjectUrl(project.id),
    },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url: `${siteConfig.url}${getProjectUrl(project.id)}`,
      images: [
        {
          url: project.media?.image?.src || project.imageUrl || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${project.title} preview`,
        },
      ],
    },
    twitter: {
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [project.media?.image?.src || project.imageUrl || siteConfig.ogImage],
    },
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const breadcrumbSchema = getBreadcrumbSchema(project);
  const projectSchema = getProjectSchema(project);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <section
        className="relative min-h-screen overflow-hidden px-6 pb-24 pt-24 sm:px-10 lg:px-12"
        style={{
          backgroundColor: "#020617",
          backgroundImage:
            "radial-gradient(circle at top left, rgba(59, 130, 246, 0.22), transparent 28%), linear-gradient(180deg, #020617 0%, #000814 45%, #020617 100%)",
        }}
        data-analytics-view="project_detail_view"
        data-analytics-key={`project-detail-${project.id}`}
        data-analytics-threshold="0.25"
        data-analytics-props={JSON.stringify({
          project_id: project.id,
          project_title: project.title,
          page_type: "project_detail",
        })}
      >
        <div className="mx-auto max-w-5xl">
          <div className="pb-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-white"
              data-analytics-click="navigation_click"
              data-analytics-props={JSON.stringify({
                destination: "/projects",
                source: "project_detail_back_link",
                project_id: project.id,
              })}
            >
              <TbArrowLeft size={18} />
              Back to Projects
            </Link>
          </div>

          <nav aria-label="Breadcrumb" className="pb-8 text-sm text-slate-400">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <span className="px-2 text-slate-600">/</span>
            <Link href="/projects" className="transition hover:text-white">
              Projects
            </Link>
            <span className="px-2 text-slate-600">/</span>
            <span className="text-slate-200">{project.title}</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div>
              <p className="pb-3 text-sm font-medium uppercase tracking-[0.3em] text-blue-300">
                {project.subtitle}
              </p>
              <h1
                className={clsx(
                  "pb-5 text-5xl text-white sm:text-6xl lg:text-7xl",
                  fontGabarito.className
                )}
              >
                {project.title}
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-slate-300">{project.description}</p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <p className="pb-4 text-sm uppercase tracking-[0.2em] text-blue-300">
                Project Snapshot
              </p>
              <dl className="space-y-5 text-sm text-slate-300">
                <div>
                  <dt className="pb-2 font-semibold text-white">Focus</dt>
                  <dd>{project.subtitle}</dd>
                </div>
                <div>
                  <dt className="pb-2 font-semibold text-white">Technology</dt>
                  <dd className="flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200"
                      >
                        {technology}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
              <div className="pt-6">
                <ProjectActionLinks project={project} surface="project_detail" />
              </div>
            </div>
          </div>

          <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-[2rem] border border-white/10">
            <Image
              src={project.media?.image?.src || project.imageUrl || "/images/thumbnails/placeholder.png"}
              alt={`Project artwork for ${project.title}`}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 1200px"
            />
          </div>

          <div className="mt-20 pb-10 pt-4 sm:mt-24 sm:pb-14 sm:pt-8">
            <BackToHomepageButton />
          </div>

        </div>
      </section>
    </>
  );
}
