import React, { ReactElement } from "react"
import { PageProps, useStaticQuery, graphql } from "gatsby"
import Layout from "components/Layout"

export default function LyricsTemplate({
  pageContext,
}: PageProps): ReactElement {
  const { albumCover } = useStaticQuery(graphql`
    {
      albumCover: file(id: { eq: "da74deb6-d3d5-5e65-be1d-4ada4b2e9ec0" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Layout>Lyrics page {JSON.stringify(albumCover)}</Layout>
}
