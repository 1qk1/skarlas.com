import React from "react"

import SEO from "../components/seo"
import Classes from "./index.module.scss"

const IndexPage = () => (
  <div className="page__content">
    <SEO title="Home" keywords={[`portfolio`, `Panagiotis`, `Skarlas`]} />
    <div className={`container ${Classes.container}`}>
      <div className={Classes.hero}>
        <h1 className={Classes.heroTitle}>
          Hi, I'm Panagiotis,<br/>
          a frontend web developer.
        </h1>
        <h2 className={Classes.heroTitle}>
          I like building things with code, electronics or both.
        </h2>
      </div>
    </div>
  </div>
)

export default IndexPage
