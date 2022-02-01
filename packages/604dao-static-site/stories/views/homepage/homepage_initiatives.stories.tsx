import HomepageInitiatives from "../../../src/views/homepage/homepage_initiatives";

import type { Meta, Story } from "@storybook/react";

const META: Meta = {
  title: "Views/Homepage/Homepage Initiatives",
  component: HomepageInitiatives,
};

const HomepageInitiativesStoryTemplate: Story = () => <HomepageInitiatives />;

const HomepageInitiativesStory = HomepageInitiativesStoryTemplate.bind({});
HomepageInitiativesStory.storyName = "Homepage Initiatives";

export { HomepageInitiativesStory };
export default META;
