'use client';
import { Divider } from "@nextui-org/react";

export const Footer = () => {
	return (
    <div className="container mx-auto max-w-7xl pt-16 px-6">
			<Divider />
			<footer className="w-full flex items-center justify-center py-3">
				<p className="text-default-600">© 2023 Jeremy Traini</p>
			</footer>
		</div>
	);
};
