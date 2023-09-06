import type { Config } from "tailwindcss";
import tailwindDefault from "configs/tailwind/tailwind.config";

const config: Partial<Config> = {
  presets: [tailwindDefault],
  theme: {
    extend: {
      backgroundImage: {
        coverPage: "url('/images/bg/bg-cover.png')",
        resources: "url('/images/bg/bg-resources.png')",
      }
    },
  },
};


export default config;