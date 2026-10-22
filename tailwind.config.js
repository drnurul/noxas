/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#FFFFFF',
          muted: '#F5F5F2',
          surface: '#FAFAFA',
          dark: '#171717',
          'dark-card': '#222222',
        },
        brand: {
          DEFAULT: '#111111',
          primary: '#111111',
          secondary: '#686868',
          muted: '#8A8A8A',
          border: '#E5E5E5',
          'border-dark': '#2A2A2A',
        },
        orange: {
          DEFAULT: '#D62545',
          primary: '#D62545',
          hover: '#E94A14',
          subtle: '#FFF1EC',
          light: '#FF7A47',
        },
        dark: {
          DEFAULT: '#171717',
          surface: '#222222',
          text: '#F7F7F7',
          muted: '#B5B5B5',
          border: '#2A2A2A',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.2em',
        ultra: '0.35em',
      },
    },
  },
  plugins: [],
};
