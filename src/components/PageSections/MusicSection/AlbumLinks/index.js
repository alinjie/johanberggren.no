import React from "react"
import { icons } from "./icons"
import "./AlbumLinks.scss"

const AlbumLinks = () => {
  return (
    <div className="album-links">
      <span className="album-links__title">Lytt til albumet</span>
      <div className="alum-links__icon-wrapper">
        {icons.map(icon => (
          <a
            href={icon.link}
            target="_blank"
            rel="noreferrer noopener"
            className="album-links__link"
          >
            <i className={icon.className} />
          </a>
        ))}
      </div>
    </div>
  )
}

export default AlbumLinks
