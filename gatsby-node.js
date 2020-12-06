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

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allPrismicBlogPost {
        edges {
          node {
            id
            data {
              content {
                html
              }
              title {
                text
              }
              date_posted
              header_image {
                alt
                fluid {
                  src
                  srcSet
                  srcSetWebp
                }
              }
              slug
            }
          }
        }
      }
    }
  `)
  data.allPrismicBlogPost.edges.forEach(node => {
    const pageData = node.node.data
    actions.createPage({
      path: `blog/${pageData.slug}`,
      component: require.resolve(`./src/templates/blog-post.js`),
      context: { slug: pageData.slug, title: pageData.title, content: pageData.content, image: pageData.header_image},
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
