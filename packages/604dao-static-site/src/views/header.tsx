import React from "react";

import {
  DiscordLogo,
  InstagramLogo,
  ScienceWorld,
  TwitterLogo,
} from "../components/icons";
import IconLink from "../components/links/icon_link";
import TextLink from "../components/links/text_link";

const Header: React.FunctionComponent = () => (
  <header className="flex sticky top-0 z-[100] flex-col items-center w-full bg-gray-50/75 border-b border-gray-200 backdrop-blur-md">
    <div className="flex flex-row justify-between items-center py-4 px-8 w-full max-w-5xl">
      <IconLink href="#hero" label="home">
        <div className="flex flex-row gap-4 items-center text-gray-700">
          <div className="w-8 ">
            <ScienceWorld />
          </div>
          <span className="text-lg font-bold">604 DAO</span>
        </div>
      </IconLink>

      <nav className="hidden md:block">
        <ul className="flex flex-row gap-8 font-normal text-gray-700">
          <li>
            <TextLink href="#about" hasUnderline={false}>
              About
            </TextLink>
          </li>
          <li>
            <TextLink href="#principles" hasUnderline={false}>
              Principles
            </TextLink>
          </li>
          <li>
            <TextLink href="#initiatives" hasUnderline={false}>
              Initiatives
            </TextLink>
          </li>
          <li>
            <TextLink href="#roadmap" hasUnderline={false}>
              Roadmap
            </TextLink>
          </li>
          <li>
            <TextLink href="#faqs" hasUnderline={false}>
              FAQs
            </TextLink>
          </li>
        </ul>
      </nav>

      <div className="flex flex-row gap-2 text-gray-700">
        <IconLink href="https://twitter.com/" label="twitter">
          <TwitterLogo size={24} weight="light" />
        </IconLink>
        <IconLink href="https://instagram.com/" label="instagram">
          <InstagramLogo size={24} weight="light" />
        </IconLink>
        <IconLink href="https://discord.com/" label="discord">
          <DiscordLogo size={24} weight="light" />
        </IconLink>
      </div>
    </div>
  </header>
);

export default Header;
