import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./AlbumCover.css"

const AlbumCover = () => {
  const data = useStaticQuery(graphql`
    {
      albumCover: file(
        name: { eq: "lilyhamericana" }
        sourceInstanceName: { eq: "music-images" }
      ) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
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
      <caption className="album-cover__caption">03.01.2020</caption>
    </div>
  )
}

export default AlbumCover
