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
		<NextUINavbar
			maxWidth="xl"
			position="sticky"
			className="mx-auto w-fit z-50 p-0 radius-full"
		>
			<NavbarContent className="basis-full sm:basis-full" justify="center">
				<Tabs radius="full" size="lg">
					{siteConfig.navItems.map((item, index) => (
						<Tab key={index} title={item.label}>
							
						</Tab>
					))}
				</Tabs>
				{/* <ul className="hidden lg:flex gap-4 justify-start ml-2">
					{siteConfig.navItems.map((item, index) => (
						<NavbarItem
							key={item.href}
							className={clsx(
									"",
									index === siteConfig.navItems.length - 1 ? "border hover:border-color rounded px-2" : ""
								)}
						>
							<Link
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary data-[active=true]:font-medium",
									index === siteConfig.navItems.length - 1 ? "border hover:border-color rounded px-2" : ""
								)}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</Link>
						</NavbarItem>
					))}
				</ul> */}
			</NavbarContent>
			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
									
			</NavbarContent>
		</NextUINavbar>
	);
};
