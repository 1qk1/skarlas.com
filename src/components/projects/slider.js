import React from "react"
import Slick from "react-slick"
import "slick-carousel/slick/slick.scss"
import "slick-carousel/slick/slick-theme.scss"

import "./slider.scss"

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
}

const Slider = props => {
  return (
    <Slick {...settings} className="slider">
      {props.children}
    </Slick>
  )
}

export default Slider
