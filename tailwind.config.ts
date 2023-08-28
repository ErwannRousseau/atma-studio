import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      buttercup: {
        '50': '#fffceb',
        '100': '#fdf5c8',
        '200': '#fce98b',
        '300': '#fad84f',
        '400': '#f9c626',
        '500': '#f3a710',
        '600': '#d77f08',
        '700': '#b2590b',
        '800': '#91450f',
        '900': '#773910',
        '950': '#441c04',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
