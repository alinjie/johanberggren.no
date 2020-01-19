import React from "react"
import Logo from "components/Logo"
import Menu from "components/Menu"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import "./Header.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      headerBackground: file(
        sourceInstanceName: { eq: "general-images" }
        name: { eq: "header-background" }
      ) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage
      className="header"
      fixed={data.headerBackground.childImageSharp.fixed}
      alt="Johan Berggren fotografert i egen sofa."
      id="top"
    >
      <header className="header">
        <div className="header__container">
          {/* <Logo /> */}
          <Menu />
        </div>
      </header>
    </BackgroundImage>
  )
}

export default Header
