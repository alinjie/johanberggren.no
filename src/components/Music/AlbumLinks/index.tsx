import React from "react"
import { icons } from "./icons"
import "./AlbumLinks.scss"

export default function AlbumLinks() {
  return (
    <div className="album-links">
      <span className="album-links__title">Lytt til albumet</span>
      <div className="alum-links__icon-wrapper">
        {icons.map((icon) => (
          <a
            href={icon.link}
            target="_blank"
            rel="noreferrer noopener"
            className="album-links__link"
            key={icon.link}
          >
            <i className={icon.className} />
          </a>
        ))}
      </div>
    </div>
  )
}
