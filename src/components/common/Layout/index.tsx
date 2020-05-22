import React, { ReactNode } from "react"
import { Helmet } from "react-helmet"
import "./Layout.scss"
import Header from "components/common/Header"
import Footer from "components/common/Footer"
import "assets/font-awesome/css/all.min.css"

interface Props {
  children?: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <main className="layout">
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Public+Sans:100,400,700&display=swap"
          rel="stylesheet"
        />
        <title>Johan Berggren</title>
        <meta
          name="description"
          content="Offisiell nettside for Johan Berggren"
        />
      </Helmet>
      <Header />
      {children}
      <Footer />
    </main>
  )
}
