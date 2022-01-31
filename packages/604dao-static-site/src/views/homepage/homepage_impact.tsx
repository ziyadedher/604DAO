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
  <div className="flex relative flex-col items-center p-8 w-full bg-white rounded-lg border-b-4 border-gray-200 shadow-lg md:w-96">
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
        that could be voted on by the organization.
      </p>
    </div>

    <div className="flex flex-row flex-wrap gap-16 justify-center mt-16">
      <HomepageInitiativesEntry title="Community Improvement" icon={House}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit enim aut
        architecto repellendus rerum similique necessitatibus consectetur
        pariatur repudiandae, voluptates earum dolor excepturi repellat
        voluptatum, omnis itaque praesentium sed facilis.
      </HomepageInitiativesEntry>
      <HomepageInitiativesEntry title="Exclusive Access" icon={Key}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit enim aut
        architecto repellendus rerum similique necessitatibus consectetur
        pariatur repudiandae, voluptates earum dolor excepturi repellat
        voluptatum, omnis itaque praesentium sed facilis.
      </HomepageInitiativesEntry>
      <HomepageInitiativesEntry title="Joint Investments" icon={CurrencyEth}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit enim aut
        architecto repellendus rerum similique necessitatibus consectetur
        pariatur repudiandae, voluptates earum dolor excepturi repellat
        voluptatum, omnis itaque praesentium sed facilis.
      </HomepageInitiativesEntry>
      <HomepageInitiativesEntry title="Charitable Donations" icon={Heart}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit enim aut
        architecto repellendus rerum similique necessitatibus consectetur
        pariatur repudiandae, voluptates earum dolor excepturi repellat
        voluptatum, omnis itaque praesentium sed facilis.
      </HomepageInitiativesEntry>
      <HomepageInitiativesEntry title="Local Government" icon={Buildings}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit enim aut
        architecto repellendus rerum similique necessitatibus consectetur
        pariatur repudiandae, voluptates earum dolor excepturi repellat
        voluptatum, omnis itaque praesentium sed facilis.
      </HomepageInitiativesEntry>
      <HomepageInitiativesEntry title="Business Promotions" icon={Storefront}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit enim aut
        architecto repellendus rerum similique necessitatibus consectetur
        pariatur repudiandae, voluptates earum dolor excepturi repellat
        voluptatum, omnis itaque praesentium sed facilis.
      </HomepageInitiativesEntry>

      <HomepageInitiativesEntry title="Organized Events" icon={Confetti}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit enim aut
        architecto repellendus rerum similique necessitatibus consectetur
        pariatur repudiandae, voluptates earum dolor excepturi repellat
        voluptatum, omnis itaque praesentium sed facilis.
      </HomepageInitiativesEntry>
      <HomepageInitiativesEntry title="So Much More..." icon={Question}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit enim aut
        architecto repellendus rerum similique necessitatibus consectetur
        pariatur repudiandae, voluptates earum dolor excepturi repellat
        voluptatum, omnis itaque praesentium sed facilis.
      </HomepageInitiativesEntry>
    </div>
  </div>
);

export default HomepageInitiativess;
