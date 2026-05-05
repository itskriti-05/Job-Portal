/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Urbanist", "sans-serif"],
      },
      screens: {
        "3xl": "1920px",
      },
      colors: {
        primary: "#00A7f3",
      },
    },
  },
  plugins: [],
}