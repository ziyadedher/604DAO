import Head from "next/head";
import React from "react";

import Header from "../views/header";
import Homepage from "../views/homepage";

const Index: React.FunctionComponent = () => (
  <>
    <Head>
      <title>604 DAO | Local community governed collectively.</title>
      <meta
        name="description"
        content="604 DAO is an experiment in decentralized digital organization of a local community in Vancouver, Canada."
      />
    </Head>
    <div className="flex relative flex-col min-h-screen bg-gray-50">
      <Header />
      <Homepage />
    </div>
  </>
);

export default Index;
