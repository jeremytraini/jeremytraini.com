'use client';
import { Link } from "@nextui-org/react";

export const Footer = () => {
	return (
    <div className="w-full pt-16 px-6 bg-black rounded-t-[4em] mt-[-4em]">
			<div className="mx-auto max-w-7xl">
				<div className="flex justify-between items-start py-6">
					<div>
						<p className="text-3xl text-white">Discover my potential.</p>
						<p className="text-3xl text-white">Hire me.</p>
					</div>
					<div className="flex flex-col gap-2 items-end">
						<p className="text-xl text-white pb-2">Find me on</p>
						<Link isExternal href="#" showAnchorIcon>GitHub</Link>
						<Link isExternal href="#" showAnchorIcon>LinkedIn</Link>
						<Link isExternal href="#" showAnchorIcon>Dribbble</Link>
					</div>
				</div>
				<footer className="w-full flex items-center justify-left py-3 mb-5">
					<p className="text-default-500">© 2023 Jeremy Traini</p>
				</footer>
			</div>
		</div>
	);
};

