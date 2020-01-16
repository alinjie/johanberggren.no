import React from "react"
import Section from "components/Section"
import AlbumText from "./AlbumText"
import AlbumCover from "./AlbumCover"
import AlbumLinks from "./AlbumLinks"
import SectionTitle from "components/SectionTitle"

const MusicSection = () => {
  return (
    <Section className="music-section" id="Musikk">
      <SectionTitle>Musikk</SectionTitle>
      <AlbumCover />
      <AlbumText />
      <AlbumLinks />
    </Section>
  )
}

export default MusicSection
