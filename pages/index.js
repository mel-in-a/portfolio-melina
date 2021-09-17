import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Link from "next/link";
import Jumbo from "../components/jumbo";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

export default function Home({ pages, projects }) {
  return (
    <Layout home>
      <Head>
   
        <title>{siteTitle}</title>
      </Head>

      <Jumbo />
      <section className="container mx-auto p-5">
        <h1 className="text-4xl italic">
          Avec la passion, tout devient possible !
        </h1>
        <div className="content ">
          <h2>Les projets</h2>
          <ul>
            {projects.map((project) => (
              <li key={project.id}>
                <ReactMarkdown>{project.content}</ReactMarkdown>
                {/* <Image src={project.imageprez} alt="me" width="128" height="128" /> */}
                {/* <p>{project.imageprez}</p> */}
                <Link href={`/projets/${project.slug}`} passHref>
                  <a className="btn btn-primary">{project.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="pages">
          <h2 className="text-2xl font-bold">Les pages</h2>
          <ul>
            {pages.map((page) => (
              <li key={page.id}>
                <ReactMarkdown>{page.content}</ReactMarkdown>
                <Image src={`https://directus.clientissimo.com/assets/${page.imageprez}`} alt="me" width={2000} height={500} layout="responsive"/>
             
                <p>{page.imageprez}</p>
                <Link href={`/pages/${page.slug}`}>
                  <a className="btn btn-primary">{page.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link href="/articles/first-article" passHref>
          <button className="btn btn-outline">neutral</button>
        </Link>
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  try {
    const projects = await axios.get(`${process.env.API_URL}/items/project`);
    const pages = await axios.get(`${process.env.API_URL}/items/page`);
    // console.log(projects.data);
    // console.log(pages.data);
    return { props: { pages: pages.data.data, projects: projects.data.data} };
  } catch (error) {
    console.error(error);
  }
}
