import React from "react"
import { menuItems } from "./menuItems"
import "./Menu.scss"

export default function Menu() {
  const onClick = (sectionId: string) => {
    const element =
      typeof document !== undefined && document.getElementById(sectionId)

    if (!element) return

    element.scrollIntoView()
  }

  return (
    <nav className="menu">
      <ul className="menu__list">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className="menu__list-item"
            onClick={() => onClick(item.sectionId)}
            onKeyDown={() => onClick(item.sectionId)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  )
}
