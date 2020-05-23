import React, { ReactNode, HTMLProps } from "react"
import "./Section.scss"
import Container from "../Container"

interface Props extends HTMLProps<HTMLElement> {
  title: string
  children?: ReactNode
  className?: string
}

export default function Section({
  title,
  children,
  className,
  ...props
}: Props) {
  const handleToTopClick = () => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0)
    }
  }
  const classes =
    "section__content-wrapper" + (className ? ` ${className}` : "")
  return (
    <Container>
      <section className="section" {...props}>
        <p className="section__title">{title}</p>
        <div className={classes}>{children}</div>
        <button className="section__to-top" onClick={handleToTopClick}>
          Til toppen
        </button>
      </section>
    </Container>
  )
}
