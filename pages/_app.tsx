import "tailwindcss/tailwind.css";
import Head from "next/head";
import Header from "components/Header";
import Footer from "components/Footer";
import classNames from "classnames";
import { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <div className="h-screen flex flex-col">
      <Head>
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
  );
}
