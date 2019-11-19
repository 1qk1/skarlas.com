import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"
import { IoLogoTwitter, IoIosCall, IoIosMail } from "react-icons/io"

import Classes from "./about.module.scss"
import FloatElement from "../components/floatElement"
import SEO from "../components/seo"

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
      <div className="page__content">
        <SEO
          title="About me"
          keywords={[`panagiotis`, `skarlas`, `bio`, `about`]}
        />
        <div className={`container ${Classes.row}`}>
          <div className={[Classes.flexItem, Classes.aboutImage].join(" ")}>
            <FloatElement>
              <Img
                style={{ maxWidth: "500px", margin: "0 auto" }}
                fluid={data.imageOne.childImageSharp.fluid}
              />
            </FloatElement>
          </div>
          <div className={`${Classes.flexItem} ${Classes.aboutInfo}`}>
            <div>
              <h4>
                Hi! My name is Panagiotis and I'm a frontend web developer from
                Chalkida, Greece.
              </h4>
              <p>
                Passionate about technology and learning new things, I like
                building my ideas into code and creating beautiful stuff.
              </p>
            </div>
            <div>
              <h5>Want to work together? Contact me here!</h5>
              <div className={Classes.contact}>
                <a
                  href="mailto:panossk2@gmail.com"
                  target="__blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <IoIosMail className={Classes.contactIcon} />{" "}
                    panossk2@gmail.com
                  </span>
                </a>

                <a
                  href="https://twitter.com/qktweets"
                  target="__blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <IoLogoTwitter className={Classes.contactIcon} />{" "}
                    twitter.com/qktweets
                  </span>
                </a>

                <span>
                  <IoIosCall className={Classes.contactIcon} /> +30 6945082981
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  />
)

export default About
