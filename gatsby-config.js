/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require("path")

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `music-images`,
        path: path.join(__dirname, `src`, `assets`, "img", "music"),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery-images`,
        path: path.join(__dirname, `src`, `assets`, "img", "gallery"),
      },
    },
  ],
}
