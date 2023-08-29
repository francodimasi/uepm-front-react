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
      "primary-light": "#CEFF67",
      "primary-dark": "#04625C",
      secondary: "#00DDC8",
      light: "#FCFCFC",
      dark: "#020001",
      error: "#FF0F3A",
      alert: "#F99232",
      success: "#49CD4F",
      transparent: "transparent",
    },
    fontFamily: {
      sans: "Manrope",
      serif: "Archia",
    },
    container:{
      center: true
    },
    screens: {
      '2xl': '1280px',
    },
    extend: {
      borderWidth: {
        1: "1px",
      },
      backgroundImage: {
        cover: "url('/images/bg/bg-cover.svg')",
      },
      fontSize: {
        "4rem": ["4rem", "4.5rem"],
      },
    },
  },
};
