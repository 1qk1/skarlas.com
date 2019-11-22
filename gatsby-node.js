/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const LoadablePlugin = require("@loadable/webpack-plugin")

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === `MarkdownRemark`) {
    const newImages = node.frontmatter.galleryImages.map(
      image => RegExp(/([a-zA-Z0-9_.-])+(\.\w+)$/, "gi").exec(image)[0]
    )
    node.frontmatter.galleryImages = newImages
  }
}

exports.onCreateWebpackConfig = ({
  stage,
  getConfig,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    plugins: [new LoadablePlugin()],
  })
}
