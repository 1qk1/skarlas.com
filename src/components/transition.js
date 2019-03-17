import React, { PureComponent } from "react"
import {
  TransitionGroup,
  CSSTransition as ReactTransition,
} from "react-transition-group"

import "./transition.scss"

const timeout = 500

class Transition extends PureComponent {
  prevLocation = null

  componentWillUpdate() {
    const oldLocation = this.props.location.pathname
    if (oldLocation !== this.prevLocation) {
      this.prevLocation = oldLocation
    }
  }

  transitionSide = () => {
    const { location: loc } = this.props
    const { prevLocation } = this
    const location = loc.pathname
    if (prevLocation === null) return
    if (prevLocation === "/") {
      if (location.includes("about")) return "pageSliderLeft"
      else return "pageSliderRight"
    } else if (prevLocation.includes("projects")) return "pageSliderLeft"
    else return "pageSliderRight"
  }

  render() {
    const { location, children } = this.props
    const transitionSide = this.transitionSide()
    return (
      <TransitionGroup
        childFactory={child =>
          React.cloneElement(child, {
            classNames: `pageSlider ${transitionSide}`,
          })
        }
      >
        <ReactTransition
          mountOnEnter={true}
          unmountOnExit={true}
          key={location.pathname.replace(/\//g, "")}
          timeout={timeout}
          classNames={`pageSlider ${transitionSide}`}
        >
          {children}
        </ReactTransition>
      </TransitionGroup>
    )
  }
}

export default Transition
