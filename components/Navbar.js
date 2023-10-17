"use client";
import { Tabs, Tab } from "@nextui-org/react"; 
import { siteConfig } from "@/config/site";

export const Navbar = () => {
	return (
		<div
			className="flex h-auto items-center justify-center data-[menu-open=true]:border-none mx-auto p-5"
		>
			<Tabs radius="full" size="lg">
				{siteConfig.navItems.map((item, index) => (
					<Tab key={index} title={item.label} />
				))}
			</Tabs>
		</div>
	);
};
