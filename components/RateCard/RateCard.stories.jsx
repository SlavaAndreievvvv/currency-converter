import "../../app/globals.css";
import { RateCard } from "./RateCard";

export default {
  title: "components/RateCard",
  component: RateCard,
  argTypes: {
    amount: {
      options: ["1", "10,020.46"],
      control: { type: "radio" },
    },
    rate: {
      options: ["1", "10,020.46"],
      control: { type: "radio" },
    },
    base: {
      options: ["BTC", "UAH"],
      control: { type: "radio" },
    },
    convertTo: {
      options: ["BTC", "UAH"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <RateCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  amount: "1",
  rate: "10,020.46",
  base: "BTC",
  convertTo: "UAH",
};
