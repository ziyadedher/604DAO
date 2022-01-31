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
  <header className="flex sticky top-0 flex-col items-center w-full bg-gray-50 border-b border-gray-200">
    <div className="flex flex-row justify-between items-center py-4 px-8 w-full max-w-5xl">
      <IconLink href="/" label="home">
        <div className="flex flex-row gap-4 items-center text-gray-700">
          <div className="w-8 ">
            <ScienceWorld />
          </div>
          <span className="text-lg font-bold">604 DAO</span>
        </div>
      </IconLink>

      <nav className="">
        <ul className="flex flex-row gap-8 font-normal text-gray-700">
          <li>
            <TextLink href="/" hasUnderline={false}>
              Home
            </TextLink>
          </li>
          <li>
            <TextLink href="#about" hasUnderline={false}>
              About
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
        <IconLink href="https://twitter.com/" label="Twitter">
          <TwitterLogo size={24} weight="light" />
        </IconLink>
        <IconLink href="https://instagram.com/" label="Instagram">
          <InstagramLogo size={24} weight="light" />
        </IconLink>
        <IconLink href="https://discord.com/" label="Twitter">
          <DiscordLogo size={24} weight="light" />
        </IconLink>
      </div>
    </div>
  </header>
);

export default Header;
