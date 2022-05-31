import { ThemeTokens } from '../config';
import { colorTokensMap } from '../colors';
import { fontFamilyTokensMap } from '../fontFamily';
import { fontSizeTokensMap } from '../typography';
import { IconSizeTokensMap } from '../icons';
import { inputTypeTokensMap } from './textInput';
import { buttonTypeTokensMap } from './button';
import { borderRadiusTypeTokensMap } from '../light-mobile/cornerRadius';
import { spaceTypeTokensMap } from '../light-mobile/space';
import { shadowTypeTokensMap } from '../light-mobile/shadow';
import { avatarTypeTokensMap } from '../light-mobile/avatar';

export const darkMobileTheme: ThemeTokens = {
	colors: colorTokensMap,
	fontSize: fontSizeTokensMap,
	fontFamily: fontFamilyTokensMap,
	shadow: shadowTypeTokensMap,
	iconSize: IconSizeTokensMap,
	avatarSize: avatarTypeTokensMap,
	borderRadius: borderRadiusTypeTokensMap,
	spaces: spaceTypeTokensMap,
	space: spaceTypeTokensMap,
	textInput: inputTypeTokensMap,
	button: buttonTypeTokensMap,
};
