import React from "react"
import "./AlbumText.scss"

const AlbumText = () => {
  return (
    <div className="album-text">
      <div className="album-text__title">Lilyhamericana</div>
      <p>
        "Tekster som både er velformulerte, poetiske og finurlige til sanger som
        er vokst ut av dyrka mark"{" "}
        <span className="album-text__source">
          - 4.5/6 stjerner - Musikkmagasinet, Klassekampen
        </span>
      </p>
      <p>
        "Ingen svake låter!...Berggrens nye plate får meg til å tenke på Hank
        Williams. Ikke bare er det et kvalitetsstempel, det er også godt gjort i
        og med at Berggren denne gangen synger på norsk."
        <span className="album-text__source"> - Popklikk</span>
      </p>
    </div>
  )
}

export default AlbumText
