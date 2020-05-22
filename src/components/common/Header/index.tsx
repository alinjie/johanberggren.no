import React from "react"
import Menu from "components/common/Menu"
import Logo from "components/common/Logo"
import "./Header.scss"

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        <Menu />
      </div>
    </header>
  )
}
