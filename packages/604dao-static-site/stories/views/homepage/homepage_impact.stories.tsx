import HomepageImpact from "../../../src/views/homepage/homepage_impact";

import type { Meta, Story } from "@storybook/react";

const META: Meta = {
  title: "Views/Homepage/Homepage Impact",
  component: HomepageImpact,
};

const HomepageImpactStoryTemplate: Story = () => <HomepageImpact />;

const HomepageImpactStory = HomepageImpactStoryTemplate.bind({});
HomepageImpactStory.storyName = "Homepage Impact";

export { HomepageImpactStory };
export default META;
