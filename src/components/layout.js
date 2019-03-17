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
