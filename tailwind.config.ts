import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6C5DD3',
          light: '#E4E0FF',
          dark: '#4C3FB1',
        },
        accent: '#F2994A',
        info: '#56CCF2',
        success: '#27AE60',
      },
    },
  },
  plugins: [],
};

export default config;
