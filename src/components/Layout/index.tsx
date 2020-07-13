import React, { ReactNode } from "react"
import { Helmet } from "react-helmet"
import Header from "components/Header"
import Footer from "components/Footer"
import "assets/font-awesome/css/all.min.css"
import { useStaticQuery, graphql } from "gatsby"
import "./Layout.scss"

interface Props {
  children?: ReactNode
  showHeader?: boolean
  showFooter?: boolean
}

interface SiteMetadata {
  site: {
    siteMetadata: {
      title: string
      description: string
      siteUrl: string
      image: string
      author: string
    }
  }
}

const keywords =
  "Johan Berggren, \
Lilyhamericana, For Now I'm Good Right Here, Music, Country, \
Americana, Norwegian, Lilyhamericana lyrics, Lilyhamericana lyrics, \
johanberggre.no, johan berggren lyrics, johan berggren tekst, \
johan berggren country, johan berggren musikk, country musikk, \
amerikana musikk, norsk amerikana, jhan berggren hjemmeside, johan berrggren nettiside \
johan berggren galleri"

export default function Layout({
  children,
  showHeader = true,
  showFooter = true,
}: Props) {
  const {
    site: { siteMetadata },
  }: SiteMetadata = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          siteUrl
          image
          author
        }
      }
    }
  `)
  const meta = [
    { name: "description", content: siteMetadata.description },
    { name: "author", content: siteMetadata.author },
    { name: "url", content: siteMetadata.siteUrl },
    {
      name: "keywords",
      content: keywords,
    },
    { name: "image", content: siteMetadata.image },
  ]

  return (
    <main className="layout">
      <Helmet title={siteMetadata.title} meta={meta}>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <title>Offisiell nettside for Johan Berggren | johanberggren.no</title>
        {meta.map((item) => (
          <meta name={item.name} content={item.content} />
        ))}
      </Helmet>
      {showHeader && <Header />}
      {children}
      {showFooter && <Footer />}
    </main>
  )
}
