import './globals.css';
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
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({ children }) {

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="scroll-smooth bg-black"
    >
      <head />
      <body
        className={clsx(
          "min-h-screen  antialiased",
          fontSans.variable
        )}
      >
        <div className="overflow-hidden relative flex flex-col">
          <main className="w-full pt-10 flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
