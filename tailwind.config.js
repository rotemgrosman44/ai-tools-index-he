/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#000000",
          yellow: "#FFFD80",
          red: "#FF0080",
        },
        gradientStart: "#F5E8FF",
        gradientMiddle: "#E6F0FF",
        gradientEnd: "#E4F9F5",
        accent: "#A5D6D1",
      },
    },
  },
  plugins: [],
};
