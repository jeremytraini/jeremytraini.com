"use client";

import { siteConfig } from "@/config/site";
import { Link } from "@nextui-org/link";

import {
	GithubIcon,
	LinkedinIcon,
	DribbbleIcon
} from "@/components/Icons";

import { Button } from "@nextui-org/react";

export default function Home() {
  return (
    <section className="flex flex-col justify-start gap-4 py-8 md:py-10">
      <div className="flex flex-col justify-center items-center">
        <div className="text-center">
          <h1 className="text-8xl font-bold mb-4">Jeremy Traini</h1>
          <p className="text-xl mb-6">I'm a software engineering student in need of a job!</p>
          <div className="flex justify-center items-center gap-6 mb-6">
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
          <Button
            radius="full"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold"
          >
            Contact me
          </Button>
        </div>
      </div>
    </section>
  )
}
