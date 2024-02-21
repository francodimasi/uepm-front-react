import type { Config } from 'tailwindcss';
import tailwindDefault from 'configs/tailwind/tailwind.config';

const config: Partial<Config> = {
  presets: [tailwindDefault],
  theme: {
    extend: {
      colors: {
        stone: {
          200: '#E7DED7',
        },
      },
    },
  },
};

export default config;
