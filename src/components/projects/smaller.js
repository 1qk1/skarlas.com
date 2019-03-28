import React from "react"
import { Link } from "gatsby"
import Classes from "../../pages/projects/projects.module.scss"
import Img from "gatsby-image"

const smaller = ({ data }) => {
  return (
    <div className={Classes.projectsSmaller}>
      <div className={["row", Classes.row, "container"].join(" ")}>
        <div className={Classes.projectList}>
          <ul>
            {data.allMarkdownRemark.edges.map(
              (edge, index) =>
                console.log(edge.node.frontmatter.image) || (
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
                          src={edge.node.frontmatter.image}
                        />
                      </div>
                      <h3 className={Classes.projectTitle}>
                        {edge.node.frontmatter.title}
                      </h3>
                    </Link>
                  </li>
                )
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default smaller
