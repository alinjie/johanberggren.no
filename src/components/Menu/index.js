import React from "react"
import { menuItems } from "./menuItems"
import "./Menu.scss"

const Menu = () => {
  const onClick = sectionId => {
    const element =
      typeof document !== undefined && document.getElementById(sectionId)
    element.scrollIntoView()
  }

  return (
    <nav className="menu">
      <ul className="menu__list">
        {menuItems.map(item => (
          <li
            key={item.name}
            onClick={() => onClick(item.sectionId)}
            className="menu__list-item"
          >
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu
