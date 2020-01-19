import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./AboutContent.scss"

const AboutContent = () => {
  const data = useStaticQuery(graphql`
    {
      aboutImage: file(name: { eq: "about-image" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="about-content">
      <Img
        fluid={data.aboutImage.childImageSharp.fluid}
        className="about-content__image"
        alt="Johan Berggren"
      />
      <p>
        Omtrent nøyaktig ett år etter debutplata er Johan Berggren fra
        Jørstadmoen ute med oppfølgeren “Lilyhamericana”. Denne gangen på
        morsmålet. Med låter om seine kvelder, tomme glass og flammer som ikke
        lenger vil ha noe mer med deg å gjøre, tar han deg med på ei fuktig
        reise gjennom en urban, men bygdefødt visesangers liv.
        <br />
        <br />
        I april tok Berggren med seg en gitar og en idé om ei skive til en
        gudsforlatt gård i Greeneville, Tennessee. Med vindu ut mot The Smoky
        Mountains, skreiv han låtene som resulterte i “Lilyhamericana”. To
        måneder seinere kom han tilbake til Oslo og tok med seg bandet rett til
        Velvet Recordings for å spille inn plata.
        <br />
        <br />
        Dagbladets Øyvind Rønning gav skiva en femmer med ordene “Gi plass til
        en ny country-/americanastjerne”. <br />
        <br />
        Stavanger Aftenblad gav også en femmer og sa at “Berggren brått hadde
        etablert seg som en av de beste tekstforfatterne vi har”. <br />
        <br />
        Dust of Daylight skrev at “platen var spekket av glitrende linjer,
        gjennomtenkte analogier og har billedbruk i etterfølgelse”.
      </p>
    </div>
  )
}

export default AboutContent
