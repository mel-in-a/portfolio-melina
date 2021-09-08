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
        <h1 className="text-4xl italic"> " Avec la passion, tout devient possible ! "</h1>
       <div className="content ">
      <p>C'est bien la passion qui m'a emmenée vers l'informatique et le développement web. </p> 
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas nihil obcaecati at, odit quas adipisci quos minima natus iure ipsam officiis cupiditate? Facilis provident magnam voluptatum inventore error assumenda tempora, ea quaerat dignissimos aliquid neque quos eum suscipit rem ratione. Distinctio dicta aperiam excepturi qui, temporibus quidem optio impedit provident, cumque sed quibusdam libero facilis nam minus maxime, laboriosam reiciendis. Quaerat eum nostrum ab officiis voluptatum quos molestias quidem beatae consectetur amet sequi qui, officia molestiae iusto laudantium dolore! Fugiat eum similique minima? Quia eaque tempore, corporis, reiciendis iste nam sequi, similique delectus commodi esse quod eveniet aut odio quis temporibus dicta iusto? Nisi cupiditate, ea soluta aperiam possimus nesciunt atque obcaecati earum recusandae quaerat mollitia fuga eius fugiat molestias dignissimos sint est ducimus perspiciatis? Placeat aperiam sed odit cumque perferendis beatae! Voluptate quae dolores, commodi sapiente sed saepe, aperiam unde ipsam voluptates ducimus dolore repellendus possimus provident! Ab voluptate perspiciatis perferendis quisquam facilis, similique porro ducimus officiis consectetur magnam pariatur distinctio repudiandae? Iusto adipisci unde dolorum, veniam ratione ea ducimus sapiente eum dolor et at? Laudantium laborum ea quos aperiam neque sit iure nam repellat saepe quas suscipit nisi, iste aut, porro illum fugiat eligendi accusamus consequuntur tenetur! Praesentium fugit nisi delectus voluptas eveniet, iure eos adipisci ex quidem harum accusamus culpa voluptatibus incidunt iste consequuntur quod reprehenderit at ab voluptatum minima totam dolorem nostrum aut. Cupiditate aspernatur minima similique nesciunt deleniti accusantium eos impedit unde nemo sit architecto, dolorem, consectetur laboriosam. Totam minus ex eligendi ullam. Repudiandae, excepturi provident non sunt blanditiis culpa eum aliquam neque hic, necessitatibus qui cum, adipisci ab tenetur nihil dicta minus alias sit! Provident, sint autem! Hic illum accusamus repudiandae, quo eaque quod asperiores, veritatis corporis iste dicta accusantium porro. Quaerat architecto totam repellat eligendi assumenda itaque, ad eius a placeat laborum sit odio veniam error. Error deleniti velit neque consectetur, reprehenderit at porro quibusdam cupiditate magnam unde, nesciunt recusandae laudantium dolorem dignissimos veritatis ipsa fuga et accusamus minima autem suscipit. Dignissimos facilis iure fugit provident. Accusantium dignissimos quos at ad unde eos eligendi quas error? Incidunt, soluta, nobis ea ab autem saepe odit aliquid, praesentium placeat obcaecati ratione? Rerum eligendi quos culpa. Rem dignissimos illo soluta doloremque aspernatur accusantium assumenda ad unde inventore eum, cum, fuga voluptatum. Quod accusantium id sapiente quas dolorum tempora et reprehenderit molestiae ratione cupiditate iure itaque eius aut, iusto dolor nobis voluptatem. Aspernatur minus deserunt facere perspiciatis, mollitia, soluta commodi exercitationem ea ratione quae pariatur repellendus est unde quod ipsa at quo ipsam eos sed fugit iste! Facilis vero animi accusantium quae. Eius tempora necessitatibus nostrum dolores aliquid ab dolorum eveniet inventore dolorem harum quo fuga, dicta hic veniam itaque maiores at? At quaerat consequuntur sed maxime beatae assumenda minus quos illo inventore, doloremque sint possimus non error neque eligendi veniam quam repellat laboriosam. Eveniet, obcaecati. Sapiente ducimus unde perspiciatis non provident! Cumque labore tempora nesciunt tempore autem ab totam nemo, recusandae laudantium quisquam eos corrupti temporibus doloribus eius placeat adipisci obcaecati asperiores voluptas ipsa ullam facilis?</p>
       </div>
 
      <Link href="/articles/first-article">
          <button className="btn btn-outline">neutral</button> 
         </Link>
      </section>
    </Layout>
  )
}