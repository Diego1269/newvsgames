/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      brand: "#95d488",
      dbrand: "#81B875",
      bg: "#212121",
      dbg: "#0E0E0E",
      wh: "#fefefe",
      dwh: "#F5ECDF",
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      gray: {
        100: "#f7fafc",
        // ...
        900: "#1a202c",
      },
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      serif: ["Inter", "serif"],
    },
    darkMode: "class",
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
};
