import React from "react";

import TextLink from "../../components/links/text_link";

const HomepageFaqs: React.FunctionComponent = () => (
  <div id="faqs" className="flex flex-col gap-8 max-w-5xl">
    <h3 className="text-base font-bold text-gray-400 uppercase">FAQs</h3>
    <div className="grid grid-cols-2 gap-8 text-justify">
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold">What is 604 DAO?</h2>
        <p className="">
          604 DAO is an experiment in decentralized digital organization of a
          local community in Vancouver, Canada. Privately-owned{" "}
          <TextLink href="https://en.wikipedia.org/wiki/Club_(organization)">
            clubs
          </TextLink>{" "}
          have organized individuals for millenia, magnifying their power as a
          collective. 604 DAO is a membership club completely owned and governed
          by its members.
        </p>
      </div>
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold">What&apos;s so special?</h2>
        <p className="">
          While projects like{" "}
          <TextLink href="https://www.larvalabs.com/cryptopunks">
            Cryptopunks
          </TextLink>{" "}
          and <TextLink href="https://boredapeyachtclub.com/">BAYC</TextLink>{" "}
          have built global digital communities and identities, 604 DAO attempts
          to develop geolocalized digital community, identity, governance, and a
          shared treasury that can be used by the community.
        </p>
      </div>
    </div>
  </div>
);

export default HomepageFaqs;
