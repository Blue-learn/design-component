import { ThemeTokens } from '../config';
import { colorTokensMap } from '../colors';
import { buttonTypeTokensMap } from './button';
import { FontFamilyTokensMap } from '../FontFamily';
import { spaceTypeTokensMap } from './space';
import { borderRadiusTypeTokensMap } from './cornerRadius';

export const lightMobileTheme: ThemeTokens = {
	colors: colorTokensMap,
	button: buttonTypeTokensMap,
	fontFamily: FontFamilyTokensMap,
	borderRadius: borderRadiusTypeTokensMap,
	spaces: spaceTypeTokensMap,
};
