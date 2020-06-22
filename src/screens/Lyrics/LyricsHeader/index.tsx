import React, { ReactElement } from "react"
import Container from "components/Container"
import "./LyricsHeader.scss"
import Button from "components/Button"
import { navigate } from "gatsby"
import Img, { FluidObject } from "gatsby-image"

interface Song {
  name: string
  order: number
  path: string
}

interface Props {
  albumImageSource: FluidObject
  lyricNodes: Song[]
  albumName: string
  currentSong: Song
}

export default function LyricsHeader({
  albumImageSource,
  albumName,
  lyricNodes,
  currentSong,
}: Props): ReactElement {
  return (
    <header className="lyrics-header">
      <Container className="lyrics-header__container">
        <Button
          className="lyrics-header__back-button"
          onClick={() => navigate("/")}
        >
          Tilbake
        </Button>
        <Img
          fluid={albumImageSource}
          className="lyrics-header__image"
          alt="Album cover"
        />

        <h3>{albumName}</h3>
        <ul className="lyrics-header__song-list">
          {lyricNodes
            .sort((a, b) => (a.order > b.order ? 1 : -1))
            .map((node) => {
              const { name, order, path } = node
              return (
                <li
                  onClick={() => navigate(path)}
                  className={
                    "lyrics-header__song" +
                    (name === currentSong.name
                      ? " lyrics-header__song--active"
                      : "")
                  }
                  key={order}
                >{`${order}. ${name}`}</li>
              )
            })}
        </ul>
      </Container>
    </header>
  )
}
