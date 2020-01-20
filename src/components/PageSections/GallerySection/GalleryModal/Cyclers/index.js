import React from "react"
import "./Cyclers.scss"

const Cyclers = ({ onPrevious, onNext }) => {
  return (
    <div className="cyclers">
      <i
        onClick={onPrevious}
        className="cyclers__previous fas fa-chevron-circle-left"
      />
      <i
        onClick={onNext}
        className="cyclers__next fas fa-chevron-circle-right"
      />
    </div>
  )
}

export default Cyclers
