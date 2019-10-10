import React from "react"
import ProjectsGrid from "../components/projects/projectsGrid"
import { graphql } from "gatsby"

import _ from "lodash"

import "./projects.scss"

const projects = ({ data }) => {
  const { posts, images } = data
  const imgObj = {}

  images.edges.forEach(image => {
    if (image.node.childImageSharp) {
      imgObj[image.node.childImageSharp.fluid.originalName] =
        image.node.childImageSharp.fluid
    }
  })

  const postsWithImages = posts.edges.map(post => {
    const newPost = _.cloneDeep(post)
    newPost.node.frontmatter.image = imgObj[post.node.frontmatter.image]
    return newPost
  })

  return (
    <div className="page__content">
      <div className="gridWrapper">
        <ProjectsGrid posts={postsWithImages} />
      </div>
    </div>
  )
}

export default projects

export const projectsQuery = graphql`
  query {
    posts: allMarkdownRemark(
      sort: { fields: [frontmatter___order, frontmatter___date], order: ASC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            url
            github
            image
          }
        }
      }
    }
    images: allFile {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  }
`
