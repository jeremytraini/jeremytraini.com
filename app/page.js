import { siteConfig } from "@/config/site";
import projects from "../data/projects.yaml";
import { Link } from "@nextui-org/link";
import { fontGabarito } from "@/config/fonts";
import clsx from "clsx";
import Image from 'next/image';
import { Navbar } from "@/components/Navbar";
import ProjectCarousel from "@/components/ProjectCarousel";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import ProfileCard from "@/components/ProfileCard";
import EmailButton from "@/components/EmailButton";
import {
	GithubIcon,
	LinkedinIcon
} from "@/components/Icons";
import TypingEffect from "@/components/TypingEffect";

export default function Home() {
  return (
  <>
    <section className="relative flex flex-col justify-evenly pb-32 h-screen max-h-[900px] min-h-[790px]">
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
          <div
            className={clsx(
              "text-white text-6xl sm:text-7xl lg:text-8xl pb-6",
              fontGabarito.className
            )}
          >
            {siteConfig.name}
          </div>
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
          <Link isExternal href={siteConfig.links.github} aria-label="Github">
            <GithubIcon size={32} className="text-white" />
          </Link>
          <Link isExternal href={siteConfig.links.linkedin} aria-label="Linkedin">
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
    <section id="timeline" className="w-full p-12 sm:p-16 bg-gray-100 rounded-t-[4em] mt-[-4em] pb-24">
			<div className="mx-auto max-w-7xl">
				<h1
          className={clsx(
            "text-4xl md:text-5xl",
            "text-default-900 pb-10"
          )}
        >
          Timeline
        </h1>
        <div
          className="pb-6 h-full flex flex-row justify-center items-center"
        >
          <Timeline />
        </div>
			</div>
		</section>
    <section id="work" className="w-full p-12 sm:p-16 bg-white rounded-t-[4em] mt-[-4em] pb-[4em] min-h-screen">
			<div className="mx-auto max-w-7xl pb-8 sm:pb-12">
        <h1
          className={clsx(
            "text-4xl md:text-5xl",
            "text-default-900 pb-10"
          )}
        >
          What I&apos;m working on
        </h1>
        <Projects projects={projects} />
			</div>
		</section>
    <section id="contact" className="w-full p-12 sm:p-16 bg-gray-100 rounded-t-[4em] mt-[-4em]">
			<div className="mx-auto max-w-7xl pb-20 sm:pb-24">
        <div className="flex flex-row justify-end items-end w-full pb-10">
          <h1
            className={clsx(
              "invisible sm:visible text-xl md:text-2xl pb-[1.1px] md:pb-[1px]",
              "text-default-900"
            )}
          >
            Contact me on
          </h1>
          <div
            className="invisible sm:visible relative w-[160px] h-[43.43px] ml-3"
          >
            <Image
              src="/images/linkedin_full.png"
              alt="LinkedIn logo"
              fill
              sizes="320px"
            />
          </div>
        </div>
        <ProfileCard />
			</div>
		</section>
  </>
  )
}
