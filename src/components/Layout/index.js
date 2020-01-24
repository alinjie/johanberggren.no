import React from "react"
import Helmet from "react-helmet"
import "./Layout.scss"
import Header from "components/Header"
import Footer from "components/Footer"
import "../../assets/font-awesome/css/all.min.css"

const Layout = ({ children }) => {
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

export default Layout
