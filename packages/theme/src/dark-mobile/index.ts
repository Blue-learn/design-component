import { ThemeTokens } from '../config';
import { lightMobileTheme } from '../light-mobile';
import { buttonTypeTokensMap } from './button';
import { chatCardTypeTokenMap } from './chatCard';
import { progessIndicatorTypeTokensMap } from './progressIndicator';
import { inputTypeTokensMap } from './textInput';
import { typographyTypeTokensMap } from './typography';

export const darkMobileTheme: ThemeTokens = {
	...lightMobileTheme,
	textInput: inputTypeTokensMap,
	button: buttonTypeTokensMap,
	chatCard: chatCardTypeTokenMap,
	typography: typographyTypeTokensMap,
	progressIndicator: progessIndicatorTypeTokensMap,
};
