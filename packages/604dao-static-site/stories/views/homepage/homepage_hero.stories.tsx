import HomepageHero from "../../../src/views/homepage/homepage_hero";

import type { Meta, Story } from "@storybook/react";

const META: Meta = {
  title: "Views/Homepage/Homepage Hero",
  component: HomepageHero,
};

const HomepageHeroStoryTemplate: Story = () => <HomepageHero />;

const HomepageHeroStory = HomepageHeroStoryTemplate.bind({});
HomepageHeroStory.storyName = "Homepage Hero";

export { HomepageHeroStory };
export default META;
