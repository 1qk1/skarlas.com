import React from "react"

const FloatElement = ({ children }) => {
  let floatDiv = React.createRef()
  const floating = event => {
    // get mouse position
    // get center of image
    // substite those values and divide them by a number
    // to get the float x and y
    // use them as styles
    const mousePos = [event.pageX, event.pageY]
    const [imageX, imageY, imageW, imageH] = [
      floatDiv.current.getBoundingClientRect().x,
      floatDiv.current.getBoundingClientRect().y,
      floatDiv.current.getBoundingClientRect().width,
      floatDiv.current.getBoundingClientRect().height,
    ]
    const [centerX, centerY] = [imageX + imageW / 2, imageY + imageH / 2]
    const [translatePosX, translatePosY] = [
      (centerX - mousePos[0]) / 25,
      (centerY - mousePos[1]) / 25,
    ]
    floatDiv.current.style.transform = `translate(${translatePosX}px, ${translatePosY}px)`
  }
  return (
    <div
      onMouseMove={floating}
      ref={floatDiv}
      onMouseLeave={() => (floatDiv.current.style.transform = "")}
      style={{ transition: "transform 5s cubic-bezier(0.16, 0.68, 0.4, 0.96)" }}
    >
      {children}
    </div>
  )
}

export default FloatElement
