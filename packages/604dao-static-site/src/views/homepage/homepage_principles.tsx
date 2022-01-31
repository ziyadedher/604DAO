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
  <div className="flex flex-row gap-16 items-center">
    <div className="flex flex-col justify-center items-center p-3 text-white bg-gradient-to-br from-sky-600 to-green-600 rounded-md">
      <Icon size={64} weight="regular" />
    </div>
    <div className="flex flex-col">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p>{children}</p>
    </div>
  </div>
);

const HomepagePrinciples: React.FunctionComponent = () => (
  <div id="principles" className="flex flex-col gap-8 max-w-5xl">
    <h3 className="text-base font-bold text-gray-400 uppercase">Principles</h3>
    <div className="flex flex-col gap-16">
      <HomepagePrincipleEntry title="Shared Treasury" icon={Bank}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
        ducimus dignissimos deserunt eum praesentium maiores minima ullam iure?
      </HomepagePrincipleEntry>
      <HomepagePrincipleEntry title="Collective Governance" icon={Scales}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
        ducimus dignissimos deserunt eum praesentium maiores minima ullam iure?
      </HomepagePrincipleEntry>
      <HomepagePrincipleEntry title="Community Ownership" icon={UsersFour}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
        ducimus dignissimos deserunt eum praesentium maiores minima ullam iure?
      </HomepagePrincipleEntry>
    </div>
  </div>
);

export default HomepagePrinciples;
