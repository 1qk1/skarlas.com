import React, { useState } from "react"
import Img from "gatsby-image"
import loadable from "@loadable/component"

import Classes from "./projectItem.module.scss"

import { IoIosEye } from "react-icons/io"

const AsyncModal = loadable(() => import("./projectModal"))

const ProjectItem = ({ data }) => {
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
        <Img
          fluid={data.images[0].image.fluid}
          className={Classes.image}
        />
      </div>
      <div className={Classes.controlsContainer}>
        <div className={Classes.controls}>
          <button className="button" onClick={openModal}>
            <IoIosEye className={Classes.controlIcon} size="1.5em" />
            View Project
          </button>
        </div>
      </div>
      <AsyncModal data={data} show={showModal} closeModal={closeModal} />
    </div>
  )
}

export default ProjectItem
