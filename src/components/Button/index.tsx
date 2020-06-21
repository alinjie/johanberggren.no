import React, { ReactElement, HTMLProps, ReactNode } from "react"
import { combineClassNames } from "utils/misc"
import "./Button.scss"

interface Props extends HTMLProps<HTMLButtonElement> {
  children?: ReactNode
  chevronDirection?: "right" | "left"
}

export default function Button({
  className,
  children,
  type = "button",
  chevronDirection,
  ...props
}: Props): ReactElement {
  return (
    <button
      className={
        combineClassNames("button", className) +
        (chevronDirection === "left"
          ? " button--chevron-left"
          : chevronDirection === "right"
          ? " button--chevron-right"
          : "")
      }
      {...props}
    >
      {children}
    </button>
  )
}
