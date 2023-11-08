import React from "react";
import { Link, Button } from "@nextui-org/react";
import { LinkedinConnect, LinkedinVerified } from "./Icons";
import { siteConfig } from "@/config/site";
import Image from 'next/image';

export default function ProfileCard() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <div className="flex justify-start w-full">
        <Image
          height={156}
          width={156}
          className="rounded-full object-cover border-4 border-white -mt-[138px]"
          src="/images/me.jpg" 
          alt="Picture of Jeremy Traini"
        />
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-semibold">Jeremy Traini</h1>
              <div className="text-[#00000099]"><LinkedinVerified /></div>
            </div>
            <p className="mt-1 text-md">Software Engineering Student at UNSW</p>
            <p className="mt-2 text-sm text-gray-500">Sydney, New South Wales, Australia</p>
            <p className="mt-2 text-sm text-gray-500"><span className="font-bold">323</span> connections</p>
          </div>
        </div>
        <div className="hidden sm:flex w-[232px] items-center gap-2">
          <div
            className="w-10 h-10 relative flex justify-center items-center"
            style={{ backgroundColor: "#fee600" }}
          >
            <Image
              src={"/images/timeline/unsw_logo.png"}
              style={{ objectFit: "contain", transform: `scale(0.7)` }}
              fill={true}
              alt="UNSW Logo"
            />
          </div>
          <Link
            className="text-sm font-semibold text-black hover:text-blue-700 hover:underline"
            href="https://www.linkedin.com/school/unsw/"
            isExternal
          >UNSW</Link>
        </div>
      </div>
      <div className="mt-4 flex gap-2">
        <Button
          className="bg-[#0a66c2] hover:bg-[#004182] text-white font-bold transition"
          as={Link}
          radius="full"
          size="sm"
          startContent={<LinkedinConnect />}
          href={siteConfig.links.linkedin}
          isExternal
          variant="solid"
        >Connect</Button>
        <Button
          className="bg-white outline outline-1 -outline-offset-1 hover:-outline-offset-2 hover:bg-[#aad6ff] outline-[#0a66c2] font-medium text-[#0a66c2] hover:outline-2 transition"
          as={Link}
          size="sm"
          radius="full"
          href={siteConfig.links.linkedin}
          isExternal
          variant="solid"
        >Message</Button>
      </div>
    </div>
  );
}
