"use client";

import { siteConfig } from "@/config/site";
import { Link } from "@nextui-org/link";
import { fontAzeretMono } from "@/config/fonts";
import clsx from "clsx";

import {
	GithubIcon,
	LinkedinIcon,
	DribbbleIcon
} from "@/components/Icons";

import { Button } from "@nextui-org/react";

import ProjectCarousel from "@/components/ProjectCarousel";

export default function Home() {
  return (
  <>
    <section className="flex flex-col justify-start gap-6 py-4 md:py-6 bg-grey">
      <div className="flex flex-col justify-center items-center">
        <div className="text-center">
          <h1 className={clsx(
            "text-4xl md:text-6xl font-bold",
            fontAzeretMono.className,
            "text-default-900 pb-6"
          )}>Jeremy Traini</h1>
          <p className="text-xl mb-8">I&apos;m a software engineering student in need of a job!</p>
          <div className="flex justify-center items-center gap-6 pb-10">
            <Link isExternal href={siteConfig.links.github} aria-label="Github">
              <GithubIcon size={32} className="text-default-600" />
            </Link>
            <Link isExternal href={siteConfig.links.linkedin} aria-label="Linkedin">
              <LinkedinIcon size={32} className="text-default-600" />
            </Link>
            <Link isExternal href={siteConfig.links.dribbble} aria-label="Dribbble">
              <DribbbleIcon size={32} className="text-default-600" />
            </Link>
          </div>
          {/* <Button
            radius="full"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold"
          >
            Contact me
          </Button> */}
        </div>
      </div>
      <div className="pb-20">
        <ProjectCarousel />
      </div>
    </section>
  </>
  )
}
