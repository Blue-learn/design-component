import { THEMES } from '../config';

// ThemeProvider is a module-level singleton (`export default ThemeProvider()`),
// so each test needs a fresh module registry to observe init()/getTheme()
// from an uninitialized state.
describe('ThemeProvider', () => {
	beforeEach(() => {
		jest.resetModules();
	});

	it('warns and falls back to light-mobile when getTheme() is called before init()', () => {
		const warn = jest
			.spyOn(console, 'warn')
			.mockImplementation(() => {});
		const { default: ThemeProvider } = require('../index');

		const theme = ThemeProvider.getTheme();

		expect(warn).toHaveBeenCalledWith(
			'Theme not initialized',
		);
		expect(theme.colors.black).toBe('#000000');
		warn.mockRestore();
	});

	it('returns the light-mobile theme after init(LIGHT_MOBILE)', () => {
		const { default: ThemeProvider } = require('../index');
		ThemeProvider.init(THEMES.LIGHT_MOBILE);
		const theme = ThemeProvider.getTheme();
		expect(theme.button['large-filled'].bgColor).toBe(
			'Primary-500',
		);
	});

	it('returns the dark-mobile theme after init(DARK_MOBILE)', () => {
		const { default: ThemeProvider } = require('../index');
		ThemeProvider.init(THEMES.DARK_MOBILE);
		const theme = ThemeProvider.getTheme();
		expect(theme.button['large-filled'].bgColor).toBe(
			'blue-300',
		);
	});

	it('falls back to light-mobile for an unknown theme key', () => {
		const { default: ThemeProvider } = require('../index');
		ThemeProvider.init('not-a-real-theme' as THEMES);
		const theme = ThemeProvider.getTheme();
		expect(theme.button['large-filled'].bgColor).toBe(
			'Primary-500',
		);
	});

	it('is a singleton: the first init() wins, subsequent init() calls are no-ops', () => {
		const { default: ThemeProvider } = require('../index');
		ThemeProvider.init(THEMES.LIGHT_MOBILE);
		ThemeProvider.init(THEMES.DARK_MOBILE);
		const theme = ThemeProvider.getTheme();
		// Still light-mobile because `_initialized` latches true on the
		// first call (see ThemeProvider() closure in theme/src/index.ts).
		expect(theme.button['large-filled'].bgColor).toBe(
			'Primary-500',
		);
	});
});
