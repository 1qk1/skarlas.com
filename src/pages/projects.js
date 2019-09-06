import React, { Component } from "react"
import { graphql, navigate } from "gatsby"
import DesktopProjects from "../components/projects/desktop"
import SmallerProjects from "../components/projects/smaller"

class Projects extends Component {
  state = {
    selected: null,
    width: window.innerWidth,
  }

  componentDidMount() {
    window.onresize = event => {
      this.setState(() => ({ width: window.innerWidth }))
    }
  }
  componentWillUnmount() {
    window.onresize = null
  }

  onProjectHover = projectIndex => {
    if (this.state.selected !== projectIndex) {
      this.setState({ selected: projectIndex })
    } else {
      const navigateTo = this.props.data.data.edges[projectIndex].node.fields
        .slug
      navigate(navigateTo)
    }
  }

  render() {
    const { data, images } = this.props.data
    return (
      <div className="page__content">
        {/* data, selected, onProjectHover */}
        {this.state.width >= 850 ? (
          <DesktopProjects
            posts={data.edges}
            images={images.edges}
            selected={this.state.selected}
            onProjectHover={this.onProjectHover}
          />
        ) : (
          <SmallerProjects posts={data.edges} />
        )}
      </div>
    )
  }
}

export default Projects

export const projectsQuery = graphql`
  query {
    data: allMarkdownRemark(
      sort: { fields: [frontmatter___order, frontmatter___date], order: ASC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            url
            github
            image
          }
        }
      }
    }
    images: allFile {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  }
`
