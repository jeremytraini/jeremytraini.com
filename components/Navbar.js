"use client";
import { siteConfig } from "@/config/site";

export const Navbar = () => {
	return (
		<div className="bg-[#1f1f1f] rounded-full p-1 mx-auto">
			<ul className="flex justify-center items-center gap-4 py-2 px-0.5">
				{siteConfig.navItems.map((item, index) => (
					<li key={index} className="h-full">
						<a
							 href={item.href}
							 className={`${index === 0 ? "outline outline-1 outline-[#323232]" : ""} py-2 px-4 rounded-full transition text-gray-300 hover:bg-[#292929]`}
						>{item.label}</a>
					</li>
				))}
			</ul>
	</div>
	);
};
