/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require("path")

module.exports = {
  siteMetadata: {
    title: "Johan Berggren",
    description: "Offisiell nettside for Johan Berggren",
    siteUrl: "https://johanberggren.no",
    image: "/seo.jpg",
    author: "Ali Kristoffer Njie // https://github.com/alinjie/",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sass",
    "gatsby-plugin-netlify-cms",
    "gatsby-transformer-remark",
    "gatsby-plugin-typescript",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-171505789-1",
        anonymize: true,
        respectDNT: true,
        head: true,
        exclude: ["/admin"],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "album-covers",
        path: path.join(__dirname, "src", "screens", "Home", "Music", "img"),
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "gallery-images",
        path: path.join(__dirname, "src", "assets", "img", "gallery"),
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "general-images",
        path: path.join(__dirname, "src", "assets", "img"),
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "about-images",
        path: path.join(__dirname, "src", "assets", "img", "about"),
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "event-content",
        path: path.join(__dirname, "content", "events"),
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "lilyhamericana-lyrics",
        path: path.join(
          __dirname,
          "src",
          "screens",
          "Lyrics",
          "texts",
          "lilyhamericana"
        ),
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fnigrh-lyrics",
        path: path.join(
          __dirname,
          "src",
          "screens",
          "Lyrics",
          "texts",
          "fnigrh"
        ),
      },
    },
  ],
}
