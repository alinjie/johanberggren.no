import React from "react"
import Section from "components/Section"
import AlbumShowcase from "./AlbumShowcase"
import ChildImageSharp from "interfaces/ChildImageSharp"
import { useStaticQuery, graphql } from "gatsby"
import Caption from "components/Caption"
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

  const albums = [
    {
      name: "Lilyhamericana",
      coverImage: albumCovers.nodes[1],
      spotifyUrl:
        "https://open.spotify.com/album/1Xj0AwMINsMUDTfwIaStnb?si=H3QCSUOfRneeON8OzhohPA",
      appleMusicUrl:
        "https://music.apple.com/no/album/lilyhamericana/1489496780",
      googlePlayUrl:
        "https://play.google.com/store/music/album?id=Benkmxtgwyo2ndlsm7gwtiiov7q&tid=song-T4wv4tg6j37mgqnv3bj45jjjavu",
      firstSongPath: "/lilyhamericana-lyrikk/du-saa-meg",
    },
    {
      name: "For Now I'm Good Right Here",
      coverImage: albumCovers.nodes[0],
      spotifyUrl:
        "https://open.spotify.com/album/6pwWHdrQScPz2sCXIUiKhY?si=vPLf4QbwTJeKmm_DrjYdhQ",
      appleMusicUrl:
        "https://music.apple.com/no/album/for-now-im-good-right-here/1437919945",
      googlePlayUrl:
        "https://play.google.com/store/music/album?id=Benkmxtgwyo2ndlsm7gwtiiov7q&tid=song-T4wv4tg6j37mgqnv3bj45jjjavu",
      firstSongPath: "/for-now-im-good-right-here-lyrikk/things-i-hate",
    },
  ]

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
      {albums.map((album) => (
        <AlbumShowcase
          key={album.name}
          albumName={album.name}
          coverImage={album.coverImage}
          appleMusicLink={album.appleMusicUrl}
          googlePlayLink={album.googlePlayUrl}
          spotifyLink={album.spotifyUrl}
          firstSongPath={album.firstSongPath}
        />
      ))}
    </Section>
  )
}
