import './globals.css';
import { Providers } from './providers';
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import clsx from "clsx";

export const metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	// icons: {
	// 	icon: "/favicon.ico",
		// shortcut: "/favicon-16x16.png",
		// apple: "/apple-touch-icon.png",
	// },
};


export default function RootLayout({ children }) {

  return (
    <html
			lang="en"
			suppressHydrationWarning
			className="scroll-smooth"
		>
			<head />
      <body className={clsx(
					"min-h-screen bg-background antialiased",
					fontSans.variable
				)}
			>
        {/* <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}> */}
          <div className="relative flex flex-col bg-black">
						<main className="w-full pt-10 flex-grow">
							{children}
						</main>
						<Footer />
					</div>
        {/* </Providers> */}
      </body>
    </html>
  )
}
