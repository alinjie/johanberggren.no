import React from "react"
import Layout from "components/common/Layout"
import MusicSection from "components/PageSections/MusicSection"
import Gallery from "components/PageSections/Gallery"
import About from "components/About"
import Events from "components/Events"

export default function Home() {
  return (
    <Layout>
      <MusicSection />
      <Gallery />
      <Events />
      <About />
    </Layout>
  )
}
