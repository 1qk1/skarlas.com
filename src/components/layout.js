import React, { Component } from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Transition from "./transition"

import "./layout.module.scss"

class Layout extends Component {
  render() {
    const { location, children } = this.props
    return (
      <>
        <script async defer src="https://analytics.umami.is/script.js" data-website-id="52e36515-1404-4379-acb0-55046f0e54fe"></script>
        <Header />
        <main>
          <Transition location={location}>{children}</Transition>
        </main>
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
