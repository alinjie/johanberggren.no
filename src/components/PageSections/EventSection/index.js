import React from "react"
import Section from "components/Section"
import { useStaticQuery, graphql } from "gatsby"
import EventRow from "./EventRow"
import NoEvents from "./NoEvents"

const EventSection = () => {
  const data = useStaticQuery(graphql`
    {
      eventContent: allFile(
        filter: { sourceInstanceName: { eq: "event-content" } }
      ) {
        nodes {
          sourceInstanceName
          childMarkdownRemark {
            id
            frontmatter {
              title
              date
              eventLink
            }
          }
        }
      }
    }
  `)

  const { eventContent } = data
  const filteredData = eventContent.nodes.filter(node => {
    const { date } = node.childMarkdownRemark.frontmatter
    const now = Date.now()
    if (new Date(date) >= now) return date
  })

  return (
    <Section title="Events" id="Events">
      {filteredData.length >= 1 ? (
        filteredData.map(item => {
          const eventData = item.childMarkdownRemark.frontmatter
          const { id } = eventData
          return <EventRow eventData={eventData} key={id} />
        })
      ) : (
        <NoEvents />
      )}
    </Section>
  )
}

export default EventSection
