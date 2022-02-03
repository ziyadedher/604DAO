import React from "react";

import {
  GlobeSimple,
  Megaphone,
  Planet,
  UserList,
} from "../../components/icons";

import type { Icon } from "../../components/icons";

interface RoadmapEntryProps {
  readonly order: number;
  readonly title: string;
  readonly time: string;
  readonly icon: Icon;
  readonly children?: React.ReactNode;
}

const RoadmapEntry: React.FunctionComponent<RoadmapEntryProps> = ({
  order,
  title,
  time,
  // eslint-disable-next-line @typescript-eslint/naming-convention -- passing a component.
  icon: Icon,
  children,
}) => (
  <div className="flex flex-col gap-8 p-8 w-full bg-white rounded-lg border-b-4 shadow-lg md:flex-row">
    <div className="hidden absolute left-0 flex-row items-center self-center w-16 sm:flex">
      <div className="p-4 text-white bg-gradient-to-br from-sky-500 to-green-500 rounded-full">
        <Icon size={32} weight="bold" />
      </div>
    </div>

    <div className="flex flex-row gap-8 items-center sm:items-start">
      <div className="flex p-4 text-white bg-gradient-to-br from-sky-500 to-green-500 rounded-full sm:hidden">
        <Icon size={32} weight="bold" />
      </div>
      <h5 className="flex flex-col gap-2 text-xl font-bold md:shrink-0 md:w-48">
        <span className="text-sm font-bold text-gray-400 uppercase">
          Step {order}
        </span>
        <span className="flex-1">{title}</span>
        <span className="text-xs font-bold text-gray-400 uppercase">
          {time}
        </span>
      </h5>
    </div>
    <p className="text-base text-justify text-gray-500">{children}</p>
  </div>
);

const HomepageRoadmap: React.FunctionComponent = () => (
  <div id="roadmap" className="flex flex-col gap-8 w-full max-w-5xl">
    <h3 className="text-base font-bold text-gray-400 uppercase">Roadmap</h3>
    <div className="flex relative flex-row gap-16">
      <div className="hidden flex-col shrink-0 items-center w-16 min-h-full sm:flex">
        <div className="w-4 h-full bg-gray-300 rounded-full" />
      </div>

      <div className="flex flex-col gap-16 sm:gap-24 sm:my-16 md:gap-32">
        <RoadmapEntry
          order={0}
          title="Setup and Awareness"
          time="Q1-Q2 2022"
          icon={Megaphone}
        >
          <p>
            The Founders will begin by raising awareness for 604 DAO and DAOs in
            general via social media, word-of-mouth, and local marketing
            channels in Vancouver. We hope to draw a diverse group of people to
            604 DAO that will enrich the community and multiply its impact.
          </p>
          <br />
          <p>
            During this period the official 604 DAO whitepaper and core smart
            contracts will be published for review by the community.
          </p>
        </RoadmapEntry>

        <RoadmapEntry
          order={1}
          title="Community and Core Members"
          time="~Q2-Q3 2022"
          icon={UserList}
        >
          <p>
            Once 604 DAO reaches a sufficient level of interest from the broad
            community, 604 DAO will distribute an initial small number of unique
            voting tokens to core members, with proceeds being locked in The
            Treasury. These core voting members will govern 604 DAO alongside
            The Founders.
          </p>
          <br />
          <p>
            More details about the initial token release and Core Members will
            be published in the whitepaper.
          </p>
        </RoadmapEntry>

        <RoadmapEntry
          order={2}
          title="Wide Release"
          time="~Q3-Q4 2022"
          icon={GlobeSimple}
        >
          <p>
            After the initial token release, 604 DAO will begin on-chain
            governance via voting members. The Founders plan to propose a wide
            voting token release to a much larger set of interested individuals.
            This crowdfunding will empower 604 DAO to grow its impact and take
            on new initiatives, voted on by a much larger community.
          </p>
          <br />
          <p>
            More details about the proposed wide token release will be published
            in the whitepaper.
          </p>
        </RoadmapEntry>

        <RoadmapEntry
          order={3}
          title="Autonomous Organization"
          time="~Q1 2023"
          icon={Planet}
        >
          <p>
            At this point, The Founders have very little control over what 604
            DAO does, but will continue to propose new initiatives and further
            existing ones. 604 DAO members will have much larger impact and the
            organization will grow to become fully autonomous.
          </p>
          <br />
          <p>
            This is the end goal of this project, to see a fully autonomous
            membership club in Vancouver thrive and have positive impact on the
            community.
          </p>
        </RoadmapEntry>
      </div>
    </div>
  </div>
);

export default HomepageRoadmap;
