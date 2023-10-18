"use client";
import { Tabs, Tab } from "@nextui-org/react"; 
import { siteConfig } from "@/config/site";

export const Navbar = () => {
	return (
		<div className="bg-[#1f1f1f] rounded-full p-1 mx-auto">
			<ul className="flex justify-center items-center space-x-4">
				{siteConfig.navItems.map((item, index) => (
					<a href={item.href}>
						<li className="hover:bg-[#292929] rounded-full px-4 py-2 transition text-gray-300">
							{item.label}
						</li>
					</a>
				))}
			</ul>
	</div>
	);
};
