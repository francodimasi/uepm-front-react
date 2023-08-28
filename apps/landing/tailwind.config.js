// module.exports = require("configs/tailwind/tailwind.config");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      primary: "#00a393",
      secondary: {
        DEFAULT: "#00ddc8",
        strong: "#04625c",
      },
      tertiary: "#ceff67",
      light: "#fcfcfc",
      dark: "#020001",
      transparent: "transparent",
    },
    extend: {},
  },
};