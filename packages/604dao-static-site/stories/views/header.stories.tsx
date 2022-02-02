import Header from "../../src/views/header";

import type { Meta, Story } from "@storybook/react";

const META: Meta = {
  title: "Views/Header",
  component: Header,
};

const HeaderStoryTemplate: Story = () => <Header />;

const HeaderStory = HeaderStoryTemplate.bind({});
HeaderStory.storyName = "Header";

export { HeaderStory };
export default META;
