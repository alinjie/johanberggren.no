import React from "react"
import SectionTitle from "components/SectionTitle"
import "./Section.scss"

const Section = ({ title, children, className, ...props }) => {
  const handleToTopClick = () => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0)
    }
  }
  const classes =
    "section__content-wrapper" + (className ? ` ${className}` : "")
  return (
    <section className="section" {...props}>
      <SectionTitle>{title}</SectionTitle>
      <div className={classes}>{children}</div>
      <button className="section__to-top" onClick={handleToTopClick}>
        Til toppen
      </button>
    </section>
  )
}

export default Section
