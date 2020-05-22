import React from "react"
import Section from "components/common/Section"
import { useStaticQuery, graphql } from "gatsby"
import EventRow from "./EventRow"
import NoEvents from "./NoEvents"
import { sortEventData } from "../../utils"
import RemarkObject from "interfaces/RemarkObject"
import "./Events.scss"

interface Data {
  eventContent: {
    nodes: RemarkObject[]
  }
}

export default function Events() {
  const { eventContent }: Data = useStaticQuery(graphql`
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

  const filteredData = eventContent.nodes.filter((node) => {
    const { frontmatter } = node.childMarkdownRemark
    const now = new Date()
    if (new Date(frontmatter.date) >= now) return frontmatter.date
    else return null
  })

  const eventsUpcoming = filteredData.length > 1

  return (
    <Section title="Events" id="Events">
      <div className="events">
        {eventsUpcoming ? (
          sortEventData(filteredData).map((item) => {
            const eventData = item.childMarkdownRemark.frontmatter
            const { id } = eventData
            return (
              <React.Fragment>
                <EventRow eventData={eventData} key={id} />
                <p>
                  <span className="events__asterix">* </span> = Solo
                </p>
              </React.Fragment>
            )
          })
        ) : (
          <NoEvents />
        )}
      </div>
    </Section>
  )
}
