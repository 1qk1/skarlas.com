import React from "react"
import "./header.module.scss"
import Particles from "react-particles-js"
import particlesConfig from "../shared/particlesConfig"

const Header = () => (
  <header>
    <Particles params={particlesConfig} />
  </header>
)

export default Header
