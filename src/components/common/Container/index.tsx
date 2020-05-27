import React, { ReactElement, ReactNode } from "react"
import { combineClassNames } from "utils/misc"
import "./Container.scss"

interface Props {
  children?: ReactNode
  className?: string
}

export default function Container({
  children,
  className,
}: Props): ReactElement {
  return (
    <div className={combineClassNames("container", className)}>{children}</div>
  )
}
