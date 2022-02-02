import HomepageFaqs from "../../../src/views/homepage/homepage_faqs";

import type { Meta, Story } from "@storybook/react";

const META: Meta = {
  title: "Views/Homepage/Homepage Faqs",
  component: HomepageFaqs,
};

const HomepageFaqsStoryTemplate: Story = () => <HomepageFaqs />;

const HomepageFaqsStory = HomepageFaqsStoryTemplate.bind({});
HomepageFaqsStory.storyName = "Homepage Faqs";

export { HomepageFaqsStory };
export default META;
