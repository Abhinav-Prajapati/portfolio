/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'morris_roman': ['Morris Roman Black', 'sans-serif'],
        'arcuata': ['Arcuata Trial, Medium', 'sans-serif']
      },
    },
  },
  plugins: [],
}
