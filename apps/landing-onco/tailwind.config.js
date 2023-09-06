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
      primary: "#00A393",
      "primary-light": "#00DDC8",
      "primary-dark": "#04625C",
      secondary: "#CEFF67",
      tertiary: "#C49EF2",
      "tertiary-light": "#DAB5FF",
      light: "#FCFCFC",
      dark: "#020001",
      error: "#FF0F3A",
      alert: "#F99232",
      success: "#49CD4F",
      "gray-light": "#F0F0F0",
      "gray-medium": "#D9D9D9",
      "gray-dark": "#7A7A7A",
      transparent: "transparent",
    },
    fontFamily: {
      sans: "Manrope",
      serif: "Archia",
    },
    container: {
      center: true,
    },
    screens: {
      "2xl": "1280px",
    },
    extend: {
      borderWidth: {
        1: "1px",
      },
      backgroundImage: {
        coverPage: "url('/images/bg/bg-cover.svg')",
        resources: "url('/images/bg/bg-resources.png')",
      },
      fontSize: {
        "4rem": ["4rem", "4.5rem"],
        "2.5rem": ["2.5rem", "2.5rem"],
      },
    },
  },
};
