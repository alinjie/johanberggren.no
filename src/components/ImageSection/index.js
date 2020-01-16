import React from "react"
import Section from "components/Section"
import GalleryImages from "./GalleryImages"
import SectionTitle from "components/SectionTitle"
const ImageSection = () => {
  return (
    <Section id="Galleri">
      <SectionTitle>Galleri</SectionTitle>
      <GalleryImages />
    </Section>
  )
}

export default ImageSection
