import HomepagePrinciples from "../../../src/views/homepage/homepage_principles";

import type { Meta, Story } from "@storybook/react";

const META: Meta = {
  title: "Views/Homepage/Homepage Principles",
  component: HomepagePrinciples,
};

const HomepagePrinciplesStoryTemplate: Story = () => <HomepagePrinciples />;

const HomepagePrinciplesStory = HomepagePrinciplesStoryTemplate.bind({});
HomepagePrinciplesStory.storyName = "Homepage Principles";

export { HomepagePrinciplesStory };
export default META;
