import { DiscussionCardProps } from '@blue-learn/schema';
import React, { memo } from 'react';
import DiscussionCarsBase from './DiscussionCars.base';
/**
 * Primary UI component for user interaction
 */

const DiscussionCard: React.FunctionComponent<
	DiscussionCardProps
> = ({ ...props }) => {
	/**
	 *  logic -> base-component(...props)
	 * */

	// const theme = ThemeProvider.getTheme();
	// const chatCardThemeProps: ChatCardThemeProps =
	// 	theme.chatCard[type];

	return <DiscussionCarsBase {...props} />;
};

export default memo(DiscussionCard);
export { DiscussionCard };
