import React from "react"
import ProjectItem from "../components/projects/projectItem"
import { graphql } from "gatsby"

import _ from "lodash"

import Classes from "./projects.module.scss"
import SEO from "../components/seo"

const Projects = ({ data }) => {
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
    newPost.node.frontmatter.galleryImages = newPost.node.frontmatter.galleryImages.map(
      image => imgObj[image]
    )
    return newPost
  })

  return (
    <div className="page__content">
      <SEO
        title="Projects"
        keywords={[`panagiotis`, `skarlas`, `projects`, `work`]}
      />

      <div className={`container ${Classes.projectsWrapper}`}>
        {postsWithImages.map((post, index) => (
          <ProjectItem key={`post-${index}`} post={post} />
        ))}
      </div>
    </div>
  )
}

export default Projects

export const projectsQuery = graphql`
  query {
    posts: allMarkdownRemark(
      sort: { fields: [frontmatter___order, frontmatter___date], order: ASC }
    ) {
      edges {
        node {
          html
          fields {
            slug
          }
          frontmatter {
            title
            url
            github
            galleryImages
            description
            type
            technologies
          }
        }
      }
    }
    images: allFile {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 800, quality: 90) {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  }
`
