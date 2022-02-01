import React from "react";

import {
  Buildings,
  Confetti,
  CurrencyEth,
  Heart,
  House,
  Key,
  Question,
  Storefront,
} from "../../components/icons";

import type { Icon } from "../../components/icons";

interface HomepageInitiativesEntryProps {
  readonly title: string;
  readonly icon: Icon;
  readonly children?: React.ReactNode;
}

const HomepageInitiativesEntry: React.FunctionComponent<
  HomepageInitiativesEntryProps
  // eslint-disable-next-line @typescript-eslint/naming-convention -- passing a component.
> = ({ title, icon: Icon, children }) => (
  <div className="flex relative flex-col items-center p-8 w-full bg-white rounded-lg border-b-4 border-gray-200 shadow-lg sm:w-96">
    <div className="absolute -top-8 items-center p-3 text-white bg-gradient-to-br from-sky-600 to-green-600 rounded-md shadow-md">
      <Icon size={32} weight="regular" />
    </div>
    <div className="flex flex-col gap-2 items-center">
      <h4 className="mt-4 text-lg font-bold">{title}</h4>
      <div>{children}</div>
    </div>
  </div>
);

const HomepageInitiativess: React.FunctionComponent = () => (
  <div id="initiatives" className="flex flex-col gap-8 items-center">
    <div className="flex flex-col gap-4 max-w-5xl">
      <h3 className="text-base font-bold text-gray-400 uppercase">
        Initiatives
      </h3>
      <p>
        The opportunities for impact are endless in an organization completely
        governed by it&apos;s members. These are some examples of initiatives
        that members of the organization could create proposals to back.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-16 justify-center mt-16 text-justify lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      <HomepageInitiativesEntry title="Community Improvement" icon={House}>
        Being owned by the community, 604 DAO can commit itself to giving back
        to the community. This could be program funding, neighborhood artwork,
        event organization, community outreach, or something else.
      </HomepageInitiativesEntry>
      <HomepageInitiativesEntry title="Exclusive Access" icon={Key}>
        604 DAO members are part of an exclusive and very impactful
        organization. 604 DAO could come to agreements with other organizations,
        communities, or individuals to build a portfolio of access to external
        releases and events.
      </HomepageInitiativesEntry>
      <HomepageInitiativesEntry title="Joint Investments" icon={CurrencyEth}>
        The Treasury is a very powerful asset that can be deployed into any
        number of investments. 604 DAO members could agree to invest in other
        organizations, projects, or pools to grow the value of The Treasury and
        provide collective value.
      </HomepageInitiativesEntry>
      <HomepageInitiativesEntry title="Charitable Donations" icon={Heart}>
        604 DAO members could donate some The Treasury funds to charity,
        empowering the local community and further legitimising the role of DAOs
        in modern governance, and reinforcing their impact on the community.
      </HomepageInitiativesEntry>
      <HomepageInitiativesEntry title="Local Government" icon={Buildings}>
        604 DAO could be positioned to take part in local physical government.
        The organization could be elected as an individual onto school boards,
        housing boards, or other local governing bodies. The position of 604 DAO
        would be voted on by members of the DAO.
      </HomepageInitiativesEntry>
      <HomepageInitiativesEntry title="Business Partnerships" icon={Storefront}>
        As 604 DAO builds its brand and membership, we can begin to partner with
        local businesses to empower the local economy and increase the scope of
        amenities and services members of 604 DAO can access.
      </HomepageInitiativesEntry>
      <HomepageInitiativesEntry title="Physical Spaces" icon={Confetti}>
        As the community grows, we might want to expand our physical presence.
        604 DAO could temporarily or permanently acquire a physical space, or
        build a new one for its members. This space could be used to host events
        or just as an amenity for members.
      </HomepageInitiativesEntry>
      <HomepageInitiativesEntry title="So Much More..." icon={Question}>
        The great thing about 604 DAO is its governance model. Any member can
        propose whatever initiative they would like to the DAO for voting. The
        community gets to drive the impact of the DAO. Get creative! There is so
        much more we can do here.
      </HomepageInitiativesEntry>
    </div>
  </div>
);

export default HomepageInitiativess;
