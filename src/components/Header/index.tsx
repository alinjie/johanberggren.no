import React from "react"
import Menu from "components/Menu"
import Logo from "components/Logo"
import Container from "../Container"
import "./Header.scss"

export default function Header() {
  return (
    <header className="header">
      <Container className="header__container">
        <Logo />
        <Menu />
      </Container>
    </header>
  )
}
