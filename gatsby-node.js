const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

function sanitizeText(input) {
  return input
    .replace(/æ/i, "ae")
    .replace(/ø/i, "o")
    .replace(/å/i, "aa")
    .replace(/ /g, "-")
    .replace(/[^a-zA-Z0-9-]/g, "")
    .toLowerCase()
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, "src/components"),
        assets: path.resolve(__dirname, "src/assets"),
        sass: path.resolve(__dirname, "src/sass"),
        utils: path.resolve(__dirname, "src/utils"),
      },
    },
  })
}

exports.createPages = async function ({ graphql, actions }) {
  /**
   * HOME
   */
  const homePageComponent = path.resolve("src/pages/Home/index.tsx")
  actions.createPage({
    path: "/",
    component: homePageComponent,
  })

  /**
   * LYRICS
   */

  const albums = [
    {
      name: "Lilyhamericana",
      albumCoverImageId: "d09bfbbf-5762-54d5-adfc-807d6bca6d8c",
      slug: "lilyhamericana",
    },
    {
      name: "For Now I'm Good Right Here",
      albumCoverImageId: "ed65a16b-9ab0-5a10-9073-7735dc86621a",
      slug: "for-now-im-good-right-here",
    },
  ]

  await Promise.all(
    albums.map(async (album) => {
      const albumCoverQuery = `
      {
        file(id: {eq: "${album.albumCoverImageId}"}) {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }`
      const albumCoverFetch = graphql(albumCoverQuery)

      const lyricsQuery = `
      {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/lilyhamericana-lyrics/i"}}, sort: {fields: frontmatter___order, order: ASC}) {
          edges {
            node {
              frontmatter {
                name
                order
              }
              fields {
                slug
                albumName
                albumCoverId
              }
              id
              html
            }
          }
        }
      }`

      const lyricsFetch = graphql(lyricsQuery)
      const values = await Promise.all([albumCoverFetch, lyricsFetch])
      const [albumCover, lyrics] = values

      const lyricNodes = lyrics.data.allMarkdownRemark.edges

      for ({ node } of lyricNodes) {
        const {
          fields: { slug, albumName, albumCoverId },
        } = node

        const { data } = await graphql(`
        {
          file(id: {eq: "${albumCoverId}"}) {
            absolutePath
          }
        }`)

        const allSongs = lyricNodes.map((item) => ({
          name: item.node.frontmatter.name,
          order: item.node.frontmatter.order,
          slug: `${item.node.frontmatter.name}-${sanitizeText(
            item.node.frontmatter.name
          )}`,
        }))

        const nextSong = allSongs.find(
          (song) => song.order === node.frontmatter.order + 1
        )
        const previousSong = allSongs.find(
          (song) => song.order === node.frontmatter.order - 1
        )

        const albumCoverSrc = data.file.absolutePath

        const urlPath = `${albumName}-${slug}`
        return actions.createPage({
          path: urlPath,
          component: path.resolve("src/pages/Lyrics/index.tsx"),
          context: {
            allSongs,
            node,
            albumCoverSrc,
            nextSong,
            previousSong,
          },
        })
      }
    })
  )
}

exports.onCreateNode = function ({ actions, node }) {
  if (
    node.internal.type === "MarkdownRemark" &&
    node.frontmatter.name &&
    node.frontmatter.order // Ensures that this is a lyric node
  ) {
    const albumName = new RegExp(/lilyhamericana-lyrics/i).test(
      node.fileAbsolutePath
    )
      ? "lilyhamericana"
      : "fnigrh"

    const lilyhamericanaRegex = actions.createNodeField({
      name: "albumName",
      value: albumName,
      node,
    })
    actions.createNodeField({
      name: "slug",
      value: sanitizeText(node.frontmatter.name),
      node,
    })

    actions.createNodeField({
      name: "albumCoverId",
      value:
        albumName === "lilyhamericana"
          ? "d09bfbbf-5762-54d5-adfc-807d6bca6d8c"
          : "ed65a16b-9ab0-5a10-9073-7735dc86621a",
      node,
    })
  }
}
