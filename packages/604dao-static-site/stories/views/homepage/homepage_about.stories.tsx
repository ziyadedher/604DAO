import HomepageAbout from "../../../src/views/homepage/homepage_about";

import type { Meta, Story } from "@storybook/react";

const META: Meta = {
  title: "Views/Homepage/Homepage About",
  component: HomepageAbout,
};

const HomepageAboutStoryTemplate: Story = () => <HomepageAbout />;

const HomepageAboutStory = HomepageAboutStoryTemplate.bind({});
HomepageAboutStory.storyName = "Homepage About";

export { HomepageAboutStory };
export default META;
