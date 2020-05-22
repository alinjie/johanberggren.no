import React from "react"
import Img from "gatsby-image"
import "./GalleryImage.scss"

export default function GalleryImage({ ...props }) {
  return <Img {...props} className="gallery-image" />
}
