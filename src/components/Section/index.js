import React from "react"
import "./Section.scss"

const Section = ({ children, className, ...props }) => {
  const classes = "section" + (className ? ` ${className}` : "")
  return (
    <section className={classes} {...props}>
      {children}
      <button className="section__to-top" onClick={() => window.scroll(0, 0)}>
        Til toppen
      </button>
    </section>
  )
}

export default Section
