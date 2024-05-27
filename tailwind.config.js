/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGray: "hsl(0, 0%, 63%)",
        veryDarkGray: "hsl(0, 0%, 27%)",
      },
      animation: {
        openmenu: "openmenu 0.5s ease-in-out",
        closemenu: "closemenu 0.5s ease-in-out",
      },
      keyframes: {
        openmenu: {
          // initial position
          "0%": { opacity: 0, display: "none" },
          // final position
          "100%": { opacity: 0.7, display: "block" },
        },
        closemenu: {
          // initial position
          "0%": { opacity: 0.7, display: "block" },
          // final position
          "100%": { opacity: 0, display: "none" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
