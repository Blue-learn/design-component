import { ThemeTokens } from '../config';
import { darkInputTypeTokensMap } from './textInput';
import { darkButtonTypeTokensMap } from './button';
import { lightMobileTheme } from '../light-mobile';
import { darkChatCardTypeTokenMap } from './chatCard';

export const darkMobileTheme: ThemeTokens = {
	...lightMobileTheme,
	textInput: darkInputTypeTokensMap,
	button: darkButtonTypeTokensMap,
	chatCard: darkChatCardTypeTokenMap,
};
