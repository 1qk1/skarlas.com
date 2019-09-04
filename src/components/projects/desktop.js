import React from "react"
import Classes from "../../pages/projects.module.scss"
import ProjectPreview from "./projectPreview"

const desktop = ({ posts, images, selected, onProjectHover }) => {
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
            {posts.map((post, index) => (
              <li
                key={`projectPreview-${index}`}
                onClick={() => onProjectHover(index)}
                className={selected === index ? Classes.selected : null}
              >
                <h2 className={Classes.projectTitle}>
                  {post.node.frontmatter.title}
                </h2>
              </li>
            ))}
          </ul>
        </div>
        <ProjectPreview posts={posts} images={images} selected={selected} />
      </div>
    </div>
  )
}

export default desktop
