const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    "./src/**/*.tsx"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      "heading": ["Teko", ...defaultTheme.fontFamily.sans],
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
    },
    colors: {
      gray: colors.gray,
      white: "#FFFFFF",
      black: colors.black,
      red: colors.red,
      green: colors.green,
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
