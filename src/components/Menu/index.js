import React from "react"
import { menuItems } from "./menuItems"
import "./Menu.scss"

const Menu = () => {
  return (
    <nav className="menu">
      <ul className="menu__list">
        {menuItems.map(item => (
          <li key={item.name} className="menu__list-item">
            <a href={item.sectionId}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu
