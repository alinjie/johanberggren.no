import RemarkObject from "interfaces/RemarkObject"

export const sortEventData = (eventData: RemarkObject[]) => {
  return eventData.sort((a, b) => {
    if (
      a.childMarkdownRemark.frontmatter.date >
      b.childMarkdownRemark.frontmatter.date
    ) {
      return 0
    } else {
      return -1
    }
  })
}

export function combineClassNames(
  customClass: string,
  classNameProp: string | undefined
): string {
  return customClass + (classNameProp ? ` ${classNameProp}` : "")
}
