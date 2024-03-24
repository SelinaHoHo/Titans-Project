/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./client/src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
      },
      fontFamily: {
        open: ["Open Sans", "sans-serif"],
        serif: ["Raleway", "serif"],
      },
   
        spacing: {
          128: "32rem",
          144: "36rem",
        },
        borderRadius: {
          "4xl": "2rem",
        },
    
      colors: {
        beMain: "#FDF6EA",
        beLight: "#F5E9D4",
        xanhMain: "#838C48",
      },
    },

  },
  plugins: [],
};
