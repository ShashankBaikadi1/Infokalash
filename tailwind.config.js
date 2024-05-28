/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'white': '0 1px 4px rgba(255, 255, 255, 0.9)', 
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        sans: ['sans-serif'],
        geist: ['Geist', 'sans-serif'],
      },
      screens: {
        'ipad': {'raw': '(min-width: 1180px) and (max-width: 820px)'}
      }
    },
  },
  plugins: [],
}