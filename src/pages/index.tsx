import Header from "components/Header"
import { CMS_URL, LINK_VARIANTS, SOCIAL_LINKS } from "consts"
import Image from "next/image"
import Footer from "components/Footer"
import { motion } from "framer-motion"
import Section from "components/Section"
import { Concert } from "types/Concert"
import request from "graphql-request"
import { InferGetStaticPropsType } from "next"
import moment from "moment"

export default function Home({
  concerts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <div className="hero-section flex flex-col h-screen">
        <Header transparent />
        <div className="flex flex-col h-full items-center justify-center">
          <h2 className="text-detail text-7xl font-black text-center font-heading">
            Johan Berggren
          </h2>
          <ul className="flex space-x-2 items-center text-gray-200 text-xl">
            {SOCIAL_LINKS.map((link) => (
              <li
                key={link.href}
                className="transition-colors duration-200 hover:text-detail"
              >
                <a href={link.href} target="_blank" rel="noopener">
                  <i className={link.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ALBUM SHOWCASE */}
      <Section>
        <div className="container md:space-x-6 flex flex-col md:flex-row items-center">
          <div>
            <Image
              src="/assets/img/album-covers/ehfl.png"
              layout="intrinsic"
              height={500}
              width={500}
              quality={100}
              className="block"
              alt="Ei hytte foran loven album cover"
            />
          </div>
          <div className="flex flex-col">
            <h2 className="text-6xl text-detail font-black my-2 text-center font-heading">
              Ei Hytte Foran Loven
            </h2>
            <div className="space-y-2 flex flex-col md:flex-row md:items-end md:space-x-4">
              <motion.a
                className="button text-center"
                whileHover="hover"
                variants={LINK_VARIANTS}
              >
                <i className="fab fa-spotify mr-1" />
                Spotify
              </motion.a>
              <motion.a
                className="button text-center"
                whileHover="hover"
                variants={LINK_VARIANTS}
              >
                <i className="fab fa-apple mr-1" />
                Apple Music
              </motion.a>
            </div>
          </div>
        </div>
      </Section>

      {/* CONCERTS */}
      <Section className="bg-gray-100">
        <div className="container">
          <h3 className="title mb-4">Konserter</h3>
          {!concerts.length ? (
            <span className="text-gray-500">Ingen kommende konserter</span>
          ) : (
            concerts.map((concert) => (
              <div
                key={concert.date}
                className="flex justify-between items-end"
              >
                <div>
                  <h3 className="font-medium">
                    {moment(concert.date).locale("nb").format("DD MMMM, yyyy")}
                  </h3>
                  <span className="block font-light">{`${concert.city}, ${concert.country}`}</span>
                  <span className="block font-light">{concert.venue}</span>
                </div>
                <motion.a
                  className="button items-center"
                  variants={LINK_VARIANTS}
                  whileHover="hover"
                  href={concert.detailsUrl}
                  target="_blank"
                  rel="noopener"
                >
                  Detailjer
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="inline-block ml-1"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </motion.a>
              </div>
            ))
          )}
        </div>
      </Section>

      {/* VIDEO */}
      <Section>
        <div className="container">
          <h3 className="title mb-4">Video</h3>
          <div className="flex flex-col space-y-4 md:space-y-0 md:gap-4 md:grid md:grid-cols-2">
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
      </Section>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const query = "query { concerts { date venue city country detailsUrl } }"
  const { concerts } = await request<{ concerts: Concert[] }>(CMS_URL, query)

  return {
    props: {
      concerts,
    },
  }
}
