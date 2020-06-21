import React, { ReactElement } from "react"
import { PageProps } from "gatsby"
import Layout from "components/Layout"
import Container from "components/Container"
import LyricsHeader from "./LyricsHeader"
import Song from "interfaces/Song"
import LyricsFooter from "./LyricsFooter"
import "./Lyrics.scss"

interface Props extends PageProps {
  pageContext: {
    albumCoverSrc: string
    albumName: string
    allSongs: Song[]
    nextSong?: Song
    previousSong?: Song
    currentSong: Song
  }
}

export default function Lyrics({ pageContext }: Props): ReactElement {
  const {
    albumCoverSrc,
    nextSong,
    previousSong,
    currentSong,
    allSongs,
    albumName,
  } = pageContext
  return (
    <Layout showHeader={false}>
      <Container className="lyrics">
        <LyricsHeader
          albumImageSource={albumCoverSrc}
          albumName={albumName}
          lyricNodes={allSongs}
          currentSong={currentSong}
        />
        <div className="lyrics__container">
          <h2>{currentSong.name}</h2>
          <div dangerouslySetInnerHTML={{ __html: currentSong.lyrics }} />
        </div>
        <LyricsFooter next={nextSong} previous={previousSong} />
      </Container>
    </Layout>
  )
}
