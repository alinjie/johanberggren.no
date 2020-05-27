import React, { ReactElement, ReactNode } from "react"
import { combineClassNames } from "utils/misc"
import "./Caption.scss"

interface Props {
  children?: ReactNode
  className?: string
}

export default function Caption({ children, className }: Props): ReactElement {
  return <p className={combineClassNames("caption", className)}>{children}</p>
}
