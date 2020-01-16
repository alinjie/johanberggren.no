import React from "react"
import Logo from "../Logo"
import Menu from "../Menu"
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
