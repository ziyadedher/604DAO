import {
  FacebookLogo,
  InstagramLogo,
  PhosphorLogo,
  TwitterLogo,
} from "phosphor-react";
import React from "react";

import IconLink from "../../../src/components/links/icon_link";

import type { Meta, Story } from "@storybook/react";
import type { IconWeight } from "phosphor-react";

enum IconName {
  PHOSPHOR = "phosphor",
  FACEBOOK = "facebook",
  INSTAGRAM = "instagram",
  TWITTER = "twitter",
}

const META: Meta = {
  title: "Components/Links/Icon Link",
  component: IconLink,
};

interface IconProps {
  readonly iconName: IconName;
  readonly iconWeight: IconWeight;
  readonly iconSize: number;
}

const Icon: React.FunctionComponent<IconProps> = ({
  iconName,
  iconWeight,
  iconSize,
}: IconProps) => {
  switch (iconName) {
    case IconName.FACEBOOK:
      return <FacebookLogo size={iconSize} weight={iconWeight} />;
    case IconName.INSTAGRAM:
      return <InstagramLogo size={iconSize} weight={iconWeight} />;
    case IconName.TWITTER:
      return <TwitterLogo size={iconSize} weight={iconWeight} />;
    case IconName.PHOSPHOR:
      return <PhosphorLogo size={iconSize} weight={iconWeight} />;
    default:
      return null;
  }
};

interface IconLinkStoryTemplateProps extends IconProps {
  readonly href: string;
  readonly label: string;
  readonly isExternal: boolean;
}

const IconLinkStoryTemplate: Story<IconLinkStoryTemplateProps> = ({
  href,
  label,
  isExternal,
  iconName,
  iconWeight,
  iconSize,
}: IconLinkStoryTemplateProps) => (
  <IconLink href={href} label={label} isExternal={isExternal}>
    <Icon iconName={iconName} iconWeight={iconWeight} iconSize={iconSize} />
  </IconLink>
);

const IconLinkStory = IconLinkStoryTemplate.bind({});
IconLinkStory.storyName = "Icon Link";
IconLinkStory.args = {
  href: "https://example.org",
  label: "example",
  isExternal: true,
  iconName: IconName.PHOSPHOR,
  iconWeight: "regular",
  iconSize: 48,
};
IconLinkStory.argTypes = {
  iconName: {
    options: Object.values(IconName),
    control: { type: "select" },
  },
  iconWeight: {
    options: ["thin", "light", "regular", "bold", "fill"],
    control: { type: "select" },
  },
  iconSize: {
    control: { type: "range", min: 12, max: 128, step: 12 },
  },
};

export { IconLinkStory };
export default META;
