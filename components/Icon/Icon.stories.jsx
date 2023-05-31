import { Icon, ICON_TYPES } from "./Icon";

export default {
  title: "components/Icon",
  component: Icon,
  argTypes: {
    name: {
      options: ICON_TYPES,
      control: { type: "select" },
    },
    color: {
      control: { type: "color" },
    },
    size: {
      control: { type: "range", min: 10, max: 100 },
    },
  },
};

function Template(args) {
  return <Icon {...args} />;
}

export const Single = Template.bind({});
Single.args = {
  name: "logo",
  size: 32,
  color: "white",
};

export function Multiple() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
      {ICON_TYPES.map((icon) => (
        <div key={icon} style={{ margin: "14px" }}>
          <Icon size={32} name={icon} color="white" />
        </div>
      ))}
    </div>
  );
}
