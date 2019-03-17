import React, { Component } from "react"
import { graphql, navigate } from "gatsby"
import DesktopProjects from "./desktop"
import SmallerProjects from "./smaller"

class Projects extends Component {
  state = {
    selected: null,
  }

  onProjectHover = projectIndex => {
    if (this.state.selected !== projectIndex) {
      this.setState({ selected: projectIndex })
    } else {
      const navigateTo = this.props.data.allMarkdownRemark.edges[projectIndex]
        .node.fields.slug
      navigate(navigateTo)
    }
  }

  render() {
    const { data } = this.props
    return (
      <div>
        {/* data, selected, onProjectHover */}
        <DesktopProjects
          data={data}
          selected={this.state.selected}
          onProjectHover={this.onProjectHover}
        />
        <SmallerProjects data={data} />
      </div>
    )
  }
}

export default Projects

export const projectsQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            url
            github
            image {
              childImageSharp {
                fluid(maxHeight: 1000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
