import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import ChildImageSharp from "interfaces/ChildImageSharp"
import "./AlbumCover.scss"

interface Data {
  albumCover: ChildImageSharp
}

export default function AlbumCover() {
  const { albumCover }: Data = useStaticQuery(graphql`
    {
      albumCover: file(
        name: { eq: "lilyhamericana-album-cover" }
        sourceInstanceName: { eq: "music-images" }
      ) {
        childImageSharp {
          fluid(quality: 40) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="album-cover">
      <Img
        fluid={albumCover.childImageSharp.fluid}
        alt="Lilyhamericana Album Cover"
        className="album-cover__image"
      />
      <span className="album-cover__caption">03.01.2020</span>
    </div>
  )
}
