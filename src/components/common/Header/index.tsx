import React from "react"
import Menu from "components/common/Menu"
import Logo from "components/common/Logo"
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
