import "tailwindcss/tailwind.css";
import Head from "next/head";
import Header from "components/Header";

export default function App({ Component, pageProps }) {
  return (
    <div>
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
      <div className="flex flex-col">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
