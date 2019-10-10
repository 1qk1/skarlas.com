import React from "react"
import Img from "gatsby-image"
import { Link } from "@reach/router"

import "./projectItem.scss"

const projectItem = ({ post, className }) => {
  return (
    <div className={className}>
      <Link to={post.node.fields.slug}>
        <div className="controlsWrapper">
          <Img
            fluid={post.node.frontmatter.image}
            className="projectImage"
            style={{ height: "100%" }}
            imgStyle={{ objectPosition: "top center" }}
          />
        </div>
      </Link>
      {/* controls div */}
    </div>
  )
}

export default projectItem
