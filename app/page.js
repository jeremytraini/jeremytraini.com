import { siteConfig } from "@/config/site";
import { Link } from "@nextui-org/link";
import { fontGabarito } from "@/config/fonts";
import clsx from "clsx";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import EmailButton from "@/components/EmailButton";
import { getAllProjects } from "@/lib/projects";
import { getPersonSchema, getProfilePageSchema } from "@/lib/structuredData";
import {
  ProfileCardSkeleton,
  ProjectsSkeleton,
  TimelineSkeleton,
} from "@/components/LoadingSkeletons";
import {
	GithubIcon,
	LinkedinIcon
} from "@/components/Icons";
import TypingEffect from "@/components/TypingEffect";

export const metadata = {
  alternates: {
    canonical: "/",
  },
};

const ProjectCarousel = dynamic(() => import("@/components/ProjectCarousel"), {
  loading: () => (
    <div className="px-6 sm:px-10 lg:px-12">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-3 backdrop-blur-sm"
          >
            <div className="skeleton-dark h-56 w-full rounded-[1.5rem]" aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  ),
});

const Timeline = dynamic(() => import("@/components/Timeline"), {
  loading: () => <TimelineSkeleton />,
});

const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => <ProjectsSkeleton />,
});

const ProfileCard = dynamic(() => import("@/components/ProfileCard"), {
  loading: () => <ProfileCardSkeleton />,
});

const projects = getAllProjects();

export default function Home() {
  const personSchema = getPersonSchema();
  const profilePageSchema = getProfilePageSchema();

  return (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
    <section
      aria-labelledby="home-heading"
      className="relative flex flex-col justify-evenly pb-32 h-screen max-h-[900px] min-h-[790px]"
    >
      <div
        className="-z-50 absolute w-[400px] h-[800px] left-[10%] top-[-50%] bg-gradient-to-br from-blue-300 to-blue-600 opacity-20 lg:opacity-[35%] filter blur-[175px] transform rotate-[-120deg]"
      />
      <div
        className="-z-50 absolute w-[400px] h-[800px] left-[10%] top-[70%] bg-gradient-to-br from-blue-300 to-blue-600 opacity-10 lg:opacity-30 filter blur-[175px] transform"
      />
      <div
        className="-z-50 absolute w-[400px] h-[800px] right-[10%] top-[5%] bg-gradient-to-br from-blue-300 to-blue-600 opacity-10 lg:opacity-30 filter blur-[175px] transform rotate-[120deg]"
      />
      <div className="flex flex-col justify-center items-center pt-2 md:pt-4 text-center min-h-min">
        <div>
          <h1
            id="home-heading"
            className={clsx(
              "text-white text-6xl sm:text-7xl lg:text-8xl pb-6",
              fontGabarito.className
            )}
          >
            {siteConfig.name}
          </h1>
        </div>
        <div
          className="text-lg sm:text-xl px-16 sm:px-20 text-left text-white pb-8"
        >
          <TypingEffect
            className="sm:text-xl md:text-2xl italic h-12 leading-5 pb-8"
            sequence={[
              "Trust me, I’m not a robot...",
              2000,
              "Trust me, I’m not a robot... but I speak their language.",
            ]}
          />
          <p className="text-gray-200 leading-5 pt-2">Pursuing Software Engineering & Commerce at UNSW.</p>
          <p className="text-gray-200 leading-5 pt-2">Always up for a challenge.</p>
        </div>
        <div className="flex justify-center items-center gap-6 pb-10">
          <Link isExternal href={siteConfig.links.github} aria-label="GitHub">
            <GithubIcon size={32} className="text-white" />
          </Link>
          <Link isExternal href={siteConfig.links.linkedin} aria-label="LinkedIn">
            <LinkedinIcon size={32} className="text-white" />
          </Link>
          <EmailButton />
        </div>
      </div>
      <div className="pb-10">
        <ProjectCarousel projects={projects} />
      </div>
      <Navbar />
    </section>
    <section
      id="timeline"
      aria-labelledby="timeline-heading"
      className="w-full p-12 sm:p-16 bg-gray-100 rounded-t-[4em] mt-[-4em] pb-24"
    >
			<div className="mx-auto max-w-7xl">
				<h2
          id="timeline-heading"
          className={clsx(
            "text-4xl md:text-5xl",
            "text-default-900 pb-10"
          )}
        >
          Timeline
        </h2>
        <div
          className="pb-6 h-full flex flex-row justify-center items-center"
        >
          <Timeline />
        </div>
			</div>
		</section>
    <section
      id="work"
      aria-labelledby="work-heading"
      className="w-full p-12 sm:p-16 bg-white rounded-t-[4em] mt-[-4em] pb-[4em] min-h-screen"
    >
			<div className="mx-auto max-w-7xl pb-8 sm:pb-12">
        <div className="pb-10">
          <h2
            id="work-heading"
            className={clsx(
              "text-4xl md:text-5xl",
              "text-default-900"
            )}
          >
            {"What I’m working on"}
          </h2>
        </div>
        <Projects projects={projects} />
			</div>
		</section>
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="w-full p-12 sm:p-16 bg-gray-100 rounded-t-[4em] mt-[-4em]"
    >
			<div className="mx-auto max-w-7xl pb-20 sm:pb-24">
        <div className="flex w-full justify-end pb-10">
          <div className="flex items-end gap-3 text-default-700">
            <h2
              id="contact-heading"
              className={clsx(
                "text-base leading-none md:text-lg",
                "text-default-700"
              )}
            >
              Contact me on
            </h2>
            <Image
              src="/images/linkedin_full.png"
              alt="LinkedIn logo"
              width={104}
              height={28}
              sizes="220px"
              className="h-[24px] w-auto self-end -translate-y-[2.5px] opacity-80 md:h-[28px]"
            />
          </div>
        </div>
        <ProfileCard />
			</div>
		</section>
  </>
  )
}
