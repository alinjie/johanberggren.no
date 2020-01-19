import React from "react"
import SectionTitle from "components/SectionTitle"
import "./Section.scss"

const Section = ({ title, children, className, ...props }) => {
  const classes = "section" + (className ? ` ${className}` : "")
  return (
    <section className={classes} {...props}>
      <SectionTitle>{title}</SectionTitle>
      <div className="section__content-wrapper">{children}</div>
      <a href="#top">
        <button className="section__to-top">Til toppen</button>
      </a>
    </section>
  )
}

export default Section
