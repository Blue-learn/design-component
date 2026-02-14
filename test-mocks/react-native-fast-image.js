// Manual Jest mock for `react-native-fast-image`.
//
// `react-native-fast-image` ships a native view (`requireNativeComponent`)
// that react-native-web does not implement, so importing the real package
// throws under the react-native -> react-native-web alias used for tests
// (see jest.config.js). packages/component/src/image/Image.tsx only
// actually *uses* FastImage when `Platform.OS !== 'web'` (it renders RN's
// plain <Image> on web), but the `import FastImage from
// 'react-native-fast-image'` at the top of that file still executes
// unconditionally, so it needs a safe stand-in for any test that touches
// Image.tsx (directly, or indirectly via Chip/Tag/TextInput/etc).
//
// NOTE: this is the same problem the real Storybook web build would hit -
// .storybook/main.ts does not alias `react-native-fast-image` either. This
// mock is a testing-only workaround, not a statement that the web build is
// known-good.
const React = require('react');

function FastImage(props) {
	return React.createElement('img', {
		src: props.source && props.source.uri,
		style: props.style,
	});
}

FastImage.priority = { normal: 'normal', high: 'high', low: 'low' };
FastImage.resizeMode = {
	contain: 'contain',
	cover: 'cover',
	stretch: 'stretch',
	center: 'center',
};

module.exports = FastImage;
module.exports.default = FastImage;
