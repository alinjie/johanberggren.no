import React from "react"
import { formatDateString } from "../../../../utils"
import "./EventRow.scss"

const EventRow = ({ eventData }) => {
  const { title, date, eventLink } = eventData

  const formattedDate = formatDateString(date)

  return (
    <div className="event-row">
      <p className="event-row__data">{title}</p>
      <p className="event-row__data">{formattedDate}</p>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={eventLink}
        className="event-row__data"
      >
        Mer Info
      </a>
    </div>
  )
}

export default EventRow
