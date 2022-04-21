import React from "react";
import Button from "./Button";
import { ButtonProps, ButtonType } from "@design-component/schema";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    label: "Default Button",
  },
};

const Template = (args: ButtonProps) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary Button X",
  type: ButtonType.Primary,
};
export const PrimaryLoading = Template.bind({});
PrimaryLoading.args = {
  label: "Primary Loading Button",
  loading: true,
  type: ButtonType.Primary,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary Button",
  loading: false,
  type: ButtonType.Secondary,
};
export const SecondaryLoading = Template.bind({});
SecondaryLoading.args = {
  label: "Secondary Loading Button",
  loading: true,
  type: ButtonType.Secondary,
};
