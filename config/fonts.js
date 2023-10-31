import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Azeret_Mono as AzeretMono,
} from "next/font/google"
import "@fontsource/gabarito"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const fontAzeretMono = AzeretMono({
  subsets: ["latin"],
  variable: "--font-azeret-mono",
})

export const fontGabarito = {
  className: "gabarito",
}
