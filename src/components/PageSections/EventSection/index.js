import React from "react"
import Section from "components/Section"
import { useStaticQuery, graphql } from "gatsby"
import EventRow from "./EventRow"
import NoEvents from "./NoEvents"
import "./EventSection.scss"
import { sortEventData } from "../../../utils"

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
              solo
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
    else return null
  })

  const eventsUpcoming = filteredData.length > 1

  return (
    <Section title="Events" id="Events">
      <div className="events">
        {eventsUpcoming ? (
          sortEventData(filteredData).map(item => {
            const eventData = item.childMarkdownRemark.frontmatter
            const { id } = eventData
            return <EventRow eventData={eventData} key={id} />
          })
        ) : (
          <NoEvents />
        )}
        {eventsUpcoming && (
          <p>
            <span className="events__asterix">* </span> = Solo
          </p>
        )}
      </div>
    </Section>
  )
}

export default EventSection
