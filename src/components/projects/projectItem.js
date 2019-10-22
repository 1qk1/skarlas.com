import React, { useState } from "react"
import Img from "gatsby-image"

import Classes from "./projectItem.module.scss"

import { IoIosEye } from "react-icons/io"
import ProjectModal from "./projectModal"

const ProjectItem = ({ post }) => {
  // return null
  const [showModal, setShowModal] = useState(false)

  const closeModal = () => {
    setShowModal(false)
  }

  const openModal = () => {
    setShowModal(true)
  }

  return (
    <div className={Classes.projectItem}>
      <div className={Classes.imageContainer}>
        <Img fluid={post.node.frontmatter.image} className={Classes.image} />
      </div>
      <div className={Classes.controlsContainer}>
        <div className={Classes.controls}>
          <button onClick={openModal}>
            <IoIosEye className={Classes.controlIcon} size="1.5em" />
            View Project
          </button>
        </div>
      </div>
      <ProjectModal post={post} show={showModal} closeModal={closeModal} />
    </div>
  )
}

export default ProjectItem
