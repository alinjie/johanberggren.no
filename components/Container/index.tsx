import { HTMLAttributes } from "react"
import cx from "classnames"

export default function Container({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={cx("max-w-4xl mx-auto p-6 w-full", className)}>
      {children}
    </div>
  )
}
