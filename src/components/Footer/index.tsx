import React from "react"
import { socialIcons } from "./socialIcons"
import "./Footer.scss"
import Container from "../Container"

export default function Footer() {
  return (
    <footer className="footer">
      <Container className="footer__content-wrapper">
        <div className="footer__section">
          <p className="footer__title">Presse / Booking</p>
          <a href="mailto:Vibeke@rootsy.no">Vibeke@rootsy.no</a>
        </div>
        <div className="footer__section">
          <p className="footer__title">Distribusjon</p>
          <a href="mailto:info@border.se">info@border.se</a>
        </div>
        <div className="footer__section">
          <p className="footer__title">Sosialt</p>
          <div className="footer__icon-wrapper">
            {socialIcons.map((icon) => (
              <a
                key={icon.icon}
                href={icon.link}
                target="_blank"
                rel="noreferrer noopener"
              >
                <i className={icon.icon} />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}
