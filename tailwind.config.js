const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "border-blue-900",
  ],
  theme: {
    extend: {
      keyframes: {
        scrollText: {
          from: {
            transform: 'translateX(0%)',
          },
          to: {
            transform: 'translateX(-50%)',
          }
        },
        marquee: {
          from: {
            transform: 'translate3d(0, 0, 0)',
          },
          to: {
            transform: 'translate3d(-50%, 0, 0)',
          }
        },
      },
      animation: {
        scrollText: 'scrollText 10s infinite linear',
        marquee: 'marquee 25s linear infinite',
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
