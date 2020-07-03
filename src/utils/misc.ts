import RemarkObject from "interfaces/RemarkObject"

export const sortEventData = (eventData: RemarkObject[]) => {
  return eventData.sort((a, b) => {
    if (
      new Date(a.childMarkdownRemark.frontmatter.date) >
      new Date(b.childMarkdownRemark.frontmatter.date)
    ) {
      return 1
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
