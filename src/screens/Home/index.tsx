import React from "react"
import Layout from "components/Layout"
import Music from "./Music"
import Gallery from "./Gallery"
import About from "./About"
import Events from "./Events"

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
