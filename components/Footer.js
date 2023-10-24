'use client';
import { Link } from "@nextui-org/react";
import { siteConfig } from "@/config/site";

export const Footer = () => {
	return (
    <div className="w-full p-16 bg-black rounded-t-[4em] mt-[-4em]">
			<div className="mx-auto max-w-7xl">
				<div className="flex justify-between items-start py-6">
					<div>
						<p className="text-3xl text-white">Feel free to reach out.</p>
						<p className="text-3xl text-white">I&apos;m open to work.</p>
					</div>
					<div className="flex flex-col gap-2 items-end">
						<p className="text-xl text-white pb-2">Find me on</p>
						<Link isExternal href={siteConfig.links.github} showAnchorIcon>GitHub</Link>
						<Link isExternal href={siteConfig.links.linkedin} showAnchorIcon>LinkedIn</Link>
						{/* <Link isExternal href={siteConfig.links.dribbble} showAnchorIcon>Dribbble</Link> */}
					</div>
				</div>
				<footer className="w-full flex items-center justify-left py-3">
					<p className="text-default-500">© 2023 Jeremy Traini</p>
				</footer>
			</div>
		</div>
	);
};

