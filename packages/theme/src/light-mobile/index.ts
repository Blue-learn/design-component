import { ThemeTokens } from '../config';
import { colorTokensMap } from '../colors';
import { buttonTypeTokensMap } from './button';
import { borderRadiusTypeTokensMap } from './cornerRadius';
import { sizeTypeTokensMap } from './space';
import { inputTypeTokensMap } from './textInput';
import {
	fontSizeTokensMap,
	fontFamilyTokensMap,
	typographyTypeTokensMap,
} from './typography';
import { shadowTypeTokensMap } from './shadow';
import { IconSizeTokensMap } from './icons';
import { avatarTypeTokensMap } from './avatar';
import { imageTypeTokensMap } from './image';
import { chatCardTypeTokenMap } from './chatCard';
import { progessIndicatorTypeTokensMap } from './progressIndicator';

export const lightMobileTheme: ThemeTokens = {
	colors: colorTokensMap,
	button: buttonTypeTokensMap,
	borderRadius: borderRadiusTypeTokensMap,
	space: sizeTypeTokensMap,
	fontFamily: fontFamilyTokensMap,
	textInput: inputTypeTokensMap,
	fontSize: fontSizeTokensMap,
	shadow: shadowTypeTokensMap,
	iconSize: IconSizeTokensMap,
	avatarSize: avatarTypeTokensMap,
	imageSize: imageTypeTokensMap,
	chatCard: chatCardTypeTokenMap,
	typography: typographyTypeTokensMap,
	progressIndicator: progessIndicatorTypeTokensMap,
};
