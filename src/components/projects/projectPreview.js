import React from "react"
import PCLasses from "../../pages/projects.module.scss"
import Classes from "./projectPreview.module.scss"
import Img from "gatsby-image"

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"

const projectPreview = ({ posts, selected, images }) => {
  const post = posts[selected]
  const currentImage =
    selected === null
      ? null
      : images.filter(image => {
          if (image.node.childImageSharp === null) return false
          return (
            image.node.childImageSharp.fluid.originalName ===
            post.node.frontmatter.image[0]
          )
        })[0]

  return (
    <div className={[PCLasses.flexItem, Classes.projectPreview].join(" ")}>
      {selected === null ? null : (
        <>
          <Img
            style={{ height: "100%" }}
            fluid={currentImage.node.childImageSharp.fluid}
          />
          <div className={Classes.previewButtons}>
            <a
              href={post.node.frontmatter.github}
              className={Classes.previewButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href={post.node.frontmatter.url}
              className={Classes.previewButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt />
            </a>
          </div>
        </>
      )}
    </div>
  )
}

export default projectPreview
