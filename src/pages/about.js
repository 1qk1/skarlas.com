import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

import Classes from "./about.module.scss"

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        imageOne: file(relativePath: { eq: "1000.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <div className={`container ${Classes.row}`}>
          <div className={[Classes.flexItem, Classes.aboutImage].join(" ")}>
            <Img
              style={{ maxWidth: "500px", margin: "0 auto" }}
              fluid={data.imageOne.childImageSharp.fluid}
            />
          </div>
          <div className={Classes.flexItem}>
            <h4 className={Classes.aboutText}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium laboriosam quo quam quibusdam vitae fugiat sunt
              reprehenderit distinctio perferendis quod magnam excepturi
              tempore, sapiente aperiam! Explicabo odio neque molestiae quae
              eius dolore? Nesciunt neque facilis dolores maiores, blanditiis
              eius cum provident iusto cumque rerum ad. Inventore animi
              laboriosam tenetur illum? Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Accusantium laboriosam quo quam quibusdam vitae
              fugiat sunt reprehenderit distinctio perferendis quod magnam
              excepturi tempore, sapiente aperiam! Explicabo odio neque
              molestiae quae eius dolore? Nesciunt neque facilis dolores
              maiores, blanditiis eius cum provident iusto cumque rerum ad.
              Inventore animi laboriosam tenetur illum?
            </h4>
          </div>
        </div>
      </div>
    )}
  />
)

export default About
