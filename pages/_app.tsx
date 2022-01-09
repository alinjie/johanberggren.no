import "tailwindcss/tailwind.css"
import Head from "next/head"
import Header from "components/Header"
import Footer from "components/Footer"
import { AppProps } from "next/app"

const KEYWORDS = [
  "Johan Berggren",
  "Country",
  "Americana",
  "Køntri",
  "Lilyhamericana",
  "For Now I'm Good Right Here",
  "Ei hytte foran loven",
]

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="h-screen flex flex-col">
      <Head>
        <title>Johan Berggren</title>
        <meta
          name="description"
          content="Offisiell nettside for Johan Berggren"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <div className={"flex flex-col flex-1"}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}
