import React from "react"
import "./Cyclers.scss"

const Cyclers = ({ onPrevious, onNext }) => {
  return (
    <div className="cyclers">
      <i
        onClick={onPrevious}
        onKeyDown={onPrevious}
        className="cyclers__previous fas fa-chevron-circle-left"
        role="button"
        tabIndex="0"
      />
      <i
        onClick={onNext}
        onKeyDown={onNext}
        className="cyclers__next fas fa-chevron-circle-right"
        role="button"
        tabIndex="0"
      />
    </div>
  )
}

export default Cyclers
