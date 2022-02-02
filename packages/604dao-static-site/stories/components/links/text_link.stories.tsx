import TextLink from "../../../src/components/links/text_link";

import type { Meta, Story } from "@storybook/react";

const META: Meta = {
  title: "Components/Links/Text Link",
  component: TextLink,
};

interface TextLinkStoryTemplateProps {
  readonly href: string;
  readonly isExternal: boolean;
  readonly hasUnderline: boolean;
  readonly text: string;
}

const TextLinkStoryTemplate: Story<TextLinkStoryTemplateProps> = ({
  href,
  isExternal,
  hasUnderline,
  text,
}: TextLinkStoryTemplateProps) => (
  <TextLink href={href} hasUnderline={hasUnderline} isExternal={isExternal}>
    {text}
  </TextLink>
);

const TextLinkStory = TextLinkStoryTemplate.bind({});
TextLinkStory.storyName = "Text Link";
TextLinkStory.args = {
  href: "https://example.org",
  isExternal: true,
  hasUnderline: true,
  text: "example.org",
};

export { TextLinkStory };
export default META;
