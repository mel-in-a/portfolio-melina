import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Link from "next/link";
import Jumbo from "../components/jumbo";
import axios from "axios";
import ReactMarkdown from "react-markdown";

export default function Home({ projects, pages }) {
  return (
    <Layout home>
      <Head>
        <html data-theme="bumblebee" />
        <title>{siteTitle}</title>
      </Head>

      <Jumbo />
      <section className="container mx-auto p-5">
        <h1 className="text-4xl italic">
          {" "}
          " Avec la passion, tout devient possible ! "
        </h1>
        <div className="content ">
          <h2>Les projets</h2>

          {projects.map((project) => (
            <div className="bg-yellow-300 m-5 p-5 " key={project.id}>
              <p>Project ID : {project.id}</p>
              <p>Project Name : {project.name}</p>
              <p>
                Project Description :{" "}
                <ReactMarkdown>{project.description}</ReactMarkdown>
              </p>
              <p>Project CAtegory : {project.projectCategory.project_category}</p>
              <Link href={`/projects/${project.id}`}>
                <a className="btn btn-primary">Voir le projet</a>
              </Link>
            </div>
          ))}
        </div>

        <div className="pages">
          <ul>
            {pages.map((page) => (
              <li key={page.id}>
                <p>{page.content}</p>
                <Link href={`/pages/${page.id}`}>
                  <a className="btn btn-primary">{page.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link href="/articles/first-article">
          <button className="btn btn-outline">neutral</button>
        </Link>
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  try {
    const projects = await axios.get(
      "https://strapi-core.clientissimo.com/projects"
    );

    const pages = await axios.get("https://strapi-core.clientissimo.com/pages");
    return { props: { projects: projects.data, pages: pages.data } };
  } catch (error) {console.error(error)}
}
