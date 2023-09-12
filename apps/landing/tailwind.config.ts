import type { Config } from "tailwindcss";
import tailwindDefault from "configs/tailwind/tailwind.config";

const config: Partial<Config> = {
  presets: [tailwindDefault],
  theme: {
    extend: {
      backgroundImage: {
        "cover-page": "url('/images/bg/bg-cover.png')",
        "cover-page-mobile": "url('/images/bg/bg-cover-mobile.png')",
        resources: "url('/images/bg/bg-resources.png')",
        "resources-mobile": "url('/images/bg/bg-resources-mobile.png')",
        menu: "url('/images/bg/bg-menu.png')",
      }
    },
  },
};


export default config;