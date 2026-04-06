/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', 'media'],
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        glass: '0 8px 32px rgba(6, 8, 17, 0.37)',
      },
      backgroundImage: {
        hero: 'radial-gradient(circle at top, rgba(111,66,255,0.2), transparent)',
      },
    },
  },
  plugins: [],
};
