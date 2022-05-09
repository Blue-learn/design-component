import { ThemeTokens } from '../config';
import { colorTokensMap } from '../colors';
import { buttonTypeTokensMap } from './button';
import { chipTypeTokensMap } from './chip';
import { borderRadiusTypeTokensMap } from './cornerRadius';
import { spaceTypeTokensMap } from './space';
import { FontFamilyTokensMap } from '../FontFamily';
import { shadowTypeTokensMap } from './shadow';
import { inputTypeTokensMap } from './textInput';
import {
	IconSizeTokensMap,
	iconTokensMap,
} from '../icons';

export const lightMobileTheme: ThemeTokens = {
	colors: colorTokensMap,
	button: buttonTypeTokensMap,
	chip: chipTypeTokensMap,
	borderRadius: borderRadiusTypeTokensMap,
	space: spaceTypeTokensMap,
	fontFamily: FontFamilyTokensMap,
	shadow: shadowTypeTokensMap,
	spaces: spaceTypeTokensMap,
	textInput: inputTypeTokensMap,
	icon: iconTokensMap,
	iconSize: IconSizeTokensMap,
};
