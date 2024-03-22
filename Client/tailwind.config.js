/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./client/src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: { max: "479px" },
      md: { max: "767px" },
      lg: { max: "1023px" },
    },
    fontFamily: {
      open: ["Open Sans", "sans-serif"],
      serif: ["Raleway", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
    colors: {
      beMain: "#FDF6EA",
      beLight: "#F5E9D4",
      xanhMain: "#838C48",
    },
  },
  plugins: [],
};
