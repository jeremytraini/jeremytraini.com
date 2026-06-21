import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Footer } from "@/components/Footer";
import ScrollBehaviorManager from "@/components/ScrollBehaviorManager";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { getWebsiteSchema } from "@/lib/structuredData";
import clsx from "clsx";

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.applicationName,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} website preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function RootLayout({ children }) {
  const websiteSchema = getWebsiteSchema();

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="bg-black"
    >
      <head />
      <body
        className={clsx(
          "min-h-screen  antialiased",
          fontSans.variable
        )}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <ScrollBehaviorManager />
        <div className="overflow-hidden relative flex flex-col">
          <main className="w-full pt-10 flex-grow">
            {children}
            <SpeedInsights />
          </main>
          <Footer />
        </div>
        <Analytics />
        <GoogleAnalytics gaId="G-LTDR8ZYE09" />
      </body>
    </html>
  )
}
