import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./AlbumCover.scss"

const AlbumCover = () => {
  const data = useStaticQuery(graphql`
    {
      albumCover: file(
        name: { eq: "lilyhamericana" }
        sourceInstanceName: { eq: "music-images" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="album-cover">
      <Img
        fluid={data.albumCover.childImageSharp.fluid}
        alt="Lilyhamericana Album Cover"
        className="album-cover__image"
      />
      <span className="album-cover__caption">03.01.2020</span>
    </div>
  )
}

export default AlbumCover
