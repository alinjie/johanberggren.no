const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)
const { promises } = require("fs")

function createLyricsPath(album, songFileName) {
  return `/${album.slug}-lyrikk/${songFileName}`
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
  actions.createPage({
    path: "/",
    component: path.resolve("src/screens/Home/index.tsx"),
  })

  /**
   * LYRICS
   */
  const albums = [
    {
      name: "Lilyhamericana",
      albumCoverImageId: "ea340b64-f12e-5750-92f0-78798c4731cd",
      slug: "lilyhamericana",
      lyricsSourceInstanceName: "lilyhamericana-lyrics",
    },
    {
      name: "For Now I'm Good Right Here",
      albumCoverImageId: "c80bced0-3624-5683-9bd3-cb09b35e2b44",
      slug: "for-now-im-good-right-here",
      lyricsSourceInstanceName: "fnigrh-lyrics",
    },
  ]

  await Promise.all(
    albums.map(async (album) => {
      const query = `
    {
      file(id:{eq: "${album.albumCoverImageId}"}) {
        childImageSharp {
          fixed(width: 350) {
            src
          }
        }
      }
      allFile(filter: { sourceInstanceName:{eq:"${album.lyricsSourceInstanceName}"}}) {
        edges {
          node {
            name
            childMarkdownRemark {
              frontmatter {
                name
                order
              }
              html
            }
          }
        }
      }
    }`
      const { data } = await graphql(query)
      console.log(JSON.stringify(album, null, 2))

      console.log(JSON.stringify(data.file, null, 2))

      const albumCoverSrc = data.file.childImageSharp.fixed.src
      const allSongs = data.allFile.edges.map((song) => {
        const { name: fileName } = song.node
        const { name, order } = song.node.childMarkdownRemark.frontmatter
        const path = createLyricsPath(album, fileName)
        const lyrics = song.node.childMarkdownRemark.html
        return {
          fileName,
          name,
          order,
          lyrics,
          path,
        }
      })
      return allSongs.map((song) => {
        const nextSong = allSongs.find((item) => item.order === song.order + 1)
        const previousSong = allSongs.find(
          (item) => item.order === song.order - 1
        )
        return actions.createPage({
          path: createLyricsPath(album, song.fileName),
          component: path.resolve("src/screens/Lyrics/index.tsx"),
          context: {
            albumCoverSrc,
            allSongs,
            nextSong,
            previousSong,
            currentSong: song,
            albumName: album.name,
          },
        })
      })
    })
  )
}
