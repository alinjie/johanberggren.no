import Image from "next/image"
import Header from "components/Header"
import Footer from "components/Footer"

export default function Concerts() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container">
        <h3 className="title">Om</h3>
        <Image
          priority
          src="/assets/img/about.jpg"
          layout="intrinsic"
          className="object-cover object-top"
          height={400}
          width={1000}
          alt="Johan Berggren sitter i en stol ved siden av et bord med plante og smiler"
        />
        <div className="font-light mt-4">
          <p className="leading-6">
            Omtrent nøyaktig ett år etter debutplata er Johan Berggren fra
            Jørstadmoen ute med oppfølgeren “Lilyhamericana”. Denne gangen på
            morsmålet. Med låter om seine kvelder, tomme glass og flammer som
            ikke lenger vil ha noe mer med deg å gjøre, tar han deg med på ei
            fuktig reise gjennom en urban, men bygdefødt visesangers liv.
          </p>
          <br />
          <p className="leading-6">
            I april tok Berggren med seg en gitar og en idé om ei skive til en
            gudsforlatt gård i Greeneville, Tennessee. Med vindu ut mot The
            Smoky Mountains, skreiv han låtene som resu lterte i
            “Lilyhamericana”. To måneder seinere kom han tilbake til Oslo og tok
            med seg bandet rett til Velvet Recordings for å spille inn plata.
          </p>
          <br />
          <p className="leading-6">
            Dagbladets Øyvind Rønning gav skiva en femmer med ordene “Gi plass
            til en ny country-/americanastjerne”.
          </p>
          <br />
          <p className="leading-6">
            Stavanger Aftenblad gav også en femmer og sa at “Berggren brått
            hadde etablert seg som en av de beste tekstforfatterne vi har”.
          </p>
          <br />
          <p className="leading-6">
            Dust of Daylight skrev at “platen var spekket av glitrende linjer,
            gjennomtenkte analogier og har billedbruk i etterfølgelse”.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
