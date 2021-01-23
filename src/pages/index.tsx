import Header from "components/Header"
import { SOCIAL_LINKS } from "consts"
import Image from "next/image"
import Footer from "components/Footer"

export default function Home() {
  return (
    <div>
      <div className="hero-section flex flex-col h-screen">
        <Header transparent />
        <div className="flex flex-col h-full items-center justify-center">
          <h2 className="text-detail text-5xl font-black text-center">
            Johan Berggren
          </h2>
          <ul className="flex space-x-2 items-center text-gray-200">
            <li>
              <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener">
                <i className="fab fa-youtube" />
              </a>
            </li>
            <li>
              <a
                href={SOCIAL_LINKS.youtubeMusic}
                target="_blank"
                rel="noopener"
              >
                <i className="fab fa-google-play" />
              </a>
            </li>
            <li>
              <a href={SOCIAL_LINKS.amazon} target="_blank" rel="noopener">
                <i className="fab fa-amazon" />
              </a>
            </li>
            <li>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener">
                <i className="fab fa-facebook" />
              </a>
            </li>
            <li>
              <a href={SOCIAL_LINKS.soundCloud} target="_blank" rel="noopener">
                <i className="fab fa-soundcloud" />
              </a>
            </li>
            <li>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener">
                <i className="fab fa-instagram" />
              </a>
            </li>
            <li>
              <a href={SOCIAL_LINKS.spotify} target="_blank" rel="noopener">
                <i className="fab fa-spotify" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* ALBUM SHOWCASE */}
      <div className="container space-x-6 flex flex-col md:flex-row items-center">
        <div>
          <Image
            src="/assets/img/album-covers/ehfl.png"
            layout="intrinsic"
            height={500}
            width={500}
            quality={100}
            className="block"
          />
        </div>
        <div className="flex flex-col">
          <h2 className="text-6xl text-detail font-black my-2">
            Ei Hytte Foran Loven
          </h2>
          <div className="space-y-2 flex flex-col md:flex-row md:items-end md:space-x-4">
            <a className="button text-center">
              <i className="fab fa-spotify mr-1" />
              Spotify
            </a>
            <a className="button text-center">
              <i className="fab fa-apple mr-1" />
              Apple Music
            </a>
          </div>
        </div>
      </div>

      {/* VIDEO */}
      <div className="bg-gray-100">
        <div className="container">
          <h3 className="title mb-2">Video</h3>
          <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
            <iframe
              className="w-full h-80 md:h-96"
              src="https://www.youtube.com/embed/9M-LWLX2h-Q"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <iframe
              className="w-full h-80 md:h-96"
              src="https://www.youtube.com/embed/pHGAEYMrcPI"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <iframe
              className="w-full h-80 md:h-96"
              src="https://www.youtube.com/embed/LoYrTQtr9aU"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div className="container space-y-4">
        <h3 className="title">Om</h3>
        <Image
          src="/assets/img/about.jpg"
          layout="responsive"
          height={745}
          width={1000}
          quality={100}
        />
        <div>
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
            Smoky Mountains, skreiv han låtene som resulterte i
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
