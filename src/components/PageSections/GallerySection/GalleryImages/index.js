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
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  return (
    <div className="gallery-images">
      {data.galleryImages.nodes.map(image => {
        return (
          <Img
            className="gallery-images__image"
            fluid={image.childImageSharp.fluid}
          />
        )
      })}
    </div>
  )
}

export default GalleryImages
