import React from "react"
import ProjectItem from "./projectItem"
import "./projectsGrid.scss"

const projectsGrid = ({ posts }) => {
  // get posts
  // get images
  return (
    <div className="projectGrid">
      {posts.map((post, index) => (
        <ProjectItem
          key={`post-${index}`}
          className={`project-${index + 1}`}
          post={post}
        />
      ))}
    </div>
  )
}

export default projectsGrid
