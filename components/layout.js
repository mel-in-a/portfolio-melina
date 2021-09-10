import Head from "next/head";
import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";
import Link from "next/link";
const name = "Mélina";
export const siteTitle = "Mélina MESSAL - Développeuse Fullstack - Intégration";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <html data-theme="mytheme" lang="fr"/>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />

        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
        <Header />
      <div className="mx-auto">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}

export default Layout;