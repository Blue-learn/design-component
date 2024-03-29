// .storybook/manager.js

import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';

addons.setConfig({
	isFullscreen: false,
	showNav: true,
	showPanel: true,
	panelPosition: 'bottom',
	enableShortcuts: true,
	isToolshown: true,
	theme: themes.dark,
	selectedPanel: undefined,
	initialActive: 'sidebar',
	sidebar: {
		showRoots: false,
		collapsedRoots: ['other'],
	},
	toolbar: {
		title: { hidden: false },
		zoom: { hidden: false },
		eject: { hidden: false },
		copy: { hidden: false },
		fullscreen: { hidden: false },
	},
});
