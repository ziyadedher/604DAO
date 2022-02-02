import React from "react";

import {
  DiscordLogo,
  InstagramLogo,
  TwitterLogo,
} from "../../components/icons";
import IconLink from "../../components/links/icon_link";

import HomepageAbout from "./homepage_about";
import HomepageHero from "./homepage_hero";
import HomepageInitiatives from "./homepage_initiatives";
import HomepagePrinciples from "./homepage_principles";
import HomepageRoadmap from "./homepage_roadmap";

const Homepage: React.FunctionComponent = () => (
  <main className="flex justify-center items-center p-4 md:p-16">
    <div className="flex flex-col gap-16 items-center text-gray-700 md:gap-32">
      <HomepageHero />
      <HomepageAbout />
      <HomepagePrinciples />
      <HomepageRoadmap />
      <HomepageInitiatives />

      <div className="flex flex-col gap-4 self-center">
        <h3 className="text-sm">Want to keep up with 604 DAO developments?</h3>
        <div className="flex flex-row gap-4 self-center">
          <IconLink href="https://twitter.com" label="twitter">
            <TwitterLogo size={32} weight="light" />
          </IconLink>
          <IconLink href="https://instagram.com" label="instagram">
            <InstagramLogo size={32} weight="light" />
          </IconLink>
          <IconLink href="https://discord.com" label="discord">
            <DiscordLogo size={32} weight="light" />
          </IconLink>
        </div>
      </div>
    </div>
  </main>
);

export default Homepage;
