import React from "react"
import { graphql } from "gatsby"

import Classes from "./project.module.scss"

const project = ({ data }) => {
  const post = data.markdownRemark
  console.log(post)
  return (
    <div>
      <div className={[Classes.project, "container"].join(" ")}>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </div>
  )
}

export default project

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
