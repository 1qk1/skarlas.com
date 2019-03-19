import React from "react"
import { Redirect } from "@reach/router"

import SEO from "../components/seo"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <Redirect to="/" />
  </>
)

export default NotFoundPage
