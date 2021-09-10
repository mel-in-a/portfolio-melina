import Head from "next/head";
import Layout from "../../components/PageLayout";

import Card from "../../components/Card";
import Image from "next/image";
import CardGradient from "../../components/CardGradient";
export default function FirstPost() {
  // const [active, setActive] = useState(1);

  // const activateTab = (number) => {
  //   setActive(number);
  // };

  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <div className="container mx-auto p-5">
        <h1>Liste des articles</h1>
        <div className="line"></div>
        <div className="rowGrid">
          <CardGradient
            title="Titre"
            icon="/images/icons/006-location.png"
            alt=""
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae nam ad, quas nihil in, delectus tempora distinctio, quidem eum assumenda natus nostrum!"
            link="/"
          />
              <CardGradient
            title="Titre"
            icon="/images/icons/006-location.png"
            alt=""
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae nam ad, quas nihil in, delectus tempora distinctio, quidem eum assumenda natus nostrum!"
            link="/"
          />
              <CardGradient
            title="Titre"
            icon="/images/icons/006-location.png"
            alt=""
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae nam ad, quas nihil in, delectus tempora distinctio, quidem eum assumenda natus nostrum!"
            link="/"
          />
        </div>

        {/* <div className="row flex gap-1 ml-2">
          <button className="btn btn-primary " onClick={() => activateTab(1)}>
            block 1
          </button>
          <button className="btn btn-primary " onClick={() => activateTab(2)}>
            block 2
          </button>
          <button className="btn btn-primary " onClick={() => activateTab(3)}>
            block 3
          </button>
        </div> */}
      </div>

      {/* <div className="container mx-auto">
      {active === 1 && (
        <div className="card rounded-xl shadow-2xl p-5 -mt-2">
          <div className="card-title">Hello la carte 1</div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eos
            voluptates alias a deserunt, quia beatae maxime, voluptatem nisi
            delectus, commodi nostrum.
          </p>
        </div>
      )}
      {active === 2 && (
        <div className="card rounded-xl shadow-2xl  p-5 hover:bg-red-700 hover:text-white transition duration-200 bg-primary -mt-2">
          <div className="card-title">Hello la carte 2</div>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      )}
      {active === 3 && (
        <div className="card rounded-xl shadow-2xl  p-5 hover:bg-red-700 hover:text-white transition duration-200 bg-primary -mt-2">
          <div className="card-title">Hello la carte 3</div>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      )}
</div> */}
    </Layout>
  );
}
