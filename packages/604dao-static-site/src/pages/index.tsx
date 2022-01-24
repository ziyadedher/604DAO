import Head from "next/head";
import React from "react";

import { DiscordLogo, ScienceWorld, TwitterLogo } from "../components/icons";
import IconLink from "../components/links/icon_link";
import TextLink from "../components/links/text_link";

const Index: React.FunctionComponent = () => (
  <>
    <Head>
      <title>604 DAO | Local community governed collectively.</title>
      <meta
        name="description"
        content="604 DAO is an experiment in decentralized digital organization of a local community in Vancouver, Canada."
      />
    </Head>
    <main className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="container flex flex-col gap-16 items-center p-8 max-w-3xl text-gray-700">
        <div className="flex flex-col gap-2 items-center self-center">
          <div className="flex flex-row gap-4 items-center">
            <span className="w-16">
              <ScienceWorld />
            </span>
            <h1 className="text-5xl font-bold ">604 DAO</h1>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="italic text-center">
              Local community governed collectively.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 text-justify sm:grid-cols-2">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold">What is 604 DAO?</h2>
            <p className="">
              604 DAO is an experiment in decentralized digital organization of
              a local community in Vancouver, Canada. Privately-owned{" "}
              <TextLink href="https://en.wikipedia.org/wiki/Club_(organization)">
                clubs
              </TextLink>{" "}
              have organized individuals for millenia, magnifying their power as
              a collective. 604 DAO is a membership club completely owned and
              governed by its members.
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold">What&apos;s so special?</h2>
            <p className="">
              While projects like{" "}
              <TextLink href="https://www.larvalabs.com/cryptopunks">
                Cryptopunks
              </TextLink>{" "}
              and{" "}
              <TextLink href="https://boredapeyachtclub.com/">BAYC</TextLink>{" "}
              have built global digital communities and identities, 604 DAO
              attempts to develop geolocalized digital community, identity,
              governance, and a shared treasury that can be used by the
              community.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 self-center">
          <h3 className="text-sm">
            Want to keep up with 604 DAO developments?
          </h3>
          <div className="flex flex-row gap-4 self-center">
            <span className="text-[#1DA1F2] opacity-50 hover:opacity-100 transition-all">
              <IconLink href="https://twitter.com" label="twitter">
                <TwitterLogo size={32} weight="duotone" />
              </IconLink>
            </span>
            <span className="text-[#5865F2] opacity-50 hover:opacity-100 transition-all">
              <IconLink href="https://discord.com" label="discord">
                <DiscordLogo size={32} weight="duotone" />
              </IconLink>
            </span>
          </div>
        </div>
      </div>
    </main>
  </>
);

export default Index;
