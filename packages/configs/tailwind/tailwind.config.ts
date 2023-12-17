import type { Config } from 'tailwindcss';
const defaultTheme = require('tailwindcss/defaultTheme');

const tailwindDefaultConfig: Config = {
  content: [
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      primary: '#00A393',
      'primary-light': '#00DDC8',
      'primary-dark': '#04625C',
      secondary: '#CEFF67',
      tertiary: '#C49EF2',
      'tertiary-light': '#DAB5FF',
      light: '#FCFCFC',
      dark: '#020001',
      error: '#FF0F3A',
      alert: '#F99232',
      success: '#49CD4F',
      'gray-light': '#F0F0F0',
      'gray-medium': '#D9D9D9',
      'gray-dark': '#7A7A7A',
      transparent: 'transparent',
    },
    fontFamily: {
      sans: 'Manrope',
      serif: 'Archia',
    },
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      screens: {
        hmd: { raw: '(min-height: 668px)' },
        hsm: { raw: '(max-height: 667px)' },
      },
      borderWidth: {
        1: '1px',
      },
      fontSize: {
        '3xl': ['2rem', '2.5rem'],
        '4xl': ['2.5rem', '2.5rem'],
        '6xl': ['4rem', '4.5rem'],
      },
    },
  },
};

export default tailwindDefaultConfig;
