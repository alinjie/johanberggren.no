import React from "react"
import Helmet from "react-helmet"
import "./Layout.scss"
import Header from "components/Header"
import Footer from "components/Footer"

const Layout = ({ children }) => {
  return (
    <main className="layout">
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Public+Sans:100,400,700&display=swap"
          rel="stylesheet"
        />
        <script
          src="https://kit.fontawesome.com/c96ed127ec.js"
          crossorigin="anonymous"
        ></script>
      </Helmet>
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export default Layout
