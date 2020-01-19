import React from "react"
import Layout from "components/Layout"
import MusicSection from "components/PageSections/MusicSection"
import GallerySection from "components/PageSections/GallerySection"
import AboutSection from "components/PageSections/AboutSection"

export default () => (
  <Layout>
    <MusicSection />
    <GallerySection />
    <AboutSection />
  </Layout>
)
