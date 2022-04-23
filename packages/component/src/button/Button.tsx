import React, { memo } from "react";
import { ButtonProps } from "@design-component/schema";
import { ButtonBase } from "./Button.base";

/**
 * Primary UI component for user interaction
 */

const Button: React.FunctionComponent<ButtonProps> = ({
  onPress = () => {},
  ...props
}) => {
  return <ButtonBase onPress={onPress} {...props} />;
};

export default memo(Button);
export { Button };
