import React from "react"
import PCLasses from "../pages/projects/projects.module.scss"
import Classes from "./projectPreview.module.scss"
import Img from "gatsby-image"

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"

const projectPreview = ({ edges, selected }) => {
  return (
    <div className={[PCLasses.flexItem, Classes.projectPreview].join(" ")}>
      {selected === null ? null : (
        <>
          <Img
            style={{ height: "100%" }}
            fluid={edges[selected].node.frontmatter.image.childImageSharp.fluid}
          />
          <div className={Classes.previewButtons}>
            <a
              href={edges[selected].node.frontmatter.github}
              className={Classes.previewButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href={edges[selected].node.frontmatter.url}
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
