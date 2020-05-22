import Event from "./Event"

export default interface RemarkObject {
  sourceInstanceName: string
  childMarkdownRemark: ChildMarkdownRemark
}

interface ChildMarkdownRemark {
  id: string
  frontmatter: Event
}
