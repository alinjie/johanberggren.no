import React, { ReactElement } from "react"
import ChildImageSharp from "interfaces/ChildImageSharp"
import Img from "gatsby-image"
import "./AlbumShowcase.scss"
import Caption from "components/common/Caption"

interface Props {
  coverImage: ChildImageSharp
  albumName: string
  spotifyLink?: string
  appleMusicLink?: string
  googlePlayLink?: string
}

export default function AlbumShowcase({
  coverImage,
  albumName,
  appleMusicLink,
  googlePlayLink,
  spotifyLink,
}: Props): ReactElement {
  return (
    <div className="album-showcase">
      <div className="album-showcase__cover-wrapper">
        <Img
          className="album-showcase__cover"
          fluid={coverImage.childImageSharp.fluid}
          alt={`${albumName} album cover`}
        />
      </div>
      <div className="album-showcase__links">
        {spotifyLink && (
          <a href={spotifyLink} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-spotify" />
          </a>
        )}
        {appleMusicLink && (
          <a href={appleMusicLink} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-apple" />
          </a>
        )}
        {googlePlayLink && (
          <a href={googlePlayLink} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-google-play" />
          </a>
        )}
      </div>
      <Caption className="album-showcase__album-name">{albumName}</Caption>
    </div>
  )
}
