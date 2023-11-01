import type { Config } from "tailwindcss";
import tailwindDefault from "configs/tailwind/tailwind.config";

const config: Partial<Config> = {
  presets: [tailwindDefault],
  theme: {
    extend: {
      backgroundImage: {
        coverPage: "url('/images/bg/bg-cover.png')",
        medic: "url('/images/medic-network/medic.png')",
        "success-cases": "url('/images/bg/bg-success-cases.png')",
      }
    },
  },
};


export default config;