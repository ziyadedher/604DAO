import Homepage from "../../../src/views/homepage/homepage";

import type { Meta, Story } from "@storybook/react";

const META: Meta = {
  title: "Views/Homepage/Homepage",
  component: Homepage,
};

const HomepageStoryTemplate: Story = () => <Homepage />;

const HomepageStory = HomepageStoryTemplate.bind({});
HomepageStory.storyName = "Homepage";

export { HomepageStory };
export default META;
