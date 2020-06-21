import React, { ReactElement } from "react"
import Button from "components/Button"
import Song from "interfaces/Song"
import { navigateTo } from "gatsby"
import "./LyricsFooter.scss"
import Container from "components/Container"
import NavigationButton from "../NavigationButton"

interface Props {
  next?: Song
  previous?: Song
}

export default function LyricsFooter({ next, previous }: Props): ReactElement {
  return (
    <Container className="lyrics-footer">
      {previous && (
        <NavigationButton
          className="lyrics-footer__previous-button"
          direction="left"
          onClick={() => navigateTo(previous.path)}
        >
          {`${previous.order}. ${previous.name}`}
        </NavigationButton>
      )}
      {next && (
        <NavigationButton
          className="lyrics-footer__next-button"
          direction="right"
          onClick={() => navigateTo(next.path)}
        >
          {`${next.order}. ${next.name}`}
        </NavigationButton>
      )}
    </Container>
  )
}
