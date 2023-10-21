"use client";

import { siteConfig } from "@/config/site";
import projects from "@/data/projects";
import { Link } from "@nextui-org/link";
import { fontAzeretMono } from "@/config/fonts";
import clsx from "clsx";
import { TypeAnimation } from 'react-type-animation';
import { Navbar } from "@/components/Navbar";
import { MdEmail } from "react-icons/md";

import {
	GithubIcon,
	LinkedinIcon,
	DribbbleIcon
} from "@/components/Icons";

import { Button } from "@nextui-org/react";

import ProjectCarousel from "@/components/ProjectCarousel";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";

export default function Home() {
  return (
  <>
    <section className="flex flex-col justify-evenly pb-32 h-screen">
      <div className="flex flex-col justify-center items-center pt-2 md:pt-4 text-center">
        <div>
          <TypeAnimation
            sequence={[
              'Jeremy Traini',
            ]}
            speed={30}
            wrapper="div"
            cursor={false}
            className={clsx(
              "text-white text-5xl md:text-7xl",
              // fontAzeretMono.className
            )}
            style={{ paddingBottom: '3rem' }}
          />
        </div>
        <p className="text-xl pb-8 text-white">Hi. I&apos;m a software engineering student at UNSW.</p>
        <div className="flex justify-center items-center gap-6 pb-10">
          <Link isExternal href={siteConfig.links.github} aria-label="Github">
            <GithubIcon size={32} className="text-white" />
          </Link>
          <Link isExternal href={siteConfig.links.linkedin} aria-label="Linkedin">
            <LinkedinIcon size={32} className="text-white" />
          </Link>
          <Link isExternal href={siteConfig.links.dribbble} aria-label="Dribbble">
            <DribbbleIcon size={32} className="text-white" />
          </Link>
          <Button
            radius="full"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold"
            onPress={() => window.open(`mailto:${siteConfig.email}?subject=Hello Jeremy!`)}
            endContent={<MdEmail size={18} />}
          >
            Email me
          </Button>
        </div>
      </div>
      <div className="pb-10">
        <ProjectCarousel projects={projects} />
      </div>
      <Navbar />
    </section>
    <section id="path" className="w-full p-16 bg-gray-100 rounded-t-[4em] mt-[-4em] pb-24">
			<div className="mx-auto max-w-7xl">
				<h1
          className={clsx(
            "text-4xl md:text-5xl",
            "text-default-900 pb-10"
          )}
        >
          My Learning Path
        </h1>
        <div
          className="pb-6 h-full flex flex-row justify-center items-center"
        >
          <Timeline />
        </div>
			</div>
		</section>
    <section id="work" className="w-full p-16 bg-white rounded-t-[4em] mt-[-4em] pb-[4em] min-h-screen">
			<div className="mx-auto max-w-7xl">
        <h1
          className={clsx(
            "text-4xl md:text-5xl",
            "text-default-900 pb-10"
          )}
        >
          Things I&apos;m working on
        </h1>
        <Projects projects={projects} />
			</div>
		</section>
    <section id="contact" className="w-full p-16 bg-gray-100 rounded-t-[4em] mt-[-4em] pb-24">
			<div className="mx-auto max-w-7xl">
        <h1
          className={clsx(
            "text-4xl md:text-5xl",
            "text-default-900 pb-10"
          )}
        >
          Contact me
        </h1>
        <p className="pb-20">Just reach out to me on Linkedin!</p>
			</div>
		</section>
  </>
  )
}
