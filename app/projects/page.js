import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { TbArrowLeft } from "react-icons/tb";
import { fontGabarito } from "@/config/fonts";
import { getProjectUrl, getPublicProjects } from "@/lib/projects";
import { getProjectsCollectionSchema } from "@/lib/structuredData";
import BackToHomepageButton from "@/components/BackToHomepageButton";

const projects = getPublicProjects();

export const metadata = {
  title: "Projects",
  description:
    "Software projects and product work from Jeremy Traini across web, mobile, analytics and platform engineering.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  const collectionSchema = getProjectsCollectionSchema(projects);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <section
        className="relative min-h-screen overflow-hidden px-6 pb-36 pt-24 sm:px-10 sm:pb-40 lg:px-12"
        style={{
          backgroundColor: "#020617",
          backgroundImage:
            "radial-gradient(circle at top left, rgba(59, 130, 246, 0.22), transparent 28%), linear-gradient(180deg, #020617 0%, #000814 45%, #020617 100%)",
        }}
      >
        <div className="mx-auto max-w-5xl">
          <div className="pb-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-white"
            >
              <TbArrowLeft size={18} />
              Back to Home
            </Link>
          </div>

          <nav aria-label="Breadcrumb" className="pb-8 text-sm text-slate-400">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <span className="px-2 text-slate-600">/</span>
            <span className="text-slate-200">Projects</span>
          </nav>
          <div className="max-w-3xl pb-12">
            <h1
              className={clsx(
                "pb-4 text-5xl text-white sm:text-6xl lg:text-7xl",
                fontGabarito.className
              )}
            >
              Project Archive
            </h1>
            <p className="text-base leading-7 text-slate-300 sm:text-lg">
              Software projects and product work.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={getProjectUrl(project.id)}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.imageUrl || "/images/thumbnails/placeholder.png"}
                    alt={`Preview of ${project.title}`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>
                <div className="space-y-4 p-6">
                  <div>
                    <p className="pb-2 text-sm font-medium uppercase tracking-[0.2em] text-blue-300">
                      {project.subtitle}
                    </p>
                    <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-20 pb-10 pt-4 sm:mt-24 sm:pb-14 sm:pt-8">
            <BackToHomepageButton />
          </div>
        </div>
      </section>
    </>
  );
}
