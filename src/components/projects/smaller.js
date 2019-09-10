import React from "react"
import { Link } from "gatsby"
import Classes from "../../pages/projects.module.scss"
import Img from "gatsby-image"

const smaller = ({ posts, images }) => {
  // get posts
  // get images
  const imgObj = {}
  images.forEach(image => {
    if (image.node.childImageSharp) {
      imgObj[image.node.childImageSharp.fluid.originalName] =
        image.node.childImageSharp.fluid
    }
  })
  return (
    <div className={Classes.projectsSmaller}>
      <div className={["row", Classes.row, "container"].join(" ")}>
        <div className={Classes.projectList}>
          <ul>
            {posts.map((edge, index) => (
              <li
                key={`projectPreview-${index}`}
                className={Classes.projectItem}
              >
                <Link
                  className={Classes.projectLink}
                  to={edge.node.fields.slug}
                >
                  <div className={Classes.projectImage}>
                    <Img
                      className={Classes.projectImage}
                      fluid={imgObj[edge.node.frontmatter.image]}
                      // vw: static image at 50vw
                      // px: scales up and down
                      style={{ maxHeight: "70vw" }}
                      imgStyle={{ maxHeight: "70vw" }}
                    />
                  </div>
                  <h3 className={Classes.projectTitle}>
                    {edge.node.frontmatter.title}
                  </h3>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default smaller
