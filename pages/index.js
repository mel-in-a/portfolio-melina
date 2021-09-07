import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

import Link from "next/link";
import { getSortedPostsData } from '../lib/posts'
import Jumbo from '../components/jumbo';

export default function Home() {
  return (
    <Layout home>
      <Head>
      <html data-theme="bumblebee"/>
        <title>{siteTitle}</title>
      </Head>

        <Jumbo/>
      <section className="container mx-auto p-5">
        <h2 className="text-primary font-black text-3xl">Avec la passion, tout devient possible !</h2>
       <div className="content">
       C'est bien la passion qui m'a emmené vers l'informatique et le développement web. 
       </div>
 
      <Link href="/posts/first-post">
          <button className="btn btn-outline">neutral</button> 
         </Link>
      </section>
    </Layout>
  )
}