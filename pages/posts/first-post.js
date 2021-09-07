import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import { useState } from "react";
import Card from "../../components/card";

export default function FirstPost() {
  const [active, setActive] = useState(1);

  const activateTab = (number) => {
    setActive(number);
  };

  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1 className="text-2xl font-bold">First Post</h1>

      <div className="row flex gap-1 ml-2">
        <button className="btn btn-primary " onClick={() => activateTab(1)}>
          block 1
        </button>
        <button className="btn btn-primary " onClick={() => activateTab(2)}>
          block 2
        </button>
        <button className="btn btn-primary " onClick={() => activateTab(3)}>
          block 3
        </button>
      </div>

      {active === 1 && (
        <div className="card rounded-xl shadow-2xl p-5 -mt-2 bg-primary">
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

   
    </Layout>
  );
}
