import React from "react"
import BackgroundImage from "gatsby-background-image"

function BackgroungSection({ img, title, styleClass }) {
  return (
    <BackgroundImage fluid={img} className={styleClass}>
      <h1 className="title text-white text-uppercase text-center display-4 font-weight-bold">
        {title}
      </h1>
    </BackgroundImage>
  )
}

BackgroungSection.defaultProps = {
  title: "Default title",
  styleClass: "default-background",
}
export default BackgroungSection
