import React, { useState } from "react"
import Section from "components/Section"
import GalleryImage from "./GalleryImage"
import { useStaticQuery, graphql } from "gatsby"
import GalleryModal from "./GalleryModal"
import "./GallerySection.scss"

const ImageSection = () => {
  const [galleryFullscreen, setGalleryFullscreen] = useState(false)

  const [activeImage, setActiveImage] = useState(null)

  const data = useStaticQuery(graphql`
    {
      galleryImages: allFile(
        filter: { sourceInstanceName: { eq: "gallery-images" } }
      ) {
        nodes {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  const handleImageClick = image => {
    setActiveImage(image)
    setGalleryFullscreen(true)
  }

  return (
    <Section title="Galleri" id="Galleri" className="gallery">
      {data.galleryImages.nodes.map((image, index) => (
        <div
          className="gallery__image-wrapper"
          onClick={() => handleImageClick(image)}
          key={index}
        >
          <GalleryImage
            style={{ width: "100%" }}
            fluid={{ ...image.childImageSharp.fluid, aspectRatio: 1.2 }}
          />
        </div>
      ))}
      <GalleryModal
        open={galleryFullscreen}
        images={data.galleryImages.nodes}
        closeModal={() => setGalleryFullscreen(false)}
        activeImage={activeImage}
        setActiveImage={setActiveImage}
      />
    </Section>
  )
}

export default ImageSection
