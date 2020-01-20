import React from "react"
import SectionTitle from "components/SectionTitle"
import "./Section.scss"

const Section = ({ title, children, className, ...props }) => {
  const classes =
    "section__content-wrapper" + (className ? ` ${className}` : "")
  return (
    <section className="section" {...props}>
      <SectionTitle>{title}</SectionTitle>
      <div className={classes}>{children}</div>
      <button className="section__to-top" onClick={() => window.scrollTo(0, 0)}>
        Til toppen
      </button>
    </section>
  )
}

export default Section
