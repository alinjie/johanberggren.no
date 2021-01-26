import { AppProps } from "next/app"
import "styles/tailwind.css"
import Head from "next/head"
import { useEffect } from "react"

export default function App({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    if (router.pathname === "/") {
      window.scrollTo(0, 0)
    }
  }, [])
  return (
    <div className="uppercase text-sm">
      <Head>
        <script
          src="https://kit.fontawesome.com/c96ed127ec.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <h1 className="sr-only">Johan Berggren Offisiell Nettside</h1>
      <Component {...pageProps} />
    </div>
  )
}
