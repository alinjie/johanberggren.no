import React from "react"
import Logo from "components/Logo"
import Menu from "components/Menu"
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
