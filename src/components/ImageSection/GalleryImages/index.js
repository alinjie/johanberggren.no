import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./GalleryImages.scss"

const GalleryImages = () => {
  const data = useStaticQuery(graphql`
    {
      galleryImages: allFile(
        filter: { sourceInstanceName: { eq: "gallery-images" } }
      ) {
        nodes {
          childImageSharp {
            fixed(height: 250, width: 250) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `)
  return (
    <div className="gallery-images">
      {data.galleryImages.nodes.map(image => (
        <Img
          className="gallery-images__image"
          fixed={image.childImageSharp.fixed}
        />
      ))}
    </div>
  )
}

export default GalleryImages
