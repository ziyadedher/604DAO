import React from "react";

import { Bank, Scales, UsersFour } from "../../components/icons";

import type { Icon } from "../../components/icons";

interface HomepagePrincipleEntryProps {
  readonly title: string;
  readonly icon: Icon;
  readonly children?: React.ReactNode;
}

const HomepagePrincipleEntry: React.FunctionComponent<
  HomepagePrincipleEntryProps
  // eslint-disable-next-line @typescript-eslint/naming-convention -- passing a component.
> = ({ title, icon: Icon, children }) => (
  <div className="flex flex-col gap-16 items-center sm:flex-row">
    <div className="flex flex-col justify-center items-center p-3 text-white bg-gradient-to-br from-sky-500 to-green-500 rounded-md shadow-lg">
      <Icon size={64} weight="regular" />
    </div>
    <div className="flex flex-col">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-justify">{children}</p>
    </div>
  </div>
);

const HomepagePrinciples: React.FunctionComponent = () => (
  <div id="principles" className="flex flex-col gap-8 max-w-5xl">
    <h3 className="text-base font-bold text-gray-400 uppercase">Principles</h3>
    <div className="flex flex-col gap-16">
      <HomepagePrincipleEntry title="Collective Governance" icon={Scales}>
        Every action taken by the organization must be first codified as a
        proposal and then passed by voting members of the organization. This
        fullt-transparent mechanism that involves the entire organization is the
        only way to take action.
      </HomepagePrincipleEntry>
      <HomepagePrincipleEntry title="Shared Treasury" icon={Bank}>
        The 604 DAO Treasury is jointly owned and operated by voting members of
        the organization. Funds are raised into The Treasury and can only be
        used via a proposal passed by the organization. No individual has access
        to The Treasury funds.
      </HomepagePrincipleEntry>
      <HomepagePrincipleEntry title="Community Ownership" icon={UsersFour}>
        604 DAO is a community-owned organization. Both in the literal and
        figurative senses. Members of the organization are part-owners of The
        Treasury and all related DAO assets, as well as drivers behind
        initiatives via proposals and voting.
      </HomepagePrincipleEntry>
    </div>
  </div>
);

export default HomepagePrinciples;
