/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#000000",
          yellow: "#FFD800",
          red: "#FF0000"
        }
      }
    },
  },
  plugins: [],
};
