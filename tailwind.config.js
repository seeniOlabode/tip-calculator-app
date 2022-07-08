const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Mono", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "brand-strong-cyan": "hsl(172, 67%, 45%)",
        "brand-very-dark-cyan": "hsl(183, 100%, 15%)",
        "brand-dark-grayish-cyan": "hsl(184, 14%, 56%)",
        "brand-light-grayish-cyan": "hsl(185, 41%, 84%)",
        "brand-very-light-grayish-cyan": "hsl(189, 41%, 97%)",
        "brand-white": "hsl(0, 0%, 100%)",
      },
      screens: {
        desk: "768px",
        deskLittle: "900px",
      },
    },
  },
  plugins: [],
};
