import "../styles/tailwind.css";
import "../styles/slick.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
