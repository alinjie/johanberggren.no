import React from "react"
import Layout from "components/Layout"
import MusicSection from "components/PageSections/MusicSection"
import GallerySection from "components/PageSections/GallerySection"
import AboutSection from "components/PageSections/AboutSection"
import EventSection from "../components/PageSections/EventSection"

export default () => (
  <Layout>
    <MusicSection />
    <GallerySection />
    <EventSection />
    <AboutSection />
  </Layout>
)
