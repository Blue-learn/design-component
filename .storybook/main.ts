// .storybook/main.ts

// Imports the Storybook's configuration API
import type { StorybookConfig } from '@storybook/core-common';

const config: StorybookConfig = {
	stories: [
		'../packages/component/src/**/*.stories.@(js|jsx|ts|tsx)',
	],
	// staticDirs: ['../public'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
	],
	typescript: {
		check: false,
		checkOptions: {},
		reactDocgen: 'react-docgen-typescript',
		reactDocgenTypescriptOptions: {
			shouldExtractLiteralValuesFromEnum: true,
			propFilter: (prop) =>
				prop.parent
					? !/node_modules/.test(prop.parent.fileName)
					: true,
		},
	},
	framework: '@storybook/react',
	core: {
		builder: 'webpack4',
	},
	features: {
		postcss: false,
	},
	// refs: {
	// 	'design-system': {
	// 		title: 'BlueLearn Design System',
	// 		url: 'https://blue-learn.github.io/design-component/',
	// 	},
	// },
	webpackFinal: async (config) => {
		config.resolve.alias = {
			...config.resolve.alias,
			'react-native$': 'react-native-web',
		};
		return config;
	},
};
module.exports = config;
