"use client";

import { siteConfig } from "@/config/site";
import { Link } from "@nextui-org/link";
import { fontAzeretMono } from "@/config/fonts";
import clsx from "clsx";
import { TypeAnimation } from 'react-type-animation';
import { Navbar } from "@/components/Navbar";

import {
	GithubIcon,
	LinkedinIcon,
	DribbbleIcon
} from "@/components/Icons";

import { Button } from "@nextui-org/react";

import ProjectCarousel from "@/components/ProjectCarousel";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
  <>
    <section className="flex flex-col justify-start gap-6 py-4 md:py-6 min-h-screen">
      <div className="flex flex-col justify-center items-center">
        <div className="text-center pt-10">
          <div>
            <TypeAnimation
              sequence={[
                'Jeremy Traini',
              ]}
              speed={30}
              wrapper="div"
              cursor={false}
              className={clsx(
                "text-white text-5xl md:text-6xl",
                fontAzeretMono.className
              )}
              style={{ paddingBottom: '3rem' }}
            />
          </div>
          <p className="text-xl mb-8 text-white">I&apos;m a software engineering student in need of a job!</p>
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
          </div>
          <Button
            radius="full"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold"
            onPress={() => window.open(`mailto:${siteConfig.email}?subject=Hello Jeremy!`)}
          >
            Email me
          </Button>
        </div>
      </div>
      <div className="pb-20">
        <ProjectCarousel />
      </div>
      <Navbar />
    </section>
    <section className="w-full p-16 bg-gray-200 rounded-t-[4em] mt-[-4em] pb-[4em]">
			<div className="mx-auto max-w-7xl">
				<h1
          className={clsx(
            "text-4xl md:text-5xl",
            "text-default-900 pb-10"
          )}
        >
          My Path
        </h1>
        <div
          className="pb-6 h-full"
        >
          <Timeline />
        </div>
			</div>
		</section>
    <section className="w-full p-16 bg-white rounded-t-[4em] mt-[-4em] pb-[4em] min-h-screen">
			<div className="mx-auto max-w-7xl">
        <h1
          className={clsx(
            "text-4xl md:text-5xl",
            "text-default-900 pb-10"
          )}
        >
          Things I&apos;m working on
        </h1>
        <div className="flex flex-col md:flex-row pb-6">
          <div>
            Left
          </div>
          <div>
            Right
          </div>
        </div>
			</div>
		</section>
  </>
  )
}
