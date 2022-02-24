import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div className="antialiased">
      <Head>
        <title>Skutti scooter shop 🛴</title>
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <meta name="description" content="Skutti scooter shop 🛴" />
        <meta property="og:site_name" content="Skutti scooter shop" />
        <meta property="og:title" content="Skutti scooter shop" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
