import React from "react"
import Img from "gatsby-image"
import "./GalleryImage.scss"

const GalleryImage = props => {
  return <Img {...props} className="gallery-image" />
}

export default GalleryImage
