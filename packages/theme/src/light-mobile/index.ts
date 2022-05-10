import { ThemeTokens } from '../config';
import { colorTokensMap } from '../colors';
import { buttonTypeTokensMap } from './button';
import { borderRadiusTypeTokensMap } from './cornerRadius';
import { spaceTypeTokensMap } from './space';
import { fontFamilyTokensMap } from '../fontFamily';
import { inputTypeTokensMap } from './textInput';
import { fontSizeTokensMap } from '../typography';
import { shadowTypeTokensMap } from './shadow';

import {
	IconSizeTokensMap,
	iconTokensMap,
} from '../icons';

export const lightMobileTheme: ThemeTokens = {
	colors: colorTokensMap,
	button: buttonTypeTokensMap,
	borderRadius: borderRadiusTypeTokensMap,
	space: spaceTypeTokensMap,
	fontFamily: fontFamilyTokensMap,
	spaces: spaceTypeTokensMap,
	textInput: inputTypeTokensMap,
	fontSize: fontSizeTokensMap,
	shadow: shadowTypeTokensMap,
	icon: iconTokensMap,
	iconSize: IconSizeTokensMap,
};
