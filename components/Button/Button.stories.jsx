import "../../app/globals.css";
import { Button } from "./Button";
import { ICON_TYPES } from "../Icon";

export default {
  title: "components/Button",
  component: Button,
  argTypes: {
    icon: {
      options: ICON_TYPES,
      control: { type: "select" },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const RefreshButton = Template.bind({});
RefreshButton.args = {
  icon: "refresh",
  variant: "subtle",
};
