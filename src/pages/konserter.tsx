import Footer from "components/Footer"
import Header from "components/Header"
import { CMS_URL, LINK_VARIANTS } from "consts"
import { motion } from "framer-motion"
import request from "graphql-request"
import moment from "moment"
import { InferGetStaticPropsType } from "next"
import { Concert } from "types/Concert"

export default function Concerts({
  concerts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container flex-1">
        {!concerts.length ? (
          <span className="text-gray-500">Ingen kommende konserter</span>
        ) : (
          concerts.map((concert) => (
            <div key={concert.date} className="flex justify-between items-end">
              <div>
                <h3 className="text-xl font-medium">
                  {moment(concert.date).locale("nb").format("DD MMMM, yyyy")}
                </h3>
                <span className="block font-light text-lg">{`${concert.city}, ${concert.country}`}</span>
                <span className="block font-light text-lg">
                  {concert.venue}
                </span>
              </div>
              <motion.a
                className="button"
                variants={LINK_VARIANTS}
                whileHover="hover"
                href={concert.detailsUrl}
                target="_blank"
                rel="noopener"
              >
                Detailjer
              </motion.a>
            </div>
          ))
        )}
      </div>
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
