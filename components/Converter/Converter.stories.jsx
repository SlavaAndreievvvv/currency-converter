import "../../app/globals.css";
import { Converter } from "./Converter";
import { getCurrencyPrice } from "../../api/getCurrencyPrice";

export default {
  title: "components/Converter",
  component: Converter,
};

const Template = (args) => <Converter {...args} />;

const price = await getCurrencyPrice();

export const Default = Template.bind({});
Default.args = {
  price,
};
