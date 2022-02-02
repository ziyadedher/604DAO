import HomepageRoadmap from "../../../src/views/homepage/homepage_roadmap";

import type { Meta, Story } from "@storybook/react";

const META: Meta = {
  title: "Views/Homepage/Homepage Roadmap",
  component: HomepageRoadmap,
};

const HomepageRoadmapStoryTemplate: Story = () => <HomepageRoadmap />;

const HomepageRoadmapStory = HomepageRoadmapStoryTemplate.bind({});
HomepageRoadmapStory.storyName = "Homepage Roadmap";

export { HomepageRoadmapStory };
export default META;
