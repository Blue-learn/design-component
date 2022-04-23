import { ColorTokens, ColorTokensMap } from "../colors";

export enum ButtonType {
  Filled = "FILLED",
  SoftFilled = "SOFT-FILLED",
  Outline = "OUTLINE",
  Ghost = "GHOST",
  Elevated = "Elevated",
}
export enum ButtonSize {
  Big = "BIG",
  Small = "SMALL",
  IconOnly = "ICON-ONLY",
}

/**
 * exposed to outside as props
 */
export type ButtonProps = {
  /**
   * Button Label default Button
   */
  label: String;
  /**
   * Button Type default ButtonType.Filled
   */
  type: ButtonTypeTokens;
  /**
   * Button Loading State default false
   */
  loading?: boolean;
  /**
   * Button onPress accepts function
   */
  onPress?: Function;
};

/**
 * Only exposed to Main Component as Base props
 */
export type ButtonBaseProps = {
  /**
   * Button Label default Button
   */
  label: String;
  labelColor?: ColorTokens;
  iconName?: string;
  iconColor?: ColorTokens;
  iconAlignment?: "left" | "right";
  bgColor?: ColorTokens;
  borderColor?: ColorTokens;
  borderRadius?: any;
  shadow?: any;

  /**
   * Button Type default ButtonType.Filled
   */
  type: ButtonType;
  /**
   * Button Type default ButtonSize.Big
   */
  size: ButtonSize;
  /**
   * Button Loading State default false
   */
  loading?: boolean;
  /**
   * Button onPress accepts function
   */
  onPress?: Function;
};

export type ButtonThemeProps = {
  size?: ButtonSize;
  borderRadius: number;
  textColor: ColorTokens;
  bgColor: ColorTokens;
};

//--todo add more Diff Combination for Button
export enum ButtonTypeTokens {
  BigFilled = "big-filled",
  SmallFilled = "small-filled",
}

/**
 * Internal Props for Theme
 * */
export type ButtonTypeTokensMap = {
  [key in ButtonTypeTokens]: ButtonThemeProps;
};
