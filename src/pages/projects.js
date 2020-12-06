import React from "react"
import ProjectItem from "../components/projects/projectItem"
import { graphql } from "gatsby"

import Classes from "./projects.module.scss"
import SEO from "../components/seo"

const Projects = ({ data }) => {
  const { projects } = data

  return (
    <div className="page__content">
      <SEO title="Projects" keywords={[`projects`, `work`]} />

      <div className={`container ${Classes.projectsWrapper}`}>
        {projects.edges.map((project) => (
          <ProjectItem key={`project-${project.node.id}`} data={project.node.data} />
        ))}
      </div>
    </div>
  )
}

export default Projects

export const projectsQuery = graphql`
  query {
    projects: allPrismicProjects(sort: {fields: data___order}) {
      edges {
        node {
          id
          data {
            date
            title {
              text
            }
            description {
              html
            }
            github_url {
              url
            }
            page_url {
              url
            }
            technologies {
              tag
            }
            images {
              image {
                fluid(maxWidth: 800) {
                  ...GatsbyPrismicImageFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
