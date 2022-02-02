import React from "react";

const HomepageAbout: React.FunctionComponent = () => (
  <div id="about" className="flex flex-col gap-8 max-w-5xl">
    <h3 className="text-base font-bold text-gray-400 uppercase">About</h3>
    <h4 className="text-lg text-justify md:text-xl">
      604 DAO is a Vancouver membership club completely owned and governed by
      its members. It is an experiment in bootstrapping decentralized digital
      organization of a local community.
      <br />
      <br />
      Everything that 604 DAO does is decided on by its members via proposals.
      Anyone with a voting token can submit a proposal, and proposals are voted
      on by individuals with voting tokens. There is no centralized
      decision-making.
    </h4>
  </div>
);

export default HomepageAbout;
