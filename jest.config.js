const path = require('path');

/**
 * Single Jest project spanning all lerna packages (schema, theme, component).
 *
 * Notes:
 *  - The workspace packages are never built to `lib/` during local dev, so
 *    `@blue-learn/schema` / `@blue-learn/theme` are mapped straight to their
 *    TypeScript sources.
 *  - `packages/component` ships React Native primitives (View, Text,
 *    Pressable, ...) that also have to run for the web target. Storybook
 *    handles that today by aliasing `react-native` -> `react-native-web` in
 *    its webpack config (see .storybook/main.ts). We mirror the exact same
 *    aliasing here so components render to real DOM nodes under jsdom and
 *    can be exercised with @testing-library/react.
 */
module.exports = {
	rootDir: __dirname,
	testEnvironment: 'jsdom',
	roots: ['<rootDir>/packages'],
	testMatch: [
		'<rootDir>/packages/**/__tests__/**/*.[jt]s?(x)',
		'<rootDir>/packages/**/?(*.)+(spec|test).[jt]s?(x)',
	],
	testPathIgnorePatterns: [
		'/node_modules/',
		'/lib/',
	],
	// react-native-svg-web, react-native-web-linear-gradient (the web shims
	// aliased in for react-native-svg / react-native-linear-gradient, see
	// moduleNameMapper below) and lodash-es ship ESM-only builds, so they
	// must be transformed too instead of the default node_modules skip.
	transformIgnorePatterns: [
		'/node_modules/(?!(react-native-svg-web|react-native-web-linear-gradient|lodash-es)/)',
	],
	transform: {
		'^.+\\.(t|j)sx?$': [
			'babel-jest',
			{
				configFile: path.resolve(
					__dirname,
					'babel.jest.config.js',
				),
			},
		],
	},
	moduleNameMapper: {
		// Mirrors .storybook/main.ts webpackFinal aliasing so RN
		// primitives resolve to their DOM implementations under jsdom.
		'^react-native$': 'react-native-web',
		'^react-native-svg$': 'react-native-svg-web',
		'^react-native-linear-gradient$':
			'react-native-web-linear-gradient',
		// Native-only view with no react-native-web implementation; see
		// test-mocks/react-native-fast-image.js for why this is needed.
		'^react-native-fast-image$':
			'<rootDir>/test-mocks/react-native-fast-image.js',
		// Workspace packages aren't built to lib/ locally.
		'^@blue-learn/schema$':
			'<rootDir>/packages/schema/src/index.ts',
		'^@blue-learn/theme$':
			'<rootDir>/packages/theme/src/index.ts',
		'\\.(css|less|scss)$': 'identity-obj-proxy',
	},
	setupFilesAfterEnv: [
		'<rootDir>/jest.setup.js',
	],
	moduleFileExtensions: [
		'ts',
		'tsx',
		'js',
		'jsx',
		'json',
	],
	collectCoverageFrom: [
		'packages/schema/src/**/*.{ts,tsx}',
		'packages/theme/src/**/*.{ts,tsx}',
		'packages/component/src/**/*.{ts,tsx}',
		'!**/*.stories.{ts,tsx}',
		'!**/*.mock.{ts,tsx}',
		'!**/*.shimmer.{ts,tsx}',
		'!packages/*/src/index.ts',
		// 140+ near-identical presentational SVG icon wrappers (Icon.tsx /
		// IconRegistry.ts, which dispatch to these, ARE covered). Including
		// them would dilute the coverage signal the same way *.stories /
		// *.mock files would.
		'!packages/component/src/icon/icon-list/**',
	],
	// These numbers are the suite's actual measured coverage (see `npm run
	// test:coverage`), rounded down a few points so incidental refactors
	// don't trip the gate. schema/src legitimately reports 0% for its
	// enum/type files: @babel/preset-typescript compiles `export enum` to
	// an IIFE that istanbul's babel-plugin-istanbul does not generate
	// statement maps for, even though the enums are exercised at runtime by
	// packages/schema/src/__tests__/*.ts - a known instrumentation gap, not
	// a signal that schema is untested.
	// Coverage threshold, enforced in CI. The numbers track the suite's
	// measured baseline: raise them as coverage improves, and treat a drop below
	// the threshold as a regression to fix rather than a number to lower.
	coverageThreshold: {
		global: {
			statements: 28,
			branches: 20,
			functions: 12,
			lines: 28,
		},
	},
};
