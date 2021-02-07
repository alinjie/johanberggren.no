import Header from "components/Header"
import { CMS_URL, LINK_VARIANTS, SOCIAL_LINKS } from "consts"
import Image from "next/image"
import Footer from "components/Footer"
import { AnimateSharedLayout, motion } from "framer-motion"
import Section from "components/Section"
import { Concert } from "types/Concert"
import request from "graphql-request"
import { InferGetStaticPropsType } from "next"
import moment from "moment"
import { useEffect, useReducer } from "react"

type ActionType = { type: "NEXT_QUOTE" }

const initialState = {
  activeRating: 0,
}

const albumRatings = [
  {
    text:
      "Johan Berggren er Lillehammer svar på Stein Torleif Bjella og Hellbillies",
    source: "Dagbladet",
    rating: "5/6",
  },
  {
    text:
      "Med Ei hytte foran loven har Berggren lagd ei plate som er så god at jeg alt nå vil si at det er en skandale om den ikke nomineres i Spellemannsprisens country-kategori for 2021!",
    source: "Stavanger Aftenblad",
    rating: "5/6",
  },
  {
    text:
      "Johan Berggren er Lillehammer svar på Stein Torleif Bjella og Hellbillies",
    source: "Musikknyheter.no",
    rating: "8/10",
  },
  {
    text: "En fantastisk start på americana-året 2021!",
    source: "Erik Valebrokk",
    rating: "6/6",
  },
  {
    text: "Berggren er en av de som gir fornyet liv til norsk språkdrakt.",
    source: "Tormod Reiersen, Popklikk.no",
  },
]

const otherAlbums = [
  {
    name: "Lilyhamericana",
    image: "/assets/img/album-covers/lilyhamericana.png",
    amplifyLink: "https://ampl.ink/jEzBa",
  },
  {
    name: "For Now I'm Good Right Here",
    image: "/assets/img/album-covers/fnigrh.png",
    amplifyLink: "https://ampl.ink/eEjXX",
  },
]

function reducer(
  state: typeof initialState,
  action: ActionType
): typeof initialState {
  switch (action.type) {
    case "NEXT_QUOTE":
      const nextIndex = state.activeRating + 1

      return {
        activeRating: nextIndex > albumRatings.length - 1 ? 0 : nextIndex,
      }

    default:
      return state
  }
}

export default function Home({
  concerts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch({ type: "NEXT_QUOTE" })
    }, 5000)

    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    // Scrolls to top on refresh
    if (window.pageYOffset > 0) {
      window.scrollTo(0, 0)
    }
  }, [])

  return (
    <div>
      <div className="hero-section flex flex-col h-screen">
        <Header textWhite />
        <div className="flex flex-col h-full items-center justify-center">
          <h2 className="text-detail text-7xl font-black text-center font-heading">
            Johan Berggren
          </h2>
          <ul className="flex space-x-2 items-center text-gray-200 text-base">
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
        <svg
          className="w-6 h-6 self-center text-white mb-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {/* ALBUM SHOWCASE */}
      <Section>
        <div className="container flex flex-col items-center md:items-start">
          <h3 className="title">Musikk</h3>
          <div className="md:space-x-6 flex flex-col md:flex-row items-center">
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
              <h3 className="text-6xl text-detail font-black my-2 text-center font-heading">
                Ei Hytte Foran Loven
              </h3>
              <div className="h-36 flex items-center justify-center mb-4">
                <AnimateSharedLayout type="crossfade">
                  {albumRatings.map(
                    (rating) =>
                      albumRatings.indexOf(rating) === state.activeRating && (
                        <motion.div
                          key={rating.source}
                          layoutId={rating.source}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 1 }}
                          className="relative"
                        >
                          <p className="text-center text-xs leading-6 max-w-sm font-semibold">
                            <cite className="text-gray-400 font-light font-italic">
                              {rating.text}
                            </cite>
                            <br /> -{" "}
                            {`${rating.rating ? rating.rating + " hos" : ""}  ${
                              rating.source
                            }`}
                          </p>
                        </motion.div>
                      )
                  )}
                </AnimateSharedLayout>
              </div>
              <div className="space-y-2 flex flex-col md:flex-row md:items-end md:justify-center md:space-x-4">
                <motion.a
                  className="button text-center"
                  whileHover="hover"
                  variants={LINK_VARIANTS}
                  href="https://open.spotify.com/album/3sSE3SrT5OwdyMWCvqXfVA?si=6LE7o-ePQSaK5GbHoW42JA"
                  target="_blank"
                  rel="noopener"
                >
                  <i className="fab fa-spotify mr-1" />
                  Spotify
                </motion.a>
                <motion.a
                  className="button text-center"
                  whileHover="hover"
                  variants={LINK_VARIANTS}
                  href="https://music.apple.com/no/album/ei-hytte-foran-loven/1537979183"
                  target="_blank"
                  rel="noopener"
                >
                  <i className="fab fa-apple mr-1" />
                  Apple Music
                </motion.a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50">
          <div className="container grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8">
            {otherAlbums.map((album) => (
              <div key={album.name} className="flex flex-col md:items-start">
                <Image
                  src={album.image}
                  layout="intrinsic"
                  height={300}
                  width={300}
                />
                <div>
                  <h4
                    className="font-semibold md:text-base my-2 truncate"
                    title={album.name}
                  >
                    {album.name}
                  </h4>
                  <motion.a
                    className="button text-xs"
                    href={album.amplifyLink}
                    whileHover="hover"
                    variants={LINK_VARIANTS}
                  >
                    <svg
                      className="w-4 h-4 md:h-5 md:w-5 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Lytt nå
                  </motion.a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CONCERTS */}
      <Section>
        <div className="container">
          <h3 className="title">Konserter</h3>
          {!concerts.length ? (
            <span className="text-gray-500">Ingen kommende konserter</span>
          ) : (
            <div className="space-y-6">
              {concerts
                .sort((a, b) => (new Date(a.date) > new Date(b.date) ? 1 : 0))
                .map((concert) => (
                  <div
                    key={concert.date}
                    className="flex justify-between items-end"
                  >
                    <div>
                      <h3>
                        {moment(concert.date)
                          .locale("nb")
                          .format("DD MMMM, yyyy")}
                      </h3>
                      <span className="block text-gray-400 font-light">{`${concert.city}, ${concert.country}`}</span>
                      <span className="block text-gray-400 font-light">
                        {concert.venue}
                      </span>
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
                ))}
            </div>
          )}
        </div>
      </Section>

      {/* VIDEO */}
      <Section className="bg-gray-50">
        <div className="container">
          <h3 className="title">Video</h3>
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
              src="https://www.youtube.com/embed/KTDahAvxsro"
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
      <Footer noBackground />
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
    revalidate: 1,
  }
}
