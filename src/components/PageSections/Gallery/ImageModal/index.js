import React, { useRef } from "react"
import ReactDOM from "react-dom"
import Img from "gatsby-image"
import Cyclers from "./Cyclers"
import useOutsideAlerter from "../../../../hooks/useOutsideAlerter"
import "./GalleryModal.scss"

const GalleryModal = ({
  open,
  images,
  closeModal,
  setActiveImage,
  activeImage,
}) => {
  const modalContentRef = useRef(null)
  useOutsideAlerter(modalContentRef, closeModal)

  const handleCycle = direction => {
    const activeImageIndex = images.indexOf(activeImage)
    const imageLength = images.length
    let nextIndex
    if (direction === "next") {
      nextIndex =
        activeImageIndex + 1 === imageLength ? 0 : activeImageIndex + 1
    } else if (direction === "previous") {
      nextIndex =
        activeImageIndex === 0 ? imageLength - 1 : activeImageIndex - 1
    }
    setActiveImage(images[nextIndex])
  }

  if (typeof window === "undefined") return null

  return ReactDOM.createPortal(
    open ? (
      <div className="gallery-modal">
        <div className="gallery-modal__content-wrapper" ref={modalContentRef}>
          <i
            className="fas fa-times gallery-modal__close-icon"
            onClick={() => closeModal()}
            onKeyDown={() => closeModal()}
            role="button"
            tabIndex="0"
          />
          <Img
            className="gallery-modal__image"
            fluid={{ ...activeImage.childImageSharp.fluid, aspectRatio: 1.2 }}
          />

          <Cyclers
            onNext={() => handleCycle("next")}
            onPrevious={() => handleCycle("previous")}
          />
        </div>
      </div>
    ) : null,
    document.getElementById("___gatsby")
  )
}

export default GalleryModal
