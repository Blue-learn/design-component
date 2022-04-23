import React, { memo } from "react";
import {
  ButtonProps,
  ButtonSize,
  ButtonType,
  ButtonTypeTokens,
} from "@design-component/schema";
import { ButtonBase } from "./Button.base";

/**
 * Primary UI component for user interaction
 */

const Button: React.FunctionComponent<ButtonProps> = ({
  type,
  onPress = () => {},
  ...props
}) => {
  /**
   *  logic -> base-component(...props)
   * */
  switch (type) {
    case ButtonTypeTokens.BigFilled:
      return (
        <ButtonBase
          type={ButtonType.Filled}
          size={ButtonSize.Big}
          onPress={onPress}
          {...props}
        />
      );
    case ButtonTypeTokens.SmallFilled:
      return (
        <ButtonBase
          type={ButtonType.Filled}
          size={ButtonSize.Small}
          onPress={onPress}
          {...props}
        />
      );
    default:
      return <></>;
  }
};

export default memo(Button);
export { Button };
