import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/PageLayout";
const Articles = () => {
    return (
        <>
        <Head>
        <title>Tous les articles du blog</title>
      </Head>
        <Layout>
        <div className="container mx-auto p-5">
          <h1>Tous les articles </h1>
          <button></button>
        </div>
        </Layout>
        </>
    );
}

export default Articles;