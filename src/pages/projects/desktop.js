import React from "react"
import Classes from "./projects.module.scss"
import ProjectPreview from "../../components/projectPreview"

const desktop = ({ data, selected, onProjectHover }) => {
  return (
    <div style={{ height: "100%" }} className={Classes.projectsDesktop}>
      <div
        style={{ height: "100%" }}
        className={["row", Classes.row].join(" ")}
      >
        <div
          className={[Classes.flexItem, Classes.projectList].join(" ")}
          style={{ marginTop: "3.5rem" }}
        >
          <ul>
            {data.allMarkdownRemark.edges.map((edge, index) => (
              <li
                key={`projectPreview-${index}`}
                onClick={() => onProjectHover(index)}
                className={selected === index ? Classes.selected : null}
              >
                <h2 className={Classes.projectTitle}>
                  {edge.node.frontmatter.title}
                </h2>
              </li>
            ))}
          </ul>
        </div>
        <ProjectPreview
          edges={data.allMarkdownRemark.edges}
          selected={selected}
        />
      </div>
    </div>
  )
}

export default desktop
