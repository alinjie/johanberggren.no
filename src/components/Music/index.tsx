import React from "react"
import Section from "components/common/Section"
import AlbumShowcase from "./AlbumShowcase"
import ChildImageSharp from "interfaces/ChildImageSharp"
import { useStaticQuery, graphql } from "gatsby"
import Caption from "components/common/Caption"
import "./Music.scss"

interface Data {
  albumCovers: {
    nodes: ChildImageSharp[]
  }
}

export default function Music() {
  const { albumCovers }: Data = useStaticQuery(graphql`
    {
      albumCovers: allFile(
        filter: { sourceInstanceName: { eq: "album-covers" } }
      ) {
        nodes {
          childImageSharp {
            fluid(quality: 40) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  const lilyhamericanaImage = albumCovers.nodes[1]
  const fnigrhCover = albumCovers.nodes[0]

  if (!lilyhamericanaImage || !fnigrhCover) return null

  return (
    <Section title="Musikk" id="Musikk" className="music">
      <div className="music__video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/9M-LWLX2h-Q"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="music__video"
        ></iframe>
        <Caption className="music__video-caption">
          Hjerter som aldri brant
        </Caption>
      </div>

      <AlbumShowcase
        albumName="Lilyhamericana"
        coverImage={lilyhamericanaImage}
        spotifyLink="https://open.spotify.com/album/1Xj0AwMINsMUDTfwIaStnb?si=H3QCSUOfRneeON8OzhohPA"
        appleMusicLink="https://music.apple.com/no/album/lilyhamericana/1489496780"
        googlePlayLink="https://play.google.com/store/music/album/Johan_Berggren_Lilyhamericana?id=Bz2yh6urq37of2jvuf335eiyrlu"
      />
      <AlbumShowcase
        albumName="For Now I'm Good Right Here"
        coverImage={fnigrhCover}
        spotifyLink="https://open.spotify.com/album/6pwWHdrQScPz2sCXIUiKhY?si=vPLf4QbwTJeKmm_DrjYdhQ"
        appleMusicLink="https://music.apple.com/no/album/for-now-im-good-right-here/1437919945"
        googlePlayLink="https://play.google.com/store/music/album?id=Benkmxtgwyo2ndlsm7gwtiiov7q&tid=song-T4wv4tg6j37mgqnv3bj45jjjavu"
      />
    </Section>
  )
}
