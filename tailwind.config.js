const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Teko", ...defaultTheme.fontFamily.sans]
    },
    colors: {
      gray: colors.gray,
      white: "#FFFFFF",
      black: colors.black,
      red: colors.red,
      transparent: "transparent",
      "detail": "#E9A61F"
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
