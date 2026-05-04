/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Oswald', 'system-ui', 'sans-serif'],
        sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
      },
      colors: {
        hobbs: {
          navy: '#11284a',
          'navy-deep': '#081930',
          'navy-soft': '#1f4066',
          gold: '#b8892f',
          'gold-bright': '#c9a43d',
          'gold-dim': '#9c722a',
        },
      },
      borderRadius: {
        sm: '0.2rem',
        DEFAULT: '0.25rem',
        md: '0.3rem',
        lg: '0.4rem',
      },
    },
  },
  plugins: [],
};
