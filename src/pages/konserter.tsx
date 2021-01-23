import Header from "components/Header"
import { CMS_URL } from "consts"
import request from "graphql-request"
import { InferGetStaticPropsType } from "next"
import { Concert } from "types/Concert"

export default function Concerts({
  concerts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Header />
      <div className="container">
        <h2 className="title">Konserter</h2>
        {concerts.map((concert) => (
          <div key={concert.date}>
            <h3 className="text-lg font-medium">{concert.date}</h3>
            <span className="block font-light">{`${concert.city}, ${concert.country}`}</span>
            <span className="block font-light">{concert.venue}</span>
          </div>
        ))}
      </div>
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
