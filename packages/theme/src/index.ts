import {
	Theme,
	THEMES,
	ThemeTokens,
} from './config';
import { darkMobileTheme } from './dark-mobile';
import { lightMobileTheme } from './light-mobile';
export * from './config';

const themeTypes: Theme = {
	[THEMES.LIGHT_MOBILE]: lightMobileTheme,
	[THEMES.DARK_MOBILE]: darkMobileTheme,
};

const ThemeProvider = () => {
	let _theme: ThemeTokens;
	let _initialized = false;
	const initialize = (type: THEMES) => {
		if (!_initialized) {
			_theme =
				themeTypes[type] ||
				themeTypes[THEMES.DARK_MOBILE];
			_initialized = true;
		}
	};

	const getTheme = (): ThemeTokens => {
		if (_initialized) {
			return _theme;
		}
		console.warn('Theme not initialized');
		return themeTypes[THEMES.DARK_MOBILE];
	};

	return {
		init: initialize,
		getTheme,
	};
};

export default ThemeProvider();
