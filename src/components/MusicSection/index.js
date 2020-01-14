import React from "react"
import Section from "../Section"
import "./MusicSection.css"
import AlbumText from "./AlbumText"
import AlbumCover from "./AlbumCover"
import AlbumLinks from "./AlbumLinks"

const MusicSection = () => {
  return (
    <Section className="music-section" id="Musikk">
      <h1>Musikk</h1>
      <AlbumCover />
      <AlbumText />
      <AlbumLinks />
    </Section>
  )
}

export default MusicSection
