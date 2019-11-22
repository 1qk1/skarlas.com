import React, { PureComponent } from "react"
import "./header.module.scss"
import Particles from "react-particles-js"
import particlesConfig from "../shared/particlesConfig"
import Nav from "./nav"

class Header extends PureComponent {
  render() {
    return (
      <>
        <Nav />
        <header>
          <Particles params={particlesConfig} />
        </header>
      </>
    )
  }
}

export default Header
