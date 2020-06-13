export default interface RemarkLyricsNode {
  childMarkdownRemark: {
    html: string
    id: string
    frontmatter: {
      order: number
      name: string
    }
  }
}
