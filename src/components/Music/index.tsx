import React from "react"
import Section from "components/common/Section"
import AlbumShowcase from "./AlbumShowcase"
import LilyhamericanaCover from "./lilyhamericana.jpg"
import FNIGRHCover from "./fnigrh.png"
import "./Music.scss"

export default function Music() {
  return (
    <Section title="Musikk" id="Musikk" className="music">
      <AlbumShowcase
        albumName="Lilyhamericana"
        coverImage={LilyhamericanaCover}
        spotifyLink="https://open.spotify.com/album/1Xj0AwMINsMUDTfwIaStnb?si=H3QCSUOfRneeON8OzhohPA"
        appleMusicLink="https://music.apple.com/no/album/lilyhamericana/1489496780"
        googlePlayLink="https://play.google.com/store/music/artist/Johan_Berggren?id=Aweay2zg2m6fpvulycb6xxc7ndm"
      />
      <AlbumShowcase
        albumName="For Now I'm Good Right Here"
        coverImage={FNIGRHCover}
        spotifyLink="https://open.spotify.com/album/1Xj0AwMINsMUDTfwIaStnb?si=H3QCSUOfRneeON8OzhohPA"
        appleMusicLink="https://music.apple.com/no/album/lilyhamericana/1489496780"
        googlePlayLink="https://play.google.com/store/music/artist/Johan_Berggren?id=Aweay2zg2m6fpvulycb6xxc7ndm"
      />
    </Section>
  )
}
