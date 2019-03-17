import React from "react"
import { Link } from "@reach/router"
import Classes from "./nav.module.scss"

const Nav = () => (
  <nav>
    <div className={`container-fluid ${Classes.container}`}>
      <div className={Classes.navLinks}>
        <Link to="/projects">Projects</Link>
        <h3 className={Classes.brandLogo}>
          <Link to="/">Logo</Link>
        </h3>
        <Link to="/about">About</Link>
      </div>
    </div>
  </nav>
)

export default Nav
