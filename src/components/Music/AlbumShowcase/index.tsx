import React, { ReactElement, ReactNode } from "react"
import "./AlbumShowcase.scss"

interface Props {
  coverImage: string
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
        <div className="album-showcase__cover-overlay">{albumName}</div>
        <img
          className="album-showcase__cover"
          src={coverImage}
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
    </div>
  )
}
