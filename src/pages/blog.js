import React from "react"
import { graphql, Link } from "gatsby"


const Blog = ({ data }) => {
  const posts = data.allPrismicBlogPost.edges
  return (
    <div className="page__content mt-5" style={{marginTop: "5rem"}}>
      <div className="container">
        <h1>These are my blogs</h1>
        {posts.map(post => {
          return (
            <Link className="no-link" to={`/blog/${post.node.data.slug}`} key={post.node.id}>
              <div>
                <h2>{post.node.data.title.text}</h2>
                <p>{post.node.data.content.text}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Blog

export const blogsQuery = graphql`
  query {
    allPrismicBlogPost {
      edges {
        node {
          id
          data {
            content {
              text
            }
            title {
              text
            }
            date_posted
            header_image {
              alt
              fluid {
                src
                srcSet
                srcSetWebp
              }
            }
            slug
          }
        }
      }
    }
  }
`
