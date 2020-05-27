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
