import React, { useRef, Dispatch, SetStateAction } from "react"
import ReactDOM from "react-dom"
import Img from "gatsby-image"
import Cyclers from "./Cyclers"
import useOutsideAlerter from "../../../../hooks/useOutsideAlerter"
import "./GalleryModal.scss"
import ChildImageSharp from "interfaces/ChildImageSharp"

interface Props {
  open: boolean
  images: ChildImageSharp[]
  closeModal: Function
  activeImage: ChildImageSharp
  setActiveImage: Dispatch<SetStateAction<null | ChildImageSharp>>
}

export default function GalleryModal({
  open,
  images,
  closeModal,
  setActiveImage,
  activeImage,
}: Props) {
  const modalContentRef = useRef(null)
  useOutsideAlerter(modalContentRef, closeModal)

  const handleCycle = (direction: "previous" | "next") => {
    const activeImageIndex = images.indexOf(activeImage)
    const imageLength = images.length
    let nextIndex = 1
    if (direction === "next") {
      nextIndex =
        activeImageIndex + 1 === imageLength ? 0 : activeImageIndex + 1
    } else if (direction === "previous") {
      nextIndex =
        activeImageIndex === 0 ? imageLength - 1 : activeImageIndex - 1
    }
    setActiveImage(images[nextIndex])
  }

  const portalRoot = document.getElementById("___gatsby")

  if (typeof window === "undefined" || !portalRoot) return null

  return ReactDOM.createPortal(
    open ? (
      <div className="gallery-modal">
        <div className="gallery-modal__content-wrapper" ref={modalContentRef}>
          <i
            className="fas fa-times gallery-modal__close-icon"
            onClick={() => closeModal()}
            onKeyDown={() => closeModal()}
            role="button"
            tabIndex={0}
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
    portalRoot
  )
}
