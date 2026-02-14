// Dedicated Babel config used ONLY by Jest (via jest.config.js).
// Kept separate from the root .babelrc so the Storybook/webpack build
// pipeline is left untouched.
module.exports = {
	presets: [
		['@babel/preset-env', { targets: { node: 'current' } }],
		['@babel/preset-react', { runtime: 'automatic' }],
		'@babel/preset-typescript',
	],
};
