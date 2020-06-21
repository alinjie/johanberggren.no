import React, { ReactElement, ReactNode, HTMLProps } from "react"
import { combineClassNames } from "utils/misc"
import "./NavigationButton.scss"

interface Props extends HTMLProps<HTMLButtonElement> {
  direction: "left" | "right"
  children?: ReactNode
  className?: string
}

export default function NavigationButton({
  direction,
  children,
  className,
  type = "button",
  ...props
}: Props): ReactElement {
  return (
    <button
      className={combineClassNames("navigation-button", className)}
      {...props}
    >
      <span
        className={
          "navigation-button__direction-text" +
          (direction === "left"
            ? " navigation-button__direction-text--left"
            : " navigation-button__direction-text--right")
        }
      >
        {direction === "left" ? "Forrige" : "Neste"}
      </span>
      {children}
    </button>
  )
}
