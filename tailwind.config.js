/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
        display: ["Archivo Black", "Arial", "sans-serif"],
        tobias: ["Space Grotesk", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
}

