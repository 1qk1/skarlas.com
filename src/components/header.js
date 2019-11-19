import React, { PureComponent } from "react"
import "./header.module.scss"
// import Particles from "react-particles-js"
import particlesConfig from "../shared/particlesConfig"
import Nav from "./nav"
import { loadable } from "@loadable/component"

const AsyncParticles = loadable(() => import("react-particles-js"))

class Header extends PureComponent {
  render() {
    return (
      <>
        <Nav />
        <header>
          <AsyncParticles params={particlesConfig} />
        </header>
      </>
    )
  }
}

export default Header
