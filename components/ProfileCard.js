import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { LinkedinConnect, LinkedinVerified } from "./Icons";
import { siteConfig } from "@/config/site";
import Image from 'next/image';

const ProfileCard = () => {
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
            <p className="mt-1 text-md">{process.env.LINKEDIN_HEADLINE || "B. Software Engineering & B. Commerce at UNSW"}</p>
            <p className="mt-2 text-sm text-gray-500">Sydney, New South Wales, Australia</p>
            <p className="mt-2 text-sm text-gray-500"><span className="font-bold">{process.env.NUM_LINKEDIN_CONNECTIONS || "500+"}</span> connections</p>
          </div>
        </div>
        <div className="hidden sm:flex w-[232px] items-center gap-2">
          <div className="flex flex-col gap-2">
            <Link
              className="flex items-center gap-2"
              href="https://www.linkedin.com/company/unsw-sunswift/"
              isExternal
            >
              <div
                className="w-10 h-10 relative flex justify-center items-center"
                style={{ backgroundColor: "#ffffff" }}
              >
                <Image
                  src={"/images/timeline/sunswift_logo.png"}
                  style={{ objectFit: "contain" }}
                  fill={true}
                  sizes="160px"
                  alt="Sunswift Logo"
                />
              </div>
              <p className="text-sm font-semibold text-black hover:text-blue-700 hover:underline">
                Sunswift Racing
              </p>
            </Link>
            <Link
              className="flex items-center gap-2"
              href="https://www.linkedin.com/school/unsw/"
              isExternal
            >
              <div
                className="w-10 h-10 relative flex justify-center items-center"
                style={{ backgroundColor: "#fee600" }}
              >
                <Image
                  src={"/images/timeline/unsw_logo.png"}
                  style={{ objectFit: "contain", transform: `scale(0.7)` }}
                  fill={true}
                  sizes="160px"
                  alt="UNSW Logo"
                />
              </div>
              <p className="text-sm font-semibold text-black hover:text-blue-700 hover:underline">
                UNSW
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-4 flex gap-2">
        <Button
          className="bg-[#0a66c2] hover:bg-[#004182] hover:opacity-100 text-white font-bold transition"
          as={Link}
          radius="full"
          size="sm"
          startContent={<LinkedinConnect />}
          href={siteConfig.links.linkedin || "#"}
          isExternal
          variant="solid"
        >Connect</Button>
        <Button
          className="bg-white outline outline-1 -outline-offset-1 hover:-outline-offset-2 hover:bg-[#aad6ff] outline-[#0a66c2] font-medium text-[#0a66c2] hover:outline-2 transition"
          as={Link}
          size="sm"
          radius="full"
          href={siteConfig.links.linkedin || "#"}
          isExternal
          variant="solid"
        >Message</Button>
      </div>
    </div>
  );
}

export default ProfileCard;