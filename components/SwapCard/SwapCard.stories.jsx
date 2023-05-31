import "../../app/globals.css";
import { SwapCard } from "./SwapCard";

export default {
  title: "components/SwapCard",
  component: SwapCard,
  argTypes: {
    value: {
      control: { type: "range", min: 1, max: 100 },
    },
    icon: {
      options: ["UAH", "BTC"],
      control: { type: "radio" },
    },
    base: {
      options: ["UAH", "BTC"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <SwapCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: "BTC",
  base: "BTC",
};
