import React from "react"
import "./Section.css"

const Section = ({ children, className, ...props }) => {
  const classes = "section" + (className ? ` ${className}` : "")
  return (
    <section className={classes} {...props}>
      {children}
      <span className="section__to-top" onClick={() => window.scroll(0, 0)}>
        Til toppen
      </span>
    </section>
  )
}

export default Section
