import React from "react"
import Section from "components/common/Section"
import AlbumText from "./AlbumText"
import AlbumCover from "./AlbumCover"
import AlbumLinks from "./AlbumLinks"
import "./MusicSection.scss"

const MusicSection = () => {
  return (
    <Section title="Musikk" id="Musikk">
      <AlbumCover />
      <div className="music-section__main-wrapper">
        <AlbumText />
        <AlbumLinks />
      </div>
    </Section>
  )
}

export default MusicSection
