import React from "react"
import Classes from "./projectModal.module.scss"
import Img from "gatsby-image"
import { IoIosClose, IoIosCode, IoLogoGithub } from "react-icons/io"
import Modal from "react-modal"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

Modal.setAppElement("#___gatsby")

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
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 5,
  },
}

const ProjectModal = props => {
  console.log(props.post)
  return (
    // backdrop
    // project info
    <Modal
      onRequestClose={props.closeModal}
      style={customStyles}
      isOpen={props.show}
    >
      <div className={Classes.modalContainer}>
        <div className={Classes.projectImage}>
          <div className={Classes.imageContainer}>
            <Slider {...settings} className={Classes.slider}>
              <div>
                <Img
                  fluid={props.post.node.frontmatter.image}
                  style={{ width: "50%", margin: "auto" }}
                  imgStyle={{
                    objectPosition: "top center",
                    borderRadius: "2px",
                  }}
                />
              </div>
            </Slider>
          </div>
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
                props.post.node.frontmatter.technologies.map((techItem, i) => (
                  <span
                    key={`tech-${i}`}
                    className={Classes.projectInfo__techItem}
                  >
                    {techItem}
                  </span>
                ))}
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
                href={props.post.node.frontmatter.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={Classes.projectLink}>
                  <IoIosCode className={Classes.controlIcon} size="1.25em" />
                  URL
                </button>
              </a>
              <a
                href={props.post.node.frontmatter.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={Classes.projectLink}>
                  <IoLogoGithub className={Classes.controlIcon} size="1.25em" />
                  Github
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default ProjectModal
