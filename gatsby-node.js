const path = require("path")

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
  const pages = {
    home: path.resolve("src/pages/Home/index.tsx"),
    lyrics: path.resolve("src/pages/Lyrics/index.tsx"),
  }

  const lyricsPageComp = path.resolve("src/pages/Lyrics.tsx")
  const {
    data: { albums },
  } = await graphql(`
    {
      albums: allFile(filter: { sourceInstanceName: { eq: "album-covers" } }) {
        nodes {
          id
          name
        }
      }
    }
  `)

  if (albums.errors) {
    throw albums.errors
  }

  albums.nodes.forEach((album) => {
    const albumName = album.name.match(/lilyhamericana/i)
      ? "Lilyhamericana"
      : "For Now I'm Good Right Here"

    const imageFileId = album.id

    const slug = albumName.replace(/ |\'/g, "-").toLowerCase()

    /*
     * PAGE CREATION
     */
    actions.createPage({
      path: "/",
      component: pages.home,
    })

    actions.createPage({
      path: slug,
      component: pages.lyrics,
      context: {
        imageFileId,
      },
    })
  })
}
