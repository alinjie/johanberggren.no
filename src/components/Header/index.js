import React from "react"
import Menu from "components/Menu"
import Logo from "components/Logo"
import "./Header.scss"

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        <Menu />
      </div>
    </header>
  )
}

export default Header
