import React from "react";

import { ScienceWorld } from "../../components/icons";

const HomepageHero: React.FunctionComponent = () => (
  <div id="hero" className="flex flex-col gap-2 py-8 max-w-5xl">
    <div className="flex flex-row gap-4 items-center">
      <span className="w-8 md:w-16">
        <ScienceWorld />
      </span>
      <h2 className="text-2xl font-bold md:text-3xl">604 DAO</h2>
    </div>
    <div className="flex flex-col gap-8">
      <h1 className="text-6xl font-extrabold md:text-8xl">
        Local community <span className="pb-2">governed collectively.</span>
      </h1>
    </div>
  </div>
);

export default HomepageHero;
