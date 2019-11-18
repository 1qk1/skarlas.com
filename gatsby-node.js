/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

const { createFilePath } = require("gatsby-source-filesystem")
const LoadablePlugin = require("@loadable/webpack-plugin")

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === `MarkdownRemark`) {
    const { createNodeField } = actions
    const slug = createFilePath({
      node,
      getNode,
    })
    const newImages = node.frontmatter.galleryImages.map(
      image => RegExp(/([a-zA-Z0-9_.-])+(\.\w+)$/, "gi").exec(image)[0]
    )
    node.frontmatter.galleryImages = newImages
    createNodeField({
      node,
      name: `slug`,
      value: `/projects${slug}`,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (!result.data.allMarkdownRemark) return
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve("./src/templates/project/project.js"),
        context: {
          slug: node.fields.slug,
        },
      })
    })
  })
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
