"use client";
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarItem,
} from "@nextui-org/navbar";

import { Tabs, Tab } from "@nextui-org/react"; 

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import Link from "next/link";
import clsx from "clsx";

export const Navbar = () => {
	return (
		<div
			className="flex h-auto items-center justify-center data-[menu-open=true]:border-none sticky top-0 inset-x-0 mx-auto p-5 z-50"
		>
			<Tabs radius="full" size="lg">
				{siteConfig.navItems.map((item, index) => (
					<Tab key={index} title={item.label} />
				))}
			</Tabs>
		</div>
	);
};
