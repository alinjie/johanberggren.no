import { HTMLProps } from "react"
import cx from "classnames"

type Props = HTMLProps<HTMLButtonElement> & {
  iconClass?: string
}

export default function Button({
  children,
  className,
  type = "button",
  iconClass,
  ...props
}: Props) {
  return (
    <button {...props} className={cx("button", className)}>
      {iconClass && <i className={cx(iconClass, "mr-1")} />}
      {children}
    </button>
  )
}
