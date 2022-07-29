import React, { memo } from 'react';
import {
	TagThemeProps,
	TagTypeTokens,
	TagProps,
} from '@blue-learn/schema';
import TagBase from './Tag.base';
import ThemeProvider from '@blue-learn/theme';

/**
 * Primary UI component for user interaction
 */

const Tag: React.FunctionComponent<TagProps> = ({
	type = TagTypeTokens.DEFAULT,
	...props
}) => {
	/**
	 *  logic -> base-component(...props)
	 * */
	const theme = ThemeProvider.getTheme();

	const tagThemeProps: TagThemeProps =
		theme.tag[type];

	return <TagBase {...props} {...tagThemeProps} />;
};

export default memo(Tag);
export { Tag };
