import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@rewind-ui/core/dist/theme/styles/*.js',
  ],
  theme: {
    extend: {
      screens: {
        navbar: '764px',
      },
      colors: {
        buttercup: {
          50: '#fffceb',
          100: '#fdf5c8',
          200: '#fce98b',
          300: '#fad84f',
          400: '#f9c626',
          500: '#f3a710',
          600: '#d77f08',
          700: '#b2590b',
          800: '#91450f',
          900: '#773910',
          950: '#441c04',
        },
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.5715' }],
        base: ['1rem', { lineHeight: '1.5', letterSpacing: '-0.017em' }],
        lg: ['1.125rem', { lineHeight: '1.5', letterSpacing: '-0.017em' }],
        xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.017em' }],
        '2xl': ['1.5rem', { lineHeight: '1.415', letterSpacing: '-0.017em' }],
        '3xl': ['1.875rem', { lineHeight: '1.333', letterSpacing: '-0.017em' }],
        '4xl': ['2.25rem', { lineHeight: '1.277', letterSpacing: '-0.017em' }],
        '5xl': ['2.75rem', { lineHeight: '1.2', letterSpacing: '-0.017em' }],
        '6xl': ['3.5rem', { lineHeight: '1', letterSpacing: '-0.017em' }],
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.017em' }],
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
      animation: {
        endless: 'endless 20s linear infinite',
      },
      keyframes: {
        endless: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-245px)' },
        },
      },
      backdropBlur: {
        xxs: '0.5px',
        xs: '2px',
      },
      blur: {
        card: '1px',
      },
      filter: {
        'brightness-50': 'brightness(0.5)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--gradient-color-stops))',
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '4/3.5': '4 / 3.5',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms'), require('tailwindcss-filters')],
};
export default config;
