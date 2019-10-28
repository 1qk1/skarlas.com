import React from "react"

import SEO from "../components/seo"
import Classes from "./index.module.scss"

const IndexPage = () => (
  <div className="page__content">
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className={`container ${Classes.container}`}>
      <div className={Classes.hero}>
        <h1 className={Classes.heroTitle}>
          <span>Hi, I'm Panagiotis,</span>
          <span>a frontend web developer.</span>
          <span>I like building things with code, electronics or both.</span>
        </h1>
      </div>
    </div>
  </div>
)

export default IndexPage
