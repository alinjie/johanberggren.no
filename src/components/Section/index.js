import React from "react"
import "./Section.css"

const Section = ({ children, className, ...props }) => {
  const classes = "section" + (className ? ` ${className}` : "")
  return (
    <section className={classes} {...props}>
      {children}
    </section>
  )
}

export default Section
