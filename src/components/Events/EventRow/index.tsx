import React from "react"
import { formatDateString } from "../../../utils"
import "./EventRow.scss"
import Event from "interfaces/Event"

interface Props {
  eventData: Event
}

export default function EventRow({ eventData }: Props) {
  const { title, date, eventLink, solo } = eventData

  const formattedDate = formatDateString(date)

  return (
    <div className="event-row">
      <p className="event-row__data">
        {solo ? <span className="event-row__asterix">* </span> : null}
        {title}
      </p>
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
