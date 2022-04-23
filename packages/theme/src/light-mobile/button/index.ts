import {
  ButtonSize,
  ButtonTypeTokens,
  ButtonTypeTokensMap,
  ColorTokens,
} from "@design-component/schema";

export const buttonTypeTokensMap: ButtonTypeTokensMap = {
  [ButtonTypeTokens.BigFilled]: {
    size: ButtonSize.Big,
    borderRadius: 16,
    textColor: ColorTokens.White,
    bgColor: ColorTokens.Blue_60,
  },
  [ButtonTypeTokens.SmallFilled]: {
    size: ButtonSize.Big,
    borderRadius: 16,
    textColor: ColorTokens.White,
    bgColor: ColorTokens.Blue_60,
  },
};
