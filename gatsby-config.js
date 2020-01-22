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
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify-cms`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `general-images`,
        path: path.join(__dirname, `src`, `assets`, "img"),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `about-images`,
        path: path.join(__dirname, `src`, `assets`, "img", "about"),
      },
    },
  ],
}
