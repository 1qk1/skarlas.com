import React, { lazy, Suspense } from "react"
import Img from "gatsby-image"
import { IoIosClose, IoIosLink, IoLogoGithub } from "react-icons/io"
import Slider from "./slider"
import Classes from "./projectModal.module.scss"
import "./projectModal.scss"

const AsyncModal = lazy(() => import("react-modal"))
// AsyncModal.setAppElement("#___gatsby")

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#515151",
    border: "none",
    borderRadius: 0,
    padding: 0,
    boxShadow: "0 0 50px #111a",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 5,
  },
}

const ProjectModal = props => {
  return (
    <Suspense fallback={null}>
      <AsyncModal
        onRequestClose={props.closeModal}
        style={customStyles}
        isOpen={props.show}
        closeTimeoutMS={100}
      >
        <div className={Classes.modalContainer}>
          <div className={Classes.projectImage}>
            <Slider>
              {props.post.node.frontmatter.galleryImages.map((image, index) => (
                <div className={Classes.imageContainer} key={`image-${index}`}>
                  <Img fluid={image} className={Classes.image} />
                </div>
              ))}
            </Slider>
          </div>
          <div className={Classes.projectInfo}>
            <IoIosClose
              size="2.5em"
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                margin: "1rem",
                cursor: "pointer",
              }}
              onClick={props.closeModal}
            />
            <div className={Classes.projectInfo__header}>
              <h2 className={Classes.projectInfo__title}>
                {props.post.node.frontmatter.title}
              </h2>
              <div className={Classes.projectInfo__tech}>
                {props.post.node.frontmatter.technologies &&
                  props.post.node.frontmatter.technologies.map(
                    (techItem, i) => (
                      <span
                        key={`tech-${i}`}
                        className={Classes.projectInfo__techItem}
                      >
                        {techItem}
                      </span>
                    )
                  )}
              </div>
            </div>
            <div className={Classes.projectInfo__body}>
              <h4 className={Classes.projectInfo__title}>ABOUT</h4>
              <p className={Classes.projectInfo__description}>
                {props.post.node.frontmatter.description}
              </p>
            </div>
            <div className={Classes.projectInfo__footer}>
              <div className={Classes.projectLinks}>
                <a
                  className={`button ${Classes.projectLink}`}
                  href={props.post.node.frontmatter.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoIosLink className={Classes.controlIcon} size="1.25em" />
                  URL
                </a>
                <a
                  className={`button ${Classes.projectLink}`}
                  href={props.post.node.frontmatter.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoGithub className={Classes.controlIcon} size="1.25em" />
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </AsyncModal>
    </Suspense>
  )
}

export default ProjectModal
