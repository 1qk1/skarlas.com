import React from "react"
import Carousel from "react-slick"
import ProjectItem from "../components/projects/projectItem"
import { graphql } from "gatsby"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

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

  const carouselSettings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="page__content">
      <div className="projectsWrapper">
        <Carousel {...carouselSettings}>
          {postsWithImages.map((post, index) => (
            <ProjectItem key={`post-${index}`} post={post} />
          ))}
        </Carousel>
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
