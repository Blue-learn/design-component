import {
  ButtonSize,
  ButtonTypeTokens,
  ButtonTypeTokensMap,
  ColorTokens,
} from "@blue-learn/schema";

export const buttonTypeTokensMap: ButtonTypeTokensMap = {
  [ButtonTypeTokens.BigFilled]: {
    size: ButtonSize.Big,
    borderRadius: 16,
    textColor: ColorTokens.White,
    bgColor: ColorTokens.Blue_50,
  },
  [ButtonTypeTokens.SmallFilled]: {
    size: ButtonSize.Big,
    borderRadius: 16,
    textColor: ColorTokens.White,
    bgColor: ColorTokens.Blue_50,
  },
};
