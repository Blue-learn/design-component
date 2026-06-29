import { THEMES } from '../config';
import * as config from '../config';
import * as themeIndex from '../index';

describe('theme config', () => {
	it('exposes exactly the two shipped theme keys', () => {
		// THEMES is the public entry point consumers pass to
		// ThemeProvider.init(). Adding/removing a member here is a breaking
		// change for every app that switches themes, and the string values
		// are what get persisted in user settings - so both the key set and
		// the literal values are part of the contract.
		expect(Object.values(THEMES).sort()).toEqual([
			'dark-mobile',
			'light-mobile',
		]);
	});

	it('re-exports the divider size token map from ./light-mobile/divider', () => {
		// config.ts does `export * from './light-mobile/divider'`, and
		// theme/index.ts in turn does `export * from './config'`. That chain
		// is the only reason `dividerSizeTypeTokensMap` is importable from
		// '@blue-learn/theme'. Break the re-export and consumers importing
		// it from the package root get `undefined` at runtime, not a build
		// error.
		expect(config.dividerSizeTypeTokensMap).toBeDefined();
		expect(themeIndex.dividerSizeTypeTokensMap).toBe(
			config.dividerSizeTypeTokensMap,
		);
	});

	it('re-exports THEMES from the package root', () => {
		// Components import `ThemeProvider, { THEMES } from '@blue-learn/theme'`
		// (see component/src/**/*.test.tsx). The named export has to survive
		// the config -> index re-export.
		expect(themeIndex.THEMES).toBe(THEMES);
	});

	it('default-exports an initialised ThemeProvider instance, not the factory', () => {
		// `export default ThemeProvider()` - the module calls the factory for
		// you. If that ever became `export default ThemeProvider`, every
		// consumer's `ThemeProvider.getTheme()` would blow up with
		// "getTheme is not a function".
		const provider = themeIndex.default;
		expect(typeof provider.init).toBe('function');
		expect(typeof provider.getTheme).toBe('function');
	});
});
