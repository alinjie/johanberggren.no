import React from "react"
import Layout from "components/common/Layout"
import Music from "components/Music"
import Gallery from "components/Gallery"
import About from "components/About"
import Events from "components/Events"

export default function Home() {
  return (
    <Layout>
      <Music />
      <Gallery />
      <Events />
      <About />
    </Layout>
  )
}
